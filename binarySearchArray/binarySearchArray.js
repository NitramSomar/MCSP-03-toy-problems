/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
  var leftArr = array.slice(0, array.length / 2 + 1);
  var rightArr = array.slice(array.length / 2);
  console.log(leftArr)
  console.log(rightArr)
  if (target === lefttArr.length-1) {
    return leftArr
  }
};


var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null