/**
 * Find largest element in the array
 * Link - https://www.codingninjas.com/codestudio/problems/largest-element-in-the-array-largest-element-in-the-array_5026279
 */

// Time complexity - O(n logn)
// Space complexity - O(1)
function largestElement1(arr) {
  arr.sort();
  return arr[arr.length - 1];
}

// Time complexity - O(1)
// Space complexity - O(1)
function largestElement(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
