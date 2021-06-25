import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/Users";
import authenticateToken from "../middlewares/Auth";
import { ACCESS_TOKEN_SECRET } from "../utils/TokenUtils";

let jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/new-user", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  // validate

  // check if exsist
  const emailCheck = await User.findOne({
    email: email,
  });

  const nameCheck = await User.findOne({
    name: name,
  });

  if (emailCheck) return res.status(400).send("Email alredy exsist");
  if (nameCheck) return res.status(400).send("User Name alredy exsist");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create new user
  const user = new User({
    name: name,
    email: email,
    password: hashPassword,
  });

  user.save((err: any) =>
    err
      ? res.status(501).send({ result: "ho no" })
      : res.send({ result: "saved" })
  );
});

router.post("/login", async (req, res) => {
  const name = req.body.userName;
  const password = req.body.password;

  const user = await User.findOne({
    name: name,
  });
  if (!user) return res.status(400).send("User Name Worng");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Password Worng");

  // create and assign token
  const token = jwt.sign({ _id: user._id }, ACCESS_TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

router.get("/user-name", authenticateToken, (req: any, res: any) => {
  User.findOne({
    _id: req.user._id,
  }).then((result: any) => res.send(result.name));
});

export default router;
