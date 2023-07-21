import Style from "./Information.module.css";
import React from "react";

const Mualice = () => {
  return (
    <div className={Style.container}>
      <div className={Style.row}>
        <h5 className={Style.title}>Xəstəliyin adı</h5>
        <h6 className={Style.titleSc}>Müalicə üsulları</h6>

        <div className={Style.information}>
          <p className={Style.paragraph}>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
          <p className={Style.paragraph}>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
      </div>
    </div>
  );
};

export default Mualice;
