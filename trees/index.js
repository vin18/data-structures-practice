const prompt = require('prompt-sync')({ sigint: true });
const Queue = require('./Queue');
const TreeNode = require('./TreeNode');

function takeInputLevelWise() {
  const rootData = prompt(`Enter root data: `);

  if (rootData === -1) {
    return null;
  }

  const root = new TreeNode(rootData);
  const pendingChildren = new Queue();
  pendingChildren.enqueue(root);

  while (!pendingChildren.isEmpty()) {
    const front = pendingChildren.dequeue();

    const leftChildData = prompt(`Enter left child of ${front.val}: `);
    if (leftChildData != -1) {
      const leftChild = new TreeNode(leftChildData);
      front.left = leftChild;
      pendingChildren.enqueue(leftChild);
    }

    const rightChildData = prompt(`Enter right child of ${front.val}: `);
    if (rightChildData != -1) {
      const rightChild = new TreeNode(rightChildData);
      front.right = rightChild;
      pendingChildren.enqueue(rightChild);
    }
  }

  return root;
}

function printTreeDetailed(root) {
  if (root === null) return;
  let element = `${root.val}: `;

  if (root.left !== null) {
    element += `L - ${root.left.val}, `;
  }

  if (root.right !== null) {
    element += `R - ${root.right.val}`;
  }

  console.log(element);
  printTreeDetailed(root.left);
  printTreeDetailed(root.right);
}

const root = takeInputLevelWise();
printTreeDetailed(root);

module.export = { takeInputLevelWise, printTreeDetailed };
