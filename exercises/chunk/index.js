// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  /** SOLUTION# 1 
  
  let chunked = [];
  let loopArray = [];
  let counter = 0;

  if (array.length > 0) {

    if (size > array.length) return array;

    for (let el of array) {

      if (counter == size) {
        chunked.push(loopArray);

        loopArray = [];
        counter = 0;
      }

      loopArray.push(el)
      counter++;
    }

    chunked.push(loopArray);


    console.log(chunked)
    return chunked;
  }
  
  */


  /** SOLUTION# 2 */
  let chunked = [];


  for (const element of array) {
    let last = chunked[chunked.length - 1]

    if(!last || last.length === size){
      chunked.push([element])
    }else{
      last.push(element)
    }
  }

  return chunked;
}

module.exports = chunk;
