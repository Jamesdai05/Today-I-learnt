import Voting from "../Voting/Voting.jsx";
import "./card.css";
import { initialFacts } from "../../data.js";

const Card = ({text,category,interesting,source,mindBlowing,votesFalse}  ) => {
  // console.log(initialFacts.text);
  return (
    <section className="p-4">
      <p>
        {text}<a href={source}>(Source)</a>
      </p>
      <div className="tag">
        <span>{category}</span>
      </div>
      <div className="button">
        <Voting interesting={interesting} votingFalse={votesFalse} mindBlowing={mindBlowing}/>
      </div>
    </section>
  );
}
export default Card