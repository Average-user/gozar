(ns gozar.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]
            [cljs.spec.alpha :as spec]))

(re-frame/reg-sub
 :moves
 (fn [db]
   (:moves db)))

(re-frame/reg-sub
 :move
 (fn [db]
   (:move db)))

(re-frame/reg-sub
 :custom-moves
 (fn [db]
   (:custom-moves db)))

(re-frame/reg-sub
 :custom-move
 (fn [db]
   (:custom-move db)))

(re-frame/reg-sub
 :analyze-mode
 (fn [db]
   (:analyze-mode db)))

(re-frame/reg-sub
 :board
 (fn [db]
   (:board db)))

(re-frame/reg-sub
 :handicap
 (fn [db]
   (:handicap db)))

(re-frame/reg-sub
 :attempt
 (fn [db]
   (:attempt db)))

(re-frame/reg-sub
 :info
 (fn [db]
   (:info db)))

(re-frame/reg-sub
 :filename
 (fn [db]
   (:filename db)))

(re-frame/reg-sub
 :board-size
 (fn [db]
   (:board-size db)))
