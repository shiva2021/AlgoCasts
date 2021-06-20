// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let array = str.split(' ');
    let capitalized='';
    for (let i in array) {
        // capitalized += array[i][0].toUpperCase() + array[i].substr(1, array[i].length) + ' ';
        capitalized += array[i][0].toUpperCase() + array[i].slice(1) + ' ';
    }
    return capitalized.trim();
}

module.exports = capitalize;
