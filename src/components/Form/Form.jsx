import "./form.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import { CATEGORIES } from "../../data.js";


const Form = () => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const length = text.length;


  return (
    <form className="form-fact">
      <input type="text" placeholder="Share a fact with the wolrd" />
      <span>{200-length}</span>
      <input type="text" placeholder="Trustworthy source" />
      <select name="category" id="category">
        <option value="" className="uppercase">
          select a category
        </option>
        {CATEGORIES.map(c=><option key={c.name}>{c.name.toUpperCase()}</option>)}
      </select>
      <div className="post">
        <Button>Post</Button>
      </div>
    </form>
  );
}
export default Form