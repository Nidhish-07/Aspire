import Mentor from "../models/Mentor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const mentor = new Mentor({ ...req.body, password: hashedPassword });

    await mentor.save();

    res.status(200).send("Mentor has been created");
  } catch (error) {
    next(createError(500, ""));
    console.log(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const mentor = await Mentor.findOne({ username: req.body.username });

    if (!mentor) {
      return next(createError(404, "mentor not found"));
    }

    const validPassword = bcrypt.compareSync(
      req.body.password,
      mentor.password
    );

    if (!validPassword) {
      return next(createError(400, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: mentor._id }, process.env.SECRET);
    const { password, ...otherDetails } = mentor._doc;
    // console.log(token);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(createError(500, ""));
    console.log(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("mentor has been logged out.");
};
