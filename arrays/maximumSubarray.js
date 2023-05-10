/**
 * Problem - Maximum Subarray problem
 * Link - https://leetcode.com/problems/maximum-subarray
 * Learning - Kadane's Algorithm
 */

// Brute force solution
// Time complexity - O(N^3)
// Space complexity - O(1)
function maxSubArray1(nums) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
        max = Math.max(sum, max);
      }
    }
  }

  return max;
}

// Better solution
// Time complexity - O(N^2)
// Space complexity - O(1)
function maxSubArray2(nums) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }

  return max;
}

// Optimal solution - Kadane's Algorithm
// Time complexity - O(N)
// Space complexity - O(1)
function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

// Get indexes of maximum subarray sum
// Optimal solution - Kadane's Algorithm
// Time complexity - O(N)
// Space complexity - O(1)
function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let start = -1;

  // Index range of maximum subarray sum
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) start = i;

    sum += nums[i];

    if (sum > max) {
      max = Math.max(sum, max);
      startIndex = start;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

const nums = [-2, -1];
const result = maxSubArray1(nums);
console.log(result);
