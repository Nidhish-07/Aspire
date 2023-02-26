import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String, 
      required: true,
      min: 6,
    },
    organization: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    occupation: {
      type: String,
    },
    experience: {
      type: Number,
    },
    desc: {
      type: String,
    },
    expertise: {
      type: [String],
    },
    education: {
      type: String,
    },
    languages: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Mentor", mentorSchema);
