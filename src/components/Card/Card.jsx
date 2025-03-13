import Voting from "../Voting/Voting.jsx";
import "./card.css";

import Button from "../Button/Button.jsx";
import { CATEGORIES } from "../../data.js";

const Card = ({text,category,interesting,source,mindBlowing,votesFalse}  ) => {
  // console.log(initialFacts.text);
  const getColor=CATEGORIES.find(cat=>cat.name===category).color

  console.log(getColor);

  return (
    <section className="p-2">
      <p>
        {text}<a href={source}>(Source)</a>
      </p>
      <div className="tag">
        <Button color={getColor}>{category}</Button>
      </div>
      <div>
        <Voting interesting={interesting} votingFalse={votesFalse} mindBlowing={mindBlowing}/>
      </div>
    </section>
  );
}
export default Card;