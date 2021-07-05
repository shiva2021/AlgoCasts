// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, map = {}, i = 0){
    if(n === i){
        return map['next']
    }
    i++;
    if(map['next']){
        let next = map['previous'] + map['next'] 
        map['previous'] = map['next'];
        map['next'] = next;

        return fib(n, map, i)
    }

    map = {
        previous:0,
        next: i
    }
    return fib(n, map, i)
}

fib(4)

module.exports = fib;

/** Solution #1: Iterative 

function fib(n){
    let fib = []    
    let map = {
        previous: 0,
        next: 0
    }
    
    for(let i=0; i<n; i++){
        fib.push(map['next'])
        
        let next =  map['previous'] + map['next'];
        map['previous'] = map['next'];    
        
        if(!map['next']){
            map['next'] = map['next'] + 1; 
        }else{
            map['next'] = next
        }
    }
    
    return map['next']
}
*/


/** SOLUTION 2: Recursive 

function fib(n, map = {}, i = 0){
    if(n === i){
        return map['next']
    }
    i++;
    if(map['next']){
        let next = map['previous'] + map['next'] 
        map['previous'] = map['next'];
        map['next'] = next;

        return fib(n, map, i)
    }

    map = {
        previous:0,
        next: i
    }
    return fib(n, map, i)
}

*/