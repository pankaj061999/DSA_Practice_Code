const x: Number = 12;
// x = "pankaj"


let b: any = "pankaj";
b =8

let c: Number|String = "arjun";
c = 23

function sum(a: number){
    console.log(a+12, b, c)
    return a+13
}

sum(12)

console.log("print x", x, sum(12))




type Userargument = (a: string, b: string) => string;

// Function using the custom data type
const sum1: Userargument = (a, b) => {
    console.log(a + b);
    return a+b
};

// Function call
// sum1("2", "4");

const result: string = sum1("2", "4");
console.log(result);