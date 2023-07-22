import React from 'react'
import Logo from "../../../images/mainlogo.svg";
import Style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
 
  const navigate = useNavigate(); 

  return (
    <div className={Style.navBar}>
      <button onClick={() => navigate("/")} className={Style.logo}>
        <img src={Logo} alt="Diagnosis-logo" />
      </button>

      <Link to="/home" className="nav-link">
        Ana Səhifə
      </Link>
      <a href="about">Haqqımızda</a>
      <a href="news">Xəbərlər</a>

      <button className={Style.contact}>Əlaqə</button>
    </div>
  );
}

export default Header;
