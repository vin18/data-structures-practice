const Queue = require('./Queue');

/**
 * Problem - Find maximum depth of a tree
 * Leetcode - https://leetcode.com/problems/maximum-depth-of-binary-tree
 */

// Recursive solution
// Time complexity - O(h)
// Space complexity - O(n) Auxillary space
function maxDepth(root) {
  if (root === null) return 0;

  const leftAns = maxDepth(root.left);
  const rightAns = maxDepth(root.right);

  return 1 + Math.max(leftAns, rightAns);
}

// Level order traversal solution
function maxDepth2(root) {
  let depth = 0;
  if (root === null) return depth;

  const pendingChildren = new Queue();
  pendingChildren.enqueue(root);

  while (!pendingChildren.isEmpty()) {
    const size = pendingChildren.size();
    depth++;

    for (let i = 0; i < size; i++) {
      const temp = pendingChildren.dequeue();

      if (temp.left !== null) {
        pendingChildren.enqueue(temp.left);
      }

      if (temp.right !== null) {
        pendingChildren.enqueue(temp.right);
      }
    }
  }

  return depth;
}
