const bcrypt = require("bcrypt");

// console.log("Print bcrypt", bcrypt);
// Hashing a password before storing it
const saltRounds = 15;
const plainTextPassword = "Panakj@1999";

bcrypt.hash(plainTextPassword, saltRounds, (hash, err) => {
  if (hash) {
    console.log("Print hash password", hash);
  } else {
    console.log("Print error", err);
  }
});

const hashedPassword = "$2b$15$evRwY1.2lszCNQyVaP/yQu6qkOooLfpClDOzPqSfU9SUSCt0QfhhO"; // The hashed password from the database

bcrypt.compare(plainTextPassword, hashedPassword, function (err, result) {
  if (err) throw err;
  if (result) {
    console.log("Password is valid!");
  } else {
    console.log("Invalid password!");
  }
});

//  Differentiate between res.send() and res.json().

// res.send():
// यह method विभिन्न प्रकार के responses भेजने के लिए उपयोग किया जाता है, जैसे कि string, HTML, buffer, या JSON.
// यह method versatile है और automatically response content type को infer कर लेता है।
// res.json():
// यह method specifically JSON responses भेजने के लिए design किया गया है।
// यह input को JSON format में convert करता है और Content-Type header को application/json के रूप में सेट करता है।

// Using res.send()
// app.get("/send", (req, res) => {
//   res.send("Hello World"); // Sends a plain text response
// });

// // Using res.json()
// app.get("/json", (req, res) => {
//   res.json({ message: "Hello World" }); // Sends a JSON response
// });

// @pankaj061999 Q.1)  What is meant by Scaffolding in Express JS?

// Scaffolding in Express.js का मतलब है कि आप अपनी application के लिए basic structure या boilerplate code को automatically generate कर सकते हैं। यह process आपको development की शुरुआत में एक solid foundation प्रदान करता है, जिससे आप repetitive tasks पर समय बर्बाद करने के बजाय अपने application के core features पर ध्यान केंद्रित कर सकते हैं

// command ==>> npx express-generator myapp
// Yeoman एक powerful scaffolding tool है जो आपको web applications और अन्य projects के लिए boilerplate code और project structure generate करने में मदद करता है। Yeoman को install करना बहुत आसान है, और इसके साथ ही आप specific generators का use करके quickly और efficiently नए projects create कर सकते हैं।

// o install Yeoman run the following command:

// npm install -g yo
// Yeoman works with generators, which are packages that define the structure and configuration of a project. You can install a generator like this:

// npm install -g generator-express
// Once installed, you can use Yeoman to create a new application:

// yo appname

// CORS (Cross-Origin Resource Sharing) एक security feature है जो कि browsers में implemented होता है, जिससे एक origin से दूसरे origin पर HTTP requests को control किया जा सके। Express.js में CORS को manage करने के लिए cors middleware का उपयोग किया जाता है। यह middleware आपको specific origins या methods के लिए CORS को enable या configure करने की flexibility देता है, जिससे आपकी web applications secure और efficient बनती हैं।

// Enabling CORS for Specific Origins:
// अगर आप केवल specific origins को allow करना चाहते हैं, तो आप इसे इस तरह configure कर सकते हैं:
// javascript
// Copy code
// const corsOptions = {
//     origin: 'https://example.com',
//     methods: ['GET', 'POST'],
//     optionsSuccessStatus: 200 // For legacy browser support
// };

// app.use(cors(corsOptions));

// Q.2 What are Built-in Middlewares?

// ====>> Built-in middlewares Express.js में directly included होते हैं और commonly required tasks जैसे कि static files serve करना, JSON और URL-encoded data parse करना आदि को handle करने के लिए उपयोग किए जाते हैं। ये middlewares आपको अपनी application में quickly और efficiently common functionalities को implement करने में मदद करते हैं, बिना external dependencies पर निर्भर हुए

// 1.) app.use(express.static('public')); अब, अगर आपके public folder में index.html file है, तो आप इसे सीधे http://localhost:3000/index.html पर access कर सकते हैं।
// 2.) app.use(express.json());  यह middleware incoming requests को JSON payload के रूप में parse करता है और req.body में उस parsed data को उपलब्ध कराता है।
// यह typically APIs में उपयोग होता है जहां client JSON data भेजता है

// 3.) express.urlencoded():
// यह middleware application/x-www-form-urlencoded payloads को parse करता है, जो कि typically HTML forms से भेजे जाते हैं।

// app.use(express.urlencoded({ extended: true }));

// xpress.js supports a wide variety of template engines like Pug, EJS, Handlebars, Mustache, and many others. Each template engine has its own syntax and features, allowing you to choose the one that best fits your application's needs. You can easily integrate any of these template engines with Express to generate dynamic HTML pages.

// Q.4 ) How would you render plain HTML using Express JS?

const express = require("express");
const app = express();
const port = 8000;
const { sanitize } = require("express-validator");

// 31. What is meant by the sanitizing input process in Express JS?

app.post("/submit", (req, res) => {
  // Input sanitization
  const cleanInput = sanitize(req.body.userInput).escape();
  res.send(`Sanitized input: ${cleanInput}`);
});

app.get("/", (req, res) => {
  res.cookie("username", "Pankaj Kumar Meena");

  // Setting a cookie with options
  res.cookie("sessionID", "abc123", {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true, // Accessible only by the web server
    secure: true, // Ensures the cookie is sent only over HTTPS
  });
  const htmlContent = "<html><body><h1>Hello, World!</h1></body></html>";
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Usage of res.cookie()  res.cookie(name, value, [options])
// Setting a Cookie: आप res.cookie() का उपयोग करके एक cookie set कर सकते हैं। यह function cookie का नाम, value, और options (जैसे कि expiration time, domain, path, आदि) accept करता है।

// . What is Pug template engine in Express JS?
// Pug is a popular template engine for Express.js and other Node.js frameworks. You can use Pug to render dynamic HTML pages on the server side. It allows you to write templates using a syntax that relies on indentation and concise tags.
