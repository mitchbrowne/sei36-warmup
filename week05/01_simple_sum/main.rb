def s1 number
  number % 2
end

puts s1 4

def s2 number
  # result = 0
  # (1..number).each { |n| result += n }
  # result
  (1..number).to_a.sum
end

puts s2 4

def s3 number
  # result = 1
  # (1..number).each { |n| (n % 2 == 0) ? (result *= -n) : (result *= n) }
  # result
  result = (1..number).to_a.map.with_index { |x, i| i.odd? ? x * -1 : x }
  result.reduce { |memory, x| memory * x}
end

p s3 5
