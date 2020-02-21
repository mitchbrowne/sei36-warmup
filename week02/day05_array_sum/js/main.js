console.log("Let's tango! cha cha cha");

const sum = function() {
  if (arguments.length === 1) arguments = arguments[0];
  let result = 0;
  for (let i = 0; i < arguments.length; i++){
    arguments[i].forEach(element => result+=element);
  }
  return result;
}

console.log(sum([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));
console.log(sum([2, 6.4, 3], [3, 3.6, 2]));
console.log(sum([[2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]]));
