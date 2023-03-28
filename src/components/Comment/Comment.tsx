import YoutubeComment from "@/interfaces/YoutubeComment";
import React, { FunctionComponent } from "react";

interface Props {
  comment?: YoutubeComment;
  renderHtml: boolean;
}

const Comment: FunctionComponent<Props> = ({ comment, renderHtml }) => {
  return (
    <div className="border border-zinc-500 rounded my-5 p-3 bg-white">
      <div className="flex items-center">
        <img
          className="rounded-full"
          src={comment?.authorProfileImageUrl || ""}
          alt="Profile image"
        />
        <div className="pl-3 font-bold">{comment?.authorDisplayName}</div>
      </div>
      {renderHtml ? (
        <div
          className="pt-3"
          dangerouslySetInnerHTML={{ __html: comment?.textDisplay || "" }}
        ></div>
      ) : (
        <div className="pt-3">{comment?.textDisplay}</div>
      )}
    </div>
  );
};

export default Comment;
