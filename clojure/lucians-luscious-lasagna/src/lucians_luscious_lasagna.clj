(ns lucians-luscious-lasagna)

(def expected-time 40)     ; define top-level var that represents expected time to cook lasagna
(def expected-prep-time 2) ; define expected prep time per layer is 2 minutes

(defn remaining-time
  "Takes the actual time in minutes the lasagna has been in the oven,
   and returns how many minutes the lasagna still has to remain in the oven."
  [actual-time]                  ; param: actual-time
  (- expected-time actual-time)) ; subtract expected time - elapsed time

(defn prep-time
  "Takes the number of layers added to the lasagna,
   and returns how many minutes you spent preparing the lasagna"
  [num-layers]
  (* num-layers expected-prep-time)) ; multiply num of layers * prep time per layer (2 mins)

(defn total-time
  "Takes the number of layers of lasagna and the actual time in minutes it has been in the oven.
   Returns how many minutes in total you've worked on cooking the lasagna"
  [num-layers actual-time]
  (+ actual-time (prep-time num-layers))) ; sum elapsed time + total prep time
