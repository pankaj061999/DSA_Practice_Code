const findRandomNumberInRange = (N, min, max) => {
  for (let i = 0; i < N; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Print random number:", randomNum);
  }
};

let N = 5;
let min = 1;
let max = 50;
findRandomNumberInRange(N, min, max);
