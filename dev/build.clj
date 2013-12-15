(ns build
  (:require [shadow.cljs.build :as cljs]
            [clojure.java.io :as io]))

;; hmm dogfood

(defn dev
  "build the project, wait for file changes, repeat"
  [& args]
  (let [state (-> (cljs/init-state)
                  (cljs/enable-source-maps)
                  (assoc :optimizations :none
                         :pretty-print true
                         :work-dir (io/file "target/cljs-work")
                         :public-dir (io/file "public/assets/cljs")
                         :public-path "/assets/cljs")
                  (cljs/step-find-resources-in-jars)
                  (cljs/step-find-resources "src/cljs")
                  (cljs/step-find-resources "checkouts/shadow/src/cljs")
                  (cljs/step-finalize-config)
                  (cljs/step-compile-core)
                  (cljs/step-configure-module :app ['todo-cljs.app] #{})
                  )]
    
    (loop [state state]
      (recur (-> state
                 (cljs/step-compile-modules)
                 (cljs/flush-unoptimized)
                 (cljs/wait-and-reload!)
                 ))))
  :done)

(defn production
  "build the project, wait for file changes, repeat"
  [& args]
  (-> (cljs/init-state)
      (cljs/enable-source-maps)
      (assoc :optimizations :advanced
             :pretty-print false
             :work-dir (io/file "target/cljs-work")
             :public-dir (io/file "public/assets/cljs")
             :public-path "/assets/cljs")
      (cljs/step-find-resources-in-jars)
      (cljs/step-find-resources "src/cljs")
      (cljs/step-find-resources "checkouts/shadow/src/cljs")
      (cljs/step-finalize-config)
      (cljs/step-compile-core)
      (cljs/step-configure-module :app ['todo-cljs.app] #{})
      (cljs/step-compile-modules)
      (cljs/closure-optimize)
      (cljs/flush-modules-to-disk))
  
  (shutdown-agents)
  (System/exit 0))
