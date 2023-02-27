import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    mentorId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    recommended: {
      type: [String],
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);
