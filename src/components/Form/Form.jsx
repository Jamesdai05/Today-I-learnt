import "./form.css";
// import Button from "../Button/Button.jsx";
import { useState } from "react";
import { CATEGORIES } from "../../data.js";
import supabase from "../../config/supabaseClient.js";

// URL validation function
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };


const Form = ({setFacts}) => {
  const [fact, setFact] = useState("");
  const [resource, setResource] = useState("http://example.com");
  let   [category, setCategory] = useState("");
  const [error,setError]=useState(null);
  const length = fact.length;

  // handleForm submit
  const handleSubmit=async(e)=>{
    e.preventDefault()
    // check the data is valid or not
    if(fact&&isValidUrl(resource)&&category && length<200){
      // console.log(fact,resource,category.toLowerCase());
      // the items insert to the table should be the same as the name of columns
      try{
        const lowerCaseCategory=category.toLowerCase()
        const {data:newFact, error} = await supabase.from("Facts").insert([{fact,category:lowerCaseCategory,resource}]).select().single()
        console.log(newFact);
        if(error){
          setError(error.message);
          console.error(error?.data?.message || error?.error)
        }
        if(!error) setFacts(prev=>[...prev,newFact])
        setResource("http://example.com")
        setCategory("")
        setFact("")
        setError(null)

      }catch(e){
        console.error("Error inserting fact:", e.message);
        setError(e.message);
      }
    }else{
      setError("Please provide valide inputs!")
      alert(error);
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
        <option value="" className="uppercase" disabled>
          select a category
        </option>
        {CATEGORIES.map((c) => (
          <option key={c.name} value={c.name.toLowerCase()}>{c.name.toUpperCase()}</option>
        ))}
      </select>
      <div className="post">
        <button type="submit" className="btn post">
          Post
        </button>
      </div>
      {/* {error && <p className="error-message">{error}</p>} */}
    </form>
  );
}

export default Form;