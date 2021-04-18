// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = n.toString().split('').reduce((rev, char) => char + rev, '')

  /** Solution #1 
  if (Math.sign(n) === -1) return (parseInt(num) * -1)
  return parseInt(num);
  */

  /** Solution 2 */
  return (parseInt(num) * Math.sign(n));
}

module.exports = reverseInt;
