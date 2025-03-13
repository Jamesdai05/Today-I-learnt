import { CATEGORIES } from "../../data.js";
import Button from "../Button/Button.jsx";
import "./sidebar.css";

const Sidebar = ({setCurrentCategory}) => {
  return (
    <ul>
      <li className="category all">
        <Button setCurrentCategory={setCurrentCategory}>all</Button>
      </li>
      {CATEGORIES.map((cate) => (
        <li className="category" key={cate.name}>
          <Button color={cate.color} setCurrentCategory={setCurrentCategory}>
            {cate.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Sidebar