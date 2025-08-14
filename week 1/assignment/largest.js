/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    ar2 = [];
    for(let i = 0; i < arr.length; i++) {
        ar2.push(arr[i]);
    }
    ar2.sort((a, b) => a - b);
    return ar2[ar2.length - 1];
    // return Math.max(...arr);

}

const a = [3, 7, 45, 9, 1];
console.log(findLargestElement(a));
