
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import review from "./assets/review.png";
const Slide = () => {
  return (
    <div>
      <h1>What People Says About Us</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
        <SwiperSlide><img src={review} alt="" /></SwiperSlide>
      </Swiper>
   
    </div>
  )
}

export default Slide
