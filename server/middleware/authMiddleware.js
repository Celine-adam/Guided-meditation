import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
/**
 * Middleware function to validate token.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const authorizeToken = (req, res, next) => {
  console.log("headers", req.headers);
  console.log("the token is", req.headers.authorization);

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  console.log("the token is", token);

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "invalid token" });
    }
    console.log("the user is ", user);
    //assigning the authneticated user to the request object.
    req.user = { _id: user.sub };
    next();
  });
};
