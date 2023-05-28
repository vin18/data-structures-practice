const BinaryTreeNode = require('./BinaryTreeNode');
const prompt = require('prompt-sync')({ sigint: true });

function takeTreeInputBetter(isRoot, parentData, isLeft) {
  let data;

  if (isRoot) {
    data = prompt(`Enter root data: `);
  } else {
    if (isLeft) {
      data = prompt(`Enter left child of ${parentData}: `);
    } else {
      data = prompt(`Enter right child of ${parentData}: `);
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

module.exports = { takeTreeInputBetter, printTreeDetailed };
