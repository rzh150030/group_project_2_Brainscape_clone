import "./Logo.css";
import logo from "../../images/logo.png";
const Logo = () => {
  return (
    <div id="logo-div">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
