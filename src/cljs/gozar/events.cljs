(ns gozar.events
  (:require [re-frame.core :as re-frame]
            [gozar.db :as db]
            [gozar.util :as u]))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :analyze-mode-change
 (fn [db _]
   (if (:analyze-mode db)
     (-> db
         (assoc :analyze-mode false)
         (assoc :custom-moves nil)
         (assoc :custom-move nil))
     (-> db
         (assoc :custom-moves (subvec (:moves db) 0 (:move db)))
         (assoc :custom-move (:move db))
         (assoc :analyze-mode true)))))

(re-frame/reg-event-db
 :set-board-size-to
 (fn [db [_ size]]
   (assoc db :board-size size)))

(re-frame/reg-event-db
 :add-custom-move
 (fn [db [_ move]]
   (if (u/valid-move? (u/apply-moves (:board db) (take (:custom-move db)
                                                       (:custom-moves db)))
                      move)
     (-> db
         (update :custom-moves #(conj (subvec % 0 (:custom-move db)) move))
         (update :custom-move inc))
     db)))

(re-frame/reg-event-db
 :change-move
 (fn [db [_ move]]
   (if (:analyze-mode db)
     (assoc db :custom-move move)
     (assoc db :move move))))

(re-frame/reg-event-db
 :dec-move
 (fn [db _]
   (let [move (if (:analyze-mode db) :custom-move :move)]
     (if (<= (get db move) 0)
       (assoc db move 0)
       (update db move dec)))))

(re-frame/reg-event-db
 :inc-move
 (fn [db _]
   (let [move         (if (:analyze-mode db) :custom-move :move)
         moves-length (count ((if (:analyze-mode db) :custom-moves :moves) db))]
     (if (>= (get db move) moves-length)
       (assoc db move moves-length)
       (update db move inc)))))
   
(re-frame/reg-event-db
 :change-of-file
 (fn [db [_ board moves info handicap filename board-size]]
   (-> db/default-db
       (assoc :board board)
       (assoc :moves moves)
       (assoc :info info)
       (assoc :handicap handicap)
       (assoc :filename filename)
       (assoc :board-size board-size))))

(re-frame/reg-event-db
 :set-attempt-to
 (fn [db [_ to]]
   (assoc db :attempt to)))
