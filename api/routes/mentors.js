import express from "express";
import { deleteMentor, updateMentor } from "../controllers/mentor.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteMentor);
router.post("/:id",verifyToken,updateMentor)

export default router;
