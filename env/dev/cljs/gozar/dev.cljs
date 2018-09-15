(ns ^:figwheel-no-load gozar.dev
  (:require
    [gozar.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
