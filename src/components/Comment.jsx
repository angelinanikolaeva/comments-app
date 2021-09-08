import DeleteButton from "@material-ui/icons/Delete";

const Comment = ({ text, comment, comments, setComments, index }) => {
  const deleteHandler = () => {
    setComments(comments.filter((el) => el.id !== comment.id));
  };
  return (
    <div className={"comment" + (index === 0 ? " selected" : "")}>
      <li className="comment-item">{text}</li>
      <button className="comment-button delete-button" onClick={deleteHandler}>
        <DeleteButton />
      </button>
    </div>
  );
};

export default Comment;
