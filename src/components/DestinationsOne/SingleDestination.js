// import Link from "next/link";
// import React from "react";
// import { Col, Image } from "react-bootstrap";

// const SingleDestination = ({ destination = {} }) => {
//   const { image, title, tours, subTitle, col } = destination;

//   return (
//     <Col xl={col} lg={col}>
//       <div className="destinations-one__single">
//         <div className="destinations-one__img">
//           <Image
//             // src={require(`@/imes/desagtination/${image}`).default.src}
//             src={image.src}
//             alt={title}
//           />
//           <div className="destinations-one__content">
//             {subTitle && (
//               <p className="destinations-one__sub-title">{subTitle}</p>
//             )}
//             <h2 className="destinations-one__title">
//               <Link href="/destinations-details">{title}</Link>
//             </h2>
//           </div>
//           <div className="destinations-one__button">
//             <a href="#">{tours} tours</a>
//           </div>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default SingleDestination;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DestinationCard = ({ destination }) => {
  const [hovered, setHovered] = useState(false);

  const { image, title, tours, subTitle, slug } = destination;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      {/* FULL CARD IMAGE */}
      {/* <img
        src={image.src}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
        style={{
          zIndex: 0,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      /> */}

      <img
  src={image.src}
  alt={title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    zIndex: 0,
    transform: hovered ? "scale(1.08)" : "scale(1)",
    transition: "transform 0.6s ease",
  }}
/>
      {/* BLACK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: hovered ? "rgba(0,0,0,0.60)" : "rgba(0,0,0,0.20)",
          transition: "background 0.4s ease",
        }}
      />

      {/* TOURS BADGE */}
      {tours !== undefined && tours !== null && (
        <div
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            zIndex: 3,

            padding: "10px 16px",
            borderRadius: "8px",

            background: "#e8604c",
            color: "#fff",

            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "1px",

            opacity: hovered ? 1 : 0,

            transform: hovered ? "translateY(0)" : "translateY(-20px)",

            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {tours} {Number(tours) === 1 ? "TOUR" : "TOURS"}
        </div>
      )}

      {/* TEXT ON TOP OF IMAGE */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,

          zIndex: 3,

          padding: "25px",

          transform: hovered ? "translateY(0)" : "translateY(0)",

          transition: "transform 0.4s ease",
        }}
      >
        {/* SUBTITLE */}
        {subTitle && (
          <p
            style={{
              margin: "0 0 8px",
              color: "#e8604c",
              fontSize: "16px",
              fontStyle: "italic",

              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(20px)",

              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {subTitle}
          </p>
        )}

        {/* TITLE */}
        <h2
          style={{
            margin: 0,
            padding: 0,
            lineHeight: "1.2",
            color: "#fff",
          }}
        >
          <Link
            href={`/tour-packages/${slug}`}
            style={{
              display: "block",
              color: "#fff",
              fontSize: "30px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

const DestinationsSlider = ({ destinations = [] }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "70px",
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".dest-slider-next",
          prevEl: ".dest-slider-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {destinations.map((destination) => (
          <SwiperSlide
            key={destination.id}
            style={{
              height: "285px",
              overflow: "hidden",
            }}
          >
            <DestinationCard destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <button
          type="button"
          className="dest-slider-prev"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            border: "2px solid #e8604c",
            background: "#fff",
            color: "#e8604c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="dest-slider-next"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            border: "2px solid #e8604c",
            background: "#fff",
            color: "#e8604c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DestinationsSlider;
