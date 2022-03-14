import express from "express";
import { getTasks, createTask } from "../controllers/task.js";
// import { addingTask } from "../controllers/task";

const router = express.Router();

// router.post("/newTask", addingTask);

router.get("/", getTasks);
router.post("/", createTask);

export default router;
