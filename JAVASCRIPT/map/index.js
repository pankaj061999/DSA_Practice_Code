// Map have two type 1.) is class base and second is 2.) function bases

const map1 = new Map();

map1.set("abbc", 2);

// console.log("Print map1 value ===>>", map1.get("abbc"));

const map2 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

// console.log(map1.get("a"));

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
// console.log(contacts.size, contacts.get("Jessie")); // 1
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true

let Obj1 = {
  name: "Pankaj Kumar Meena",
  10: "arjun",
  true: "this boolen value is work like a string",
};

let data = new Map([
  ["name", "pankaj kumar meena"],
  [10, "Roy name"],
]);

// console.log(data);
// console.log(Obj1.true);

// how to get keys value object and map
Obj1.City = "Jaipur";
// console.log(Obj1);

// console.log(data.set("city", "Jaipur"));
// console.log(data.get("city"));
// console.log(data.keys());

// genrator Function
// 1. Arrow functions cannot use yield within their body and cannot be created as generator functions.
function* newfunction() {
  console.log("first");
  yield 10;
  console.log("second");
  yield 20;
}

let genratorFunc = newfunction();
// console.warn(genratorFunc.next());

// console.warn(genratorFunc.next().value);
// console.warn(genratorFunc.next().value); //{ value: undefined, done: true } mtlb ki genrator fucntion complete excute ho gya hai

// ProtoTypes

let commonFunc = {
  getAge: function () {
    let age1 = new Date().getFullYear() - this.birthAge;
    return age1;
  },
};
let Object1 = {
  name: "Pankaj",
  age: "24",
  City: "jaipur",
  birthAge: 1998,
};

let Object2 = {
  name: "Jupiter",
  age: 25,
  City: "Delhi",
  birthAge: 1997,
};

Object1.__proto__ = commonFunc;
// console.log(Object1.getAge());

//
