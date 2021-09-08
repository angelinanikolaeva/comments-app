import Comment from "./Comment";

const CommentList = ({ comments, setComments }) => {
  return (
    <div className="comment-container">
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <Comment
            text={comment.text}
            key={comment.id}
            comments={comments}
            setComments={setComments}
            comment={comment}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
