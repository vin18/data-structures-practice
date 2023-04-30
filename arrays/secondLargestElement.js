/**
 * Problem - Second largest element in the array
 * Link - https://www.codingninjas.com/codestudio/problems/second-largest-element-in-the-array_873375
 * Striver
 */

const nums = [10, 25, -12, -6, 20, 20];

// Brute force solution
// Time Complexity - O(n logn) + O(n) = O(n logn)
// Space Complexity - O(1)
function findSecondLargest1() {
  if (nums.length === 0) return -1;

  nums.sort();

  let largest = nums[nums.length - 1];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
      break;
    }
  }

  return secondLargest === Number.MIN_SAFE_INTEGER ? -1 : secondLargest;
}

// Better solution
// Time Complexity - O(n) + O(n) = O(2n) = O(n)
// Space Complexity - O(1)
function findSecondLargest2() {
  if (nums.length === 0) return -1;

  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest === Number.MIN_SAFE_INTEGER ? -1 : secondLargest;
}

// Optimal solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function findSecondLargest3() {
  if (nums.length === 0) return -1;

  let largest = nums[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < num.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest === Number.MIN_SAFE_INTEGER ? -1 : secondLargest;
}

const result = findSecondLargest1();
console.log(`The second largest number in the array is ${result}`);
