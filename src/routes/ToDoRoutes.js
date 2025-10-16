import express from "express";

2

import TodoController from "../controllers/ToDoController.js";
const router = express.Router();
router.get("/", TodoController.list);
router.post("/", TodoController.add);
router.delete("/: id", TodoController.delete);
export default router;