import YoutubeComment from "./YoutubeComment";

export default interface YoutubeVideo {
  videoId: String;
  commentList?: Array<YoutubeComment>;
  isFromDatabase: boolean;
}
