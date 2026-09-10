// import mainSliderData from "@/data/mainSliderData";
// import React from "react";
// import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
// import { Swiper } from "swiper/react";
// import SingleSlide from "./SingleSlide";

// SwiperCore.use([Autoplay, Navigation, EffectFade]);

// const mainSlideOptions = {
//   slidesPerView: 1,
//   loop: true,
//   effect: "fade",
//   navigation: {
//     nextEl: "#main-slider__swiper-button-next",
//     prevEl: "#main-slider__swiper-button-prev",
//   },
//   autoplay: {
//     delay: 5000,
//   },
// };

// const MainSlider = () => {
//   return (
//     <section className="main-slider">
//       <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
//         <div className="swiper-wrapper">
//           {mainSliderData.map((slide) => (
//             <SingleSlide key={slide.id} slide={slide} />
//           ))}
//         </div>
//         <div className="main-slider-nav">
//           <div
//             id="main-slider__swiper-button-prev"
//             className="main-slider-button-prev"
//           >
//             <span className="icon-right-arrow"></span>
//           </div>
//           <div
//             id="main-slider__swiper-button-next"
//             className="main-slider-button-next"
//           >
//             <span className="icon-right-arrow"></span>{" "}
//           </div>
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default MainSlider;

"use client";
import Link from "next/link";
import React from "react";
import mainSliderData from "@/data/mainSliderData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const mainSlideOptions = {
  modules: [Autoplay, Navigation, EffectFade],
  slidesPerView: 1,
  loop: true,
  effect: "fade",

  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const MainSlider = () => {
  return (
    <>
      {" "}
      <section className="main-slider">
        <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
          {mainSliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="main-slider__single"
                style={{
                  backgroundImage: `url(${slide.bg.src})`,
                }}
              >
                {/* Dark Overlay */} <div className="main-slider__overlay" />
                ```
                {/* Content */}
                <div className="container">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">{slide.subTitle}</p>

                    <h1 className="main-slider__title">{slide.title}</h1>

                    <Link href="/contact" passHref>
                      <a className="thm-btn">Explore Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation */}
          <div className="main-slider-nav">
            <div
              id="main-slider__swiper-button-prev"
              className="main-slider-button-prev"
            >
              <span className="icon-right-arrow" />
            </div>

            <div
              id="main-slider__swiper-button-next"
              className="main-slider-button-next"
            >
              <span className="icon-right-arrow" />
            </div>
          </div>
        </Swiper>
      </section>
      {/* CSS IN SAME FILE */}
      <style jsx>{`
        .main-slider {
          position: relative;
          width: 100%;
        }

        .main-slider__single {
          position: relative;
          width: 100%;
          min-height: 700px;

          display: flex;
          align-items: center;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .main-slider__overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;

          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        .main-slider__content {
          max-width: 800px;
        }

        .main-slider__sub-title {
          color: #ffffff;
          font-size: 20px;
          margin-bottom: 15px;
        }

        .main-slider__title {
          color: #ffffff;
          font-size: 65px;
          line-height: 1.1;
          margin: 0 0 30px;
        }

        .thm-btn {
          display: inline-block;
          padding: 10px 35px;
          color: #ffffff;
          background: #e8604c;
          text-decoration: none;
          border-radius: 4px;
        }

        .main-slider-nav {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;

          transform: translateY(-50%);

          display: flex;
          justify-content: space-between;

          padding: 0 30px;

          z-index: 10;
          pointer-events: none;
        }

        .main-slider-button-prev,
        .main-slider-button-next {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;

          cursor: pointer;

          pointer-events: auto;
        }

        .main-slider-button-prev {
          transform: rotate(180deg);
        }

        @media (max-width: 768px) {
          .main-slider__single {
            min-height: 500px;
          }

          .main-slider__title {
            font-size: 40px;
          }

          .main-slider__sub-title {
            font-size: 16px;
          }

          .main-slider-nav {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
};

export default MainSlider;
