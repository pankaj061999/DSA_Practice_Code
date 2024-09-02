const userLogin = async (body) => {
  try {
    console.log("Print api call req body", body);
    return "Success";
  } catch (err) {
    return err;
  }
};

module.exports = {
  userLogin,
};
