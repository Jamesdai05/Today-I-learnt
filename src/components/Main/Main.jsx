import Card from "../Card/Card.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="data">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Main;