/**
 * Problem - Remove duplicates from sorted array and return the length
 * Leetcode - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

// Brute force solution
// Time complexity - O(N logN) + O(N)
// Space complexity - O(N)
function removeDuplicatesFromSortedArray(nums) {
  const set = new Set(nums);

  let i = 0;
  for (let key of set) {
    nums[i++] = key;
  }

  return set.size;
}

// Optimal solution
// Time complexity - O(N)
// Space complexity - O(1)
function removeDuplicatesFromSortedArray(nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
