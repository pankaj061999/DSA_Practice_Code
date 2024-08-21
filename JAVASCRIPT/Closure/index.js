// Closure एक function है जो अपने lexical scope को याद रखता है और उस scope के variables तक पहुंच सकता है, भले ही outer function का execution समाप्त हो चुका हो। यह data encapsulation, state maintenance, और functional programming techniques को implement करने के लिए उपयोगी है।

function createCounter() {
  let count = 0; // Private variable
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
