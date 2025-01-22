import React from "react";
import styles from "./explore.module.css";

const Explore = () => {
  return (
    <div className={styles.exploreSection}>
      <section className={styles.top}>
        <div id={styles.firstitle}>WELCOME TO REGISTERKARO.IN</div>
        <div id={styles.secondtitle}>Explore Our Services</div>
      </section>
      <section className={styles.center}>
        <div className={styles.element} id={styles.greyborder}>
          <i class="fa-solid fa-gear"></i>

          <div className={styles.title}>Company Formation</div>
          <div>Build web-based solutions that enhance customer experience</div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
        <div className={styles.element} id={styles.greyborder}>
          <i class="fa-solid fa-magnifying-glass"></i>

          <div className={styles.title}> Company Secretarial Services</div>
          <div>
            Make data-driven decisions and utilize technology to reach business
            goals.
          </div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
        <div className={styles.element}>
          <i class="fa-solid fa-users"></i>

          <div className={styles.title}>Virtual Office Address</div>
          <div>
            Foster customer relationships by effectively serving your market.
          </div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
        <div className={styles.element} id={styles.greyborder}>
          <i class="fa-solid fa-laptop"></i>
          <div className={styles.title}>Annual Compliance Services</div>
          <div>
            Turn your ideas into modern products with our design experts
          </div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
        <div className={styles.element} id={styles.greyborder}>
          <i class="fa-solid fa-cart-shopping"></i>
          <div className={styles.title}>Payroll Services</div>
          <div>Expand your business across the globe with minimal effort.</div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
        <div className={styles.element}>
          <i class="fa-solid fa-bullhorn"></i>

          <div className={styles.title}>Bookkeeping Services</div>
          <div>
            Steering user behaviours with creative design, data insights &
            technology.
          </div>
          <div>
            Learn More <i class="fa-regular fa-circle-right"></i>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <button>See All Services</button>
      </section>
    </div>
  );
};

export default Explore;
