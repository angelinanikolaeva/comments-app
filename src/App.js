import { useState, useEffect, useCallback } from "react";
import "./App.css";
import CommentForm from "./components/CommentForm.jsx";
import CommentList from "./components/CommentList";
// import { getComments as getCommentsApi } from "./data/api";

function App() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const getCommentsLocalStorage = () => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify([]));
    } else {
      let localComments = JSON.parse(localStorage.getItem("comments"));
      setComments(localComments);
    }
  };
  const saveCommentsLocalStorage = useCallback(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setComments(data);
  //   });
  // }, []);

  useEffect(() => {
    getCommentsLocalStorage();
  }, []);

  useEffect(() => {
    saveCommentsLocalStorage();
  }, [comments, saveCommentsLocalStorage]);

  return (
    <div className="comment-box">
      <CommentForm
        inputText={inputText}
        setComments={setComments}
        comments={comments}
        setInputText={setInputText}
      />
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
}

export default App;
