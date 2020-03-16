class Luhn
  def initialize number
    @number = number
  end

  def prepare
    split_digits = @number.digits
    result = []
    split_digits.map.with_index do |digit, index|
      digit *= 2 if index.odd?
      digit -= 9 if digit >= 10
      result << digit
    end
    result
  end

  def valid?
    to_check = prepare.sum
    if (to_check % 10 == 0)
      true
    else
      false
    end
  end
end

l = Luhn.new 3554
p l.valid?

e = Luhn.new 8763
p e.valid?
