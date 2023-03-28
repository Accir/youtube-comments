import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  authorDisplayName: {
    type: String,
    required: [true, "User is required"],
  },
  authorProfileImageUrl: {
    type: String,
  },
  textDisplay: {
    type: String,
    required: [true, "Comment content is required"],
  },
});

export default CommentSchema;
