import Style from "./News.module.css";

const News = (props) => {
  let { desc, image_url } = props;

  return (
    <div className={Style.cardContainer}>
      <div className={Style.imageContainer}>
        <img src={image_url} alt="#" />
      </div>
      <div className={Style.cardBody}>
        <p className={Style.description}>{desc}</p>
      </div>
    </div>
  );
};

export default News;
