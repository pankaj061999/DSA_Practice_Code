const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/v1/index");
const httpStatus = require("http-status");

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// const PORT = process.env.PORT || 3004;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Error handling middleware
app.use((err, req, res, next) => {
  // Check if the request accepts JSON responses
  if (req.accepts("json")) {
    // Respond with JSON error
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error: err.statusCode,
      message: err.message || "Internal Server Error",
    });
  } else {
    // Fall back to default error handling behavior (e.g., render HTML error page)
    next(err);
  }
});

module.exports = app;
