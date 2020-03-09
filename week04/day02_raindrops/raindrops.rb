## Warmup - Raindrops

# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

def raindrops number
  result = ""
  result += "Pling" if number % 3 == 0
  result += "Plang" if number % 5 == 0
  result += "Plong" if number % 7 == 0
  if result == ""
    return puts "#{number.to_s}"
  end
  return puts "#{result}"
end

print "Provide a number: "
number = gets.to_i

until number == 0
  raindrops number
  print "Provide another number [0 to quit]: "
  number = gets.to_i
end

# ### Examples
#
# - 28 has 7 as a factor.
#
# * In raindrop-speak, this would be a simple "Plong".
#
# - 1755 has 3 and 5 as factors.
#
# * In raindrop-speak, this would be a "PlingPlang".
#
# - 34 has neither 3, 5 nor 7 as a factor.
#
# * Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
#
# New file setup today. You will need to create a `raindrops.rb` file that can be executable in your terminal.
