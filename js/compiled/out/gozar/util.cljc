(ns gozar.util
  (:require [gozar.sgfparser :as parser]))

(def stones (->> (for [x (range 19), y (range 19)] [[x y] :free])
                 (into {})))

(defn create-board [handicap-stones turn komi]
  {:stones (reduce conj stones handicap-stones)
   :turn   turn
   :ko     {:white nil, :black nil}
   :komi   komi})

(def initial-board (create-board [] :black 6.5))

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
          f (fn [stones c]
              (let [inc (get stones c)]
                (if (and (= (enemy color) inc) (dead-group? stones c))
                 (remove-group stones c)
                 stones)))]
      (reduce f nstones (neighbors #{(enemy color)} stones [x y])))))

(defn valid-move? [stones [x y] color]
  (when-let [nstones (place-stone stones [x y] color)]
    (not (dead-group? nstones [x y]))))

(defn child-board [{:keys [stones turn] :as board} {:keys [player location]}]
  (if (or (not (valid-move? stones location player)) (not= player turn))
    board
    {:stones (place-stone stones location player)
     :turn   (enemy player)
     :ko     (get board :ko)
     :komi   (get board :komi)}))
                      
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

(defn simulate-game [file-string]
  (let [[handicap turn moves] (parser/parse-game file-string)]
    (->> [(create-board handicap turn 5.5) moves]
         (iterate (fn [[b [m & ms]]] [(child-board b m) ms]))
         (take-until (comp nil? first second))
         (map first))))
