// import { initialFacts } from "../../data.js";
import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./main.css";
import supabase from "../../config/supabaseClient.js";
import Loader from "../Loader/Loader.jsx";
// import { initialFacts } from "../../data.js";


const Main = () => {

  const [facts,setFacts]=useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [fetchError,setFetchError]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true);
      const {data,error} = await supabase.from("Facts").select();

      if(error){
        setFetchError("Unable to get the data");
        // console.log(error);
        setFacts(null);
      };
      if(data){
        setIsLoading(false)
        console.log(data)
        setFacts(data);
        setFetchError(null);
      }
    }
    fetchData();
  },[])


  return (
    <div className="main">
      <Sidebar />
      <div className="data">
        { isLoading ? <Loader /> : facts.map(fact=>(
          <Card
            key={fact.id}
            text={fact.facts}
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