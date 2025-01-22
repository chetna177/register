import React from "react";
import style from "./navbar1.module.css";
const NavBar1 = () => {
  return (
    <div>
      <nav>
        <section className={style.sociallinks}>
          <div id={style.links}>
            <div id={style.email}>
              <i class="fa-solid fa-envelope"></i> www.registerkaro.in
            </div>
            <div id={style.phoneno}>
              <i class="fa-solid fa-phone-flip"></i> +918447746183
            </div>
          </div>
          <div id={style.icons}>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavBar1;
