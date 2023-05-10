/**
 * Problem - Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Leetcode - https://leetcode.com/problems/invert-binary-tree/description
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 */

function invertTree(root) {
  if (root === null) return root;

  const leftSubTree = invertTree(root.left);
  const rightSubTree = invertTree(root.right);

  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
}
