import "./Button.css";

const Button = ({children}) => {
  // const style={backgroundColor:color}

  return (
    <button className="btn-category uppercase" type="button">{children}</button>
  )
}
export default Button