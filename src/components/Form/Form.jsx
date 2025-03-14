import "./form.css";
// import Button from "../Button/Button.jsx";
import { useState } from "react";
import { CATEGORIES } from "../../data.js";
import supabase from "../../config/supabaseClient.js";

const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    console.log(e);
    return false;
  }
};


const Form = ({setFacts}) => {
  const [fact, setFact] = useState("");
  const [resource, setResource] = useState("http://exaple.com");
  const [category, setCategory] = useState("");
  const [error,setError]=useState(null);
  const length = fact.length;

  // handleForm submit
  const handleSubmit=async(e)=>{
    e.preventDefault()
    // check the data is valid or not
    if(fact&&isValidUrl(resource)&&category && length<200){
      // console.log(fact,source,category)
      // the items insert to the table should be the same as the name of columns
      try{
        const {data:newFact, error} = await supabase.from("Facts").insert([{fact,category,resource}]).single()
        console.log(newFact);
        if(error){
          alert("There are errors",error);
          console.log(error?.data?.message || error?.error)
        }
        setFacts(prev=>[...prev,newFact])
        setResource("")
        setCategory("")
        setError(null)

      }catch(e){
        console.error("Error inserting fact:", e.message);
        setError(e.message);
      }
    }else{
      setError("Please provide valide inputs!")
    }
  }

  return (
    <form className="form-fact" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the wolrd"
        value={fact}
        onChange={(e) => setFact(e.target.value)}
      />
      <span>{200 - length}</span>
      <input
        type="text"
        placeholder="Trustworthy source"
        value={resource}
        onChange={(e) => setResource(e.target.value)}
      />
      <select
        name="category"
        id="category"
        aria-label="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" className="uppercase">
          select a category
        </option>
        {CATEGORIES.map((c) => (
          <option key={c.name}>{c.name.toUpperCase()}</option>
        ))}
      </select>
      <div className="post">
        <button type="submit" className="btn post">
          Post
        </button>
      </div>
    </form>
  );
}

export default Form;