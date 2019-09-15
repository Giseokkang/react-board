import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  author: {
    type: String,
    required: "Author is required"
  },
  desc: {
    type: String,
    required: "Description is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Board", BoardSchema);
export default model;
