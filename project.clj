(defproject todo-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [thheller/shadow-client "0.1.1"]]


  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[org.clojure/clojurescript "0.0-2120" :exclusions [org.mozilla/rhino]]
                                  [thheller/shadow-build "0.1.0"]]}}

  :source-paths ["src/clj" "src/cljs"]
  )
