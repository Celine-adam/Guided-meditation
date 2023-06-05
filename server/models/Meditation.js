import { Schema, model } from "mongoose";
const meditationSchema = new Schema({
  title: { type: String },
  description: { type: String },
  audio: { type: String },
  time: { type: String },
});
const Meditation = model("mediation", meditationSchema);
export default Meditation;
