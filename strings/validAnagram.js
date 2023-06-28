/**
 * Problem - Valid Anagram
 * Leetcode - https://leetcode.com/problems/valid-anagram
 */

// Brute force approach
// Time complexity - O(N logN)
// Space complexity = O(1)
function validAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// Optimal solution
// Time complexity - O(N)
// Space complexity - O(N)
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (const c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }

  for (const c of t) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) map.delete(c);
  }

  return map.size === 0;
}
