// // app.METHOD(PATH, HANDLER)

// const app = require("../../app");
// const express = require("express");

// const router = express.Router();

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// const defaultRoutes = [
//   {
//     path: "/user",
//     route: user,
//   },
//   {
//     path: "/auth",
//     route: authRoute,
//   },
// ];

// defaultRoutes.forEach((route) => {
//   if (route.middleware) router.use(route.path, route.middleware, route.route);
//   else router.use(route.path, route.route);
// });

// module.exports = router;
