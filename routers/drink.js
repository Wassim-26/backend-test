import express from "express";
import {
  createDrink,
  deleteDrink,
  getDrinkById,
  getDrinks,
  updateDrink,
} from "../controllers/drink.js";

export const drinksRouter = express.Router();

drinksRouter.get("/", getDrinks);
drinksRouter.post("/", createDrink);
drinksRouter.get("/:id", getDrinkById);
drinksRouter.put("/:id", updateDrink);
drinksRouter.delete("/:id", deleteDrink);
