const printTree = require('./printTree');
const TreeNode = require('./TreeNode');

// Recursive solution
// Time complexity - O(N)
// Space complexity - O(N) (Auxiallary space depends on height of the tree)
function postOrderTraversal(root) {
  if (root === null) return root;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

// TODO: Iterative solution
function postOrderTraversalIterative(root) {}

const root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);

postOrderTraversal(root);
