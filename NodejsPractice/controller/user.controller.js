const { UserLoginService } = require("../service");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const userLogin = catchAsync(async (req, res) => {
  try {
    const body = req.body;
    console.log("Print api call req body", body);
    const data = await UserLoginService.userLogin(body);
    res.status(200).send({ code: httpStatus.OK, message: "success" });
  } catch (err) {
    console.log("Print error", err);
    return {};
  }
});

module.exports = {
  userLogin,
};
