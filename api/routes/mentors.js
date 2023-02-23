import express from "express";
import { deleteMentor } from "../controllers/mentor.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteMentor);

export default router;
