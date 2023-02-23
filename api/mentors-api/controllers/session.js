import Session from "../models/Session";
import createError from "../utils/createError";

export const createSession = async (req, res, next) => {
  try {
    const session = new Session(req.body);

    await session.save();
  } catch (error) {}
};

export const deleteSession = async (req, res, next) => {
  const session = await Session.findById(req.params.id);

  if (req.params.id !== session._id.toString()) {
    return next(createError(403, "You can delete your session only"));
  }

  await Session.findByIdAndDelete(req.params.id);
  res.status(200).json("Session deleted");
};

export const updateSession = async (req, res, next) => {
  if (req.params.id !== req.body.) {
    try {
      const updatedSession = await Session.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).send(updatedSession);
    } catch (error) {}
  } else {
    return next(createError(403, "You can update your session only"));
  }
};
