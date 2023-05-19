import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  content: { type: String },
  author: { type: String },
});
const Message = model("message", messageSchema);
export default Message;
