// import { initialFacts } from "../../data.js";
import { useState } from "react";
import Card from "../Card/Card.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";

const Main = () => {

  const [facts,setFacts]=useState([]);

  const 


  return (
    <div className="main">
      <Sidebar />
      <div className="data">
        {initialFacts.map(fact=>(
          <Card
            key={fact.id}
            text={fact.text}
            category={fact.category}
            source={fact.source}
            interesting={fact.votesInteresting}
            mindBlowing={fact.votesMindblowing}
            votesFalse={fact.votesFalse} />))}
      </div>
    </div>
  )
}
export default Main;