// import React, { useState } from "react";
// import News from "../News";
// import Style from "./NewsList.module.css";

// const NewsList = (props) => {
//   let { data } = props;

//  const [show, setShow] = useState(true); 

//   return (
//     <>
//       <div className={Style.container}>
//         <h2 className={Style.title}>Ən son yeniliklər</h2>
//         {show ? (
//           <div className={Style.newsContainer}>
//             {data.map((item) => (
//               <News key={`card-products-id-${item.id}`} {...item} />
//             ))}
//           </div>
//         ) : null}
//         <button onClick={() => setShow(!show)} className={Style.button}>
//           Daha çox
//         </button>
//       </div>
//     </>
//   );
// };

// export default NewsList;

import React, { useState } from "react";
import News from "../News";
import Style from "./NewsList.module.css";


const NewsList = (props) => {
  const { data } = props;

  const [showAll, setShowAll] = useState(false);

  // const handleToggle = () => {
  //   setShowAll(!showAll);
  // };

  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <>
      <div id="xeberler" className={Style.container}>
        <h2 className={Style.title}>Ən son yeniliklər</h2>
        <div className={Style.newsContainer}>
          {visibleData.map((item) => (
            <News key={`card-products-id-${item.id}`} {...item} />
          ))}
        </div>
        <button onClick={() => setShowAll(!showAll)} className={Style.button}>
          {showAll ? "Daha az" : "Daha çox"}
        </button>
      </div>
    </>
  );
};

export default NewsList;
