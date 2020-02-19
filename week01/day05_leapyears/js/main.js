console.log("One small step for man, one giant leap for frog!");

const isLeapYear = function() {
  const year = prompt('Can you year me?');
  if ((year % 400 === 0 && year % 100 === 0) || ((year % 4 === 0 && year % 100 !== 0))) {
    return true;
  }
  return false;
};

// Aleks solution
const isLeapYearTwo = function(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log(isLeapYear());

console.log(isLeapYearTwo(1996));
