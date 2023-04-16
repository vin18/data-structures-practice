/**
 * Problem
 * Given an array of integers nums and an integer target, return * indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you * may not use the same element twice.
 * You can return the answer in any order.
 *
 * Leetcode - https://leetcode.com/problems/two-sum
 **/

// Test case 1
// const nums = [2, 7, 11, 15];
// const target = 9;

// Test case 2
// const nums = [3, 3];
// const target = 6;

// Test case 3
// const nums = [3, 2, 4];
// const target = 6;

// Time complexity - O(N^2)
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

// Time complexity - O(N)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];
    if (map.has(element)) {
      return [map.get(element), i];
    }
    map.set(nums[i], i);
  }
}

const result = twoSum(nums, target);
console.log(`The result of two sum is ` + result);
