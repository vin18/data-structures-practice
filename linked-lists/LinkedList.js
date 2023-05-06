class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  takeInput() {
    let data = null;

    while (data !== -1) {
      const newNode = new Node(data);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let index = 0;
        const temp = this.head;

        // Time Complexity - O(N^2)
        // while (temp !== null) {
        //   temp = temp.next;
        //   index++;
        // }
        // temp.next = newNode;

        // Time Complexity - O(N)
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    return this.head;
  }

  insert(data, position) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    const temp = this.head;
    let index = 0;
    while (temp !== null && index < position - 1) {
      index++;
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;

    return this.head;
  }

  delete(position) {
    if (this.head == null) {
      return null;
    }

    let index = 0;
    const temp = this.head;
    while (temp !== null && index < position - 1) {
      index++;
      temp = temp.next;
    }

    return this.head;
  }

  print() {
    const temp = this.head;

    while (temp !== null) {
      console.log(temp.data + ' ');
      temp = temp.next;
    }
  }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

const head = node1;
const list = new LinkedList(head);

list.print(head);
