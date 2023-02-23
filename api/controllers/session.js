import Session from "../models/Session.js";
import createError from "../utils/createError.js";

export const createSession = async (req, res, next) => {
  const session = new Session({ mentorId: req.mentorId, ...req.body });
  try {
    const savedSession = await session.save();

    res.status(200).send(savedSession);
  } catch (error) {
    console.log(error);
    next(createError(500, ""));
  }
};

export const deleteSession = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);

    if (session.mentorId !== req.mentorId) {
      return next(createError(403, "You can delete your session only"));
    }

    await Session.findByIdAndDelete(req.params.id);
    res.status(200).json("Session deleted");
  } catch (error) {
    console.log(error);
    next(createError(500, ""));
  }
};

export const updateSession = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);

    if (session.mentorId !== req.mentorId) {
      return next(createError(403, "You can delete your session only"));
    }
    const updatedSession = await Session.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedSession);
  } catch (error) {
    console.log(error);
    next(createError(500, ""));
  }
};

export const getSession = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) next(createError(404, "Session not found!"));

    res.status(200).send(session);
  } catch (error) {
    console.log(error);
    next(createError(500, ""));
  }
};

export const getSessions = async (req, res, next) => {
  const q = req.query;

  const filters = {
    ...(q.medium && { medium: q.medium }),
    ...(q.title && { title: { $regex: q.title, $options: "i" } }),
  };

  try {
    const sessions = await Session.find(filters);
    res.status(200).send(sessions);
  } catch (error) {
    console.log(error);
    next(createError(500, ""));
  }
};
