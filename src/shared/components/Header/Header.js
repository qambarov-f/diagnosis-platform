import React from 'react'
import Logo from "../../../images/mainlogo.svg";
import Style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
 
  const phoneNumber = '+994553281949';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const navigate = useNavigate(); 

  return (
    <div className={Style.navBar}>
      <button onClick={() => navigate("/")} className={Style.logo}>
        <img src={Logo} alt="Diagnosis-logo" />
      </button>

      <Link to="/home" className="nav-link">
        Ana Səhifə
      </Link>
      <ScrollLink
        to="haqqimizda"
        spy={true}
        smooth={true}
        offset={-70}
        duration={300}
      >
        Haqqımızda
      </ScrollLink>
      <ScrollLink
        to="xeberler"
        spy={true}
        smooth={true}
        offset={-70}
        duration={300}
      >
        Xəbərlər
      </ScrollLink>

      <button className={Style.contact} onClick={handleCall}>
        Əlaqə
      </button>
    </div>
  );
}

export default Header;
