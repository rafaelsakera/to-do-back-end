import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import { default as indexRoute } from "./routes/indexRoute";
import { default as tasksRoute } from "./routes/tasksRoute";
import { default as loginRoute } from "./routes/loginRoute";

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

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//index route
app.use(indexRoute);

//login route
app.use(loginRoute);

//tasks route
app.use(tasksRoute);

// 404 page. This code need to be always last
app.use((req, res) => {
  res.status(404);
  res.send("ho no");
});
