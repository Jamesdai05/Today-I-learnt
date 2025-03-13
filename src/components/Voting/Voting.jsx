import "./vote.css";

const Voting = ({interesting,mindBlowing,votingFalse}) => {
  return (
    <div className="votes">
      <button className="flex justify-between align-middle vote">
        👍 {interesting}
      </button>
      <button className="flex justify-between align-middle vote">
        🤯 {mindBlowing}
      </button>
      <button className="flex justify-between align-middle vote">
        ⛔️ {votingFalse}
      </button>
    </div>
  );
}
export default Voting;