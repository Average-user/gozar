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

(defn draw-dots [f size]
  (map (fn [[x y]] [:circle {:cx (f x) :cy (f y) :r 0.2 :fill "black"}])
       (case size
         19 [[3 3] [15 15] [3 15] [15 3] [9 3] [3 9] [9 9] [9 15] [15 9]]
         13 [[3 3] [9 3] [3 9] [9 9] [6 6]]
         9  [[2 2] [6 2] [2 6] [6 6] [4 4]]
         [])))

(defn board-size [size] (str (+ 4 (* 3 (dec size))) "%"))
(def amplification {19 "140%" 13 "190%" 9 "240%"})

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
                                      (= (:location (get moves move)) [y x]) (do (re-frame/dispatch [:inc-move 1])
                                                                                 (re-frame/dispatch [:set-attempt-to nil]))
                                      :else                                  (re-frame/dispatch [:set-attempt-to [y x]]))}
                     (case (= turn :white)
                       true  [:circle.w {:cx (f x) :cy (f y) :r r}]
                       false [:circle.b {:cx (f x) :cy (f y) :r r}]
                       [:circle {:cx (f x) :cy (f y) :r r :fill "rgba(0,0,0,0)"}])]))
         stones)))

(defn draw-board-base [{:keys [stones] :as board} amplifier size]
  (into [:g [:rect {:x 0 :y 0 :width (board-size size) :height (board-size size) :fill "rgb(219,176,98)"}]]
        (concat (draw-dots amplifier size)
                (mapv (fn [[x1 y1 x2 y2]] (draw-line x1 y1 x2 y2 amplifier))
                      (concat (map vector (range size) (repeat 0) (range size) (repeat (dec size)))
                              (map vector (repeat 0) (range size) (repeat (dec size)) (range size))))
                (draw-stones amplifier board))))

(defn board-svg []
  (let [size @(re-frame/subscribe [:board-size])]
    [:div.field {:style {:margin-top "20px"}}
     [:svg {:width    (amplification size)
            :height   (amplification size)
            :view-box "0 0 100 100"}
      (let [board @(re-frame/subscribe [:board])
            moves (get-moves)
            move  (get-move)]
        [draw-board-base (u/apply-moves board (subvec moves 0 move))
         #(+ (* % 3) 2)
         size])]]))

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
                                    nb   (u/create-board (:board-size game)
                                                         (:handicap game)
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
                                  (.-name file)
                                  (:board-size game)])))) 
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
    [:table.table.is-fullwidth
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
  [:div.field {:style {:width "100%"}}
   [:center
    [:input {:type "range"
             :min 0
             :max (count (get-moves))
             :value (get-move)
             :style {:width "85%"}
             :on-change #(re-frame/dispatch [:change-move (js/parseInt (.-target.value %))])}]
    [:span
     (count (get-moves))]
    [:div
     [:a.button.is-white {:on-click #(do (re-frame/dispatch [:dec-move 10])
                                         (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small [:i.fa.fa-angle-double-left]]]
     [:a.button.is-white {:on-click #(do (re-frame/dispatch [:dec-move 1])
                                         (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small [:i.fa.fa-angle-left]]]
     [:a.button.is-white {:on-click #(do (re-frame/dispatch [:inc-move 1])
                                         (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small [:i.fa.fa-angle-right]]]
     [:a.button.is-white {:on-click #(do (re-frame/dispatch [:inc-move 10])
                                         (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.icon.is-small [:i.fa.fa-angle-double-right]]]]]])

(defn analyze-mode-checkbox []
  [:a.button {:on-click #(re-frame/dispatch [:analyze-mode-change])}
   [:span.icon.is-small (if @(re-frame/subscribe [:analyze-mode])
                          [:i.fa.fa-lightbulb]
                          [:i.fa.fa-code-branch])]
                          
   [:span
    (if @(re-frame/subscribe [:analyze-mode])
      "Change to guess mode"
      "Change to analyze mode")]])

(defn how-close-bar []
  [:div.field {:style {:margin-top "10px"}}
   (let [moves   @(re-frame/subscribe [:moves])
         attempt @(re-frame/subscribe [:attempt])
         nl      (:location (get moves @(re-frame/subscribe [:move])))
         faraway (->> @(re-frame/subscribe [:board])
                      :stones
                      keys
                      (map #(distance % nl))
                      (reduce max))
         n       (if (or (empty? moves) (nil? attempt))
                   100
                   (/ (* 100 (- faraway (distance attempt nl))) faraway))]
     (cond 
       (> n 80)        [:progress.progress.is-success
                        {:style {:width "100%"} :min 0 :value n :max 100}]
       :else           [:progress.progress.is-danger
                        {:style {:width "100%"} :min 0 :value n :max 100}]))])

(events/listen js/window "keydown"
               (fn [e]
                 (let [key-code (.-keyCode e)]
                   (when (or (= key-code 37) (= key-code 39))
                     (do (if (= 39 key-code)
                           (re-frame/dispatch-sync [:inc-move 1])
                           (re-frame/dispatch-sync [:dec-move 1]))
                         (re-frame/dispatch [:set-attempt-to nil]))))))

(defn main-panel []
  [:div {:style {:width "100%"}}
   [:div.columns {:style {:margin-left "10px"}}
    [:div.column.is-half
     [:center {:style {:margin "20px"}}
      [:h1.title.is-1 "GOzar"]
      [info-table]]
     [analyze-mode-checkbox]
     (when-not @(re-frame/subscribe [:analyze-mode])
       [how-close-bar])
     [moves-range]
     [:div {:style {:margin-top "20px"}}
      [sgf-file-input]]
     [:center {:style {:margin-top "20px"}}
      [:a.button.is-large.is-white
       {:href "https://github.com/Average-user/gozar#readme"}
       [:span.icon.is-medium [:i.fab.fa-github]]]]]              
    [:div.column
     [board-svg]]]])
