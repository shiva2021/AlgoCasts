// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
    
//     if(stringA.length !== stringB.length) return false;

//     let stringAObj = getCharacterMap(stringA) ? getCharacterMap(stringA) : {};
//     let stringBObj = getCharacterMap(stringB) ? getCharacterMap(stringB) : {};
    
//     for(let char in stringAObj){
//         if(stringAObj[char] != stringBObj[char]) return false
//     }

//     return true;

// }

// /** SOLUTION# 2 */
// function getCharacterMap(string){
//     let mapObject = {};

//     for(let char of string.replace(/[^\w]/g, '').toLowerCase()) mapObject[char] = mapObject[char] ? mapObject[char]++ : 1; 

//     return mapObject;
// }

/** Solution #3 */
function anagrams(stringA, stringB) {
    
    stringA = cleanUp(stringA) 
    stringB = cleanUp(stringB);

    if(stringA === stringB) return true;
    return false;
}

function cleanUp(string){
    return string.replace(/[^\w]/g).toLowerCase().split('').sort().join();
}

module.exports = anagrams;
