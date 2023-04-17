// Implementation of Stack Data structure in Javascript

class Stack {
  constructor() {
    this.stack = [];
    let index = 0;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

s.pop();
s.pop();

s.peek();

s.length();

s.isEmpty();

export default Stack;
