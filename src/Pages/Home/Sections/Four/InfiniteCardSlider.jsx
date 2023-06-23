import profile1 from "../../../../assets/Profile/icon1 (12).jpg";
import profile2 from "../../../../assets/Profile/icon1 (13).jpg";
import profile3 from "../../../../assets/Profile/icon1 (14).jpg";
import Card from "./Card";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const InfiniteCardSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card img={profile1} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={profile2} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={profile3} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={profile3} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={profile2} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={profile3} name={"john sumit"} profation={"Developer"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default InfiniteCardSlider;
