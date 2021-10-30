import { nanoid } from "nanoid";
import AddIcon from "@material-ui/icons/Add";

const CommentForm = ({ inputText, setInputText, comments, setComments }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      console.log("The field is empty");
    } else {
      setComments([{ id: nanoid(), text: inputText }, ...comments]);
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
        className="comment-textarea"
        value={inputText}
        placeholder="Empty space for your comment ^_^"
      />
      <button
        onClick={submitHandler}
        type="submit"
        className="comment-button submit-button"
      >
        <AddIcon />
      </button>
    </form>
  );
};

export default CommentForm;
