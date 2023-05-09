/*
DESCRIPTION:
Your function takes two arguments:

1 - current father's age (years)
2 - current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

Cuando tuvo el padre el doble de la edad de su hijo

padre = 36 - hijo * 2
hijo = 7 * 2 = 14

*/
const twiceAsOld = (dadAge, sonAge) => {
  const ageSonDoble = sonAge * 2;
  if (ageSonDoble > dadAge) {
    return ageSonDoble - dadAge;
  } else {
    return dadAge - ageSonDoble;
  }
};

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

console.log(twiceAsOld(55, 30));
