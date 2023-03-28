import YoutubeComment from "@/interfaces/YoutubeComment";
import { COMMENT_THREAD, YOUTUBE_BASE } from "@/utils/constants";

export const commentList = async (id: String) => {
  var key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    throw new Error("YouTube API key not provided");
  }
  if (!id) {
    throw new Error("Id is not provided");
  }

  const uri = encodeURI(
    YOUTUBE_BASE + COMMENT_THREAD + "?part=snippet&videoId=" + id + "&key=" + key
  );
  const response = await fetch(uri, {
    method: "GET",
  });
  const res = await response.json();
  return res.items?.map((item: { snippet: { topLevelComment: { snippet: YoutubeComment } } }) => {
    const snippet = item?.snippet?.topLevelComment?.snippet;
    return {
      authorDisplayName: snippet?.authorDisplayName,
      authorProfileImageUrl: snippet?.authorProfileImageUrl,
      textDisplay: snippet?.textDisplay,
    };
  });
};
