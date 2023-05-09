/*

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12

*/
const quarterOf = (month) => {
  let result = null;
  if (month <= 3) {
    return (result = 1);
  } else if (month > 3 && month <= 6) {
    return (result = 2);
  } else if (month > 6 && month <= 9) {
    return (result = 3);
  } else if (month > 9 && month <= 12) {
    return (result = 4);
  }
};
