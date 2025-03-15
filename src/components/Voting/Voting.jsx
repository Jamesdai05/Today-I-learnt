import "./vote.css";

const Voting = ({interesting,mindBlowing,votingFalse,handleVote,isUpdating}) => {
  return (
    <div className="votes">
      <button
        className="flex  align-middle vote"
        type="button"
        onClick={handleVote}
        disabled={isUpdating}
      >
        👍 {interesting}
      </button>
      <button
        className="flex  align-middle vote"
        type="button"
        disabled={isUpdating}
      >
        🤯 {mindBlowing}
      </button>
      <button
        className="flex  align-middle vote"
        type="button"
        disabled={isUpdating}
      >
        ⛔️ {votingFalse}
      </button>
    </div>
  );
}
export default Voting;