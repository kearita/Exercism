(ns cars-assemble)

(def min_rate 221)

(defn success_rate
  "Finds the success rate of producing working cars"
  [speed]
  (cond  
        (= speed 10) 0.77
        (= speed 9) 0.8
        (>= speed 5) 0.9
        :else 1.0)
  )

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate"
  [speed]
  (* (* min_rate speed) (success_rate speed))
  )

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (int(/ (production-rate speed) 60)) ; divide by 60 to get per min
  )
