import { Schema, model } from "mongoose";

const journalSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  content: { type: String },
});
const Journal = model("journal", journalSchema);
export default Journal;
