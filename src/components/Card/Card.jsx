import Voting from "../Voting/Voting.jsx";
import "./card.css";

import Button from "../Button/Button.jsx";

const Card = ({text,category,interesting,source,mindBlowing,votesFalse}  ) => {
  // console.log(initialFacts.text);


  return (
    <section className="p-2">
      <p>
        {text}<a href={source}>(Source)</a>
      </p>
      <div className="tag">
        <Button>{category}</Button>
      </div>
      <div>
        <Voting interesting={interesting} votingFalse={votesFalse} mindBlowing={mindBlowing}/>
      </div>
    </section>
  );
}
export default Card