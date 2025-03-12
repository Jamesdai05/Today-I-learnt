import Voting from "../Voting/Voting.jsx";
import "./card.css";

const Card = () => {
  return (
    <section className="p-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        rerum expedita fuga repellendus quisquam voluptatibus amet id?
        Nobis.(Source)
      </p>
      <div className="tag">
        <span>Technology</span>
      </div>
      <div className="button">
        <Voting />
      </div>
    </section>
  );
}
export default Card