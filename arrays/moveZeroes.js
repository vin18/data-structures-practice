/**
 * Problem - Move Zeroes
 * Leetcode - https://leetcode.com/problems/move-zeroes
 */

// Brute force solution
// Time complexity - O(n) + O(k) + O(n - k) = O(2n) = O(n)
// Space complexity - O(n)
function moveZeroes1(nums) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp.push(nums[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  for (let i = temp.length; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Optimal solution - Two pointers approach
// Time complexity - O(n)
// Space complexity - O(1)
function moveZeroes2(nums) {
  let a = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      a = i;
      break;
    }
  }

  let b = a + 1;
  while (b < nums.length) {
    if (nums[b] !== 0 && a !== -1) {
      let temp = nums[a];
      nums[a] = nums[b];
      nums[b] = temp;
      a++;
    }
    b++;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes2(nums);

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
