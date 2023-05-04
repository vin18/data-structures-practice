/**
 * Problem - Intersection of two arrays
 * Leetcode - https://leetcode.com/problems/intersection-of-two-arrays
 */

// Time complexity - O(m + n)
// Space complexity - O(n + n) = O(2n) = O(n)
function intersection(nums1, nums2) {
  const set = new Set();
  const smallerArray = nums1.length < nums2.length ? nums1 : nums2;
  const largerArray = nums1.length > nums2.length ? nums1 : nums2;

  for (let i = 0; i < smallerArray.length; i++) {
    set.add(smallerArray[i]);
  }

  const result = [];
  for (let i = 0; i < largerArray.length; i++) {
    if (set.has(largerArray[i])) {
      result.push(largerArray[i]);
      set.delete(largerArray[i]);
    }
  }

  return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersection(nums1, nums2);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
