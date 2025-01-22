import React from "react";
import style from "./blog.module.css";
import c1 from "./assets/content1.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";
import c5 from "./assets/c6.jpg";
const Blogs = () => {
  return (
    <div className={style.blogSection}>
      <section className={style.heading}>
        <div id={style.firstitle}>Explore Our Blogs</div>
        <div id={style.secondtitle}>Accelerate Digital Transformation</div>
      </section>
      <section className={style.content}>
        <div className={style.box}>
          <div>
            <img src={c1} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Small business and StartUp{" "}
            <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
        <div className={style.box}>
          <div>
            <img src={c3} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Scale-Up Company Offer <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
        <div className={style.box}>
          {" "}
          <div>
            <img src={c3} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Growing Business Package <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
        <div className={style.box}>
          {" "}
          <div>
            <img src={c1} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Small business and StartUp{" "}
            <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
        <div className={style.box}>
          {" "}
          <div>
            <img src={c4} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Small business and StartUp{" "}
            <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
        <div className={style.box}>
          {" "}
          <div>
            <img src={c5} alt="" height="240px" width="380px" />
          </div>
          <h6>Prabhas Mishra . 1 Jan 2023 . Today</h6>
          <h1>
            Small business and StartUp{" "}
            <i class="fa-solid fa-location-arrow"></i>
          </h1>
          <p>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className={style.btn}>
            {" "}
            <div>Tax & Audit</div>
            <div>Management</div>
          </div>
        </div>
      </section>
      <button>
        Show more Blogs <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};

export default Blogs;
