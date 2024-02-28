/**
 * Problem - Linked List Cycle
 * Leetcode - https://leetcode.com/problems/linked-list-cycle
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Brute force solution
// Time Complexity - O(N)
// Space Complexity - O(N)
const hasCycle = (head) => {    
    const map = new Map();
    let temp = head;
    while (temp) {
        if (map.has(temp)) return true;
        map.set(temp, true);
        temp = temp.next;
    }
    return false;
};

// Optimal solution
// Time Complexity - O(N)
// Space Complexity - O(1)
function hasCycle(head) => {    
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

const node1 = new ListNode(10);
const node2 = new ListNode(20);
const node3 = new ListNode(30);
const node4 = new ListNode(40);

const head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node4;

const result = hasCycle(head);
console.log(`Linked List has cycle? `, result);
