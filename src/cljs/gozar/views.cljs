(ns gozar.views
  (:require [reagent.core :as r]
            [gozar.util :as u]
            [goog.events :as events]
            [gozar.sgfparser :as parser]
            [re-frame.core :as re-frame]))

(def r 0.47)

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

(defn draw-line [x1 y1 x2 y2]
  [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2 :style {:stroke "rgb(0,0,0)" :stroke-width 0.04}}])

(defn draw-dots [size]
  (map (fn [[x y]] [:circle {:cx (+ 1 x) :cy (+ 1 y) :r 0.13 :fill "black"}])
       (case size
         19 [[3 3] [15 15] [3 15] [15 3] [9 3] [3 9] [9 9] [9 15] [15 9]]
         13 [[3 3] [9 3] [3 9] [9 9] [6 6]]
         9  [[2 2] [6 2] [2 6] [6 6] [4 4]]
         [])))

(defn draw-stones [{:keys [stones turn]}]
  (let [lm    (:location (get (get-moves) (dec (get-move))))
        am    @(re-frame/subscribe [:analyze-mode])
        moves @(re-frame/subscribe [:moves])
        move  @(re-frame/subscribe [:move])]
    (map (fn [[[y x] t]]
           (case t
             :black [:g [:circle.n {:cx (inc x) :cy (inc y) :r r :fill "black"}]
                     (when (= lm [y x])
                       [:circle {:cx (inc x) :cy (inc y) :r (/ r 2) :stroke "white" :stroke-width "0.1" :fill "none"}])]
             :white [:g [:circle.n {:cx (inc x) :cy (inc y) :r r :fill "white"}]
                     (when (= lm [y x])
                       [:circle {:cx (inc x) :cy (inc y) :r (/ r 2) :stroke "black" :stroke-width "0.1" :fill "none"}])]
             :free  [:g {:on-click #(cond
                                      am                                     (re-frame/dispatch [:add-custom-move {:player turn :location [y x]}])
                                      (= (:location (get moves move)) [y x]) (do (re-frame/dispatch [:inc-move 1])
                                                                                 (re-frame/dispatch [:set-attempt-to nil]))
                                      :else                                  (re-frame/dispatch [:set-attempt-to [y x]]))}
                     (case (= turn :white)
                       true  [:circle.w {:cx (inc x) :cy (inc y) :r 0.5}]
                       false [:circle.b {:cx (inc x) :cy (inc y) :r 0.5}]
                       [:circle {:cx (inc x) :cy (inc y) :r r :fill "rgba(0,0,0,0)"}])]))
         stones)))

(defn draw-board-base [{:keys [stones] :as board} size]
  (into [:g [:rect {:x 0 :y 0 :width (inc size) :height (inc size) :fill "rgb(219,176,98)"}]]
        (concat (draw-dots size)
                (mapv (fn [[x1 y1 x2 y2]] (draw-line (inc x1) (inc y1) (inc x2) (inc y2)))
                      (concat (map vector (range size) (repeat 0) (range size) (repeat (dec size)))
                              (map vector (repeat 0) (range size) (repeat (dec size)) (range size))))
                (draw-stones board)
                (map (fn [[x l]] [:text.coordinate {:x x :y 0.7} (str l)])
                     (map (fn [a b] [(- a 0.2) b]) (range 1 (inc size)) "ABCDEFGHJKLMNOPQRST"))
                (map (fn [[x l]] [:text.coordinate {:x x :y (+ size 0.7)} (str l)])
                     (map (fn [a b] [(- a 0.2) b]) (range 1 (inc size)) "ABCDEFGHJKLMNOPQRST"))
                (map (fn [[y l]] [:text.coordinate {:x 0.2 :y y} (str l)])
                     (map (fn [a b] [(+ a 0.2) b]) (range 1 (inc size)) (range size 0 -1)))
                (map (fn [[y l]] [:text.coordinate {:x (+ size 0.2) :y y} (str l)])
                     (map (fn [a b] [(+ a 0.2) b]) (range 1 (inc size)) (range size 0 -1)))))) 

(defn board-svg []
  (let [size @(re-frame/subscribe [:board-size])]
   [:svg {:width    "100%"
          :height   "100%"
          :view-box (str "0 0 " (+ 2 size) " " (+ 2 size))}
    (let [board @(re-frame/subscribe [:board])
          moves (get-moves)
          move  (get-move)]
      [draw-board-base (u/apply-moves board (subvec moves 0 move))
       size])]))

(defn sgf-file-input []
  [:div.element
   [:label.boxed
    [:input
     {:type "file"
      :accept ".sgf"
      :on-change
      (fn [e]
       (let [file        (first (array-seq (.. e -target -files)))
             file-reader (js/FileReader.)]
         (set! (.-onload file-reader)
               (fn [e']
                 (let [game (-> e' .-target .-result parser/parse-game)
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
    [:span
     [:span.icon
      [:i.fas.fa-upload]]
     @(re-frame/subscribe [:filename])]]])

(defn info-table []
  (let [info @(re-frame/subscribe [:info])]
    [:table
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
  [:div.element {:style {:margin-top "1em"}}
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
     [:a.icon {:on-click #(do (re-frame/dispatch [:dec-move 10])
                              (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.button-icon [:i.fa.fa-angle-double-left]]]
     [:a.icon {:on-click #(do (re-frame/dispatch [:dec-move 1])
                              (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.button-icon [:i.fa.fa-angle-left]]]
     [:a.icon {:on-click #(do (re-frame/dispatch [:inc-move 1])
                              (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.button-icon [:i.fa.fa-angle-right]]]
     [:a.icon {:on-click #(do (re-frame/dispatch [:inc-move 10])
                              (re-frame/dispatch [:set-attempt-to nil]))}
      [:span.button-icon [:i.fa.fa-angle-double-right]]]]]])

(defn analyze-mode-checkbox []
  [:div.element
   [:a.boxed {:on-click #(re-frame/dispatch [:analyze-mode-change])}
    [:span.icon (if @(re-frame/subscribe [:analyze-mode])
                  [:i.fa.fa-lightbulb]
                  [:i.fa.fa-code-branch])]
    [:span
     (if @(re-frame/subscribe [:analyze-mode])
       "Change to guess mode"
       "Change to analyze mode")]]])

(defn svg-progress-bar [min value color]
  [:div.element
   [:svg {:width    "100%"
          :height   "1.1em"}
    [:g
     [:rect {:width "98%" :height "100%" :fill "rgb(200,200,200)" :rx "10" :ry "10"}]
     [:rect {:width (str (- value 2) "%") :height "100%" :fill color :rx "10" :ry "10"}]]]])

(defn how-close-bar []
  [:div.element
   (let [moves   @(re-frame/subscribe [:moves])
         attempt @(re-frame/subscribe [:attempt])
         nl      (:location (get moves @(re-frame/subscribe [:move])))
         faraway (->> @(re-frame/subscribe [:board])
                      (:stones)
                      (keys)
                      (map #(distance % nl))
                      (reduce max))
         n       (if (or (empty? moves) (nil? attempt))
                   100
                   (/ (* 100 (- faraway (distance attempt nl))) faraway))]
     (cond
       (> n 80)        [svg-progress-bar 0 n "#3BC84A"]
       :else           [svg-progress-bar 0 n "#F3475B"]))])

(events/listen js/window "keydown"
               (fn [e]
                 (let [key-code (.-keyCode e)]
                   (when (or (= key-code 37) (= key-code 39))
                     (do (if (= 39 key-code)
                           (re-frame/dispatch-sync [:inc-move 1])
                           (re-frame/dispatch-sync [:dec-move 1]))
                         (re-frame/dispatch [:set-attempt-to nil]))))))

(defn main-panel []
  [:div {:style {:width  "100%"}}
    [:div.left
     [:center.element
      [:h1 "GOzar"]
      [info-table]]
     [analyze-mode-checkbox]
     (when-not @(re-frame/subscribe [:analyze-mode])
       (if (= :pass (:location (get (get-moves) (get-move))))
         [:div.element
          [:a.boxed.pass
            {:on-click #(re-frame/dispatch [:inc-move 1])}
           [:span "Pass"]]]
         [how-close-bar]))
     [moves-range]
     [:div.element
      [sgf-file-input]]
     [:p.element
      "Report any bug, erros or recommendations via "
      [:a {:href "https://github.com/Average-user/gozar#readme"}
       "github"]
      ". The most likely cause of failures is that the SGF's "
      "parser doesn't handle complex files."]]
    [:div.right
     [board-svg]]])
