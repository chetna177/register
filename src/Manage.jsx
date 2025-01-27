import React, { useState } from "react";
import style from "./manage.module.css";
import bg from "./assets/b.png";

const Manage = () => {
     

    let[tel,setTel] = useState("tel")
     
    


  return (
    <>
    <div className={style.manageContainer}>
      <section className={style.content}>
        <div className={style.title}>Manage Your Services by your Mobile Phone</div>
        <div className={style.descript}>
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </div>
        <h1>Get The App</h1>
        <div className={style.link}>
          <button> <i class="fa-brands fa-apple"></i><div><h1>Get it on </h1>
                         <h1>App Store</h1></div></button>
          <button>
          <i class="fa-brands fa-google-play"></i><div><h1>Get it on </h1>
          <h1>Play Store</h1></div>
          </button>
        </div>
      </section>
      <section className={style.animation}>
        <div className={style.anime1} ></div>
        <div className={style.anime2} ></div>
      </section>

    
    </div>
      <section className={style.bg}>
      <img src={bg} alt="" width="100%"/>
    </section>

    </>
  );
};

export default Manage;
