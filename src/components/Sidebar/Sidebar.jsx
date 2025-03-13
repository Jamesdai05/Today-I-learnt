import Button from "../Button/Button.jsx";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <ul>
      <li className="category all">
        <Button>All</Button>
      </li>
      <li className="category technology">
        <Button >Technology</Button>
      </li>
      <li className="category science">
        <Button>Science</Button>
      </li>
      <li className="category finance">
        <Button >Finance</Button>
      </li>
      <li className="category society">
        <Button>Society</Button>
      </li>
      <li className="category entertainment">
        <Button>Entertainment</Button>
      </li>
      <li className="category health">
        <Button > health</Button>
      </li>
      <li className="category history">
        <Button>History</Button>
      </li>
      <li className="category news">
        <Button>News</Button>
      </li>
    </ul>
  );
}
export default Sidebar