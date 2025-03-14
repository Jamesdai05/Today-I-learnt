import Voting from "../Voting/Voting.jsx";
import "./card.css";

import Button from "../Button/Button.jsx";
import { CATEGORIES } from "../../data.js";

const Card = ({fact,category,interesting,resource,mindBlowing,votesFalse}) => {
  // console.log(initialFacts.text);
  const categoryInfo = CATEGORIES.find((cat) => cat.name === category.toLowerCase());
  // const getColor=getItem.color;
  // console.log(getColor);
  // in case the categoryInfo is not in the array
  const color = categoryInfo?.color || "oklch(0.577 0.245 27.325)";

  return (
    <section className="p-2">
      <p>
        {fact}<a href={resource}>(Source)</a>
      </p>
      <div className="tag">
        <Button color={color}>{category}</Button>
      </div>
      <div>
        <Voting interesting={interesting} votingFalse={votesFalse} mindBlowing={mindBlowing}/>
      </div>
    </section>
  );
}
export default Card;