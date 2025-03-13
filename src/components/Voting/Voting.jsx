import "./vote.css";

const Voting = ({interesting,mindBlowing,votingFalse}) => {
  return (
    <div className="votes">
      <button className="flex  align-middle vote" type="button">
        👍 {interesting}
      </button>
      <button className="flex  align-middle vote" type="button">
        🤯 {mindBlowing}
      </button>
      <button className="flex  align-middle vote" type="button">
        ⛔️ {votingFalse}
      </button>
    </div>
  );
}
export default Voting;