
//icons
import  { ImPhone } from "react-icons/im"
import { HiMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


// style 
import Style from "./Contact.module.css";

// images
import circle from "../../../images/circle.svg"
import contact from "../../../images/contactpicture.svg"
import atom from "../../../images/atom3d.svg";
import Img from "../../../images/shape4.svg";


const Contact = ()=> {
  return (
    <div className={Style.mainContainer}>
      <img alt="circle" src={circle} className={Style.circle} />
      <div className={Style.container}>
        <div className={Style.icons}>
          <h2 className={Style.title}>Bizimlə əlaqə</h2>

          <span className={Style.phone}>
            {" "}
            <ImPhone className={Style.phoneIcon} /> +994 55 222 22 22
          </span>
          <span className={Style.gmail}>
            <HiMail className={Style.gmailIcon} /> diagnosispre@gmail.com
          </span>

          <div className={Style.socialMedia}>
            <AiFillInstagram className={Style.instagram} />
            <BsFacebook className={Style.facebook} />
            <FaTiktok className={Style.tiktok} />
          </div>
        </div>
        <img alt="contact" src={contact} className={Style.contactImage} />
      </div>
      <img alt="#" src={Img} className={Style.imageWave} />
      <img alt="#" src={atom} className={Style.atom} />
    </div>
  );
}

export default Contact
