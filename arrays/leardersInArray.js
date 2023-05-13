/**
 * Problem - Leaders in array
 * Link - https://www.codingninjas.com/codestudio/problems/leaders-in-an-array_873144
 */

// Brute force solution
// Time complexity - O(N^2)
// Space complexity - O(N) (Not using any extra space, just to return the answer)
function leadersInArray1(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let ans = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        ans = false;
        break;
      }
    }
    if (ans) result.push(nums[i]);
  }

  return result;
}

// Optimal solution
// Time complexity - O(N)
// Space complexity - O(N)
function leadersInArray(nums) {
  const result = [];

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > max) {
      result.push(nums[i]);
      max = nums[i];
    }
  }

  return result;
}

const nums = [1, 2, 3, 2];
const result = leadersInArray(nums);
console.log(`The result is ${result}`);
