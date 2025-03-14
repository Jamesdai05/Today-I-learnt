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
  const [currentCategory,setCurrentCategory]=useState("all");

  useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true);

      let query=supabase.from("Facts").select("*")

      if(currentCategory !=="all") query=query.eq("category",currentCategory);


      const {data,error} = await query.limit(100)

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
  },[currentCategory])


  return (
    <div className="main">
      <Sidebar setCurrentCategory={setCurrentCategory} />

      {facts.length === 0 ? (
        <p className="font-bold text-3xl">
          No facts for this category yet! Create the first one ✌️
        </p>
      ) : (
        <div className="data">
          {isLoading ? (
            <Loader />
          ) : (
            facts.map((fact) => (
              <Card
                key={fact.id}
                text={fact.facts}
                category={fact.category}
                source={fact.resource}
                interesting={fact.votesInteresting}
                mindBlowing={fact.votesMindblowing}
                votesFalse={fact.votesFalse}
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