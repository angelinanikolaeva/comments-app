import { useState } from "react";
import DeleteButton from "@material-ui/icons/Delete";
import EditButton from "@material-ui/icons/Edit";
import CancelButton from "@material-ui/icons/Cancel";
import SaveButton from "@material-ui/icons/Save";

const Comment = ({ text, comment, comments, setComments, index }) => {
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const deleteHandler = () => {
    setComments(comments.filter((el) => el.id !== comment.id));
  };
  const editHandler = () => {
    setEditing(!isEditing);
  };
  const saveHandler = () => {
    editHandler();
    const commentsCopy = [...comments];
    const index = comments.findIndex((el) => el.id === comment.id);
    commentsCopy[index].text = inputValue;
    setComments(commentsCopy);
  };
  const cancelHandler = () => {
    setInputValue(text);
  };
  return (
    <li className={"comment" + (index === 0 ? " selected" : "")}>
      {isEditing ? (
        <input
          className="comment-input"
          value={inputValue}
          onChange={inputHandler}
        />
      ) : (
        <span className="comment-item">{text}</span>
      )}
      <div className="comment-button-container">
        {isEditing ? (
          <>
            <button
              className="comment-button save-button"
              disabled={!inputValue}
              onClick={saveHandler}
            >
              <SaveButton />
            </button>
            <button
              className="comment-button cancel-button"
              onClick={cancelHandler}
            >
              <CancelButton />
            </button>
          </>
        ) : (
          <>
            <button
              className="comment-button edit-button"
              onClick={editHandler}
            >
              <EditButton />
            </button>
            <button
              className="comment-button delete-button"
              onClick={deleteHandler}
            >
              <DeleteButton />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Comment;
