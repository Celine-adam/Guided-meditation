import { Schema, model } from "mongoose";
const meditationSchema = new Schema({
  id: { type: String },
  title: { type: String },
  body: { type: String },
  time: { type: String },
});
const Meditation = model("mediation", meditationSchema);
export default Meditation;
