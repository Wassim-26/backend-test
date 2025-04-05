import mongoose from "mongoose";
const sandwitcheSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
    minLength: 1,
  },
  contenu: {
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
const sandwitche = mongoose.model("Sandwitche", sandwitcheSchema);
export default sandwitche;
