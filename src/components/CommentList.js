import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            {" "}
            {/* Using unique id instead of index */}
            <Comment data={comment} />
            {comment.replies && (
              <div className="pl-5">
                <CommentList comments={comment.replies} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default CommentList;
