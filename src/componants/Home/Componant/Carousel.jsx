import React, { useRef, useState } from "react";
import './Style/Carousel.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carousel_image from "../../../assets/carousel_image.jpg"
import carousel_image2 from "../../../assets/carousel_image2.jpg"
import carousel_image3 from "../../../assets/carousel_image3.jpg"

const Carousel = () => {
  return (
    <div></div>
  //   <>
  //   <Swiper
  //   spaceBetween={30}
  //   centeredSlides={true}
  //   autoplay={{
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   }}
  //   pagination={{
  //     clickable: true,
  //   }}
  //   navigation={true}
  //   modules={[Autoplay, Pagination, Navigation]}
  //   className="mySwiper"
  // >
  //   <SwiperSlide><img src={carousel_image} alt="" /></SwiperSlide>
  //   <SwiperSlide><img src={carousel_image2} alt="" /></SwiperSlide>
  //   <SwiperSlide><img src={carousel_image3} alt="" /></SwiperSlide>
  //   {/* <SwiperSlide>Slide 4</SwiperSlide> */}
  //   {/* <SwiperSlide>Slide 5</SwiperSlide> */}
  //   {/* <SwiperSlide>Slide 6</SwiperSlide> */}
  //   {/* <SwiperSlide>Slide 7</SwiperSlide> */}
  //   {/* <SwiperSlide>Slide 8</SwiperSlide> */}
  //   {/* <SwiperSlide>Slide 9</SwiperSlide> */}
  // </Swiper></>
  )
}

export default Carousel