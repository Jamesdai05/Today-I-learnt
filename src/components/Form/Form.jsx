import "./form.css";
import Button from "../Button/Button.jsx";

const Form = () => {
  return (
    <form className="form-fact">
      <input type="text" placeholder="Share a fact with the wolrd" />
      <span>200</span>
      <input type="text" placeholder="Trustworthy source" />
      <select name="category" id="category">
        <option value="" className="uppercase">
          select a category
        </option>
        <option value="" className="uppercase">
          Technology
        </option>
        <option value="" className="uppercase">
          Sience
        </option>
        <option value="" className="uppercase">
          Finance
        </option>
        <option value="" className="uppercase">
          Society
        </option>
        <option value="" className="uppercase">
          Entertainment
        </option>
        <option value="" className="uppercase">
          Healthy
        </option>
        <option value="" className="uppercase">
          History
        </option>
        <option value="" className="uppercase">
          News
        </option>
      </select>
      <div className="post">
        <Button>Post</Button>
      </div>
    </form>
  );
}
export default Form