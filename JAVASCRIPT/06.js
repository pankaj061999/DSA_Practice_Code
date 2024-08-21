const obj1 = {
  name: "Pankaj",
  middleName: "Kumar",
};

// const gethello = () => {
//   console.log(this);
// };

obj1.hey = function () {
  console.log("hiii91829182");
};

// obj1.hey();
// console.log("print this", obj1.hey());

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello!");
};

// user.sayHi();

function* helloPankaj() {
  console.log("Pankaj kumar meena");
  yield 67;
}

const A = helloPankaj();
console.log("Print A", A.next());
