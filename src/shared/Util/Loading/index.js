import React from 'react'
import Style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={Style.container}>
      <span className={Style.loader}></span>
    </div>
  );
}

export default Loading;
