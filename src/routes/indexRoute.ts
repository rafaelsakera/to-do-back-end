import express from "express";
import { index } from "../controller/indexController";

const router = express.Router();

router.get("/", index);

export default router;
