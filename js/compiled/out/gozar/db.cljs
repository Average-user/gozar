(ns gozar.db
  (:require [gozar.util :as u]))

(def default-db {:moves        []
                 :move         0
                 :custom-moves []
                 :custom-move  0
                 :analyze-mode false
                 :board        u/initial-board
                 :handicap     "0"
                 :attempt      nil
                 :info         {:result       "-"
                                :player-black "-"
                                :player-white "-"}
                 :filename     "Not file selected"})
