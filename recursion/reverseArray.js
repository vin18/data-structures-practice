/**
 * Problem - Reverse an array
 */

// Single pointer as parameter
function reverseArray(nums, i) {
  if (i >= nums.length / 2) return;
  swap(nums, i, nums.length - i - 1);
  reverseArray(nums, i + 1);
}

// Using two pointers as parameters
function reverseArray1(nums, i, j) {
  if (i >= j) return;
  swap(nums, i, j);
  reverseArray(nums, i + 1, j - 1);
}

function swap(nums, i, j) {
  let x = nums[i];
  nums[i] = nums[j];
  nums[j] = x;
}

const nums = [1, 2, 3, 4];
reverseArray(nums, 0, nums.length - 1);
console.log(nums);
