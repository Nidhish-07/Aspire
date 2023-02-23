import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    recommended: {
      type: [String],
    },
    categories: {
      type: [String],
    },
    medium: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);
