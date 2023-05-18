/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

const sumOfDifferences = (arr) => {
  let array = arr.sort((a, b) => a - b).reverse();

  let sum = 0;
  let dif = 0;

  for (let i = 0; i < array.length - 1; i++) {
    dif = array[i] - array[i + 1];
    sum += dif;
  }

  return sum;
};

console.log(sumOfDifferences([10, 2, 1]));
