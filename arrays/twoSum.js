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

// Brute force solution #1
// Time complexity - O(N^2)
// Space Complexity - O(1)
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

// Brute force solution #2 (slightly better than #1)
// Time complexity - O(N^2)
// Space Complexity - O(1)
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

// Optimal solution using hashmap
// Time complexity - O(N)
// Space Complexity - O(N)
function twoSum3(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];
    if (map.has(element)) {
      return [map.get(element), i];
    }
    map.set(nums[i], i);
  }
}

// Without using any extra space only optimal if indexes are not required as result since we are sorting original array
// Time complexity - O(N logN) + O(N) = O(N logN)
// Space Complexity - O(1)
function twoSum4(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  nums.sort();

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === target) return 'YES';
    else if (sum < target) i++;
    else j--;

    return 'NO';
  }
}

const result = twoSum(nums, target);
console.log(`The result of two sum is ` + result);
