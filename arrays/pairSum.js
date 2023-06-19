/**
 * Problem
 * Given an array of integers nums arranged in ascending order and a target.
 * Your task is to count all the distinct pairs in nums such that their sum is equal to target.
 *
 * If there is no pair present, return -1.
 * You can't use same index element to calculate sum.
 *
 * Coding Ninjas - https://www.codingninjas.com/codestudio/problems/pair-sum_1171154
 **/

// Brute force approach
// Time complexity - O(N^2)
// Space complexity - O(1)
function pairSum(nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) count++;
    }
  }

  return count === 0 ? -1 : count;
}

// Better solution - Using hashmap
// Time complexity - O(N)
// Space complexity - O(N)
function pairSum(nums, target) {
  let count = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      count++;
    } else {
      map.add(nums[i], true);
    }
  }

  return count === 0 ? -1 : count;
}

// Optimal solution - Two pointers approach
// Time complexity - O(N) (since original array is sorted. If sorting required, then O(N logN) + O(N))
// Space complexity - O(1)
function pairSum(nums, target) {
  let count = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      count++;
      end--;
    } else if (target > sum) {
      start++;
    } else {
      end--;
    }
  }

  return count === 0 ? -1 : count;
}
