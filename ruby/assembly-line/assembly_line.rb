class AssemblyLine
  def initialize(speed)
    @speed = speed
    @min = 221
  end

  def production_rate_per_hour
    @num_cars = @speed * @min
    if @speed >= 1 and @speed <= 4
      @num_cars *= 1
    elsif @speed >= 5 and @speed <= 8
      @num_cars *= 0.9
    elsif @speed == 9
      @num_cars *= 0.8
    elsif @speed == 10
      @num_cars *= 0.77
    end
    return @num_cars
  end

  def working_items_per_minute
    (production_rate_per_hour / 60).floor
  end
end
