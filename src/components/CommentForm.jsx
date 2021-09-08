import React from "react";
import AddButton from "@material-ui/icons/Add";

const CommentForm = ({ inputText, setInputText, comments, setComments }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      console.log("The field is empty");
    } else {
      setComments([
        { id: Math.random().toString(36).substr(2, 9), text: inputText },
        ...comments,
      ]);
      setInputText("");
    }
  };
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  };
  return (
    <form className="comment-form">
      <textarea
        onChange={inputTextHandler}
        onKeyDown={keyPressHandler}
        type="text"
        className="comment-input"
        value={inputText}
        placeholder="Напишите ваш комментарий туть <3"
      />
      <button
        onClick={submitHandler}
        type="submit"
        className="comment-button submit-button"
      >
        <AddButton />
      </button>
    </form>
  );
};

export default CommentForm;
