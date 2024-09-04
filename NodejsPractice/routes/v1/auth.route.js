const express = require("express");
const { userController } = require("../../controller");
const { validateUser } = require("../../middleware/auth.middleware");
const router = express.Router();

router.route("/login").post(validateUser, userController.userLogin);

module.exports = router;
