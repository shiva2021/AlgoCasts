// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let capitalized = '';
    for (const i in str) {
        if(str[i - 1] == ' ' || i == 0) capitalized += str[i].toUpperCase()
        else capitalized += str[i];
    }

    return capitalized;
}

module.exports = capitalize;

/**
function capitalize(str) {
    let array = str.split(' ');
    let capitalized='';
    for (let i in array) {
        // capitalized += array[i][0].toUpperCase() + array[i].substr(1, array[i].length) + ' '; (ALSO CORRECT)
        capitalized += array[i][0].toUpperCase() + array[i].slice(1) + ' ';
    }
    return capitalized.trim();
}
 */