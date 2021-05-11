import express from "express";
import morgan from "morgan";

import { default as indexRoute } from "./routes/indexRoute";
import { default as tasksRoute } from "./routes/tasksRoute";

import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/toDoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to db"))
  .then(() => app.listen(8000))
  .catch(() => console.log("error in db connecting"));
  

// add third party middleware - Pretty logs
app.use(morgan("dev"));

//index route
app.use(indexRoute);

//tasks route
app.use(tasksRoute);

// 404 page. This code need to be always last
app.use((req, res) => {
  res.status(404);
  res.send("ho no");
});
