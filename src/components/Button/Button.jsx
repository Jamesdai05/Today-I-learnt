import "./Button.css";

const Button = ({children,color}) => {
  const style={backgroundColor:color}

  return (
    <button className="btn-category uppercase" type="button" style={style}>{children}</button>
  )
}
export default Button