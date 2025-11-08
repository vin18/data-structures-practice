// Time - O(n)
// Space - O(h)
function invertBinaryTree(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left];
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
  return root;
}

// Time - O(n)
// Space - O(w) 
function invertBinaryTreeDFSIterative(root) {
  if (!root) return root;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}

// Time - O(n)
// Space - O(w) 
function invertBinaryTreeDFSIterative(root) {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}
