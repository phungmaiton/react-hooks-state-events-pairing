import { useState } from "react";
function CommentLi({ user, comment }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
      <button
        onClick={() => {
          setUpvotes(upvotes + 1);
        }}
        value="👍"
      >
        {upvotes}👍
      </button>
      <button
        onClick={() => {
          setDownvotes(downvotes + 1);
        }}
        value="👎"
      >
        {downvotes}👎
      </button>
      <button>Remove</button>
    </div>
  );
}

export default CommentLi;
