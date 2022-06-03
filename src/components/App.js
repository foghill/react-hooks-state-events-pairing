import React from "react";
import ReactDOM from "react-dom";
import Comments from "./Comments.js";
import Video from "./Video.js";
import video from "../data/video.js";

function App() {
  const [counter, setCounter] = React.useState(video.upvotes);
  const [dislikeCounter, dislikeSetCounter] = React.useState(video.downvotes);
  const [showComments, setShowComments] = React.useState(false);

  function handleCommentsClick() {
    setShowComments(!showComments);
  }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    dislikeSetCounter(dislikeCounter + 1);
  }

  return (
    <div>
      <Video />
      <div>
        <h2>{video.title}</h2>
        <p>{video.views} views</p>
        <p>{video.createdAt}</p>
        <p>{video.upvotes} upvotes</p>
        <button onClick={increment}>👍 {counter}</button>
        <button onClick={decrement}>👎 {dislikeCounter}</button>
      </div>
      <button onClick={handleCommentsClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments ? (
        <Comments comments={video.comments} showComments={showComments} />
      ) : null}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
