import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import crimes from './Crimes.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
          data-aos="fade-up"
            className="md:h-screen w-full overflow-hidden"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/jVBT5HL/crime-1862312-1920.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div className="bg-[rgba(0,0,0,0.8)] w-full h-screen flex items-center justify-start lg:pl-16 ">
              <div className="text-white text-left lg:flex justify-center items-center">
                <div className="px-5 lg:w-1/2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Report Crimes Now</h1>
                  <p className=" py-5 font-medium">
                    "Our website provides a safe and anonymous platform for
                    individuals to report crimes they've experienced. We
                    prioritize user privacy and aim to make the reporting
                    process simple and effective. "
                  </p>
                  <Link to={'/report'}>
                    <button  className="btn btn-primary">Report The Crime Now</button>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <Lottie animationData={crimes} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
