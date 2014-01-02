(ns todo-cljs.app
  (:require-macros [shadow.macros :refer (ns-ready log)]
                   [cljs.core.async.macros :refer (go)])
  (:require [shadow.object :as so]
            [shadow.dom :as dom]
            [shadow.ui :as ui]
            [cljs.core.async :as async]))

(def stored-todos (ui/store-locally (atom []) :todos))

(def todo-next-id
  (let [id-seq (atom 0)]
    (fn [] (swap! id-seq inc))))

(so/define ::todo-item
  :dom (fn [{:keys [todo] :as this}]
         [:li {:class (when (:done todo) "completed")}
          [:div.view
           (ui/dom-checkbox this [:todo :done] {:class "toggle"})
           [:label (so/bind-simple this [:todo :text] str)]
           [:button.destroy {:type "normal"}]]
           
          (ui/dom-input this [:todo :text] ui/text-type {:class "edit" :capture #{:enter}})])
  
  :dom/events [[:click "button.destroy"]
               (fn [this e el]
                 (dom/ev-stop e)
                 (so/remove-in-parent! this))

               [:dblclick "label"]
               (fn [this e el]
                 (dom/add-class this "editing")
                 (.focus (dom/query-one "input.edit" this)))]

  :watch [:todo
          (fn [this old {:keys [done] :as new}]
            (dom/toggle-class this "completed" done))]

  :on [:input/change
       (fn [this a v i]
         (when (= a [:todo :done])
           (so/update! this assoc-in a v)))
       
       :input/enter
       (fn [this a v i]
         (so/update! this assoc-in a v)
         (dom/remove-class this "editing"))

       :input/blur
       (fn [this a i]
         (so/notify-down! this :input/set-values {:todo {:text (get-in this [:todo :text])}})
         (dom/remove-class this "editing"))])

(so/define ::app
  :defaults {:todos-left 0
             :todos-completed 0
             :todos []}

  :dom (fn [this]
         [:section#todoapp
          [:header#header
           [:h1 "todos"]
           [:form#todo-form
            (ui/dom-input this [:new-todo] ui/text-type {:id "new-todo"
                                                         :autofocus true
                                                         :placeholder "What needs to be done?"})]]
          [:section#main
           (so/bind-children :ul#todo-list this [:todos] ::todo-item :todo)]
          [:footer#footer
           [:span#todo-count (so/bind-simple this [:todos-left] #(str % " items left"))]
           [:ul#filters
            [:li [:a {:href "#/"} "All"]]
            [:li [:a {:href "#/active"} "Active"]]
            [:li [:a {:href "#/completed"} "Completed"]]]
           
           [:button#clear-completed "Clear completed (" (so/bind-simple this [:todos-completed] str) ")"]]])
  
  :dom/events [[:submit "form#todo-form"]
               (fn add-new-todo [{:keys [new-todo] :as this} e]
                 (dom/ev-stop e)
                 (when (seq new-todo)
                   (log "new-todo" new-todo)
                   (so/update! this update-in [:todos] conj {:id (todo-next-id)
                                                             :text new-todo
                                                             :done false})
                   (so/notify-down! this :input/set-values {:new-todo ""})))

               [:click "#clear-completed"]
               (fn [this e]
                 (dom/ev-stop e)
                 (so/update! this update-in [:todos] #(vec (remove :done %))))]
  
  :watch [:todos
          (fn [this old new]
            (reset! stored-todos new)
            (let [grouped (group-by :done new)
                  todos-completed (count (get grouped true))]

              (so/update! this merge {:todos-left (count (get grouped false))
                                      :todos-completed todos-completed})

              (dom/toggle-class this "has-completed" (pos? todos-completed))))

          ]

  :on [:input/change
       (fn [this a v i]
         (so/update! this assoc-in a v))

       :bind/update
       (fn [this a v]
         (so/update! this assoc-in a v))
       ])

(defn ^:export todo-mvc [container]
  (log "todo-mvc starting")
  (let [app (so/create ::app {})]

    (dom/replace-node container app)
    (so/update! app assoc :todos @stored-todos)))

(ns-ready)
