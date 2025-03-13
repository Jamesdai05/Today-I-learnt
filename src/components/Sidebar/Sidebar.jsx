import Button from "../Button/Button.jsx";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <ul>
      <li className="category all">
        <Button>All</Button>
      </li>
      <li className="category technology">
        <Button color={"#3b82f6"}>Technology</Button>
      </li>
      <li className="category science">
        <Button color={"#16a34a"}>Science</Button>
      </li>
      <li className="category finance">
        <Button color={"#ef4444"}>Finance</Button>
      </li>
      <li className="category society">
        <Button color={"#eab308"}>Society</Button>
      </li>
      <li className="category entertainment">
        <Button color={"#db2777"}>Entertainment</Button>
      </li>
      <li className="category health">
        <Button color={"#14b8a6"}> health</Button>
      </li>
      <li className="category history">
        <Button color={"#f97316"}>History</Button>
      </li>
      <li className="category news">
        <Button color={"#8b5cf6"}>News</Button>
      </li>
    </ul>
  );
}
export default Sidebar