// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(answer) {
  if (answer) {

    /** Solution# 1 
      var newStr = answer.split('');
      let newArr = []
      for (let i = newStr.length - 1; i >= 0; i--) newArr.push(newStr[i])
      return newArr.join().replace(/,/g, '');
    */

    /** Soltion# 2
    var newStr = answer.split('');
    newStr.reverse();
    return newStr.join('');  
    */

    /** Solution# 3
    return answer.split('').reverse().join('');
     */

    /** Solution# 4
      let reversed = '';
      for (let char of answer) {
        reversed = char + reversed;
      }
      return reversed;
     */

    /** Solution# 5 */
    return answer.split('').reduce((rev, char) => char + rev, '');
  }

}

module.exports = reverse;

// reverse();