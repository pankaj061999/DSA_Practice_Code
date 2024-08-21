const obj1 = {
  name: "Pankaj Kumar Meena",
  age: "24",
  address: {
    village: "kodyai",
    Teshil: "Bonli",
    Distict: "Sawai Madhopur",
  },
};

// console.log("Print Obj1 ==>>", obj1);

// shallow copy : 1.) Shallow copy एक object की top-level properties की copy करता है, लेकिन अगर उस object में nested objects या arrays हैं, तो shallow copy केवल उनके references की copy करता है। इसका मतलब है कि nested objects या arrays को modify करने से original object पर भी असर पड़ता है।

// const original = obj1;
// console.log("Print Original Object copy object ======>>", original);

// original.name = "Pankaj";

// Shallow copy using Object.assign() or spread operator
let shallowCopy = Object.assign({}, obj1);

const original1 = { ...obj1 };

// console.log("Print Original Object shallowCopy ======>>", shallowCopy);

// Modifying the shallow copy
shallowCopy.name = "Bob";
shallowCopy.age = "29";

// console.log(obj1.name);
// console.log(obj1.age);
// console.log(shallowCopy.name);
// console.log(shallowCopy.age);

// 2.)  Deep Copy: Deep copy एक object की पूरी structure की independent copy बनाता है, मतलब nested objects या arrays भी पूरी तरह से copy किए जाते हैं। Deep copy को modify करने से original object पर कोई असर नहीं पड़ता।

let original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

// Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(original));

// console.log("Print deep Copy ====>>>>", deepCopy);

deepCopy.name = "Pankaj";
deepCopy.address.city = "Elsewhere";

// console.log("Print deep Copy after modify ====>>>>", deepCopy);

// console.log(original.name);
// console.log(original.address.city); // Wonderland (unchanged)
// console.log(deepCopy.name); // Pankaj
// console.log(deepCopy.address.city);

const debouncefunc = (func, wait) => {
  let timeout;

  return function (...args) {
    clearInterval(timeout);

    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const onResize = () => {
  console.log("Window resized");
};

// console.log(
//   "Print  debouncing function a particular time after ===>>>>",
//   debouncefunc(onResize, 200)
// );

let promise = new Promise(function (resolve, reject) {
  // Asynchronous operation code goes here
  let flag = true;

  setTimeout(() => {
    if (flag) {
      resolve("Hey this promise success");
    } else {
      // If the operation fails
      reject("error");
    }
  }, 10);
  // If the operation is successful
});

promise
  .then((message) => {
    // console.log(message);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("This will always run, regardless of the outcome.");
  });

// console.log("Print Promise =====>>>", promise);

// promise channing

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 1000);
});

const processData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} this second message for second Promise`);
    }, 1000);
  });
};

fetchData
  .then((res) => {
    // console.log("Print res", res);
    return processData(res);
  })
  .then((respon) => {
    // console.log("print response 1211211", respon);
  })
  .catch((error) => {
    console.log("print Errrorrrrrr", error);
  });

// call a API

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((response1) => {
    // console.log("Print respinse1 ====>>", response1);
  })
  .catch((err) => {
    // console.log("Print error =====>>", err);
  });

//   async or await
const f1 = async () => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    console.log("Print res result", result);

    const data = await result.json();
    console.log("Print Resolve Promise", data);

    return data;
  } catch (err) {
    console.log("Print error ===>>", err);
  }
};

// console.log("Print f1 aynnc await fucntion ++++>>>", f1());\

const p1 = new Promise((resolve, reject) => {
  resolve("Print resolve func");

  reject("Print P1 func error ");
});

const p2 = new Promise((resolve, reject) => {
  resolve("Print P2 resolve func");

  reject("Print P2 func error ");
});

const p3 = new Promise((resolve, reject) => {
  resolve("Print P3 resolve func");

  reject("Print P3 func error ");
});

const Pfinal = Promise.all([p1, p2, p3])
  .then((data) => {
    // console.log("Print final Promise value ===>>", data);
    return data;
  })
  .catch((err) => {
    console.log("Print pFInal error", err);
  });

const handleFinal = async () => {
  try {
    const result = await Promise.all([p1, p2, p3]);
    console.log("Print async and await func", result);
  } catch (err) {
    console.log("Print error ", err);
  }
};

// handleFinal();

// constructor fucntion Constructor Function: विशेष प्रकार की फंक्शन जो नए ऑब्जेक्ट को इनिशियलाइज़ करती है।

function Car(model, year) {
  (this.name = model), (this.year = year);
}

const c1 = new Car("Honda", 2024);

console.log("Print car constructor fucn", c1);

// ES6 Class with constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create new instances of Person
const person1 = new Person("Amit", 30);
const person2 = new Person("Sita", 25);

// Access properties
// console.log(person1.name); // Amit
// console.log(person1.age); // 30
// console.log(person2.name); // Sita
// console.log(person2.age); // 25

// array Method

// 1. ) Push Array के अंत में एक या अधिक elements जोड़ता है और नई लंबाई लौटाता है।

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.push("Pankaj");
// console.log("Print arr Array", arr);

// 2.) Pop  Array के अंत से एक element हटाता है और उस element को लौटाता है।
arr.pop();
// console.log(arr);

// 3.) shift  Array के शुरुआत से एक element हटाता है और उस element को लौटाता है।
arr.shift();
// console.log(arr);

// 4.) unshift Array के शुरुआत में एक या अधिक elements जोड़ता है और नई लंबाई लौटाता है।

arr.unshift(11, 99, 0);
// console.log("Print unSHift after == >>", arr);

// 5.) Concot दो या अधिक arrays को मिलाता है और एक नया array लौटाता है।

const arr1 = ["Pankaj", "Kumar "];
const a1 = arr.concat(arr1);
// console.log("Print A1", a1);

// 6.) slice  Array का एक भाग निकालता है और एक नया array लौटाता है।
const sliced = arr.slice(0, 3);

// console.log("sliced Array",arr,  sliced)

// 7. splice()
// Array में किसी स्थिति पर elements जोड़ता है या हटाता है। मूल array को संशोधित करता है।

arr.splice(1, 4, "p", "a", "k", "j");

// console.log("Print after update array", arr)

// 8. forEach()
// Array के प्रत्येक element पर एक फंक्शन चलाता है।
// arr.forEach((element) => console.log(element));

// 9. map()
// Array के प्रत्येक element पर एक फंक्शन चलाता है और एक नया array लौटाता है।

// arr.map((item) => console.log("Print funct", item + 1));

// 10. filter()
// Array के प्रत्येक element पर एक फंक्शन चलाता है और एक नया array लौटाता है जिसमें केवल वे elements होते हैं जो फंक्शन के अनुसार सही होते हैं।

arr.filter((item) => {
  if (item > 2) {
    // console.log("Print array", item);
  }
});

// 11. reduce()
// Array को एक value में reduce करता है (कम करता है)।

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// 12. find()
// Array के पहले element को लौटाता है जो एक दिए गए फंक्शन के अनुसार सही होता है।

const found = arr.find((item) => item === 9);
// console.log(found);

// 13. findIndex()
// Array के पहले element का index लौटाता है जो एक दिए गए फंक्शन के अनुसार सही होता है।

const index = arr.findIndex((x) => x > 9);
// console.log(index, arr);

// 14. includes()
// यह method चेक करता है कि एक array में एक विशेष element है या नहीं।

const t1 = arr.includes(2);

// console.log("Print t1", t1);  false

// 15. sort()
// Array के elements को क्रमबद्ध करता है।

arr.sort((b, a) => a - b);

// console.log(arr);

// 16. reverse()
// Array के elements को उल्टा करता है।

arr.reverse();

// console.log(arr);

// Higher-Order Functions
// Higher-Order Functions वे functions होते हैं जो या तो अन्य functions को argument के रूप में लेते हैं, या फिर उन्हें return करते हैं। यह functions को first-class citizens के रूप में ट्रीट करने की क्षमता को दर्शाता है।

const highOrderFunction = (func) => {
  return func();
};

const sayhello = () => {
  console.log("hello Guys");
};
// highOrderFunction(sayhello);

// कई JavaScript array methods, जैसे map(), filter(), और reduce(), higher-order functions हैं क्योंकि वे एक callback function को argument के रूप में लेते हैं

// **************************************/////////////////////////

// Pure Functions
// Pure Functions वे functions होते हैं जो हमेशा एक ही input के लिए एक ही output देते हैं और जिनका कोई side effect नहीं होता। Pure functions के कुछ लाभ हैं:

const obj8 = {
  id: 1,
  product_description: `Product 1 description`,
  product_name: "Product 1",
  product_price: 100,
  product_tags: ["tag1", "tag2", "lf"],
};

// Create a list of 10 products using the first item as a reference
const arr3 = [];

for (let i = 0; i < 10; i++) {
  arr3.push({ ...obj8, product_tags: [...obj8.product_tags] });
}

const finalList = arr3.map((item, index) => {
  item.id = index + 1;
  item.product_description = `Product ${index + 1} description`;
  item.product_name = `Product ${index + 1}`;
  item.product_price = (Math.random() * 100).toFixed(2);

  // Clone product_tags array and remove last element for odd-indexed products
  if ((index + 1) % 2 !== 0) {
    item.product_tags.pop();
  }

  return item;
});

// console.table(finalList);
