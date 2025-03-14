// import { CATEGORIES } from "../../data.js";
import "./Button.css";

const Button = ({children,color,setCurrentCategory}) => {



  const style={backgroundColor:color,fontFamily:"Coiny",fontSize:"17px"}

  return (
    <button className="btn-category uppercase" style={style} type="button" onClick={()=>setCurrentCategory(children)}>{children}</button>
  )
}
export default Button