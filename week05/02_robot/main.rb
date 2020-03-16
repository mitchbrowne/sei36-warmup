class Robot
  attr_accessor :name, :instruction_count # Macro to create the .name/@name getter and setter

  def initialize
    @name = generate_name
    @things_done = 0
    @created = Time.now
    @last_boot = Time.now
  end

  def generate_name
    letters = ('AA'..'ZZ').to_a.sample
    numbers = ('000'..'999').to_a.sample
    letters + numbers
  end

  def name
    @things_done += 1
    @name
  end

  def reset
    @things_done += 1
    @name = generate_name
    @last_boot = Time.now
  end

  def things_done
    @things_done
  end

  def timers
    @things_done += 1
    created_difference = (Time.now - @created).to_i
    last_boot_difference = (Time.now - @last_boot).to_i
    puts "#{last_boot_difference} seconds since last boot, #{created_difference} seconds since creation"
  end
end

robot1 = Robot.new
puts robot1.name
robot1.reset
puts robot1.things_done
robot1.timers

robot2 = Robot.new
robot2.name

require 'pry'
# binding.pry
