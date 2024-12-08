const checkString = (str) => {
  const stack = [];
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false; // Mismatched or unbalanced brackets
      }
    }
  }

  // If the stack is empty at the end, all brackets are balanced
  return stack.length === 0;
};

// Test the function
let s = "()[]{}]";
console.log(checkString(s));
