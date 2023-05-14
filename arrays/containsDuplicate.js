/**
 * Problem - Contains duplicate
 * Leetcode - https://leetcode.com/problems/contains-duplicate
 */

// Brute Force solution
// Time complexity - O(N^2)
// Space complexity - O(1)
function containsDuplicate1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

// Better solution
// Time complexity - O(N logN) + O(N) = O(N logN)
// Space complexity - O(1)
function containsDuplicate2(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

// Optimal solution - Using map
// Time complexity - O(N)
// Space complexity - O(N)
function containsDuplicate3(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
  }
  return false;
}

// Optimal solution - Using set
// Time complexity - O(N)
// Space complexity - O(N)
function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}

const nums = [1, 2, 3, 1];
