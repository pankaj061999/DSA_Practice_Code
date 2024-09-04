const JWT = require("jsonwebtoken");

// var token = JWT.sign({ foo: "bar" }, "shhhhh");

// var token = JWT.sign(
//   {
//     exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expiration time
//     data: "foobar", // Payload data
//   },
//   "secret" // Secret key used to sign the token
// );
// // var token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjUzODk2NTMsImRhdGEiOiJmb29iYXIiLCJpYXQiOjE3MjUzODYwNTN9.XDkFT0cu53oIeH04IKFEZX4r6E5kfH6cPeUivJcJNBI";

// console.log("Print jwt", token);

// // var decoded = JWT.verify(token, "shhhhh");

// try {
//   var decoded = JWT.verify(token, "secret");
//   console.log("tab ==>>", decoded);
// } catch (err) {
//   console.table(err);
// }

const validateUser = (req, res, next) => {
  // Get token from headers (usually from the 'Authorization' header)
  const token = req.header("Authorization");

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }
  console.log("Print token ", "decoded", token);
  try {
    // Verify the token using the secret key
    const decoded = JWT.verify(token, "shhhhh");

    // Attach the decoded user to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token is invalid or expired
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = { validateUser };
