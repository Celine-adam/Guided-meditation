import jwt from "jsonwebtoken";
/**
 * Helper function to issue JWT token based on User
 * @param {*} user
 */
export const generateToken = (user) => {
  //header - payload - signature = JWT token
  // |         |           |
  // |         |           |
  // created   see const   created by secret
  // by jwt
  // itself
  //sub = user._id --> assign user id to sub claim

  const payload = { sub: user._id }; // i nedd to change it

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
