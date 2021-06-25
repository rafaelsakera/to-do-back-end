import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const Tasks = mongoose.model("Tasks", TasksSchema);

export default Tasks;
