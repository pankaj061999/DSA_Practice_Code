// string convert
let value = true;
value = String(value); // convert into booling -- into string
console.log("Print convert string value ==>>", typeof value);

// string convert into nuber

let S1 = "10" / "2"; // convert into nuber
let S2 = "526"; // we can also convert string into nuber

console.log("Print string to Nuber", S1, Number(S2));

let age = Number("an arbitrary string instead of a number");

console.log(age); // this return nan

// Numeric conversion rules:

let N1 = undefined; //NaN return
let N2 = null; // 0 return
let N3 = true; // return 1

let N4 = ""; // this will be return 0;

let N5 = "abc"; // Example string with non-numeric characters

console.log(
  "print undefind convert into nuber ==>>",
  Number(N1),
  Number(N2),
  Number(N3),
  Number(N4),
  Number(N5)
);

// Boolean Conversion

let B1 = "Pankaj"; // return true or 1

let B2 = ""; //return false
let B3 = "0"; // return true
//  0, null, undefined, NaN, ""	 return false
let B4 = 0;

console.log("Print Boolean Conversion==>>", Boolean(B1), Boolean(B2), Boolean(B3), Boolean(B4));

// Exponentiation **

let E1 = 2 ** 2; // this value 4
let E2 = 2 + "2"; // return 22
let E3 = "2" + "2"; // 22
let E4 = "3" + 3 + 2; // the first operand is a string, the compiler treats the other two operands as strings too.
let E5 = 3 + 2 + "2"; // 52

console.log("Print power of 2 value ==>", E1, E2, E3, E4, E5);

// Equals check == double check this return only value not type  === this will be take value and type

let Eq1 = "Glow" > "Glee"; // true because o word will be come to before e show this will be true
let Eq2 = "01" == 1; // return true due to this only check value 01 and 1 is both are same
let Eq3 = true == 1; // true beacuse true  Number value is equal to 1
let Eq4 = "" == false; // this also return true  beacuse '' nuber value return false

let Eq5 = null === undefined; // return false due to differant data type value null have type Object and undefind have undefind data type both value are same but type differant
let Eq6 = null == undefined; // both value same so return true  The equality check (3) returns false because undefined only equals null, undefined, and no other value.

console.log("Comparision check ==>>", Eq1, Eq2, Eq3, Eq4, typeof null, typeof undefined, Eq5, Eq6);

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false );

// A double NOT !! is sometimes used for converting a value to boolean type:

let Bo1 = "Hey my name is Rocky";

if (!!Bo1) {
  console.log("Print double not equal to value", !!Bo1, !Bo1);
}
