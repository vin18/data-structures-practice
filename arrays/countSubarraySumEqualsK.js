// Brute force solution
// Time complexity - O(N^3)
// Space complexity - O(1)
function countSubarraySumEqualsK1(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      if (sum === k) count++;
    }
  }

  return count;
}

// Better solution
// Time complexity - O(N^2)
// Space complexity - O(1)
function countSubarraySumEqualsK2(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
}

// Optimal solution - Prefix sum solution
// Time complexity - O(N)
// Space complexity - O(N)
function countSubarraySumEqualsK(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let remove = prefixSum - k;

    if (map.has(remove)) {
      count += map.get(remove);
    }

    if (map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }

  return count;
}

const nums = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const k = 3;
const result = countSubarraySumEqualsK(nums, k);
console.log(`Number of subarray with sum ${k} is ${result}`);
