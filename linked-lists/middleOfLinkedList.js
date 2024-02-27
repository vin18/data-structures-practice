/**
 * Problem - Find middle node of linked list
 * Leetcode - https://leetcode.com/problems/middle-of-the-linked-list
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Time Complexity - O(2N) ~ O(N)
// Space Complexity - O(1)
function middleNode1 = function(head) {
    if (head === null || head.next === null) return head;

    let temp = head;
    let count = 0;
    while (temp !== null) {
        temp = temp.next;
        count++;
    }

    const mid = Math.floor(count / 2);
    count = 0;
    temp = head;
    while (temp !== null) {
        if (count == mid) return temp;
        count++;
        temp = temp.next;
    }
};

// Time Complexity - O(N/2) ~ O(N)
// Space Complexity - O(1)
function middleNode = function(head) {
    if (head === null || head.next === null) return head;

    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    } 

    return slow;
};

const node1 = new ListNode(10);
const node2 = new ListNode(20);
const node3 = new ListNode(30);
const node4 = new ListNode(40);
const node5 = new ListNode(50);
const node6 = new ListNode(60);

const head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;

const result = middleNode(head);
console.log(`The middle of linked list is ${result.val}`);
