console.log("Let's tango! cha cha cha");

const scrabble = function(input) {
  let word = '';
  let wordMultiple = '';
  if (input.indexOf(':') > -1) {
    word = (input.split(':'))[0].toUpperCase();
    wordMultiple = (input.split(':'))[1];
  } else {
    word = input.toUpperCase();
  };
  let score = 0;
  const scoreSheet = [
    {value: 1, letter: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']},
    {value: 2, letter: ['D', 'G']},
    {value: 3, letter: ['B', 'C', 'M', 'P']},
    {value: 4, letter: ['F', 'H', 'V', 'W', 'Y']},
    {value: 5, letter: ['K']},
    {value: 8, letter: ['J', 'K']},
    {value: 10, letter: ['Q', 'Z']}
  ];
  const multiplier = {
    double: 2,
    triple: 3
  };
  for (let i = 0; i < word.length; i++) {
    for (const property in scoreSheet) {
      if (scoreSheet[property].letter.indexOf(word[i]) > -1) {
        score += scoreSheet[property].value;
      }
    }
  }
  if (wordMultiple.length > 0) {
    score = multiplier[wordMultiple] * score
  }

  return score;
}

console.log(scrabble('cabBage:triple'));

//scrabble('cabbage:doubled', b:doubled, )
