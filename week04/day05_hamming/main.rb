def hamming d1, d2
  result = helper d1, d2
  # d1.split('').select.with_index { |x, i| x != d2[i] }
  puts "Difference = #{result.count true}"
  puts d1
  puts d2
  puts result.map {|x| x ? '^' : ' '}.join
  # carrots = ''
  # result.map do |x|
  #   if x == true
  #     carrots += '^'
  #   else
  #     carrots += ' '
  #   end
  # end
  # puts carrots
end

def helper d1, d2
    d1.split('').map.with_index { |x, i| x != d2[i] }
end

hamming 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'
