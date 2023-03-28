import React from "react";
import { NextApiRequest, NextPage } from "next";
import { commentList } from "@/services/youtube";
import Comment from "@/components/Comment/Comment";
import YoutubeComment from "@/interfaces/YoutubeComment";
import { toStringArray } from "@/utils/helpers";
import YoutubeVideo from "@/interfaces/YoutubeVideo";
import Video from "@/models/Video";
import dbConnection from "@/utils/dbConnection";
import { toast } from "react-toastify";

interface Props {
  videos: Array<YoutubeVideo>;
}

const Comments: NextPage<Props> = ({ videos }) => {
  let dbVideos = videos.filter((item) => item.isFromDatabase).map((item) => item.videoId);
  if (dbVideos.length > 0) {
    toast("Videos fetched from database: " + dbVideos.join(", "), {
      delay: 100,
    });
  }

  return (
    <div className="container pt-5 max-w-xl">
      <h1 className="text-center font-bold mb-10 text-xl">Comments</h1>
      {videos?.map((video: YoutubeVideo, key: any) => (
        <div key={key}>
          <h2 className="text-center font-bold mb-5 text-lg">
            Comments for video: {video.videoId}
          </h2>
          {video?.commentList?.map((comment: YoutubeComment, key: any) => (
            <Comment renderHtml={true} key={key} comment={comment} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async (req: NextApiRequest) => {
  dbConnection();
  const idList = toStringArray(req.query.id);

  const response = await Promise.all(
    idList.map(async (id) => {
      const video = await Video.findOne({ videoId: id }).populate("comments").lean();
      if (video) {
        return {
          videoId: id,
          commentList: video.comments as Array<YoutubeComment>,
          isFromDatabase: true,
        };
      } else {
        const response = await commentList(id);
        await Video.collection.insertOne({ videoId: id, comments: response ? response : null });
        return {
          videoId: id,
          commentList: response as Array<YoutubeComment>,
          isFromDatabase: false,
        };
      }
    })
  );
  return {
    props: {
      videos: response,
    },
  };
};
