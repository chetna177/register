import React from "react";
import style from "./clients.module.css";
import background from "./assets/clients.png"

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
           <img src={background} alt=""  />
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
