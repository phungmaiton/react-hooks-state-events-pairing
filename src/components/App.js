import video from "../data/video.js";
import Video from "./Video.js";
import Reactions from "./Reactions.js";
import { useState } from "react";
import Comments from "./Comments.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(video.comments);
  const handleVoteUp = () => {
    setUpvotes((prevVote) => prevVote + 1);
  };

  const handleVoteDown = () => {
    setDownvotes((prevVote) => prevVote + 1);
  };

  const searchTerm = (term) => {
    console.log(term);
    if (term === "") {
      setComments(video.comments);
    } else {
      const filteredComments = video.comments.filter((comment) =>
        comment.user.includes(term.toLowerCase())
      );
      setComments(filteredComments);
    }
  };
  return (
    <div className="App">
      <Video
        embedUrl={video.embedUrl}
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Reactions
        upvotes={upvotes}
        downvotes={downvotes}
        onVoteUp={handleVoteUp}
        onVoteDown={handleVoteDown}
      />
      <Comments
        comments={comments}
        commentTotal={comments.length}
        user={comments.user}
        comment={comments.comment}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
