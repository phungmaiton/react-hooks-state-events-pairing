import { useState } from "react";
import CommentLi from "./CommentLi";
import SearchBar from "./SearchBar";
function Comments({ commentTotal, comments, searchTerm }) {
  const [showComments, setShowComments] = useState(true);
  const handleClick = () => {
    setShowComments(!showComments);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr></hr>
      <div className={!showComments ? "hide" : null}>
        <h2>{commentTotal} Comments</h2>
        <SearchBar searchTerm={searchTerm} />
        <div>
          {comments.map((comment) => (
            <CommentLi
              key={comment.user}
              user={comment.user}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
