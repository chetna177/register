import React from "react";
import style from "./home.module.css";
import samsung from "./assets/samsung.avif";
import oracle from "./assets/Oracle-Logo.png";
import morpheus from "./assets/Morpheus-horizontal.webp";
import monday from "./assets/Monday-Com-Logo.png";
import segment from "./assets/segment7123.jpg";

const HomeTop = () => {
  return (
    <>
      <div className={style.HomeTop}>
        <button>Talk An Expert</button>
      </div>
      <div className={style.brand}>
        <p>Trusted By Over 100+ Startups and freelance business</p>
        <div className={style.logo}>
          <div>
            <img src={oracle} alt="" height="100px" width="120px" />
          </div>
          <div>
            <img src={morpheus} alt="" height="100px" width="160px" />
          </div>
          <div>
            <img src={morpheus} alt="" height="100px" width="160px" />
          </div>
          <div>
            <img src={samsung} alt="" height="140px" width="150px" />
          </div>
          <div>
            <img src={monday} alt="" height="160px" width="150px" />
          </div>
          <div>
            <img src={segment} alt="" height="150px" width="180px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTop;
