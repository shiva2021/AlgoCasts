// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//Efficient Solution

function memoize(fn){
    let cache = {};
    return function(...args){
        if(cache[args]) {
            return cache[args]
        }

        let result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}

function slowfib(n){
    if(n < 2){
        return n
    } 
    
    return fib(n-1) + fib(n-2)
 
 }

let fib = memoize(slowfib)
fib(6)

module.exports = slowfib;

/** Solution #1: Iterative 

function fib(n){
    let map = {
        previous: 0,
        next: 0
    }
    
    for(let i=0; i<n; i++){       
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

/** Solution: 4

function fib(n){
    let result = [0, 1];
    for(let i=2; i<=n; i++){
        result.push(result[i-1]+result[i-2])
    }

    return result[n]
}

*/

/** Solution 5: Recursion My 2nd solution

function fib(n, result=[], i=0){
    if(n < i){
        return result[n]
    } 
    
    if(result.length >= 2 ){
     result.push(result[i-1] + result[i-2])
     i++
     return fib(n, result, i)
    }

    result = [0, 1]
    i = 2;
    return fib(n, result, i) 
 
 }

 */


 /** FINAL Solution: 6 ==> RECURSION (A VERY BAD SOLUTION) 

 function fib(n, result=[], i=0){
    if(n < 2){
        return n
    } 
    
    return fib(n-1) + fib(n-2)
 }


 RUNTIME COMPLEXITY==> Exponential
 */