const printTree = require('./printTree');
const TreeNode = require('./TreeNode');

// Recursive solution
// Time complexity - O(N)
// Space complexity - O(N) (Auxiallary space depends on height of the tree)
function inOrderTraversal(root) {
  if (root === null) return root;

  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
}

// TODO: Iterative solution
function inOrderTraversalIterative(root) {}

const root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);

// printTree(root);
inOrderTraversal(root);
