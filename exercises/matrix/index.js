// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    
    let results = [];
    for(let i=0; i < n; i++) results.push([])
    
    let counter=1;
    
    let s_row = 0;    
    let e_row = n-1;
    
    let s_col = 0
    let e_col = n-1;
    
    while (s_col <= e_col && s_row <= e_row){
        for(let i=s_col; i<=e_col; i++){
            results[s_row][i] = counter
            counter++
        }
        s_row++
       
        for(let i=s_row; i<=e_row; i++){
            results[i][e_col] = counter
            counter++
        }
        e_col--
        
        for(let i=e_col; i>=s_col; i--){
            results[e_row][i] = counter
            counter++
        }
        
        e_row--
        
        for(let i=e_row; i>=s_row; i--){
            results[i][s_col] = counter
            counter++
        }
        s_col++
    }
    
    return results;


}

module.exports = matrix;
