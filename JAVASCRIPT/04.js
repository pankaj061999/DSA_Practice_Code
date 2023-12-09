var family = {
  son: "raj",
  father: "surya",
  surName: "Meena",
};

let user1 = {};
let user2 = {};

for (let key in family) {
  console.log("family ===>>", key, family[key]);
  user1[key] = family[key];
}
console.log("Print family object ===>>", family, family.son, user1);

Object.assign(user2, ...user1);

console.log("user 2 ==>>", user2);
console.log(user1 === user2);
