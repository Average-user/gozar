(ns gozar.util
  (:require [gozar.sgfparser :as parser]))

(def enemy {:white :black, :black :white})

(defn stones
  "Initialize stones given a size"
  [size]
  (->> (for [x (range size), y (range size)] [[x y] :free])
       (into {})))

(defn create-board
  "Creates a board given variable information"
  [size handicap-stones turn komi]
  {:stones (reduce conj (stones size) handicap-stones)
   :turn   turn
   :ko     {:white nil, :black nil} ; Example, if white's ko is [3 4] it means that the
                                    ; last move of white whas [3 4] eating exactly 1 stone.
   :komi   komi})

(defn neighbors
  "Returns the neighbors of [x y] that are true for f"
  [f stones [x y]]
  (->> [[0 1] [0 -1] [1 0] [-1 0]]
       (map (fn [[j k]] [(+ x j) (+ y k)]))
       (filter (comp f stones))))

(defn group-of
  "Returns the group of stones that contains [x y], and nil if [x y] is free"
  [stones [x y]]
  (when-let [c (as-> (get stones [x y]) $ (when (not= :free $) $))]
    (letfn [(f [[seen fronteir]]
              (as-> (reduce conj seen fronteir) nseen
                [nseen (->> fronteir
                            (mapcat #(neighbors (partial = c) stones %))
                            (filter (comp not nseen)))]))]
      (->> [#{} [[x y]]]
           (iterate f)
           (drop-while (comp seq second))
           (ffirst)))))

(defn dead-group?
  "Returns true if the group that contains [x y] has 0 liberties, false otherwise.
  Returns nik if [x y] is :free"
  [stones [x y]]
  (when-let [gp (group-of stones [x y])]
    (empty? (mapcat (partial neighbors #(= :free %) stones) gp))))

(defn remove-group
  "removes the group of stones connected to [x y]"
  [stones [x y]]
  (reduce #(assoc %1 %2 :free) stones (group-of stones [x y])))

(defn place-stone
  "Returns the board resulting of the consecuences of adding a new stone in [x y].
   If the stones happens to eat exactly one stone of the enemy, it returns that
   stone too"
  [stones [x y] color]
  (when (= :free (get stones [x y]))
    (let [nstones (assoc stones [x y] color)
          f (fn [[stones taken] c]
              (let [inc   (get stones c)
                    group (group-of stones c)]
                (if (and (= (enemy color) inc) (dead-group? stones c))
                 [(remove-group stones c) (reduce conj taken group)]
                 [stones taken])))]
      (as-> (reduce f [nstones #{}] (neighbors #{(enemy color)} stones [x y]))
            [stones' taken]
        (if (= 1 (count taken))
          [stones' [color (first taken)]]
          [stones' nil])))))

(defn valid-move?
  "Given a board and a move, returns true if its a valid move or not"
  [{:keys [stones ko turn]} {:keys [player location]}]
  (when-let [[nstones taken] (place-stone stones location turn)]
    (and (= turn player)
         (not (dead-group? nstones location))
         (not (and taken (= (second taken) ((enemy turn) ko)))))))
       
(defn child-board
  "Given a board and a move, returns a new board with that move applied. If the move
   isn't valid, returns the same board"
  [{:keys [stones turn ko komi] :as board} {:keys [player location] :as move}]
  (cond
    (and (= turn player) (= :pass location)) (-> board
                                                 (update :turn enemy)
                                                 (assoc-in [:ko (enemy turn)] nil))
    (not (valid-move? board move))           board
    :else
    (let [[nstones taken] (place-stone stones location player)]
      (if (nil? taken)
          {:stones nstones
           :turn   (enemy player)
           :ko     (assoc ko (enemy turn) nil)
           :komi   komi}
          {:stones nstones
           :turn   (enemy player)
           :ko     (-> ko (assoc (enemy turn) nil) (assoc (first taken) location))
           :komi   komi}))))

(defn apply-moves [board moves]
  (reduce child-board board moves))
