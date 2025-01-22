import React from "react";
import style from "./choose.module.css";
const Choose = () => {
  return (
    <div className={style.chooseSection}>
      <section className={style.leftPart}>
        <section className={style.top}>
          <div id={style.firstitle}>WELCOME TO REGISTERKARO.IN</div>
          <div id={style.secondtitle}>Why Choose Register Karo</div>
          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
          <div className={style.box} id={style.b1}>
            <div>
              <i class="fa-solid fa-face-smile"></i>
            </div>
            <div>Guaranteed Satisfaction</div>
            <div>
              We ensure that you stay 100% satisfied with our offered services
            </div>
          </div>
        </section>
      </section>
      <section className={style.rightPart}>
        <div className={style.box} id={style.b2}>
          <div>
          <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div>Confidential & Safe</div>
          <div>All your private information is safe with us</div>
        </div>
        <div className={style.box} id={style.b3}>
          <div>
          <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>No Hidden Fee</div>
          <div>
            Everything is put before you with no hidden charges or conditions
          </div>
        </div>
        <div className={style.box} id={style.b4}>
          <div>
          <i class="fa-solid fa-user"></i>
          </div>
          <div>Expert CA/CS Assistance</div>
          <div>Prompt support from our in-house expert professionals</div>
        </div>
        <div className={style.box} id={style.b5}>
          <div>
          <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div>Confidential & Safe</div>
          <div>All your private information is safe with us</div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
