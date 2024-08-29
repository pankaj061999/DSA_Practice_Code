const http = require("http");
// console.log("Print htttpp", http)

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(`<html>
//       <head><title>My Node.js Server</title></head>
//       <body>
//         <h1>Hello, World!</h1>
//         <p>Welcome to my server</p>
//       </body>
//     </html>`);
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the About Page\n");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found\n");
//   }
// });

// Handling HTTP Methods (GET, POST, etc.)

// 1. Handling GET Requests

const server = http.createServer((req, res) => {
  console.log("Print server", req.method);
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Handling GET Request\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found\n");
  }
});
console.log(process.argv);

server.listen(3003, () => {
  console.log("Server running at http://localhost:3000/");
});

console.log(process.memoryUsage());
console.log(`Process uptime: ${process.uptime()} seconds`);
