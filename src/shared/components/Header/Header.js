import React from 'react'
import Logo from "../../../images/mainlogo.svg";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div className={Style.navBar}>
      <button className={Style.logo}>
        {" "}
        <img src={Logo} alt="" />{" "}
      </button>

      <a href="home">Ana Səhifə</a>
      <a href="about">Haqqımızda</a>
      <a href="news">Xəbərlər</a>

      <button className={Style.contact}>Əlaqə</button>
    </div>
  );
}

export default Header;
