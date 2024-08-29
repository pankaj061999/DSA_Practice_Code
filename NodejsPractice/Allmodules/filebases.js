const fs = require("fs");

// console.log("print data", fs)

//1.) readfile

// async method
fs.readFile("test.txt", "utf8", (err, data) => {
  if (data) {
    console.log("data print async method ====>>>>", data);
    return data;
  } else if (err) {
    console.error("Print error", err);
  }
});

// Synchronous Method:

try {
  const data = fs.readFileSync("test.txt", "utf8");
  //   console.log("Print result Synchronous Method ==>>>>", data);
} catch (err) {
  console.log("Print errror ===>>", err);
}

// 2.) Write File
// fs.writeFile("test.txt", "Hey Pankaj Kumar Meena here i am using async method", (err) => {
//   if (err) {
//     console.log("Print error", err);
//     return;
//   }
// });

// sync method

try {
  //   fs.writeFileSync("test.txt", "Hey Pankaj Kumar Meena here using Syncrnous method");
  console.log("File written successfully");
} catch (err) {
  console.log("Print err", err);
}

// 3.)Appending Data to a File

// fs.appendFile("test.txt", "\n hey murli!", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Data appended successfully");
// });

// 4. Deleting Files
// fs.unlink("test.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File deleted successfully");
// });

// 5.) Renaming Files
// fs.rename("test.txt", "harekrishna.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File renamed successfully");
// });

// 6. Checking if a File Exists
if (fs.existsSync("test.txt")) {
  console.log("File exists");
} else {
  console.log("File does not exist");
}
console.log(__filename);
