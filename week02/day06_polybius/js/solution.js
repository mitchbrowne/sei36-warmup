const poly = function (message) {
  const cypher = 'abcdefghijklmnopqrstuvwxyz,.?!';
  let output = '';
  for (let i = 0; i < message.length; i++) {
    const letterIndex = cypher.indexOf(message[i]);
    if (letterIndex !== -1) {
      output += (letterIndex % 5) + 1;
      output += Math.floor(letterIndex / 6);
      output += ' ';
    }
  }
  return output;
}

console.log(poly('message'));
