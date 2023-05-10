/**
 * Problem - Sort Colors (Sort arrays of 0, 1 and 2)
 * Leetcode - https://leetcode.com/problems/sort-colors
 * Learning - Dutch national flag algorithm for optimal solution
 */

// Brute force solution
// Time complexity - O(n logn)
// Space complexity - O(n) (since .sort() method uses merge sort)
function sortColors1(nums) {
  nums.sort();
}

// Better solution
// Time complexity - O(2n) = O(n)
// Space complexity - O(1)
function sortColors2(nums) {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) countZero++;
    else if (nums[i] === 1) countOne++;
    else countTwo++;
  }

  let i = 0;

  for (let j = 0; j < countZero; j++) {
    nums[i] = 0;
    i++;
  }

  for (let j = 0; j < countOne; j++) {
    nums[i] = 1;
    i++;
  }

  for (let j = 0; j < countTwo; j++) {
    nums[i] = 2;
    i++;
  }
}

// Optimal solution - Dutch national flag
// Time complexity - O(n)
// Space complexity - O(1)
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
