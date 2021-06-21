// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stairs = '') {
    if(row === n){
        return
    }

    if(n == stairs.length) {
        console.log(stairs)
        return steps(n, row + 1)
    }

    let add = stairs.length <= row ? '#' : ' ';
    steps (n, row, stairs + add)
}

steps(2)

module.exports = steps;


/** 
function steps(n) {
    for(let row=1; row <= n; row++){
        let steps = '';
        for(let column=1; column <= n; column++){
            if(row >= column) steps += "#";
            else steps += ' ';
        }

        console.log(steps)
    }
}
*/