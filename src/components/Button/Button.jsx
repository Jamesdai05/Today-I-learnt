import { CATEGORIES } from "../../data.js";
import "./Button.css";

const Button = ({children}) => {

  // for (const element of CATEGORIES) {
  //   if (element.name === children) {
  //     // const index=CATEGORIES.indexOf(element);
  //     const color = element.color;
  //     return color
  //   }
  // }

  const getColor=(children)=>{
    for(const element of CATEGORIES){
      if(element.name === children){
        return element.color;
      }
    }
  }
  const color=getColor(children);
  // const color= getColor(children);

  const style={backgroundColor:color,fontFamily:"Coiny",fontSize:"17px"}

  return (
    <button className="btn-category uppercase" type="button" style={style}>{children}</button>
  )
}
export default Button