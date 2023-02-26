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

export const updateMentor = async (req, res, next) => {
  if (req.params.id === req.mentorId) {
    try {
      const updatedMentor = await Mentor.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).send(updatedMentor);
    } catch (error) {
      console.log(error);
      next(createError(500, ""));
    }
  }
};
