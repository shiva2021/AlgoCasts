// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = '';

  for (let d of str) {
    // !Object.prototype.hasOwnProperty.call(obj, d) ? obj[d] = 1 : obj[d]++
    obj[d] = obj[d] + 1 || 1;
  }

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }

  return maxChar
}

module.exports = maxChar;
