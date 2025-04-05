import mongoose from "mongoose";
const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
    minLength: 1,
  },
  nature: {
    type: String,
    requied: true,
    minLength: 1,
  },
  price: {
    type: Number,
    default: 0,
    minL: 10,
  },
});
const Drink = mongoose.model("Drink", drinkSchema);
export default Drink;
