// # 1.)var:

// (i) Variables declared with var are function-scoped. They are limited to the function in which they are defined or, if not in a function, they have global scope.
// (ii) var variables are hoisted, which means the declaration is moved to the top of the function or global scope, but the assignment remains in place.
// (iii) var variables can be redeclared within the same scope without an error.
// (iV) var variables are not block-scoped, which can lead to unexpected behavior in block-level statements like loops and conditionals.
var a = 3;
const varfunction = () => {
  //   var a = 4;
  console.log("a value 1", a); /*  a value is 3*/
  a = 5;
  console.log("a value 1", a); /*  a value is 5*/
};
// console.log("a value", a); /*  a value is 3*/
// varfunction();

function print() {
  // As we see in square1, we assign number * number. Since number is hoisted with a default value of undefined, square1 will be undefined * undefined which results in NaN.
  var square1 = number * number;
  console.log(square1);

  var number = 50;

  var square2 = number * number;
  console.log(square2);
}

// print();

/* call method practise  t can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object. */

const userDetails = {
  name: "Pankaj Kumar Meena",
  age: 28,
  printaddress: function () {
    console.log(this?.name); /* here this target to this userDetails obbject */
  },
};

// userDetails.printaddress();

const userDetails2 = {
  name: "arjun Meena",
  age: 24,
  address: "new delhi",
};
// userDetails.printaddress.call(
//   userDetails2
// ); /* here we are using printaddress function and now this keyword target to userDetails2 object */

const userDetails3 = {
  name: "Pankaj Kumar Meena",
  age: 28,
  printaddress: () => {
    console.log(this); /* here this target to this global  object */
  },
};

// or we can call this function seprate

// userDetails3.printaddress();

const person1 = { name: "Alice", age: 23 };
const person2 = { name: "Bob" };

function greet(greeting) {
  console.log(greeting, this);
  console.log(`${greeting}, ${this.name}`);
}

// greet.call(person1, "pankaj"); // Output: Pankaj, Alice
// greet.call(person2, "Hi"); // Output: Hi, Bob

/* 3.)  Bind method :- the bind() method has to be used to prevent losing this.

In the following example, the person object has a display method. In the display method, this refers to the person object: */
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.display();

/* When a function is used as a callback, this is lost.

This example will try to display the person name after 3 seconds, but it will display undefined instead: */
setTimeout(person.display, 3000);

/* The bind() method solves this problem.

In the following example, the bind() method is used to bind person.display to person.

This example will display the person name after 3 seconds: */
let display = person.display.bind(person);
setTimeout(display, 3000);
