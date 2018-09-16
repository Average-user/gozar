(ns gozar.views
  (:require [reagent.core :as r]
            [gozar.util :as u]
            [goog.events :as events]
            [gozar.sgfparser :as parser]))

(def moves     (r/atom []))
(def board     (r/atom u/initial-board))
(def move      (r/atom 0))
(def handicap  (r/atom "0"))
(def attempt   (r/atom nil))
(def filename  (r/atom "No file selected yet"))
(def info      (r/atom {:result       "-"
                        :player-black "-"
                        :player-white "-"}))

(def r 1.4)

(defn dec' [l x] (if (<= x l) 0 (dec x)))
(defn inc' [l x] (if (>= x l) x (inc x)))

(defn distance [[a b] [c d]]
  (let [abs (fn [x] (if (< x 0) (* -1 x) x))]
    (+ (abs (- a c)) (abs (- b d)))))

(defn draw-line [x1 y1 x2 y2 f]
  [:line {:x1 (f x1) :y1 (f y1) :x2 (f x2) :y2 (f y2) :style {:stroke "rgb(0,0,0)"
                                                              :stroke-width 0.07}}])

(defn draw-dots [f]
  (map (fn [[x y]] [:circle {:cx (f x) :cy (f y) :r 0.2 :fill "black"}])
       [[3 3] [15 15] [3 15] [15 3] [9 3] [3 9] [9 9] [9 15] [15 9]]))

(defn draw-stones [f {:keys [stones turn]}]
  (let [lm (:location (get @moves (dec @move)))]
    (map (fn [[[y x] t]]
           (case t
             :black [:g [:circle.n {:cx (f x) :cy (f y) :r r :fill "black"}]
                     (when (= lm [y x])
                       [:circle {:cx (f x) :cy (f y) :r (/ r 2) :stroke "white" :stroke-width "0.17" :fill "none"}])]
             :white [:g [:circle.n {:cx (f x) :cy (f y) :r r :fill "white"}]
                     (when (= lm [y x])
                       [:circle {:cx (f x) :cy (f y) :r (/ r 2) :stroke "black" :stroke-width "0.17" :fill "none"}])]
             :free  [:g {:on-click #(if (= (:location (get @moves @move)) [y x])
                                      (do (swap! move inc)
                                          (reset! attempt nil))
                                      (reset! attempt [y x]))}
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
   [draw-board-base (u/apply-moves @board (subvec @moves 0 @move))
                    #(+ (* % 3) 2)]]])

(defn moves-range []
  [:div.field {:style {:width "80%"}}
   [:center
    [:input {:type "range"
             :min 0
             :max (count @moves)
             :value @move
             :style {:width "90%"}
             :on-change #(reset! move (js/parseInt (.-target.value %)))}]
    [:span
     (count @moves)]
    [:div
     [:a.button {:on-click #(swap! move (partial dec' 0))}
      [:span.icon.is-small
       [:i.fa.fa-arrow-left]]]
     [:a.button {:on-click #(swap! move (partial inc' (count @moves)))}
      [:span.icon.is-small
       [:i.fa.fa-arrow-right]]]]]])

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
                                (reset! moves (vec (:moves game)))
                                (reset! board nb)
                                (reset! move 0)
                                (reset! attempt nil)
                                (swap! info (partial reduce conj)
                                  {:result       (:result game)
                                   :player-black (:player-black game)
                                   :player-white (:player-white game)})
                                (reset! handicap (:handicap-n game))
                                (reset! filename (.-name file))))) 
                      (.readAsText file-reader file)))}]
     [:span.file-cta
      [:span.file-icon
       [:i.fas.fa-upload]]
      [:span.file-label
       "Upload SGF..."]]
     [:span.file-name
      @filename]]]])

(defn info-table []
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
     [:th [:abbr @move]]
     [:th [:abbr (:komi @board)]]
     [:th [:abbr @handicap]]
     [:th [:abbr (:player-black @info)]]
     [:th [:abbr (:player-white @info)]]
     [:th [:abbr (:result @info)]]]]])

(defn how-close-bar []
  [:div.field {:style {:margin-top "10px"}}
   (let [nl (:location (get @moves @move))
         n    (if (or (empty? @moves) (nil? @attempt))
                100
                (int (/ (* 100 (- 38 (distance @attempt nl)))
                        38)))]
     (cond 
       (> n 90)        [:progress.progress.is-success
                        {:style {:width "80%"} :min 0 :value n :max 100}]
       :else           [:progress.progress.is-danger
                        {:style {:width "80%"} :min 0 :value n :max 100}]))])

(defn main-panel []
  (events/listen js/window "keydown"
                 (fn [e]
                   (let [key-code (.-keyCode e)]
                     (when (#{37 39} key-code)
                       (do (swap! move ({39 #(inc' (count @moves) %) 37 #(dec' 0 %)}
                                        key-code))
                           (reset! attempt nil))))))                       
  [:div {:style {:width "100%"}}
   [:div.columns {:style {:margin-left "10px"}}
    [:div.column.is-half
     [:center {:style {:margin "20px"}}
      [:h.title.is-1 "GOzar"]]
     [info-table]
     [how-close-bar]
     [moves-range]
     [:div {:style {:margin-top "20px"}}
      [sgf-file-input]]
     [:center {:style {:margin-top "20px"}}
      [:a.icon {:href "https://github.com/Average-user/gozar#readme"
                :style {:content "url(img/github.png)" :width "32" :height "32"}}]]]
    [:div.column
     [board-svg]]]])
