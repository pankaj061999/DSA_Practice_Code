// util Module के Common Uses
// Formatting Strings: Console output या logs को format करना।
// Inheritance: एक object को दूसरे object से inherit करना।
// Debugging: Debugging और inspecting objects के लिए helper methods।
// Promisify: Callback-based functions को Promises में convert करना।
// Deprecate: Functions को deprecate करना।
const util = require("util");

// console.log("Print util", util)

// यह method एक formatted string create करने के लिए उपयोग किया जाता है।

const name = "John";
const age = 30;
const formattedString = util.format("My name is %s and I am %d years old.", name, age);

console.log(formattedString); // Output: My name is John and I am 30 years old.

// Placeholders:
// %s - String
// %d - Number
// %j - JSON

// 2. util.inspect(object, [options])

// यह method किसी object को human-readable string में convert करता है, जो debugging के लिए बहुत useful होता है।
// आप optional parameters का उपयोग करके output को customize कर सकते हैं
const obj = { name: "John", age: 30, details: { city: "New York" } };
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
