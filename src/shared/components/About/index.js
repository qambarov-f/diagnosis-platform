import Style from "./About.module.css";

// images
import AboutImg from "../../../images/haqqimizda.svg"
import Circle from "../../../images/circle.svg";
import Donate from "../../../images/donate3d.svg";

const About = () => {
  return (
    <div className={Style.container}>
      <img alt="#" src={AboutImg} className={Style.aboutImage} />
      <div className={Style.textContainer}>
        <h3 className={Style.title}>Haqqımızda</h3>
        <h6 className={Style.text}>
          Bu veb sayt "Pre-diagnose Platform" komandası tərəfindən
          yaradılmışdır. Saytın məqsədi bütün gözlə görülə bilən xəstəliklərin
          verdiyi simptomlarla xəstəliklərə diaqnostikanınin qoyulmasi və onun
          qısa müddətdə müalicəsinin istifadəçiyə verilməsi. Eyni zamanda
          pasiyentlərdə ciddi simptomlar aşkarlanarsa onlara bununla bağlı
          xəbərdarlığın göndərilməsi.
        </h6>
      </div>
      <img alt="circle" src={Circle} className={Style.circle} />
      <img alt="circle" src={Circle} className={Style.circleLittle} />
      <img alt="donate" src={Donate} className={Style.donate} />
    </div>
  );
}

export default About;