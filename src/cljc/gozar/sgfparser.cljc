(ns gozar.sgfparser
  (:require [clojure.string :as cs]))

(def coord-chars (set "abcdefghijklmnopqrs"))

(defn char->int [c]
  (.indexOf (vec "abcdefghijklmnopqrs") c))

(defn after [text str]
  (->> [text false]
       (iterate (fn [[s b]] (if (or (empty? s) (cs/starts-with? s str))
                              [s true]
                              [(subs s 1) false])))
       (drop-while (comp not second))
       (ffirst)))

(defn get-handicap [xs]
  (letfn [(f [x] (->> x
                   (drop 2)
                   (take-while (reduce conj coord-chars "[]"))
                   (apply str)
                   (re-seq #"\[(.*?)\]")
                   (map (comp (fn [c] [c :black]) (partial mapv char->int) second))))]
    (f (after xs "AB"))))

(defn get-result [xs]
  (second (first (re-seq #"\[(.*?)\]" (after xs "RE")))))

(defn get-komi [xs]
  (let [komi (second (first (re-seq #"\[(.*?)\]" (after xs "KM"))))]
    #?(:clj (read-string komi)
       :cljs (js/parseFloat komi))))

(defn get-handicap-n [xs]
  (as-> (second (first (re-seq #"\[(.*?)\]" (after xs "HA")))) $
    (if (empty? $) 0 #?(:clj (read-string $)
                        :cljs (js/parseFloat $)))))

(defn player-names-and-ranks [xs]
  (let [f #(->> % (after xs) (re-seq #"\[(.*?)\]") first second)]
    {:player-black (cs/trim (str (f "PB") " " (f "BR")))
     :player-white (cs/trim (str (f "PW") " " (f "WR")))}))

(defn board-size [xs]
  (as-> (after xs "SZ") $
    (if (empty? $)
      19
      (->> $ (re-seq #"\[(.*?)\]") first second #?(:clj read-string :cljs js/parseInt)))))

(defn parse-moves [xs]
  (let [beg      {:black ";B[" :white ";W["}
        enemy    {:white :black :black :white}
        start    (second (sort-by (comp count (partial after xs) beg)
                                  [:white :black]))
        location (fn [s] (->> s
                           (re-seq #"\[(.*?)\]")
                           ((comp reverse second first))
                           (mapv char->int)
                           (#(if (empty? %) :pass %))))]
    (loop [xs xs, turn start, moves []]
      (as-> (after xs (beg turn)) $
        (if (empty? $)
          moves
          (recur (cs/join (rest $)) (enemy turn)
                 (conj moves {:player turn :location (location $)})))))))

(defn parse-game [file-string]
  (let [rem   #{\space \newline \tab}
        moves (parse-moves file-string)]
    (reduce conj
      {:handicap   (get-handicap file-string)
       :turn       (:player (first moves))
       :moves      moves
       :komi       (get-komi file-string)
       :result     (get-result file-string)
       :handicap-n (get-handicap-n file-string)
       :board-size (board-size file-string)}
      (player-names-and-ranks file-string))))

(defn distance [[a b] [c d]]
  (let [abs (fn [x] (if (< x 0) (* -1 x) x))]
    (+ (abs (- a c)) (abs (- b d)))))
