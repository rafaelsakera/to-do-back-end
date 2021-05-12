import express from "express";
import {
  allTasks,
  todayTasks,
  tasksByDate,
  deleteTask,
  addNewTask,
} from "../controller/tasksController";

const router = express.Router();

router.get("/all-tasks", allTasks);
router.get("/today-tasks", todayTasks);
router.get("/tasks-by-date", tasksByDate);

router.post("/add-new-task", addNewTask);

router.delete("/delete-task", deleteTask);

export default router;
