function Reactions({ upvotes, downvotes, onVoteUp, onVoteDown }) {
  return (
    <div>
      <button onClick={onVoteUp} value="👍">
        {upvotes}👍
      </button>
      <button onClick={onVoteDown} value="👎">
        {downvotes}👎
      </button>
    </div>
  );
}

export default Reactions;
