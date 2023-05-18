import { Schema, model } from "mongoose";
const meditationSchema = new Schema({
  title: { type: String },
  description: { type: String },
  link: { typ: Buffer },
  time: { type: String },
});
const Meditation = model("mediation", meditationSchema);
export default Meditation;
