// function getProducts() {
//   return new Promise((resolve, reject) => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data); // Resolve with the fetched data
//       })
//       .catch((error) => {
//         reject(error); // Reject with the encountered error
//       });
//   });
// }

// // Using the custom promise
// getProducts()
//   .then((data) => {
//     // Handle the retrieved data
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during the fetch
//     console.error("There was a problem:", error);
//   });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pankaj Kumar Meena");
  }, [1000]);

  setTimeout(() => {
    reject("Pankaj");
  }, [2000]);
});

console.log(myPromise);

myPromise
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    console.log("Print error message", error);
  });

// second method How to API handle through Promise

const result = fetch("https://dummyjson.com/products");

result
  .then((response) => {
    return response.json(); // Extract JSON content from the response
  })
  .then((jsonData) => {
    console.log("JSON Data:", jsonData); // Handle the JSON data
  })
  .catch((error) => {
    console.log("Error:", error); // Handle any errors that occurred during fetch
  });

//   Promise.all() how to handle multiple promise in one time

const handlePromise = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first Promise");
    }, [2000]);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("second Promise");
    }, [4000]);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third Promise");
    }, [1000]);
  }),
]);

handlePromise
  .then((item) => {
    console.log("Print resolve Promise result ===>>", item);
  })
  .catch((error) => {
    console.log("print error ==", error);
  });

//   output when anyone promise fail   reject("second Promise"); print error == second Promise

const handlePromiseAllSetteled = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("firstallSettled Promise");
    }, [2000]);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("second  allSettled Promise");
    }, [4000]);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third allSettled Promise");
    }, [1000]);
  }),
]);

handlePromiseAllSetteled
  .then((item) => {
    console.log("Print resolve allSettled Promise result ===>>", item);
  })
  .catch((error) => {
    console.log("print error allSettled==", error);
  });

//   Polyfill for Promise.all

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first Promise");
  }, [2000]);
});

const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second   Promise");
  }, [4000]);
});

const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("third  Promise");
  }, [1000]);
});

const P4 = Promise.resolve(30);
Promise.all([P1, P2, P3, P4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   Polyfill example
const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg1");
  }, 1000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("error");
  }, 2000);
});

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg2");
  }, 3000);
});

const prom4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg3");
  }, 3000);
});

Promise.myall = function (values) {
  const promise = new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === values.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
    console.log("Print values ===>>>", total);
  });
  return promise;
};

Promise.myall([prom1, prom2, prom3])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });

Promise.myall([prom1, prom3, prom4])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
