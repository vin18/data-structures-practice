const Stack = require('./Stack');

/**
Problem - 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Leetcode - https://leetcode.com/problems/valid-parentheses

**/

const input = ')(){}';

function validParentheses(input) {
  if (input.length <= 1) {
    return false;
  }

  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    const frontElement = stack.peek();

    if (
      currentElement === '[' ||
      currentElement === '{' ||
      currentElement === '('
    ) {
      stack.push(currentElement);
    } else if (
      (currentElement === ']' && frontElement === '[') ||
      (currentElement === ')' && frontElement === '(') ||
      (currentElement === '}' && frontElement === '{')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
}

const isValidParentheses = validParentheses(input);
console.log(
  `The given input string ${
    !isValidParentheses ? `doesn't ` : ''
  }have a valid parentheses.`
);
