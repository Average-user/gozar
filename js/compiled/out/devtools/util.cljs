(ns devtools.util
  (:require-macros [devtools.util :refer [oget ocall oset]])
  (:require [goog.userAgent :as ua]
            [clojure.data :as data]
            [cljs.pprint :refer [pprint]]
            [devtools.version :refer [get-current-version]]
            [devtools.defaults :as defaults]
            [devtools.prefs :as prefs]))

(def ^:dynamic *custom-formatters-active* false)
(def ^:dynamic *console-open* false)
(def ^:dynamic *custom-formatters-warning-reported* false)

(defn ^:dynamic make-version-info []
  (let [version (get-current-version)]
    (str "v" version)))

(defn ^:dynamic make-lib-info []
  (str "CLJS DevTools " (get-current-version)))

(defn ^:dynamic unknown-feature-msg [feature known-features lib-info]
  (str "No such feature " feature " is currently available in " lib-info ". "
       "The list of supported features is " (pr-str known-features) "."))

(defn ^:dynamic feature-not-available-msg [feature]
  (str "Feature " feature " cannot be installed. "
       "Unsupported browser " (ua/getUserAgentString) "."))

(defn ^:dynamic custom-formatters-not-active-msg []
  (str "CLJS DevTools: some custom formatters were not rendered.\n"
       "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"))

(defn get-lib-info []
  (make-lib-info))

(def formatter-key "devtoolsFormatters")

(defn get-formatters-safe []
  (let [formatters (aget js/window formatter-key)]
    (if (array? formatters)                                                                                                   ; TODO: maybe issue a warning if formatters are anything else than array or nil
      formatters
      #js [])))

(defn set-formatters-safe! [new-formatters]
  {:pre [(or (nil? new-formatters) (array? new-formatters))]}
  (aset js/window formatter-key (if (empty? new-formatters) nil new-formatters)))

(defn print-config-overrides-if-requested! [msg]
  (when (prefs/pref :print-config-overrides)
    (let [diff (second (data/diff defaults/prefs (prefs/get-prefs)))]
      (if-not (empty? diff)
        (.info js/console msg (with-out-str (pprint diff)))))))

; -- custom formatters detection --------------------------------------------------------------------------------------------

(deftype CustomFormattersDetector [])

; https://github.com/binaryage/cljs-devtools/issues/16
(defn make-detector []
  (let [detector (CustomFormattersDetector.)]
    (aset detector "header" (fn [_object _config]
                              (set! *custom-formatters-active* true)
                              nil))
    (aset detector "hasBody" (constantly false))
    (aset detector "body" (constantly nil))
    detector))

(defn install-detector! [detector]
  (let [formatters (get-formatters-safe)]
    (.push formatters detector)
    (set-formatters-safe! formatters)))

(defn uninstall-detector! [detector]
  ; play it safe here, this method is called asynchronously
  ; in theory someone else could have installed additional custom formatters
  ; we have to be careful removing only ours formatters
  (let [current-formatters (aget js/window formatter-key)]
    (if (array? current-formatters)
      (let [new-formatters (.filter current-formatters #(not (= detector %)))]
        (set-formatters-safe! new-formatters)))))

(defn check-custom-formatters-active! []
  (if (and *console-open* (not *custom-formatters-active*))
    (when-not *custom-formatters-warning-reported*
      (set! *custom-formatters-warning-reported* true)
      (.warn js/console (custom-formatters-not-active-msg)))))

(defn uninstall-detector-and-check-custom-formatters-active! [detector]
  (uninstall-detector! detector)
  (check-custom-formatters-active!))

; a variation of http://stackoverflow.com/a/30638226/84283
(defn make-detection-printer []
  (let [f (fn [])]
    (oset f ["toString"] (fn []
                           (set! *console-open* true)
                           (js/setTimeout check-custom-formatters-active! 0)                                                  ; console is being opened, schedule another check
                           ""))
    f))

(defn wrap-with-custom-formatter-detection! [f]
  (if-not (prefs/pref :dont-detect-custom-formatters)
    (let [detector (make-detector)]
      ; this is a tricky business here
      ; we cannot ask DevTools if custom formatters are available and/or enabled
      ; we abuse the fact that we are printing info banner upon cljs-devtools installation anyways
      ; we install a special CustomFormattersDetector formatter which just records calls to it
      ; but does not format anything, it skips the opportunity to format the output so it has no visual effect
      ; this way we are able to detect if custom formatters are active and record it in *custom-formatters-active*
      ; but this technique does not work when printing happens when DevTools console is closed
      ; we have to add another system for detection of when console opens and re-detect custom formatters with opened console
      (install-detector! detector)
      (f "%c%s" "color:transparent" (make-detection-printer))
      ; note that custom formatters are applied asynchronously
      ; we have to uninstall our detector a bit later
      (js/setTimeout (partial uninstall-detector-and-check-custom-formatters-active! detector) 0))
    (f)))

; -- banner -----------------------------------------------------------------------------------------------------------------

(defn feature-for-display [installed-features feature]
  (let [color (if (some #{feature} installed-features) "color:#0000ff" "color:#ccc")]
    ["%c%s" [color (str feature)]]))

(defn feature-list-display [installed-features feature-groups]
  (let [labels (map (partial feature-for-display installed-features) (:all feature-groups))
        * (fn [accum val]
            [(str (first accum) " " (first val))
             (concat (second accum) (second val))])]
    (reduce * (first labels) (rest labels))))

(defn display-banner! [installed-features feature-groups fmt & params]
  (let [[fmt-str fmt-params] (feature-list-display installed-features feature-groups)]
    (wrap-with-custom-formatter-detection! (fn [add-fmt & add-args]
                                             (let [items (concat [(str fmt " " fmt-str add-fmt)] params fmt-params add-args)]
                                               (.apply (.-info js/console) js/console (into-array items)))))))

(defn display-banner-if-needed! [features-to-install feature-groups]
  (if-not (prefs/pref :dont-display-banner)
    (do
      (let [banner (str "Installing %c%s%c and enabling features")
            lib-info-style "color:black;font-weight:bold;"
            reset-style "color:black"]
        (display-banner! features-to-install feature-groups banner lib-info-style (get-lib-info) reset-style)))
    ; detection cannot be performed if we are not allowed to print something to console => assume active
    (set! *custom-formatters-active* true)))

; -- unknown features -------------------------------------------------------------------------------------------------------

(defn report-unknown-features! [features known-features]
  (let [lib-info (get-lib-info)]
    (doseq [feature features]
      (if-not (some #{feature} known-features)
        (.warn js/console (unknown-feature-msg feature known-features lib-info))))))

(defn is-known-feature? [known-features feature]
  (boolean (some #{feature} known-features)))

(defn convert-legacy-feature [feature]
  (case feature
    :custom-formatters :formatters
    :sanity-hints :hints
    feature))

(defn convert-legacy-features [features]
  (map convert-legacy-feature features))

(defn sanititze-features! [features feature-groups]
  (let [known-features (:all feature-groups)
        features (convert-legacy-features features)]                                                                          ; new feature names were introduced in v0.8
    (report-unknown-features! features known-features)
    (filter (partial is-known-feature? known-features) features)))

(defn resolve-features! [features-desc feature-groups]
  (let [features (cond
                   (and (keyword? features-desc) (features-desc feature-groups)) (features-desc feature-groups)
                   (nil? features-desc) (:default feature-groups)
                   (seqable? features-desc) features-desc
                   :else [features-desc])]
    (sanititze-features! features feature-groups)))

; -- installer --------------------------------------------------------------------------------------------------------------

(defn install-feature! [feature features-to-install available-fn install-fn]
  (if (some #{feature} features-to-install)
    (if (or (prefs/pref :bypass-availability-checks) (available-fn feature))
      (install-fn)
      (.warn js/console (feature-not-available-msg feature)))))
