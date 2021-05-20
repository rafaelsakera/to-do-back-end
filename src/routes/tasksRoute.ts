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

const router = express.Router();

router.get("/all-tasks", allTasks);
router.get("/task-by-id", taskById);
router.get("/today-tasks", todayTasks);
router.get("/tasks-by-date", tasksByDate);

router.post("/edit-task", editTask);
router.post("/set-task-done", doneTask);
router.post("/add-new-task", addNewTask);

router.delete("/delete-task", deleteTask);

export default router;
