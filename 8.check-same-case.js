/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

const checkCharacters = (char1, char2) => {
  let result = null;

  // ver si ambos son string
  if (typeof char1 === 'string' && typeof char2 === 'string') {
    // si son letras
    if (/^[A-Za-z]*$/.test(char1) && /^[A-Za-z]*$/.test(char2)) {
      // ambos son mayusculas o minusculas
      if (char1 == char1.toUpperCase() && char2 == char2.toUpperCase()) {
        result = 1;
        return result;
      } else if (char1 == char1.toLowerCase() && char2 == char2.toLowerCase()) {
        result = 1;
        return result;
      } else {
        result = +0;
        return result;
      }
    } else {
      result = -1;
      return result;
    }
  } else {
    // Si alguno no es string
    result = -1;
    return result;
  }
};

console.log(checkCharacters('A', 's'));
