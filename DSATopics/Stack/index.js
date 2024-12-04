// LASt in first out

const stacktest = (val) => {
  const stack = []; // Create an empty stack

  // Push elements onto the stack
  stack.push(val); // Push the input value onto the stack
  stack.push("Arjun"); // Push "Arjun" onto the stack
  stack.push("Ram"); // Push "Ram" onto the stack
  stack.push("Karan"); // Push "Karan" onto the stack

  // Peek - View the top element of the stack
  if (stack.length > 0) {
    console.log("Topmost element:", stack[stack.length - 1]);
  } else {
    console.log("Stack is empty"); // Log if the stack is empty
  }

  // Pop the top element
  const poppedElement = stack.pop(); // Remove and return the top element
  console.log("Popped element:", poppedElement); // Log the popped element

  return stack;
};

// Call the function and log the result
// const result = stacktest("pankaj");
// console.log("Final stack:", result);

const isValidParentheses = (s) => {
  const stack = []; // एक खाली स्टैक बनाएं
  const mapping = {
    // बंद कोष्ठकों को खोलने वाले कोष्ठकों से जोड़ने का मैपिंग
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    console.log("print maping 1", char);
    if (mapping[char]) {
      // अगर यह एक बंद कोष्ठक है, तो स्टैक की जांच करें
      console.log("print maping", char, mapping[char]);
      const topElement = stack.pop(); // स्टैक से शीर्ष तत्व को निकालें
      if (topElement !== mapping[char]) {
        return false; // अगर यह मेल नहीं खाता है, तो false लौटाएं
      }
    } else {
      // अगर यह एक खोलने वाला कोष्ठक है, तो इसे स्टैक में डालें
      stack.push(char);
    }
  }

  // अगर स्टैक खाली है, तो सभी कोष्ठक मिल गए हैं
  return stack.length === 0;
};

// परीक्षण के मामले
console.log(isValidParentheses("()")); // true
//   console.log(isValidParentheses("()[]{}"));   // true
//   console.log(isValidParentheses("(]"));       // false
//   console.log(isValidParentheses("([)]"));     // false
//   console.log(isValidParentheses("{[]}"));
