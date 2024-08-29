const querystring = require("querystring");
const fs = require("fs");

const { StringDecoder } = require("string_decoder");

const url = require('url');

const myUrl = 'https://www.example.com:8080/path/name?query=string#hash';
const parsedUrl = url.parse(myUrl, true);
console.log("Print url ParseURl", parsedUrl)


const decoder = new StringDecoder("utf8");

const buffer = Buffer.from('Hello, world!');
console.log(decoder.write(buffer)); 
// Output: 'Hello, world!'

// console.log("Print Query String", querystring);

const query = "name=JohnDoe&age=25&city=NewYork";

const parsedQuery = querystring.parse(query);
console.log(parsedQuery);

const escaped = "name%3DJohn%20Doe%20%26%20age%3D25";

const unescapedString = querystring.unescape(escaped);
console.log(unescapedString);

const readableStream = fs.createReadStream("file.txt", { encoding: "utf8" });

readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readableStream.on("end", () => {
  console.log("No more data to read.");
});
