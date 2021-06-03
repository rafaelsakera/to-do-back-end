import express from "express";
import { index } from "../controller/indexController";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

router.post("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

export default router;
