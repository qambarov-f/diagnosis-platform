import React from 'react'
import Style from  "./StepThree.module.css"

const StepThree = () => {
  return (
    <div className={Style.container}>
      <button className={Style.button}>
        <label>Hastalık Seviyesi:</label>
        <div className={Style.severityLevel}>
          <span className={Style.line}></span>
          <span className={Style.line}></span>
          <span className={Style.line}></span>
          <span className={Style.line}></span>
          <span className={Style.line}></span>
        </div>
      </button>
    </div>
  );
};

export default StepThree;
