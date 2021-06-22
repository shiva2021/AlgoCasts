// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vow = {
        "a":0,
        "e":0,
        "i":0,
        "o":0,
        "u":0
    }

    let arr = str.split('');
    let newarr = arr.filter((d)=>{
        if(vow.hasOwnProperty(d.toLowerCase())) return d
    });
    return newarr.length;
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
