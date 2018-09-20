(ns gozar.views
  (:require [reagent.core :as r]
            [gozar.util :as u]
            [goog.events :as events]
            [gozar.sgfparser :as parser]
            [re-frame.core :as re-frame]))

(def r 1.4)

(defn distance [[a b] [c d]]
  (let [abs (fn [x] (if (< x 0) (* -1 x) x))]
    (+ (abs (- a c)) (abs (- b d)))))

(defn get-move []
  (if @(re-frame/subscribe [:analyze-mode])
    @(re-frame/subscribe [:custom-move])
    @(re-frame/subscribe [:move])))

(defn get-moves []
  (if @(re-frame/subscribe [:analyze-mode])
    @(re-frame/subscribe [:custom-moves])
    @(re-frame/subscribe [:moves])))

(defn draw-line [x1 y1 x2 y2 f]
  [:line {:x1 (f x1) :y1 (f y1) :x2 (f x2) :y2 (f y2) :style {:stroke "rgb(0,0,0)"
                                                              :stroke-width 0.07}}])

(defn draw-dots [f]
  (map (fn [[x y]] [:circle {:cx (f x) :cy (f y) :r 0.2 :fill "black"}])
       [[3 3] [15 15] [3 15] [15 3] [9 3] [3 9] [9 9] [9 15] [15 9]]))

(defn draw-stones [f {:keys [stones turn]}]
  (let [lm    (:location (get (get-moves) (dec (get-move))))
        am    @(re-frame/subscribe [:analyze-mode])
        moves @(re-frame/subscribe [:moves])
        move  @(re-frame/subscribe [:move])]
    (map (fn [[[y x] t]]
           (case t
             :black [:g [:circle.n {:cx (f x) :cy (f y) :r r :fill "black"}]
                     (when (= lm [y x])
                       [:circle {:cx (f x) :cy (f y) :r (/ r 2) :stroke "white" :stroke-width "0.17" :fill "none"}])]
             :white [:g [:circle.n {:cx (f x) :cy (f y) :r r :fill "white"}]
                     (when (= lm [y x])
                       [:circle {:cx (f x) :cy (f y) :r (/ r 2) :stroke "black" :stroke-width "0.17" :fill "none"}])]
             :free  [:g {:on-click #(cond
                                      am                                     (do (re-frame/dispatch [:add-custom-move {:player turn :location [y x]}]))
                                      (= (:location (get moves move)) [y x]) (do (re-frame/dispatch [:inc-move])
                                                                                 (re-frame/dispatch [:set-attempt-to nil]))
                                      :else                                  (re-frame/dispatch [:set-attempt-to [y x]]))}
                     (case (= turn :white)
                       true  [:circle.w {:cx (f x) :cy (f y) :r r}]
                       false [:circle.b {:cx (f x) :cy (f y) :r r}]
                       [:circle {:cx (f x) :cy (f y) :r r :fill "rgba(0,0,0,0)"}])]))
         stones)))

(defn draw-board-base [{:keys [stones] :as board} amplifier]
  (into [:g [:rect {:x 0 :y 0 :width "58%" :height "58%" :fill "rgb(219,176,98)"}]]
        (concat (draw-dots amplifier)
                (mapv (fn [[x1 y1 x2 y2]] (draw-line x1 y1 x2 y2 amplifier))
                      (concat (map vector (range 19) (repeat 0) (range 19) (repeat 18))
                              (map vector (repeat 0) (range 19) (repeat 18) (range 19))))
                (draw-stones amplifier board))))

(defn board-svg []
 [:div.field {:style {:margin-top "20px"}}
  [:svg {:width    "150%"
         :height   "150%"
         :view-box "0 0 100 100"}
   (let [board @(re-frame/subscribe [:board])
         moves (get-moves)
         move  (get-move)]
     [draw-board-base (u/apply-moves board (subvec moves 0 move))
                      #(+ (* % 3) 2)])]])

(defn sgf-file-input []
  [:div.field
   [:div.file.has-name
    [:label.file-label
     [:input.file-input
      {:type "file"
       :accept ".sgf"
       :on-change (fn [e]
                    (let [file        (first (array-seq (.. e -target -files)))
                          file-reader (js/FileReader.)]
                      (set! (.-onload file-reader)
                            (fn [e']
                              (let [game (parser/parse-game (-> e' .-target .-result))
                                    nb   (u/create-board (:handicap game)
                                                         (:turn game)
                                                         (:komi game))]
                                (re-frame/dispatch
                                 [:change-of-file
                                  nb
                                  (vec (:moves game))
                                  {:result       (:result game)
                                   :player-black (:player-black game)
                                   :player-white (:player-white game)}
                                  (:handicap-n game)
                                  (.-name file)])))) 
                      (.readAsText file-reader file)))}]
     [:span.file-cta
      [:span.file-icon
       [:i.fas.fa-upload]]
      [:span.file-label
       "Upload SGF..."]]
     [:span.file-name
      @(re-frame/subscribe [:filename])]]]])

(defn info-table []
  (let [info @(re-frame/subscribe [:info])]
    [:table.table
     [:thead
      [:tr
       [:th [:abbr "Move"]]
       [:th [:abbr "Komi"]]
       [:th [:abbr "Handicap"]]
       [:th [:abbr "Black"]]
       [:th [:abbr "White"]]
       [:th [:abbr "Result"]]]]
     [:tfoot
      [:tr
       [:th [:abbr (get-move)]]
       [:th [:abbr (:komi @(re-frame/subscribe [:board]))]]
       [:th [:abbr @(re-frame/subscribe [:handicap])]]
       [:th [:abbr (:player-black info)]]
       [:th [:abbr (:player-white info)]]
       [:th [:abbr (:result info)]]]]]))

(defn moves-range []
  [:div.field {:style {:width "80%"}}
   [:center
    [:input {:type "range"
             :min 0
             :max (count (get-moves))
             :value (get-move)
             :style {:width "90%"}
             :on-change #(re-frame/dispatch [:change-move (js/parseInt (.-target.value %))])}]
    [:span
     (count (get-moves))]
    [:div
     [:a.button {:on-click #(do (re-frame/dispatch [:dec-move])
                                (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small
       [:i.fa.fa-arrow-left]]]
     [:a.button {:on-click #(do (re-frame/dispatch [:inc-move])
                                (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small
       [:i.fa.fa-arrow-right]]]]]])

(defn analyze-mode-checkbox []
   [:button.button {:on-click #(re-frame/dispatch [:analyze-mode-change])}
    (if @(re-frame/subscribe [:analyze-mode])
      "Change to guess mode"
      "Change to analyze mode")])

(defn how-close-bar []
  [:div.field {:style {:margin-top "10px"}}
   (let [moves   @(re-frame/subscribe [:moves])
         attempt @(re-frame/subscribe [:attempt])
         nl      (:location (get moves @(re-frame/subscribe [:move])))
         n       (if (or (empty? moves) (nil? attempt))
                   100
                   (int (/ (* 100 (- 38 (distance attempt nl)))
                           38)))]
     (cond 
       (> n 90)        [:progress.progress.is-success
                        {:style {:width "80%"} :min 0 :value n :max 100}]
       :else           [:progress.progress.is-danger
                        {:style {:width "80%"} :min 0 :value n :max 100}]))])

(events/listen js/window "keydown"
               (fn [e]
                 (let [key-code (.-keyCode e)]
                   (when (or (= key-code 37) (= key-code 39))
                     (do (if (= 39 key-code)
                           (re-frame/dispatch-sync [:inc-move])
                           (re-frame/dispatch-sync [:dec-move]))
                         (re-frame/dispatch [:set-attempt-to nil]))))))

(defn main-panel []
  [:div {:style {:width "100%"}}
   [:div.columns {:style {:margin-left "10px"}}
    [:div.column.is-half
     [:center {:style {:margin "20px"}}
      [:h1.title.is-1 "GOzar"]
      [info-table]]
     [analyze-mode-checkbox]
     (when-not @(re-frame/subscribe [:analyze-mode]))
     [how-close-bar]
     [moves-range]
     [:div {:style {:margin-top "20px"}}
      [sgf-file-input]]
     [:center {:style {:margin-top "20px"}}
      [:a.icon {:href "https://github.com/Average-user/gozar#readme"
                :style {:content "url(img/github.png)" :width "32" :height "32"}}]]]
    [:div.column
     [board-svg]]]])
