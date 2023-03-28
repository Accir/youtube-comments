import mongoose from "mongoose";
import CommentSchema from "./Comment";

const VideoSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: [true, "Video id is required"],
    unique: true,
  },
  comments: {
    type: [CommentSchema],
  },
});

export default mongoose.models.Video || mongoose.model("Video", VideoSchema);
