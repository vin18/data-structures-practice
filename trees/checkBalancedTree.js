// Brute force solution
// Time complexity - O(N^2)
function isBalanced1(root) {
  if (root === null) return true;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) return false;

  const isLeftBalanced = isBalanced(root.left);
  const isRightBalanced = isBalanced(root.right);
  if (!isLeftBalanced || !isRightBalanced) return false;

  return true;
}

function height(root) {
  if (root === null) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

// Better solution
// Time complexity - O(N)
function isBalanced(root) {
  return isBalancedHelper(root).isBalanced;
}

function isBalancedHelper(root) {
  if (root === null) {
    const ans = new BalancedTreeReturn(0, true);
    return ans;
  }

  const leftOutput = isBalancedHelper(root.left);
  const rightOutput = isBalancedHelper(root.right);

  let isBalancedResult = true;
  let height = 1 + Math.max(leftOutput.height, rightOutput.height);

  if (Math.abs(leftOutput.height - rightOutput.height) > 1) {
    isBalancedResult = false;
  }

  if (!leftOutput.isBalanced || !rightOutput.isBalanced) {
    isBalancedResult = false;
  }

  const ans = new BalancedTreeReturn(height, isBalancedResult);
  return ans;
}

function BalancedTreeReturn(height, isBalanced) {
  this.height = height;
  this.isBalanced = isBalanced;
}
