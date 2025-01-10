// const a = "pankaj";
// console.log(a)

const getres = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

// getres()

// Variable Shadowing

let x = 2;

const hey = () => {
  let x = 10;
  console.log("Print x value this is shadow vairable ", x);
};

// hey()

// 1. Basic Counter Function

const Basiccounter = (str) => {
  let count = str;
  console.log(count);
  return ()=> ++count;
};

const counter = Basiccounter(1)
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());



// increment , decrement, reset

const counterfunc = (str)=> {
    let count = str;
    return {
        increment: ()=> ++count,
        decrement: ()=> --count,
        reset: ()=> count = 0,
        getvalues: ()=> count
    };
}


// const counter1 = counterfunc(10);

// console.log(counter1.increment());
// console.log(counter1.decrement());
// console.log(counter1.reset());
// console.log(counter1.getvalues());


// Asynchronous Counter
const asyncCount= (str)=> {
    let count = str ;

    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
           resolve(++count);
            console.log("counst");
        }, 1000);
    })
}

// const asyncCounter1 = asyncCount(0);
// asyncCounter1.then((count)=> console.log(count))
// asyncCounter1.then((res) => console.log(res)); // 1 (1 सेकंड बाद)

// console.log(asyncCounter1());


// use async and await

const getFetchdtaa = async()=> {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);
}

// getFetchdtaa()


// use promise 

const getfetchdtaa = ()=> {
    const respo =new Promise((resolve, reject)=> {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=> {
          if(res.ok){
            resolve(res.json());
            console.log(res);
          }else {
            reject(new Error("Failed to fetch data"));
          }
        })
    })
        
}
// getfetchdtaa()

// function getUTMParameter(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param); // Returns the value of the UTM parameter
// }

// // Usage example
// const utmSource = getUTMParameter('utm_source'); // e.g., "web", "mobile", etc.
// const utmMedium = getUTMParameter('utm_medium'); // e.g., "social", "email"
// const utmCampaign = getUTMParameter('utm_campaign'); // e.g., "blog_share"

// console.log('UTM Source:', utmSource);
// console.log('UTM Medium:', utmMedium);
// console.log('UTM Campaign:', utmCampaign);



// Polifill


const PolyfillSlice = (arr, start = 0, end = arr.length) => {
  // let result = [];
  // if(start >= 0 && end >= 0) {
  //   for (let i = start; i<end; i++){
  //     result.push(arr[i]);
  //   }
  // } else if(start >= 0 && end < 0) {
  //   for (let i = start; i<arr.length + end; i++){
  //     result.push(arr[i]);
  //   }
  // } else if(start < 0 && end >= 0) {
  //   for (let i = arr.length + start; i<end; i++){
  //     result.push(arr[i]);
  //   }
  // } else if(start < 0 && end < 0) {
  //   for (let i = arr.length + start; i<arr.length + end; i++){
  //     result.push(arr[i]);
  //   }
  // }

  // return result
  let result = [];
  
  // Adjust negative indices
  if (start < 0) start += arr.length;
  if (end < 0) end += arr.length;
  
  // Ensure indices are within bounds
  start = Math.max(0, start);
  end = Math.min(arr.length, end);
  
  // Iterate and collect elements
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  
  return result;
}


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log("Print polyfill value ==>>", PolyfillSlice(animals, -2))
// console.log(animals.slice(2));
console.log(animals.slice(-2));
// console.log(animals.slice(1, 5))

// for map polyfill 
const mapPolyfill = (arr, callfunc) => {
    let result = [];
    for(let i = 0; i<arr.length; i++) {
        result.push(callfunc(arr[i], i, arr));
    }
    return result
}


const result = mapPolyfill(animals, (animal) => animal.length);

console.log("Print map Polyfill ==>>", result)