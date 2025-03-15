import Voting from "../Voting/Voting.jsx";
import "./card.css";

import Button from "../Button/Button.jsx";
import { CATEGORIES } from "../../data.js";
import supabase from "../../config/supabaseClient.js";
import { useState } from "react";

const Card = ({fact,setFacts}) => {
  // console.log(initialFacts.text);

  const [isUpdating,setIsUpdating]=useState(false);

  const categoryInfo = CATEGORIES.find((cat) => cat.name === fact.category.toLowerCase());
  // in case the categoryInfo is not in the array
  const color = categoryInfo?.color || "oklch(0.577 0.245 27.325)";


  const handleVote=async(columnName)=>{
    // console.log("voted")
    setIsUpdating(true)
    const { data:updatedFact, error } = await supabase
    .from('Facts')
    .update({ [columnName]: fact[columnName]+1, })
    .eq('id',fact.id)
    .select()

    setIsUpdating(false);
    // console.log(updatedFact)
    // to set the newFacts for fact whose id is equal to the id of to be updated fact
    if(!error) setFacts((facts)=>facts.map(f=>fact.id === f.id ? updatedFact[0] : f))

  }



  return (
    <section className="p-2">
      <p>
        {fact.fact}<a href={fact.resource}>(Source)</a>
      </p>
      <div className="tag">
        <Button color={color}>{fact.category}</Button>
      </div>
      <div>
        <Voting interesting={fact.votesInteresting} votingFalse={fact.votesFalse} mindBlowing={fact.votesMindblowing} handleVote={handleVote} isUpdating={isUpdating}/>
      </div>
    </section>
  );
}
export default Card;