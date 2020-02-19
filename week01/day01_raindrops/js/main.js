console.log("Let's tango! cha cha cha");

// Given a year, return the century it is in.

const centuryFromYear = function(year) {
  let century;
  let positiveYear = year;
  if (year < 0) {
    positiveYear = year * -1;
  };

  // calculate century
  if (year % 100 === 0) {
    century = positiveYear / 100;
  }
  else {
    century = Math.floor((positiveYear / 100)) + 1;
  };


  // calculate BC or AD
  let centuryABCD;
  if (year < 0) {
    centuryABCD = century + " BC";
  }
  else {
    centuryABCD = "AD " + century
  }


  console.log(`${year} is ${centuryABCD}`);
  return century;
};

centuryFromYear(1705);
centuryFromYear(1900);
centuryFromYear(1601);
centuryFromYear(2000);
centuryFromYear(9999);
centuryFromYear(2050);
centuryFromYear(86);
centuryFromYear(1000);

centuryFromYear(-1);
centuryFromYear(-100);
centuryFromYear(-5634);
