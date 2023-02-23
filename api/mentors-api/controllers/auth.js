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
    const mentor = Mentor.findOne({ username: req.body.username });

    if (!mentor) {
      return next(createError(404, "User not found"));
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      return next(createError(400, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    const { password, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } catch (error) {}
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
