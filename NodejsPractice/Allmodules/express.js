const express = require("express");
const app = express();
const PORT = 3003;
// console.log("Print express", app)

app.get("/pankaj", (req, res) => {
  res.status(200).send("Hii successfully hit pankaj get api");
});

app.get("/", (req, res) => {
  res.status(200).send({
    id: 1,
    message: "Hey this is Home API",
  });
});

app.listen(PORT, () => {
  console.log(`My code run on ${PORT} Port`);
});
