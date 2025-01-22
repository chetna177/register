import React from "react";
import style from "./about.module.css";
import photo from "./assets/photo.png";

const About = () => {
  return (
    <div className={style.aboutSection}>
      <section className={style.left}>
        <section className={style.top}>
          <div id={style.firstitle}>WELCOME TO REGISTERKARO.IN</div>
          <div id={style.secondtitle}>Explore <span > Our Services</span></div>
        </section>
        <p>
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
        </p>
        <p>
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>

        <button>Learn More<i class="fa-regular fa-circle-right"></i></button>
      </section>
      <section className={style.right}>
        <div className="photo">
            <img src={photo} alt=""  height="422px" width="582px"/>
        </div>
      </section>
    </div>
  );
};

export default About;
