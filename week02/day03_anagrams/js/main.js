const objectAnagram = {
  out: [],
  sortWord: function(word) {
    return word.split('').sort().join('');
  },
  anagram: function (word, toCheck) {
    const sortedInput = this.sortWord(word);
    for (let i = 0; i < toCheck.length; i++) {
      if (sortedInput === this.sortWord(toCheck[i])) {
        this.out.push(toCheck[i]);
      }
    }
  console.log(this.out.join(', '));
  }
}

objectAnagram.anagram('listen', ["enlists", "google", "inlets", "banana"]);
