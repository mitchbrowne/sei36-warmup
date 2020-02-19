console.log("Let's tango! cha cha cha");

const ours = {
  // 1: ['a','b','c','d','e'],
  // 2: []
};

const generateTable = function() {
  let count = 97;
  for(let i = 1; i <= 6; i++) {
    ours[i] = [];
    for (let j = 0; j < 5; j++) {
      ours[i].push(String.fromCharCode(count));
      count += 1;
    };
  };
};

generateTable();
console.log(ours);

const poly = function (message) {
  let output = '';
  for (let j = 0; j < message.length; j++) {
    for (let i = 1; i <= Object.keys(ours).length; i++) {
      const letter = message[j].toLowerCase();
      if (ours[i].indexOf(letter) >= 0) {
        const letterIndex = ours[i].indexOf(letter) + 1;
        output += letterIndex;
        output += i;
        output += ' ';
      }
    }
  }
  console.log(output);
}

poly('Ciphers are confusing');
