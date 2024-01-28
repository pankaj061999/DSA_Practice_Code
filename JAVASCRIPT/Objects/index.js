let fullName = {
  firstname: "Pankaj Kumar",
  LastName: "Meena",
  getFullName: function () {
    return this.firstname + "" + this.LastName;
  },
};

//here we are using value of fullname object value into anotherObj

let anotherObj = {
  firstname: "Arjun",
  LastName: "Meena",
  __proto__: fullName,
};

anotherObj.__proto__ = fullName;
console.log("Print fullName and another OBje value ==>>", anotherObj.getFullName(), fullName);

// help of prototype we can use one object property to other object

console.log(
  "Print fullName and anotherObj value ==>>",
  anotherObj.getFullName(),
  fullName.getFullName()
);

// The prototype is only used for reading properties.

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}
// Rabbit.prototype = animal; // when assign a new regular property to this function then show differant property value {eats: true}
console.log("Print Rabbit function ", Rabbit.prototype, Rabbit.prototype.constructor);
// Every function has the "prototype" property even if we don’t supply it.
// The default "prototype" is an object with the only property constructor that points back to the function itself.
// Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.
// Rabbit.prototype.constructor  this fill be refer to Rabbit function

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // this value true when we dont assign any value this Rabbit function
// …JavaScript itself does not ensure the right "constructor" value.
// The value of F.prototype should be either an object or null: other values won’t work.

let obj = {};

console.log(obj.__proto__ === Object.prototype); //So then when obj.toString() is called the method is taken from Object.prototype.
