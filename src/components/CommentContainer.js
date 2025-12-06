import React from "react";
import { COMMENT_DATA } from "../utils/helper";

import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <>
      <div className="mt-2 p-2">
        <div className="font-bold text-2xl">Comments</div>
      </div>
      <CommentList comments={COMMENT_DATA} />
    </>
  );
};

export default CommentContainer;
