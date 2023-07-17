import Style from "./İnformation.module.css";
import React from "react";

const Information = () => {
  return (
    <div className={Style.container}>
      <div className={Style.row}>
        <h5 className={Style.title}>Xəstəliyin adı</h5>
        <h6 className={Style.titleSc}>Təhlükəlilik səviyyəsi</h6>

        <div className={Style.information}>
          <h6 className={Style.infoTitle}>Ümumi Məlumat</h6>
          <p className={Style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur manim id es. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, to Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur error sit voluptatem accusantium doloremque
            laudantium, to Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur ma.
          </p>
        </div>

        <div className={Style.information}>
          <h6 className={Style.infoTitle}>Simptomları</h6>
          <p className={Style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur ma.
          </p>
        </div>

        <div className={Style.buttonsContainer}>
          <h6 className={Style.btnTitle}>
            Bu xəstəliyin sizdə olduğunu düşünürsünüzmü?
          </h6>
          <button className={Style.buttons}>Bəli</button>
          <button className={Style.buttons}>Xeyir</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
