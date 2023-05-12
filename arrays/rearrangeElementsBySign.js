/**
 * Problem  - Rearrange Array Elements by Sign
 * Leetcode - https://leetcode.com/problems/rearrange-array-elements-by-sign
 */

// Brute force solution
// Time complexity - O(N) + O(N/2) = O(N)
// Space complexity - O(N)
function rearrangeElementsBySign(nums) {
  const positiveArray = [];
  const negativeArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeArray.push(nums[i]);
    } else {
      positiveArray.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[2 * i] = positiveArray[i];
    nums[2 * (i + 1)] = negativeArray[i];
  }

  return nums;
}

// Variety 1 (If both have even number of -ve and +ve elements)
// Optimal solution
// Time complexity - O(N)
// Space complexity - O(N)
function rearrangeElementsBySign1(nums) {
  let posIndex = 0;
  let negIndex = 1;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      result[negIndex] = nums[i];
      negIndex += 2;
    } else {
      result[posIndex] = nums[i];
      posIndex += 2;
    }
  }

  return result;
}

// Variety 2 (If both have uneven number of -ve and +ve elements)
// Optimal solution
// Time complexity - O(2N) = O(N)
// Space complexity - O(N)
function rearrangeElementsBySign2(nums) {
  const positiveArray = [];
  const negativeArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeArray.push(nums[i]);
    } else {
      positiveArray.push(nums[i]);
    }
  }

  if (positiveArray.length > negativeArray.length) {
    for (let i = 0; i < negativeArray.length; i++) {
      nums[2 * i] = positiveArray[i];
      nums[2 * (i + 1)] = negativeArray[i];
    }

    let index = negativeArray.length * 2;
    for (let i = index; i < positiveArray.length; i++) {
      nums[index] = positiveArray[i];
    }
  } else {
    for (let i = 0; i < positiveArray.length; i++) {
      nums[2 * i] = positiveArray[i];
      nums[2 * (i + 1)] = negativeArray[i];
    }

    let index = positiveArray.length * 2;
    for (let i = index; i < negativeArray.length; i++) {
      nums[index] = negativeArray[i];
    }
  }
}

const nums = [3, -2, 1, -5, 2, 4];
rearrangeElementsBySign2(nums);
console.log(nums);
