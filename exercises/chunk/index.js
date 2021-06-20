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

  /** SOLUTION# 1 */
  let arr = [];
  let loopArray = [];
  let counter = 0;

  if (array.length > 0) {

    if (size > array.length) return array;

    for (let el of array) {

      if (counter == size) {
        arr.push(loopArray);

        loopArray = [];
        counter = 0;
      }

      loopArray.push(el)
      counter++;
    }

    arr.push(loopArray);


    console.log(arr)
    return arr;
  }

}

module.exports = chunk;
