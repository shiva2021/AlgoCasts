// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    /** SOLUTION# 1 */
    let sObj1 = {};
    let sObj2 = {};

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');

    if(stringA.length !== stringB.length) return false;

    for(let char of stringA) sObj1[char] = sObj1[char] ? sObj1[char]++ : 1; 
    for(let char of stringB) sObj2[char] = sObj2[char] ? sObj2[char]++ : 1;
    
    for(let char in sObj1){
        if(sObj1[char] != sObj2[char]) return false
    }

    return true;

}

module.exports = anagrams;
