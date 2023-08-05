
//icons
import  { ImPhone } from "react-icons/im"
import { HiMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


// style 
import Style from "./Contact.module.css";

// images
import circle from "../../../images/circle.svg"
import contact from "../../../images/contactpicture.svg"
import atom from "../../../images/atom3d.svg";
import Img from "../../../images/shape4.svg";


const Contact = ()=> {

  const handleInstaClick = () => {
    
    window.location.href = 'https://instagram.com/diagnosiss_pre?igshid=MzNlNGNkZWQ4Mg==';
  };
  const handleTikTokClick = () => {
    
    window.location.href =
      "https://www.tiktok.com/@prediagnosis?_t=8eFXu7Y0C8o&_r=1";
  };

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
            <AiFillInstagram
              className={Style.instagram}
              onClick={handleInstaClick}
            />
            <FaTiktok className={Style.tiktok} onClick={handleTikTokClick} />
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
