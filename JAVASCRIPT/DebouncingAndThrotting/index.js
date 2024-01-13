// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       func(...args);
//       lastCall = now;
//     }
//   };
// }

// // Example usage in a Node.js environment
// const throttledFunc = throttle(() => {
//   console.log("Throttled function called");
// }, 1000);

// // Simulate calls
// throttledFunc(); // This will log 'Throttled function called'
// setTimeout(() => {
//   throttledFunc(); // This will not log anything if within 1 second of the first call
// }, 500);
