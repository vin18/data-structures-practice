/**
 * Problem - Missing number
 * Leetcode - https://leetcode.com/problems/missing-number
 */

// Brute force solution
// Time complexity - O(n^2)
// Space complexity - O(1)
function missingNumber1(nums) {
  for (let i = 0; i <= nums.length; i++) {
    let flag = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        flag = 1;
        break;
      }
    }

    if (flag == 0) {
      return i;
    }
  }
}

// Better solution
// Time complexity - O(n logn) + O(n) = O(n logn)
// Space complexity - O(1)
function missingNumber2(nums) {
  nums.sort();

  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      result = i;
      break;
    }
  }

  return result;
}

// Optimal solution
// Time complexity - O(n)
// Space complexity - O(1)
function missingNumber(nums) {
  const length = nums.length;
  const sum = (length * (length + 1)) / 2;

  let sumOfArray = 0;
  for (let i = 0; i < nums.length; i++) {
    sumOfArray += nums[i];
  }

  return sum - sumOfArray;
}

const nums = [3, 0, 1];
const result = missingNumber1(nums);
console.log(`The missing number from given array is ${result}`);
