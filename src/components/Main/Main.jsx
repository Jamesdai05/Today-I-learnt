import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="data">
        Main content here.
      </div>
    </div>
  )
}
export default Main;