import express from "express";
import {
  createSandwitche,
  deleteSandwitche,
  getSandwitcheById,
  getSandwitches,
  updateSandwitche,
} from "../controllers/sandwitche.js";

export const sandwitchesRouter = express.Router();

sandwitchesRouter.get("/", getSandwitches);
sandwitchesRouter.post("/", createSandwitche);
sandwitchesRouter.get("/:id", getSandwitcheById);
sandwitchesRouter.put("/:id", updateSandwitche);
sandwitchesRouter.delete("/:id", deleteSandwitche);
