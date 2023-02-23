import Mentor from "../models/Mentor.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const deleteMentor = async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);

  if (!mentor) {
    return next(createError(404, "Mentor not found"));
  }

  if (req.mentorId !== mentor._id.toString()) {
    // console.log(data);
    return next(createError(403, "You can only delete your account"));
  }
  // res.send(data);
  await Mentor.findByIdAndDelete(req.params.id);
  res.status(200).send("Mentor has been deleted");
};
