def dna_counter dna_string
  base_table = {
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0
  }

  dna_string.each_char do |base|
    # if base_table["#{char}"] == nil
    #   p "#{char} is not a nucleotide."
    # else
    #   base_table["#{char}"] += 1
    # end
    base_table[base] += 1 if base_table.key? base
  end

  base_table.each do |key, value|
    puts "#{key}: #{value}"
  end

end


def dna_counter_short dna
  p dna.split('').uniq.map { |base| "#{base} - #{dna.count base}"}
end


dna_counter "ABGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
dna_counter_short "ABGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
