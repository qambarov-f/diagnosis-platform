import React from "react"
import Style from "./Footer.module.css"
const Footer = () => {
    return (
      <footer className={Style.footer}>
        <h6 className={Style.text}>© 2023 Pre Diagnosis</h6>
        <h6 className={Style.text}>Bütün hüquqlar qorunur</h6>
      </footer>
    );
}
export default Footer;