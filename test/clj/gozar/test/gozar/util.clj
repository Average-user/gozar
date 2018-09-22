(ns gozar.test.gozar.util
  (:require [clojure.test :refer [deftest testing is]]
            [gozar.util :as u]))


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
  (-> ["X........"
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

(deftest white-groups
  (is (= #{[1 1] [1 2] [1 3] [1 4] [1 5] [2 3] [2 5] [3 3] [3 4] [3 5]}
         (u/group-of example1 [1 1])))
  (is (= #{[0 0]} (u/group-of example1 [0 0]))))

(deftest black-groups
  (is (= #{[2 1] [2 2] [3 2] [4 2] [4 3]}
         (u/group-of example1 [2 1])))
  (is (= #{[7 7] [7 8] [8 7]}
         (u/group-of example1 [7 8]))))

(deftest dead-groups
  (is (u/dead-group? example2 [2 3]))
  (is (u/dead-group? example2 [0 0]))
  (is (not (u/dead-group? example2 [8 3])))
  (is (not (u/dead-group? example2 [1 0]))))

(deftest place-stone-eating
  (is (= (u/place-stone example3 [4 4] :black)
         [(-> ["........."
               "...OOOO.."
               ".OOO..O.."
               ".XXO...O."
               ".OXXO.OO."
               ".OOO.OOO."
               "...OOO..."
               "........."
               "........."]
              grid->stones)
          nil])))

(deftest valid-moves
  (is (u/place-stone example3 [4 4] :black))        ;Is not suicide if eats
  (is (u/place-stone example3 [4 4] :white))        ;White breaths by [3 0]
  (is (not (u/place-stone example1 [0 0] :white)))  ;can't play on top of other white stone
  (is (not (u/place-stone example1 [2 1] :white)))) ;can't play on top of black stone
