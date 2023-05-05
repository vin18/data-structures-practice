/**
 * Problem - Max Consecutive Ones
 * Leetcode - https://leetcode.com/problems/max-consecutive-ones
 */

// Time complexity - O(n)
// Space complexity - O(1)
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
}
