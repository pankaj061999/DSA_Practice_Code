/* What is Async function */
// The word “async” before a function means one simple thing: a function always returns a promise.

const f1 = async () => {
  console.log("hello");
};

// let data = f1()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(f1());

// what is await
// The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

const f2 = async () => {
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pankaj Kumar Meena");
    }, 3000);

    setTimeout(() => {
      reject("show error message");
    }, 1000);
  });

  try {
    let result = await data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// f2();

// "https://api.github.com/users/pankaj061999"

const f3 = async () => {
  try {
    let response = await fetch("https://api.github.com/users/pankaj061999");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// console.log("Pritn api response ====>>>", f3());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pankaj");
  }, 15000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kumar");
  }, 10000);
});

// const resultFunc = () => {
//   console.log("Before promise resolve P1");

//   const res1 = p1.then((res) => console.log(res));
//   console.log("Print after 5000 second");
//   console.log(res1);
//   const res2 = p2.then((res) => console.log(res));
//   console.log("Print after 10000 second");
//   console.log(res2);
// };

// resultFunc();

const asynCFunc = async () => {
  console.log("hii before async");

  const data = await p1;
  console.log("after p1 promise");
  console.log(data);

  // second promise
  const data1 = await p2;
  console.log("after p2 promise");
  console.log(data1);
};

asynCFunc();
