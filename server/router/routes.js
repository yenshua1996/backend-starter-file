import express from "express";
import {
  getHandler,
  postHandler,
  updateHandler,
  deleteHandler,
} from "../controller/handler.js";

const router = express.Router();

router.get("/", getHandler);

router.post("/", postHandler);

router.patch("/:id", updateHandler);

router.delete("/:id", deleteHandler);

export default router;
