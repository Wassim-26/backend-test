import express from "express";
import { createUserRegister, getProfile, login } from "../controllers/user.js";

export const userRouter = express.Router();
userRouter.post("/register", createUserRegister);
userRouter.post("/login", login);
userRouter.post("/profile", auth, getProfile);
userRouter.put("/update", update);
