import React from "react";
import style from "./clients.module.css";
import background from "./assets/clients.png"
import icon1 from "./assets/i1.png";
import icon2 from "./assets/i2.png";
import icon3 from "./assets/i3.png";
import icon4 from "./assets/i5.png";
import icon5 from "./assets/i6.png";
import icon6 from "./assets/i7.png";
import icon7 from "./assets/i8.png";
import icon8 from "./assets/diamond.png";
import icon9 from "./assets/fox.png";


const Clients = () => {
  return (
    <div className={style.clientSection}>
      <section className={style.content}>
        <p className={style.heading}>Our Happy Clients</p>
        <p>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </section>
      <section className={style.background}>
            <div className={style.icon1}><img src={icon1} alt=""  /></div>
            <div className={style.icon2}><img src={icon2} alt="" /></div>
            <div className={style.icon3}><img src={icon3} alt="" /></div>
            <div className={style.icon4}><img src={icon4} alt="" /></div>
            <div className={style.icon5}><img src={icon5} alt="" /></div>
            <div className={style.icon6}><img src={icon6} alt="" /></div>
            <div className={style.icon7}><img src={icon7} alt="" /></div>
            <div className={style.icon8}><img src={icon8} alt="" /></div>
            <div className={style.icon9}><img src={icon9} alt="" /></div>
            <div className={style.icon10}><img src={icon8} alt="" /></div>
            <div className={style.icon11}><img src={icon7} alt="" /></div>
            <div className={style.icon12}><img src={icon3} alt="" /></div>
           <button>show more <i class="fa-solid fa-arrow-right"></i></button>
      </section>
      <section className={style.fee}>
        <div id={style.icon1}><i class="fa-solid fa-newspaper"></i> </div>Fill the Application form
        <div id={style.icon2}> <i class="fa-solid fa-money-check"></i> </div>Make online payment
        <div id={style.icon3}><i class="fa-solid fa-headphones-simple"></i> </div>Executive will process an Application
        <div id={style.icon4}><i class="fa-solid fa-envelope"></i>  </div> Get Confirm email
      </section>
    </div>
  );
};

export default Clients;
