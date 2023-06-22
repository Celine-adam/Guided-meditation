import { Schema, model } from "mongoose";
function getFormattedDate() {
  const currentDate = new Date();
  const options = { month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleString(undefined, options);
  return formattedDate;
}
const journalSchema = new Schema({
  dateCreated: { type: String, default: getFormattedDate },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  content: { type: String },
});
const Journal = model("journal", journalSchema);
export default Journal;
