const BinaryTreeNode = require('./BinaryTreeNode');
const prompt = require('prompt-sync')({ sigint: true });

function printNodesWithoutSibling(root) {
  if (root === null) return;

  if (root.left !== null && root.right === null) {
    console.log(root.left.val);
  }

  if (root.right !== null && root.left === null) {
    console.log(root.right.val);
  }
}

function isNodePresent(root, x) {
  if (root === null) return false;
  if (root.val === x) return true;

  return isNodePresent(root.left) || isNodePresent(root.right);
}

// TODO:
function replaceNodesWithDepth(root) {}

// TODO:
function printNodesAtDepthK(root, k) {}

function numOfLeafNodes(root) {
  let count = 0;
  if (root === null) return count;

  if (root.left === null && root.right === null) {
    count++;
  }

  return count + numOfLeafNodes(root.left) + numOfLeafNodes(root.right);
}

function nodeGreaterThanX(root, x) {
  if (root === null) return 0;

  const leftResult = nodeGreaterThanX(root.left);
  const rightResult = nodeGreaterThanX(root.right);
  const rootResult = root.val > x ? 1 : 0;

  return rootResult + leftResult + rightResult;
}

function largestNode(root) {
  if (root === null) return -1;

  const leftLargestData = largestNode(root.left);
  const rightLargestData = largestNode(root.right);

  return Math.max(root.val, Math.max(leftLargestData, rightLargestData));
}

function sumOfNodes(root) {
  if (root === null) return 0;
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}

function numOfNodes(root) {
  if (root === null) return 0;
  return 1 + numOfNodes(root.left) + numOfNodes(root.right);
}

function takeTreeInputBetter(isRoot, parentData, isLeft) {
  let data;

  if (isRoot) {
    data = Number(prompt(`Enter root data: `));
  } else {
    if (isLeft) {
      data = Number(prompt(`Enter left child of ${parentData}: `));
    } else {
      data = Number(prompt(`Enter right child of ${parentData}: `));
    }
  }

  if (data == -1) {
    return null;
  }

  const root = new BinaryTreeNode(data);
  const leftChild = takeTreeInputBetter(false, data, true);
  const rightChild = takeTreeInputBetter(false, data, false);

  root.left = leftChild;
  root.right = rightChild;
  return root;
}

function takeTreeInput() {
  const data = prompt(`Enter root data: `);
  if (data == -1) {
    return null;
  }

  const root = new BinaryTreeNode(data);
  const leftChild = takeTreeInput();
  const rightChild = takeTreeInput();

  root.left = leftChild;
  root.right = rightChild;

  return root;
}

function printTree(root) {
  if (root === null) return;

  console.log(root.val);
  printTree(root.left);
  printTree(root.right);
}

function printTreeDetailed(root) {
  if (root === null) return;

  let printText = root.val + ': ';

  if (root.left !== null) {
    printText += `L - ${root.left.val}, `;
  }

  if (root.right !== null) {
    printText += `R - ${root.right.val}`;
  }

  console.log(printText);
  printTreeDetailed(root.left);
  printTreeDetailed(root.right);
}

// const root = new BinaryTreeNode(1);
// const rootLeft = new BinaryTreeNode(2);
// const rootRight = new BinaryTreeNode(3);

// root.left = rootLeft;
// root.right = rootRight;

// const root = takeTreeInput();
const root = takeTreeInputBetter(true, null, false);
printTreeDetailed(root);

// const numOfNodesResult = numOfNodes(root);
// console.log(`The number of nodes in the given tree is ${numOfNodesResult}`);

// const sumOfNodesResult = sumOfNodes(root);
// console.log(`sum number of nodes in the given tree is ${sumOfNodesResult}`);

// const largestNodeResult = largestNode(root);
// console.log(`The node with the largest data is ${largestNodeResult}`);

// const nodeGreaterThanXResult = nodeGreaterThanX(root, 20);
// console.log(`The nodes greater than 20 are ${nodeGreaterThanXResult}`);

const numOfLeafNodesResult = numOfLeafNodes(root);
console.log(
  `The number of leaf nodes in the given tree are ${numOfLeafNodesResult}`
);

module.exports = { takeTreeInputBetter, printTreeDetailed };
