const http = require("http");
const fs = require("fs");
const sumFile = require("./index");
const url = require("url");
const assert = require("assert");

const port = 3003;

// 1.) assert
// var a = "GeeksforGeeks";
// var b = "Geeks4Geek";
// const obj1 = { a: 1, b: 3 };
// const obj2 = { a: 2, b: 3 };

// // Function call
// try {
// //   assert.strictEqual(a, b);
//   assert.deepStrictEqual(obj1, obj2)
//   //   assert.strictEqual(actual, expected, [message])
// } catch (error) {
//   console.log("Error: ", error);
// }

// console.log("Print http value", buffer);

// 2.Buffer

const bufferString = Buffer.alloc(10);

console.log("Print bufferString", bufferString);
// Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// this bufferstring assign a string
bufferString.write("Pankaj Kumar");

console.log("Print bufferString 2", bufferString);

// Out put now  this out till kum due to buffer fix size 10 <Buffer 50 61 6e 6b 61 6a 20 4b 75 6d>

// convert buffer into string
const output1 = bufferString.toString();

console.log("final out put", output1);

// Buffer.from('Hello') this method create a string to buffer

// final out put Pankaj Kum

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   const filedata = fs.readFileSync("text.txt");
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   //   res.setHeader("Content-Type", "text/plain");
  //   const sum = sumFile?.Sum(50, 10);
  //   res.end(`This api response ${sum} hey ${filedata.toString()}`);

  if (req.url == "/") {
    // Set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // Set response content
    res.write(
      `<html><body style="text-align:center;">
        <h1 style="color:green;">GeeksforGeeks Home Page</h1>
        <p>A computer science portal</p>
        </body></html>`
    );
    res.end(); //end the response
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(
      `<html><body style="text-align:center;">
        <h1 style="color:green;">GeeksforGeeks Home Page</h1>
        <p>A computer science portal</p>
        </body></html>`
    );
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
