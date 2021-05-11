import { getTodayDate, getNextDate } from "../utils/DateUtils";
import Tasks from "../models/Tasks";

export const allTasks = (_: any, res: any) => {
  Tasks.find()
    .then((result: any) => res.send(result))
    .catch((err: any) => res.send(err));
};

export const todayTasks = (_: any, res: any) => {
  Tasks.find({
    startDate: {
      $gte: getTodayDate(),
      $lt: getNextDate(),
    },
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
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};

export const deleteTask = (req: any, res: any) => {
  console.log(req.data);
  Tasks.remove({
    _id: req.body.taskId,
  })
    .then(() => res.send("delete"))
    .catch((err: any) => {
      console.log("Error: " + err);
      res.send(err);
    });
};
