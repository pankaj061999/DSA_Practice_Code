const a1 = [1, 4, 2, 8, 3, 9];

const f1 = a1.reduce((acc, curr) => acc + curr, 0);

console.log("Print reduce function", f1, a1.at(2), a1.pop(), a1, a1.push(12), a1.shift());

let p = [1, 2, 3, 4, 5, 6, 7];

console.log("Print shift ==>>", p.shift());
console.log("Print unshift====>>>", p.unshift("Pankaj", "kumar", 2, true), p);

const f2 = p.map((item, index) => {
  // console.log("Print item value ==", item);
  return item;
});
console.log("Print here solution of map", f2);

// use pop this will be remove last element of array

console.log("Print solution ==>>", p.pop(), p, p.push("Purvans"));

const reduceFunc = p.reduce((acc, curr) => acc + curr, "hey ");

console.log("Print reduce function", reduceFunc);

let arr = [1, 2, 3];

console.log(arr);
console.log(String(arr) === "1,2,3");
