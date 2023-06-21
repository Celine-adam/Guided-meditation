import { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  content: { type: String },
});
const Favorite = model("favorite", favoriteSchema);
export default Favorite;
