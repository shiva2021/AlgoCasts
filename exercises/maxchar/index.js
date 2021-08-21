// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {};
//   let max = 0;
//   let maxChar = '';

//   for (let d of str) {
//     // !Object.prototype.hasOwnProperty.call(obj, d) ? obj[d] = 1 : obj[d]++
//     obj[d] = obj[d] + 1 || 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       maxChar = key;
//     }
//   }

//   return maxChar
// }


/** SOLUTION #2 --> LATEST*/

function maxChar(string) {
    if(!string) return ""
    let max = 1
    let map = {},
        maxstring;
    for (let i = 0; i < string.length; i++) {
        map[string[i]] = map[string[i]] ? map[string[i]]++ : 1;
        if (map[string[i]] >= max) maxstring = string[i]
    }
    return maxstring
}

module.exports = maxChar;
