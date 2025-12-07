import React from "react";
import { COMMENT_DATA } from "../utils/helper";
import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <>
      <div className="w-full px-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

        <CommentList comments={COMMENT_DATA} />
      </div>
    </>
  );
};

export default CommentContainer;
