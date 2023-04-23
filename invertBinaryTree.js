/**
 * Problem - Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function invertTree(root) {
  if (root === null) return root;

  const leftSubTree = invertTree(root.left);
  const rightSubTree = invertTree(root.right);

  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
}
