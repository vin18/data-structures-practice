/**
 * Problem - Left rotate array by d elements
 * Link - https://www.codingninjas.com/codestudio/problems/rotate-array_1230543
 */

// Brute force solution
// Time complexity - O(d) + O(n - d) + O(d) = O(n + d)
// Space complexity - O(d)
function leftRotateArray1(arr, d) {
  let length = arr.length;
  d = d % length;

  const temp = [];
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  for (let i = d; i < length; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = length - d; i < length; i++) {
    arr[i] = temp[i - (length - d)];
  }
}

// Optimal solution
// Time complexity - O(d) + O(n - d) + O(n) = O(2n) = O(n)
// Space complexity - O(1)
function leftRotateArray2(arr, d) {
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
}

function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 3;

leftRotateArray1(arr, d);
// leftRotateArray2(arr, d);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
