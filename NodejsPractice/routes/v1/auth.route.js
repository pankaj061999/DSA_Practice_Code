const express = require("express");
const { userController } = require("../../controller");
const router = express.Router();

router.route("/login").post(userController.userLogin);

module.exports = router;
