import { getTodayDate, getNextDate } from "../utils/DateUtils";
import Tasks from "../models/Tasks";

export const allTasks = (req: any, res: any) => {
  Tasks.find({
    userId: req.user._id,
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => res.send(err));
};

export const todayTasks = (req: any, res: any) => {
  Tasks.find({
    startDate: {
      $gte: getTodayDate(),
      $lt: getNextDate(),
    },
    userId: req.user._id,
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const tasksByDate = (req: any, res: any) => {
  Tasks.find({
    startDate: {
      $gte: req.query.startDate,
      $lt: req.query.endDate,
    },
    userId: req.user._id,
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const deleteTask = (req: any, res: any) => {
  Tasks.deleteOne({
    _id: req.body.taskId,
  })
    .then(() => res.send("delete"))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const addNewTask = (req: any, res: any) => {
  const task = new Tasks({ userId: req.user._id, ...req.body });

  task.save((err: any) =>
    err
      ? res.status(501).send({ result: "ho no" })
      : res.send({ result: "saved" })
  );
};

export const taskById = (req: any, res: any) => {
  Tasks.find({
    _id: req.query.taskId,
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const editTask = (req: any, res: any) => {
  Tasks.updateOne(
    {
      _id: req.body._id,
    },
    req.body
  )
    .then(() => res.send({ result: "update" }))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const doneTask = (req: any, res: any) => {
  Tasks.updateOne(
    {
      _id: req.query.taskId,
    },
    {
      done: req.body.done,
    }
  )
    .then(() => res.send({ result: "update" }))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};
