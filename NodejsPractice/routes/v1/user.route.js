const express = require("express");
const { userController } = require("../../controller");
const router = express.Router();

router.route("/user").post(userController.userLogin);

module.exports = router;
