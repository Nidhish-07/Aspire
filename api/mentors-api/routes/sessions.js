import express from "express";
import {
  createSession,
  deleteSession,
  getSession,
  getSessions,
  updateSession,
} from "../controllers/session.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createSession);
router.delete("/:id", verifyToken, deleteSession);
router.post("/:id", verifyToken, updateSession);
router.get("/:id", getSession);
router.get("/", getSessions);

export default router;
