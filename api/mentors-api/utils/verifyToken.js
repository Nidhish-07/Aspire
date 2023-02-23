import jwt from "jsonwebtoken";
import createError from "./createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.SECRET, (err, mentor) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    req.mentorId = mentor.id;
    next();
  });
};
