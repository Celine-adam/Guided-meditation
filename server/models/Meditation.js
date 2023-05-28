import { Schema, model } from "mongoose";
const meditationSchema = new Schema({
  title: { type: String },
  description: { type: String },
  audio: { type: Schema.Types.ObjectId, ref: "file" },
  image: { type: Schema.Types.ObjectId, ref: "file" },
  time: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});
const Meditation = model("mediation", meditationSchema);
export default Meditation;
