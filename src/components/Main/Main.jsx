// import { initialFacts } from "../../data.js";
// import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";

// import { initialFacts } from "../../data.js";


const Main = ({facts,setCurrentCategory}) => {


  return (
    <div className="main">
      <Sidebar setCurrentCategory={setCurrentCategory} />

      {facts.length === 0 ? (
        <p className="font-bold text-3xl">
          No facts for this category yet! Create the first one ✌️
        </p>
      ) : (
        <div className="data">
          {(
            facts.map((ele) => (
              <Card
                key={ele.id}
                fact={ele.fact}
                category={ele.category}
                resource={ele.resource}
                interesting={ele.votesInteresting}
                mindBlowing={ele.votesMindblowing}
                votesFalse={ele.votesFalse}
              />
            ))
          )}
          <p className="font-normal text-2xl">
            There are total {facts.length} facts in the database.
          </p>
        </div>
      )}
    </div>
  );
}
export default Main;