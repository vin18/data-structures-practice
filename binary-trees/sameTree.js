// Leetcode - Same Tree 

// Time - O(n) 
// Space - O(h) 
function sameTree(root) {
  if (!root) return root;
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val != b.val) return false;
  return sameTree(a.left, b.left) && sameTree(a.right, b.right);
}

// Time - O(n)
// Space - O(n) 
function sameTree(root) {
  const stack = [[p, q]];
    while (stack.length) {
        const [a, b] = stack.pop();
        if (!a && !b) continue;
        if (!a || !b) return false;
        if (a.val != b.val) return false;
        stack.push([a.left, b.left]);
        stack.push([a.right, b.right]);
    }
    return true;
}
