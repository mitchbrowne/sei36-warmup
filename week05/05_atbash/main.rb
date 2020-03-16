class Atbash
  def initialize(word)
    @message = word
    @abc = ('a'..'z').to_a
    @reversed = @abc.reverse
  end

  def convert_char char
    index = @abc.index char
    @reversed[index]
  end

  def encrypt
    encrypted_message = ''
    @message.chars.map do |x|
      encrypted_message += convert_char x
    end
    encrypted_message
  end


end

x = Atbash.new("gvhg")
puts x.encrypt

def atbash_short message
  message.downcase.chars.map { |x| (122 - (x.ord - 97)).chr}.join
end

puts atbash_short "test"

# def encode word
#   cipher = ''
#   alphabet_one = 'abcdefghijklmnopqrstuvwxyz'.split('')
#   word.split('').each do |c|
#     cipher << alphabet_one.reverse[alphabet_one.find_index(c)]
#   end
#   cipher
# end
#
# def decode cipher
#   word = ''
#   alphabet_one = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse
#   cipher.split('').each do |c|
#     word << alphabet_one.reverse[alphabet_one.find_index(c)]
#   end
#   word
# end

# puts encode 'test me'
# puts decode 'gvhg'
