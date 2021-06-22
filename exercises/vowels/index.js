// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let vow = ["a","e","i", "o", "u"];
    for (const d of str) {
        if(vow.includes(d.toLowerCase())) count++
    }

    return count;
}

module.exports = vowels;


// function vowels(str) {
//     let vow = {
//         "a":0,
//         "e":0,
//         "i":0,
//         "o":0,
//         "u":0
//     }

//     let arr = str.split('');
//     let newarr = [];
//     for(let i in arr) if(vow.hasOwnProperty(arr[i].toLowerCase())) newarr.push(vow[arr[i]])
//     return newarr.length;
// }


/** Solution #2 
 * 
 * 
 function vowels(str) {
    let vow = {
        "a":"",
        "e":"",
        "i":"",
        "o":"",
        "u":""
    }

    let arr = str.split('');
    let newarr = arr.filter((d)=>{
        if(vow.hasOwnProperty(d.toLowerCase())) return d
    });
    return newarr.length;
}
*/

/** Solution# 3 
 * 
 function vowels(str) {
    if(str) return str.match(/[a,e,i,o,u,A,E,I,O,U]/g) ? str.match(/[a,e,i,o,u,A,E,I,O,U]/g).length: 0;
}

*/

/** Solution# 4
 
function vowels(str) {
    let count = 0;
    let vow = "aeiou"
    for (const d of str) {
        if(vow.includes(d.toLowerCase())) count++
    }

    return count;
}
*/