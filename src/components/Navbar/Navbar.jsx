import { useState } from "react";
import images from "../../constants/images";
import "./navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={images.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={images.search_icon} alt="SearchIcon" className="" />
        <div className="navbar-search-icon">
          <img src={images.basket_icon} alt="" className="" />
          <div className="dot"></div>
        </div>
        <button type="button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
