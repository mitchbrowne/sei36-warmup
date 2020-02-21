

// When given `key = 1`
// 'a' will become 'b', because we shift it by one character in the alphabet.
// A string `please help this is boring` becomes `qmfbtf ifmq uijt jt cpsjoh`.

const cypher = function(message, key) {
  message = message.toLowerCase();
  let result = '';
  for (let j = 0; j < message.length; j++) {
    if (message.charCodeAt(j) > 122 || message.charCodeAt(j) < 97) {
      result += message[j];
    } else if ((message.charCodeAt(j) + key) > 122) {
      result += String.fromCharCode((message.charCodeAt(j) - 26) + key);
    } else {
      let newLetterCode = message.charCodeAt(j) + +key;
      result += String.fromCharCode(newLetterCode);
    }
  };
  console.log(message);
  console.log(result);
};

cypher(`Xyzlease help, this is boring`, 26);

const cypherTwo = function(message, key) {
  message = message.toLowerCase();
  let result = '';
  for (let j = 0; j < message.length; j++) {
    if (/\w/.test(message[j])) {
      const ascii = message[j].charCodeAt(0);
      const newAscii = ascii + key;
      if (newAscii > 'z'.charCodeAt(0)) {
        newAscii -= 26;
      }
      const newChar = String.fromCharCode(newAscii);
      result += newChar;
    } else {
      result += message[j];
    }
  };
  console.log(message);
  console.log(result);
};

cypherTwo(`Xyzlease help, this is boring`, 1);
