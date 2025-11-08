// Maximum Depth of Binary Tree [Easy]

/**
Clarifications:
1. How is the tree given? (Typically a TreeNode { val, left, right })
2. What should we return for an empty tree? Return 0
3. Are node values unique? (Irrelevant for depth, but clarifies constraints)
4. Expected constraints (eg: up to 10^4 or 10^5 nodes; recursion depth concerns)
5. Can the tree be highly skewed? (Impacts recursion vs iterative choice)
**/

/**
Approach:
1. Restate problem and base cases: Empty tree -> 0
2. Pick a strategy: Mention both recursion and iteration; choose one based on constraints
3. Complexity upfront: O(n) time, O(h) space
4. Discuss risks: Recursion depth on skewed trees; propose DFs/stack if needed 
5. Code cleanly: Small helpers or direct recursion; no global state unless justified
6. Test aloud: Run through small trees and edge cases7
7. Communicate trade offs: 
  a. Recursion: simplest code; potention stack overflow
  b. BFS: controlled memory by level, but queue can grow to width
  c. Iterative DFS: avoids recursion; simple stack  
**/

// Time - O(n)
// Space - O(h) recursion stack (O(n) for worst case, O(log n) for balanced)
function maxDepth(root) {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}

// Time - O(n)
// Space - O(w) - w denotes maximum width of the tree (upto O(n)) 
function maxDepthBFSIterative(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (!queue.length) {
    const size = queue.size;
    depth++;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;
}

// Time - O(n)
// Space - O(h) 
function maxDepthDFSIterative(root) {
  if (!root) return 0;
  const stack = [root, 1];
  let maxDepth = 0;
  while (stack.length) {
    const [node, depth] = stack.pop();
    maxDepth = Math.max(maxDepth, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return maxDepth;
}

/**
Edge cases
1. root = null -> 0
2. Single node -> 1
3. Completely skewed depth -> number of nodes (watch recursion depth)
4. Perfectly balanced tree
5. Very large tree (consider iterative solution to avoid stack overflow in JS engines with small recursion limits)
**/
