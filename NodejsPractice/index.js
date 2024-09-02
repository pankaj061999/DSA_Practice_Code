const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

let server;

// Check if MongoDB URL is provided
if (config.mongoose && config.mongoose.url) {
  mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
      console.log("Connected to MongoDB");
      startServer();
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
      startServer();
    });
} else {
  console.warn("MongoDB URL not provided. Skipping MongoDB connection.");
  startServer();
}

// Function to start the server
function startServer() {
  server = app.listen(3004, () => {
    console.log(`Listening to port 3004`);
  });
}

// Error handling
const unexpectedErrorHandler = (error) => {
  console.log(error);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
