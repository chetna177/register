import React from "react";
import style from "./video.module.css";
import thumbnail from "./assets/thumbnail.png";
const VideoIntro = () => {
  return (
    <div className={style.introSection}>
      <section className={style.content}>
        <div className={style.top}>
          <div id={style.title}>0ur Video Introductions</div>
          <div>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </div>
        </div>
        <div className={style.bottom}>
          <div>
            <span>
              <i class="fa-solid fa-lightbulb"></i>
            </span>
            <div>
              <p id={style.title}>Explore ideas together</p>
              <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          <div>
            <span>
              <i class="fa-solid fa-arrow-up-right-dots"></i>
            </span>
            <div>
              <p id={style.title}>Bring those ideas to life</p>
              <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.video}>
        <video src="https://www.youtube.com/watch?v=Sbiv3v3_9Xc"  controls  poster={thumbnail}></video>
      </section>
    </div>
  );
};

export default VideoIntro;
