"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import oneDayTourData from "@/data/oneDayTourData";

const OneDayTourSlider = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section style={{ background: "#f7f5f2", padding: "70px 0" }}>
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h2 className="section-title__tagline">One Day Tours</h2>
          <p
            style={{
              color: "#777",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "34px",
            }}
            className="section-title text-left"
          >
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
        </div>

        <div style={{ position: "relative", paddingBottom: "20px" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={25}
            navigation={{
              nextEl: ".oneday-slider-next",
              prevEl: ".oneday-slider-prev",
            }}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {oneDayTourData.map((tour) => {
              const isHovered = hoveredId === tour.id;
              return (
                <SwiperSlide
                  key={tour.id}
                  style={{ height: "auto", paddingBottom: "10px" }}
                >
                  <div
                    onMouseEnter={() => setHoveredId(tour.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "170px",
                        borderRadius: "6px 6px 0 0",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                      />
                    </div>

                    {/* White card body */}
                    <div
                      style={{
                        position: "relative",
                        background: isHovered
                          ? "rgb(65, 65, 165)"
                          : "rgb(255, 255, 255)",
                        borderRadius: "7px",
                        padding: "25px 16px",
                        margin: "-25px 15px 0",
                        boxShadow: "0px 0px 30px 0px rgba(102, 102, 102, 0.09)",
                        transition: "background 0.5s",
                        animation: isHovered
                          ? "fadeInUp 0.3s linear 0s 1 normal none"
                          : "none",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 6px",
                          fontSize: "17px",
                          color: isHovered ? "#fff" : "#2b2b2b",
                          transition: "color 0.3s",
                        }}
                      >
                        {tour.title}
                      </h3>
                      <p
                        style={{
                          margin: "0 0 14px",
                          fontSize: "13px",
                          color: isHovered ? "#e0e0f5" : "#999",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "color 0.3s",
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {tour.tripType}
                      </p>

                      <div
                        style={{
                          borderTop: `1px solid ${isHovered ? "rgba(255,255,255,0.25)" : "#eee"}`,
                          paddingTop: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "border-color 0.3s",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            color: isHovered ? "#e0e0f5" : "#777",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "color 0.3s",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {tour.durationLabel}
                        </span>
                        <Link
                          href={`/one-day-tour/${tour.slug}`}
                          style={{
                            fontSize: "13px",
                            color: isHovered ? "#fff" : "#2f5fd6",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "color 0.3s",
                          }}
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom nav buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <button
              className="oneday-slider-prev"
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
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e8604c";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#e8604c";
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
              className="oneday-slider-next"
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
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e8604c";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#e8604c";
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
      </div>
    </section>
  );
};

export default OneDayTourSlider;
