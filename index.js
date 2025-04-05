import express from "express";
import mongoose from "mongoose";
import { drinksRouter } from "./routers/drink.js";
import { sandwitchesRouter } from "./routers/sandwitche.js";
import { userRouter } from "./routers/user.js";
const app = express();
app.use(express.json());

app.use("/drinks", drinksRouter);
app.use("/sandwitches", sandwitchesRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("welcome to FastFoodApi");
});
app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
mongoose.connect("url").then(() => {
  console.log("Connected to DB");
});
