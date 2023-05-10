const printTree = require('./printTree');
const TreeNode = require('./TreeNode');

// Recursive solution
// Time complexity - O(N)
// Space complexity - O(N) (Auxiallary space depends on height of the tree)
function preOrderTraversal(root) {
  if (root === null) return root;

  preOrderTraversal(root);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

// TODO: Iterative solution
function preOrderTraversalIterative(root) {}

const root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);

printTree(root);
