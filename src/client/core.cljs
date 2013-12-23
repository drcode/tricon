(ns client.core
    (:require-macros [cljs.core.async.macros :refer [go]]
                     [om.core :refer [component]])
    (:require [cljs.core.async :refer [<! >! put! chan]]
              [om.core :refer [update! IRender IDidMount IDidUpdate IWillMount get-state get-node set-state! build root]]
              [om.dom :refer [canvas div p]]))

(js/React.initializeTouchEvents true)

(def app-state (atom {:pattern (repeatedly 72 (partial rand-int 9))
                      :index   0}))

(def icon-resolution 6)

(def colors ["white" "silver" "orange"])

(defn polygon [context color points]
      (let [[cur & more] points]
           (set! (.-fillStyle context) color)
           (set! (.-strokeStyle context) color)
           (.beginPath context)
           (.moveTo context (first cur) (second cur))
           (doseq [pt more]
                  (.lineTo context (first pt) (second pt)))
           (.closePath context)
           (.fill context)
           (.stroke context)))

(defn draw-icon [context size pattern]
      (let [triangle (fn [n col]
                         (let [box   (Math/floor (/ n 4))
                               cell  (mod n 4)
                               x-top (mod box icon-resolution)
                               y-top (Math/floor (/ box icon-resolution))]
                              (polygon context 
                                       col
                                       (map (fn [[x y]]
                                                (let [f (fn [q]
                                                            (/ (* q size) icon-resolution))]
                                                     [(f (+ x-top x)) (f (+ y-top y))]))
                                            ([[[0 0] [0.5 0.5] [0 1]]
                                              [[0 0] [0.5 0.5] [1 0]]
                                              [[1 0] [0.5 0.5] [1 1]]
                                              [[0 1] [0.5 0.5] [1 1]]] cell)))))]
           (doseq [j (apply concat
                            (map-indexed (fn [index c]
                                             (let [z (js/parseInt (str c))
                                                   m (* index 2)
                                                   g (for [o (range 3)
                                                           p (range 3)]
                                                          [o p])
                                                   u (nth g z)]
                                                  [[m (colors (u 0))]
                                                   [(inc m) (colors (u 1))]]))
                                         pattern))]
                  (apply triangle j))))

(defn icon-coordinates [size pos]
      (let [[x y]       pos
            box-wid     (/ size icon-resolution)
            box         (+ (Math/floor (/ x box-wid)) (* (Math/floor (/ y box-wid)) icon-resolution))
            x-remainder (/ (mod x box-wid) box-wid)
            y-remainder (/ (mod y box-wid) box-wid)
            slice-1     (> x-remainder y-remainder)
            slice-2     (> (+ x-remainder y-remainder) 1)
            cell        (case [slice-1 slice-2]
                              [false false] 1
                              [false true] 2
                              [true false] 0
                              [true true] 3)]
           (+ (* box 4) cell)))

(defn update-pattern [pattern col icon-coordinate]
      (let [n    (Math/floor (/ icon-coordinate 2))
            off  (odd? icon-coordinate)
            vpat (vec pattern)
            prev (js/parseInt (str (vpat n)))]
           (apply str
                  (assoc vpat
                         n
                         (first (str (if off
                                         (+ (* col 3) (mod prev 3))
                                         (+ col (* 3 (Math/floor (/ prev 3)))))))))))

(defn convert-mouse-movements [app mouse-chan opts]
      (let [paint-chan (chan)]
           (go (while true
                      (loop []
                            (let [[typ pos] (<! mouse-chan)]
                                 (if (= typ :down)
                                     (>! paint-chan pos)
                                     (recur))))
                      (loop []
                            (let [[typ pos] (<! mouse-chan)]
                                 (when (= typ :move)
                                       (do (>! paint-chan pos)
                                           (recur)))))))
           (go (loop [prev nil]
                     (let [pos   (<! paint-chan)
                           ic    (icon-coordinates (:width opts) pos)]
                          (do (when (not= ic prev)
                                    (update! app 
                                             (fn [{:keys [pattern index] :as state}]
                                                 (update-in state [:pattern] update-pattern index ic))))
                              (recur ic)))))))

(defn get-relative-pos [e]
      (let [target (.-target e)]
           [(- (.-pageX e) (.-offsetLeft target)) (- (.-pageY e) (.-offsetTop target))]))

(defn icon [app opts] 
      (letfn [[refresh-icon [owner]
               (let [context (.getContext (get-node owner "canvas") "2d")
                     size    (:width opts)]
                    (draw-icon context size (:pattern app)))]]
        (reify IWillMount (will-mount [_ owner]
                            (let [mouse-chan (chan)]
                                 (set-state! owner [:mouse-chan] mouse-chan)
                                 (convert-mouse-movements app mouse-chan opts)))
               IDidUpdate (did-update [_ owner _ _ _]
                            (refresh-icon owner))  
               IDidMount (did-mount [_ owner _]
                           (refresh-icon owner))  
               IRender (render [_ owner]
                         (let [mouse-chan (get-state owner [:mouse-chan])
                               mouse-fn (fn [typ]
                                            (fn [e]
                                                (put! mouse-chan [typ (get-relative-pos e)])))]
                              (canvas (clj->js (assoc opts
                                                      :ref "canvas"
                                                      :onMouseDown (mouse-fn :down)
                                                      :onMouseMove (mouse-fn :move)
                                                      :onMouseUp (mouse-fn :up)))))))))

(defn swatch [app opts]
      (let [index (opts :index)]
           (component (div (clj->js {:className (when (= (:index app) index)
                                                      "selected")
                                     :style     {:background-color (colors index)}
                                     :onClick   (partial update! app [:index] (constantly index))})))))           
  
(defn screen [app]
      (component (div #js {:id "main"}
                      (build icon
                             app
                             {:opts {:width  400 
                                     :height 400
                                     :id :big-canvas}})
                      (p nil "Palette")
                      (apply div #js {:id "pallete"}
                             (for [index (range 3)]
                                  (build swatch
                                         app
                                         {:opts {:index index}})))
                      (p nil "Preview")
                      (build icon 
                                 app
                                 {:opts {:width  60 
                                         :height 60
                                         :id :little-canvas}}))))

(root app-state screen
      (.-body js/document))

