import express from "express";
import {
  allTasks,
  todayTasks,
  tasksByDate,
  deleteTask,
  addNewTask,
  taskById,
  editTask,
  doneTask,
} from "../controller/tasksController";

import authenticateToken from "../middlewares/Auth";

const router = express.Router();

router.get("/all-tasks", authenticateToken, allTasks);
router.get("/task-by-id", authenticateToken, taskById);
router.get("/today-tasks", authenticateToken, todayTasks);
router.get("/tasks-by-date", authenticateToken, tasksByDate);

router.post("/edit-task", authenticateToken, editTask);
router.post("/set-task-done", authenticateToken, doneTask);
router.post("/add-new-task", authenticateToken, addNewTask);

router.delete("/delete-task", authenticateToken, deleteTask);

export default router;
