// import { initialFacts } from "../../data.js";
import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";
import supabase from "../../config/supabaseClient.js";
import { initialFacts } from "../../data.js";


const Main = () => {

  const [facts,setFacts]=useState([]);

  const [fetchError,setFetchError]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      const {data,error} = await supabase.from(facts).select();

      if(error){
        setFetchError("Unable to get the data");
        console.log(error);
        setFacts(null);
      };
      if(facts){
        console.log(facts)
        setFacts(facts);
        setFetchError(null);
      }
    }
    fetchData();
  },[facts])


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