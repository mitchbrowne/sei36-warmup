console.log("Let's tango! cha cha cha");

const removeDupes = function(string) {
  const array = string.split(' ');
  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

const growBanana = function(string) {
  const banana = 'banana';
  const bananaArray = [];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === banana[count]) {
      bananaArray.push(string[i]);
      count += 1;
    }
  }
  return bananaArray;
}

console.log(removeDupes('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

console.log(growBanana('alpha beta beta ganna gamma gamma delta alpha beta beta ganna gamma gamma delta'));

const banana = function() {
	return ('b' + 'a' + +'b' + 'a').toLowerCase();
};

console.log(banana());
