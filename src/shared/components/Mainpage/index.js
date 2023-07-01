// css
import Style from "./main.module.css";

// components
import About from "../About";
import NewsList from "../NewsList";
import Contact from "../Contact";

// api
import { getNews } from "../../../Api/getNews";

// image
import mainImage from "../../../images/blok1.svg";
import Spiral from "../../../images/spiral.png";
import Circle from "../../../images/circle.svg";
import Atom from "../../../images/atom3d.svg";


const MainPage = () => {

  const news = getNews();
  // console.log("news", news);

  return (
    <>
      <div className={Style.main}>
        <div>
          <h2 className={Style.text}>
            Xarici görünüşün çox böyük <br /> rol oynadığı bu dövrdə <br />{" "}
            dərinizin sağlamlığına <br />
            bizimlə qovuşun!
          </h2>
          <h6 className={Style.textSecond}>
            Elə indi qeydiyyatdan keç və müalicəyə başla!
          </h6>
          <button className={Style.button}>Başla</button>
        </div>
        <img alt="#" src={mainImage} className={Style.image} />
      </div>
      <img alt="#" src={Spiral} className={Style.spiral} />
      <img alt="#" src={Circle} className={Style.circle} />
      <img alt="#" src={Circle} className={Style.circleLittle} />
      <img alt="#" src={Atom} className={Style.atom} />

      <About />
      <NewsList data={news} />
      <Contact />
    </>
  );
};

export default MainPage;
