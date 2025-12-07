import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="w-full">
      {comments.map((comment, index) => (
        <div key={index} className="w-full">
          <Comment data={comment} />

          {comment.replies && comment.replies.length > 0 && (
            <div className="pl-12">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
