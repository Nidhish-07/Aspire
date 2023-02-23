import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
dotenv.config();

import mentorRoute from "./mentors-api/routes/mentors.js";
import sessionRoute from "./mentors-api/routes/sessions.js";
import authRoute from "./mentors-api/routes/auth.js";

const app = express();
app.use(helmet());

const port = process.env.PORT || 8080;
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose
      .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
// mongoose.connect(
//   process.env.URI,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   () => console.log("connected to mongo")
// );

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/mentor", mentorRoute);
app.use("/api/session", sessionRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(port, () => {
  connect();
  console.log("Server listening on port http://localhost:" + port);
});
