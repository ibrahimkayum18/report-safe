import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
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
            className="md:h-screen w-full"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/jVBT5HL/crime-1862312-1920.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div className="bg-[rgba(0,0,0,0.8)] w-full h-full flex items-center justify-start lg:pl-16 ">
              <div className="text-white text-left">
                <div>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "We Take Action First For Murder",
                      1000,
                      "We Take Action First For Rape",
                      1000,
                      "We Take Action First For Robbery",
                      1000,
                      "We Take Action First For Accident",
                      1000,
                      "We Take Action First For Cybercrime",
                      1000,
                    ]}
                    speed={50}
                    style={{ fontSize: "3em", fontWeight: "700", borderLeft: '15px solid #FF3611', paddingLeft: '10px'}}
                    repeat={Infinity}
                  />
                </div>
                <div>
                  <p className="w-1/2 py-5 font-medium">
                    "Our website provides a safe and anonymous platform for
                    individuals to report crimes they've experienced. We
                    prioritize user privacy and aim to make the reporting
                    process simple and effective. Join us in making your
                    community safer by sharing your experiences and contributing
                    to a more secure future."
                  </p>
                  <Link to={'/report'}>
                    <button  className="btn btn-primary">Report The Crime Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="md:h-screen w-full"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/GHNyZPR/psycho-29041-1280.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div className="bg-[rgba(0,0,0,0.6)] w-full h-full flex items-center justify-start lg:pl-16 ">
              <div className="text-white text-left">
                <div>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "We Take Action First For Murder",
                      1000,
                      "We Take Action First For Rape",
                      1000,
                      "We Take Action First For Robbery",
                      1000,
                      "We Take Action First For Accident",
                      1000,
                      "We Take Action First For Cybercrime",
                      1000,
                    ]}
                    speed={50}
                    style={{ fontSize: "3em", fontWeight: "700", borderLeft: '15px solid #FF3611', paddingLeft: '10px' }}
                    repeat={Infinity}
                  />
                </div>
                <div>
                  <p className="w-1/2 py-5 font-medium">
                    "Our website provides a safe and anonymous platform for
                    individuals to report crimes they've experienced. We
                    prioritize user privacy and aim to make the reporting
                    process simple and effective. Join us in making your
                    community safer by sharing your experiences and contributing
                    to a more secure future."
                  </p>
                  <Link to={'/report'}>
                    <button className="btn btn-primary">Report The Crime Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
