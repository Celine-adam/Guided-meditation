import { Schema, model } from "mongoose";

const affirmationSchema = new Schema({
  content: { type: String },
  author: { type: String },
});
const Affirmation = model("affirmation", affirmationSchema);
export default Affirmation;
