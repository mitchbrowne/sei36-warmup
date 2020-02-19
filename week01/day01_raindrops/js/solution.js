// const centuryFromYear = function (year) {
//   let result;
//   if (year % 100 === 0) {
//     result = year / 100;
//   } else {
//     result = (Math.floor(year / 100) + 1);
//   };
//   return result;
// };

// ### FAST WAY!
// const centuryFromYear = function (year) {
//   let result = Math.ceil(year / 100);
//   console.log(result);
//   return result;
// };

// # BONUS

const centuryFromYear = function (year) {
  let result;
  // BC
  if (year < 0){
    const century = Math.ceil((year * (-1)) / 100);
    result = `${century} BC`;
  }
  // AD
  else {
    const century = Math.ceil(year / 100);
    result = `AD ${century}`;
  };
  console.log(result);
  return result;
};

// TESTS
centuryFromYear(1705);
centuryFromYear(1900);
centuryFromYear(1601);
centuryFromYear(2000);
centuryFromYear(9999); // should be 1000, not 100. Need to divide by 1000, not 100.
centuryFromYear(2050);
centuryFromYear(86);
centuryFromYear(1000);

centuryFromYear(-1);
centuryFromYear(-100);
centuryFromYear(-5634);
