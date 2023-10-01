// Deep and Shallow  copy
let x = "pankaj";
let y = x;
y = "arjun";
console.log(x);

const Obj1 = {
  name: "pankaj Kumar Meena",
  age: 21,
  Birthyear: 1999,
  getArjun: {
    city: "Haridawar",
  },
};

let User = Obj1;
User.name = "Arjun";

console.log(User, Obj1);

// let User1 = Object.assign({}, Obj1); // this is shallow copy we only cahnge copy object value not original object value

let User1 = { ...Obj1 }; //both method same work and this called shallow copy or yhe method only work one level jab ek Object ke under ek or Object ho to yhe kam nhi karega or sahme referance value copy kar lega or value change ho jyega

User1.name = "Rouy";
User1.getArjun.city = "delhi"; //change original object Obj1 value city value chnge isko rokne ke liye Deep copy ka use kiya jataa hai usme phle Object ko stringfy karo then parse karo

console.log(User1, Obj1);

let User2 = JSON.parse(JSON.stringify(Obj1));
User2.getArjun.city = "Sawai Madhopur";
console.log(User2);
console.log(Obj1);
