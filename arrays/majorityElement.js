/**
 * Problem - Majority Element
 * Link - https://leetcode.com/problems/majority-element
 * Learning - Moore's Voting Algorithm
 */

// Brute force solution
// Time complexity - O(N^2)
// Space complexity - O(1)
function majorityElement1(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count > nums.length / 2) return nums[i];
  }

  return -1;
}

// Better solution
// Time complexity - O(n)
// Space complexity - O(n)
function majorityElement2(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key;
    }
  }

  return -1;
}

// Optimal solution - Moore's Voting Algorithm
// Time complexity - O(2n) = O(n)
// Space complexity - O(1)
function majorityElement(nums) {
  let count = 0;
  let element = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      count++;
      element = nums[i];
    } else if (element !== nums[i]) {
      count--;
    } else {
      count++;
    }
  }

  let maxOccurrence = 0;
  for (let i = 0; i < nums.length; i++) {
    if (element === nums[i]) maxOccurrence++;
  }

  if (maxOccurrence > nums.length / 2) {
    return element;
  } else {
    return -1;
  }
}

const nums = [3, 2, 3];
console.log(majorityElement(nums));
