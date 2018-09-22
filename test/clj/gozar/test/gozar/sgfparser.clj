(ns gozar.test.gozar.sgfparser
  (:require [clojure.test :refer [deftest testing is]]
            [gozar.sgfparser :as s]))

(def game1 (slurp "resources/SGFs/example9x9.sgf"))
(def game2 (slurp "resources/SGFs/example19x19.sgf"))

(deftest parse-9x9
  (is (= (s/parse-game game1)
         {:handicap      '()
          :board-size    9
          :handicap-n    0
          :komi          5.5
          :result        "W+10.5"
          :turn          :black
          :player-white  "letsgo1969 14k"
          :player-black  "AverageUser 14k"
          :moves [{:player :black, :location [5 6]}
                  {:player :white, :location [3 4]}
                  {:player :black, :location [4 3]}
                  {:player :white, :location [5 5]}
                  {:player :black, :location [4 5]}
                  {:player :white, :location [4 4]}
                  {:player :black, :location [5 4]}
                  {:player :white, :location [6 5]}
                  {:player :black, :location [3 5]}
                  {:player :white, :location [5 3]}
                  {:player :black, :location [6 4]}
                  {:player :white, :location [6 3]}
                  {:player :black, :location [7 4]}
                  {:player :white, :location [7 5]}
                  {:player :black, :location [4 2]}
                  {:player :white, :location [8 4]}
                  {:player :black, :location [2 4]}
                  {:player :white, :location [3 3]}
                  {:player :black, :location [2 3]}
                  {:player :white, :location [3 2]}
                  {:player :black, :location [3 1]}
                  {:player :white, :location [2 2]}
                  {:player :black, :location [2 1]}
                  {:player :white, :location [1 2]}
                  {:player :black, :location [6 2]}
                  {:player :white, :location [7 3]}
                  {:player :black, :location [5 2]}
                  {:player :white, :location [7 1]}
                  {:player :black, :location [6 1]}
                  {:player :white, :location [2 5]}
                  {:player :black, :location [2 6]}
                  {:player :white, :location [1 5]}
                  {:player :black, :location [1 6]}
                  {:player :white, :location [1 4]}
                  {:player :black, :location [1 1]}
                  {:player :white, :location [3 6]}
                  {:player :black, :location [4 6]}
                  {:player :white, :location [6 6]}
                  {:player :black, :location [3 7]}
                  {:player :white, :location [5 7]}
                  {:player :black, :location [4 7]}
                  {:player :white, :location [5 8]}
                  {:player :black, :location [0 6]}
                  {:player :white, :location [0 5]}
                  {:player :black, :location [2 8]}
                  {:player :white, :location [4 8]}
                  {:player :black, :location [3 8]}
                  {:player :white, :location [6 7]}
                  {:player :black, :location [0 2]}
                  {:player :white, :location [0 3]}
                  {:player :black, :location [0 1]}
                  {:player :white, :location [7 2]}
                  {:player :black, :location [7 0]}
                  {:player :white, :location [8 0]}
                  {:player :black, :location [8 1]}
                  {:player :white, :location [8 2]}
                  {:player :black, :location [4 0]}
                  {:player :white, :location [1 3]}
                  {:player :black, :location [6 0]}
                  {:player :white, :location [8 0]}
                  {:player :black, :location :pass}
                  {:player :white, :location :pass}
                  {:player :black, :location [8 1]}
                  {:player :white, :location :pass}
                  {:player :black, :location [8 0]}
                  {:player :white, :location :pass}
                  {:player :black, :location :pass}]})))

(deftest parse-19x19
  (is (= (s/parse-game game2)
         {:handicap      (list [[15 3] :black] [[3 15] :black] [[15 15] :black])
          :board-size    19
          :handicap-n    3
          :komi          0.5
          :result        "W+Resign"
          :turn          :white
          :player-white  "rarellano"
          :player-black  "Polymeris"
          :moves
          [{:player :white, :location [2 4]}
           {:player :black, :location [16 9]}
           {:player :white, :location [12 3]}
           {:player :black, :location [15 5]}
           {:player :white, :location [3 2]}
           {:player :black, :location [9 3]}
           {:player :white, :location [7 2]}
           {:player :black, :location [9 1]}
           {:player :white, :location [15 2]}
           {:player :black, :location [16 2]}
           {:player :white, :location [15 1]}
           {:player :black, :location [16 1]}
           {:player :white, :location [14 3]}
           {:player :black, :location [15 4]}
           {:player :white, :location [10 2]}
           {:player :black, :location [9 2]}
           {:player :white, :location [11 6]}
           {:player :black, :location [12 5]}
           {:player :white, :location [11 5]}
           {:player :black, :location [10 4]}
           {:player :white, :location [11 4]}
           {:player :black, :location [12 4]}
           {:player :white, :location [12 2]}
           {:player :black, :location [7 4]}
           {:player :white, :location [13 16]}
           {:player :black, :location [11 16]}
           {:player :white, :location [12 6]}
           {:player :black, :location [13 5]}
           {:player :white, :location [13 6]}
           {:player :black, :location [14 6]}
           {:player :white, :location [13 14]}
           {:player :black, :location [15 13]}
           {:player :white, :location [10 15]}
           {:player :black, :location [12 15]}
           {:player :white, :location [13 15]}
           {:player :black, :location [12 14]}
           {:player :white, :location [13 12]}
           {:player :black, :location [9 17]}
           {:player :white, :location [12 13]}
           {:player :black, :location [7 16]}
           {:player :white, :location [3 9]}
           {:player :black, :location [10 13]}
           {:player :white, :location [15 12]}
           {:player :black, :location [16 12]}
           {:player :white, :location [16 11]}
           {:player :black, :location [16 13]}
           {:player :white, :location [15 11]}
           {:player :black, :location [16 7]}
           {:player :white, :location [13 10]}
           {:player :black, :location [2 13]}
           {:player :white, :location [4 4]}
           {:player :black, :location [7 7]}
           {:player :white, :location [15 17]}
           {:player :black, :location [16 16]}
           {:player :white, :location [16 17]}
           {:player :black, :location [17 17]}
           {:player :white, :location [17 11]}
           {:player :black, :location [17 12]}
           {:player :white, :location [5 9]}
           {:player :black, :location [7 9]}
           {:player :white, :location [6 5]}
           {:player :black, :location [7 5]}
           {:player :white, :location [6 6]}
           {:player :black, :location [7 6]}
           {:player :white, :location [2 16]}
           {:player :black, :location [3 16]}
           {:player :white, :location [2 15]}
           {:player :black, :location [2 14]}
           {:player :white, :location [3 17]}
           {:player :black, :location [4 17]}
           {:player :white, :location [1 17]}
           {:player :black, :location [3 18]}
           {:player :white, :location [2 18]}
           {:player :black, :location [1 15]}
           {:player :white, :location [1 16]}
           {:player :black, :location [2 17]}
           {:player :white, :location [1 14]}
           {:player :black, :location [1 13]}
           {:player :white, :location [0 15]}
           {:player :black, :location [1 18]}
           {:player :white, :location [0 17]}
           {:player :black, :location [2 10]}
           {:player :white, :location [2 9]}
           {:player :black, :location [1 10]}
           {:player :white, :location [1 9]}
           {:player :black, :location [4 11]}
           {:player :white, :location [6 10]}
           {:player :black, :location [7 11]}
           {:player :white, :location [6 11]}
           {:player :black, :location [6 12]}
           {:player :white, :location [7 12]}
           {:player :black, :location [5 12]}
           {:player :white, :location [7 10]}
           {:player :black, :location [8 11]}
           {:player :white, :location [7 1]}
           {:player :black, :location [8 10]}
           {:player :white, :location [8 9]}
           {:player :black, :location [9 9]}
           {:player :white, :location [8 8]}
           {:player :black, :location [9 8]}
           {:player :white, :location [8 7]}
           {:player :black, :location [9 6]}
           {:player :white, :location [9 7]}
           {:player :black, :location [10 7]}
           {:player :white, :location [7 8]}
           {:player :black, :location [10 6]}
           {:player :white, :location [6 8]}
           {:player :black, :location [10 9]}
           {:player :white, :location [11 8]}
           {:player :black, :location [10 8]}
           {:player :white, :location [9 10]}
           {:player :black, :location [10 10]}
           {:player :white, :location [9 11]}
           {:player :black, :location [8 12]}
           {:player :white, :location [10 12]}
           {:player :black, :location [9 12]}
           {:player :white, :location [10 11]}
           {:player :black, :location [11 13]}
           {:player :white, :location [11 12]}
           {:player :black, :location [12 11]}
           {:player :white, :location [12 12]}
           {:player :black, :location [11 9]}
           {:player :white, :location [12 8]}
           {:player :black, :location [12 9]}
           {:player :white, :location [13 9]}
           {:player :black, :location [10 1]}
           {:player :white, :location [11 1]}
           {:player :black, :location [6 3]}
           {:player :white, :location [10 5]}
           {:player :black, :location [10 3]}
           {:player :white, :location [11 3]}
           {:player :black, :location [9 5]}
           {:player :white, :location [5 2]}
           {:player :black, :location [6 4]}
           {:player :white, :location [6 7]}
           {:player :black, :location [11 2]}
           {:player :white, :location [12 1]}
           {:player :black, :location [8 6]}
           {:player :white, :location [8 3]}
           {:player :black, :location [13 8]}
           {:player :white, :location [14 8]}
           {:player :black, :location [12 7]}
           {:player :white, :location [13 7]}
           {:player :black, :location [11 7]}
           {:player :white, :location [15 16]}
           {:player :black, :location [12 10]}
           {:player :white, :location [11 11]}
           {:player :black, :location [17 16]}
           {:player :white, :location [10 17]}
           {:player :black, :location [10 16]}
           {:player :white, :location [11 17]}
           {:player :black, :location [12 17]}
           {:player :white, :location [9 13]}
           {:player :black, :location [7 13]}
           {:player :white, :location [10 14]}
           {:player :black, :location [13 17]}
           {:player :white, :location [14 17]}
           {:player :black, :location [9 16]}
           {:player :white, :location [12 16]}
           {:player :black, :location [10 18]}
           {:player :white, :location [11 15]}
           {:player :black, :location [9 14]}
           {:player :white, :location [11 14]}
           {:player :black, :location [9 15]}
           {:player :white, :location [8 13]}
           {:player :black, :location [7 12]}
           {:player :white, :location [8 14]}
           {:player :black, :location [7 15]}
           {:player :white, :location [17 8]}
           {:player :black, :location [17 9]}
           {:player :white, :location [15 8]}
           {:player :black, :location [16 8]}
           {:player :white, :location [13 4]}
           {:player :black, :location [14 5]}
           {:player :white, :location [3 10]}
           {:player :black, :location [3 11]}
           {:player :white, :location [14 15]}
           {:player :black, :location [15 14]}
           {:player :white, :location [18 12]}
           {:player :black, :location [18 13]}
           {:player :white, :location [18 11]}
           {:player :black, :location [18 9]}
           {:player :white, :location [17 18]}
           {:player :black, :location [0 13]}
           {:player :white, :location [0 14]}
           {:player :black, :location [15 0]}
           {:player :white, :location [14 1]}
           {:player :black, :location [14 0]}
           {:player :white, :location [13 0]}
           {:player :black, :location [16 0]}
           {:player :white, :location [15 7]}
           {:player :black, :location [15 6]}
           {:player :white, :location [15 9]}
           {:player :black, :location [7 14]}
           {:player :white, :location [8 15]}
           {:player :black, :location [8 16]}
           {:player :white, :location [10 13]}
           {:player :black, :location [14 7]}
           {:player :white, :location [13 8]}
           {:player :black, :location [8 0]}
           {:player :white, :location [10 0]}
           {:player :black, :location [6 1]}
           {:player :white, :location [6 2]}
           {:player :black, :location [5 11]}
           {:player :white, :location [5 10]}
           {:player :black, :location [0 9]}
           {:player :white, :location [0 8]}
           {:player :black, :location [0 10]}
           {:player :white, :location [1 8]}
           {:player :black, :location [4 10]}
           {:player :white, :location [4 9]}
           {:player :black, :location [13 18]}
           {:player :white, :location [14 18]}
           {:player :black, :location [11 18]}
           {:player :white, :location [16 18]}
           {:player :black, :location [18 17]}
           {:player :white, :location [14 13]}
           {:player :black, :location [16 10]}
           {:player :white, :location [15 10]}
           {:player :black, :location [14 4]}
           {:player :white, :location [13 3]}
           {:player :black, :location [16 6]}
           {:player :white, :location [14 14]}
           {:player :black, :location [2 18]}
           {:player :white, :location [18 14]}
           {:player :black, :location [17 13]}
           {:player :white, :location [17 14]}
           {:player :black, :location [17 15]}
           {:player :white, :location [16 15]}
           {:player :black, :location [18 15]}
           {:player :white, :location [16 14]}]})))

