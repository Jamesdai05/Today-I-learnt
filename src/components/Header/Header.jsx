import logo from "/Images/logo.png";
import "./header.css"


const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="header flex justify-center items-center">
        <img src={logo} alt="logo"/>
        <h1 className="title">TODAY I LEARNED</h1>
      </div>
      <button className="btn uppercase">share a fact</button>
    </header>
  );
}
export default Header