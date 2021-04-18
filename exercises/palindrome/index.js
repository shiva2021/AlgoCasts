// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str) {

    /**  Solution #1:   */
    let newString = str.split('').reduce((rev, char) => char + rev, '');
    // return newString === str ? true : false;
    return newString === str;


    /** Solution #2: This is a slow solution because each charcter is 
     * being compared with the character closest to its position.
     * 
     * The every() method tests whether all elements in the array pass 
     * the test implemented by the provided function. It returns a Boolean
     * value.
     * 
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1]
    })

    */
  }
}

module.exports = palindrome;
