// app.METHOD(PATH, HANDLER)

const express = require("express");
const user = require("./user.route");
const authRoute = require("./auth.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

defaultRoutes.forEach((route) => {
  if (route.middleware) router.use(route.path, route.middleware, route.route);
  else router.use(route.path, route.route);
});

module.exports = router;
