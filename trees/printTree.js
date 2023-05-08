function printTree(root) {
  if (root === null) return;

  console.log(root.val);
  printTree(root.left);
  printTree(root.right);
}

module.exports = printTree;
