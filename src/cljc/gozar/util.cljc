(ns gozar.util
  (:require [gozar.sgfparser :as parser]))

(defn stones [size]
  (->> (for [x (range size), y (range size)] [[x y] :free])
       (into {})))

(defn create-board [size handicap-stones turn komi]
  {:stones (reduce conj (stones size) handicap-stones)
   :turn   turn
   :ko     {:white nil, :black nil}
   :komi   komi})

(defn initial-board [size] (create-board size [] :black 6.5))

(def enemy {:white :black, :black :white})

(defn grid->stones [grid]
  (into {}
        (for [x (range (count grid)), y (range (count grid))]
          [[x y] ({\. :free \O :black \X :white} (get-in grid [x y]))])))

(defn stones->grid [stones]
  (let [s (reduce max (map ffirst stones))
        f {:free \. :white \X :black \O}]
    (mapv (fn [x] (mapv (fn [y] (f (get stones [x y])))
                        (range (inc s))))
          (range (inc s)))))

(def example1
  (->> ["X........"
        ".XXXXX..."
        ".OOX.X..."
        "..OXXX..."
        "..OO....."
        ".O......."
        ".OOO...XX"
        "...O..XOO"
        "......XO."]
       grid->stones))

(def example2
  (-> ["OOX......"
       "XXXOOO..."
       "..OXOXO.."
       "..OXXXO.."
       "..OXXOO.."
       "...OXXO.."
       "...OOO..."
       "..OXXXO.."
       "..OX.XO.."]
      grid->stones))

(def example3
  (-> ["........."
       "...OOOO.."
       ".OOOXXO.."
       ".XXOXXXO."
       ".OXX.XOO."
       ".OOOXOOO."
       "...OOO..."
       "........."
       "........."]
      grid->stones))

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

(defn remove-group [stones [x y]]
  (reduce #(assoc %1 %2 :free) stones (group-of stones [x y])))

(defn place-stone [stones [x y] color]
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
          [stones' [color [x y] (first taken)]]
          [stones' nil])))))

(defn valid-move? [{:keys [stones ko turn]} {:keys [player location]}]
  (when-let [[nstones taken] (place-stone stones location turn)]
    (and (= turn player)
         (not (dead-group? nstones location))
         (not (and taken (= (get taken 2) ((enemy turn) ko)))))))
       
(defn child-board [{:keys [stones turn ko komi] :as board} {:keys [player location] :as move}]
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
           :ko     (-> ko (assoc (enemy turn) nil) (assoc (first taken) (second taken)))
           :komi   komi}))))

(defn take-until
  "Returns every element before the first element that returns true for pred,
   including the element itself. (take-until odd? '(2 4 6 8 9 10 12 14)) => '(2 4 6 8 9)"
  [pred coll]
  (lazy-seq
   (when-let [s (seq coll)]
     (if (pred (first s))
       (list (first s))
       (cons (first s) (take-until pred (rest s)))))))

(defn apply-moves [board moves]
  (reduce child-board board moves))
