"use client";

import Link from "next/link";
import Image from "next/image";
import heroBg from "@/images/brand/taxiherosections.png"; // koi bhi heritage/desert background image use kar lena
import taxiCarImg1 from "@/images/brand/taxiimages.png"; // apni actual car image ka path yahan daalna
import taxicarImg2 from "@/images/brand/taxitwo.png";
import taxicarImg3 from "@/images/brand/taxithree.png";
import taxicarImg4 from "@/images/brand/taxifour.png";
import Layout from "@/components/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const taxiImages = [taxiCarImg1, taxicarImg2, taxicarImg3, taxicarImg4];

const TaxiServicePage = () => {
  return (
    <Layout>
      {/* HERO BANNER */}
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <img
  src={heroBg.src}
  alt="One Way and Outstation Taxi Service"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  }}
/>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h1 className="texi-heading"
            style={{
              color: "#fff",
              fontSize: "38px",
              fontWeight: 800,
              margin: "0 0 12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            One Way and Outstation Taxi Service
          </h1>
          <div style={{ fontSize: "14px", color: "#eee" }}>
            <Link href="/" passHref>
              <a className="breadcrumb-link"
                style={{
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none",
                }}
              >
                Home
              </a>
            </Link>

            <span style={{ margin: "0 8px" }}>»</span>

            <strong style={{ color: "#fff" }}>
              One Way and Outstation Taxi Service
            </strong>
          
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          gap: "35px",
          flexWrap: "wrap",
          paddingTop: "50px",
          paddingBottom: "60px",
        }}
      >
        {/* LEFT column */}

        <div style={{ flex: "1 1 600px", width: "100%", minWidth: 0 }}>
          {/* Car image slider */}
          <div style={{ position: "relative", width: "100%", height: "320px" }}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                nextEl: ".taxi-slider-next",
                prevEl: ".taxi-slider-prev",
              }}
              loop
              style={{ width: "100%", height: "100%" }}
            >
              {taxiImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "320px",
                    }}
                  >
                   <img
  src={img.src}
  alt={`Taxi Service ${i + 1}`}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
  }}
/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="taxi-slider-prev"
              aria-label="Previous"
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: "#e8604c",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="taxi-slider-next"
              aria-label="Next"
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: "#e8604c",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Overview tab section same neeche rahega */}

          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                display: "inline-block",
                background: "#e8604c",
                color: "#fff",
                padding: "10px 35px",
                borderRadius: "4px 4px 0 0",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              Overview
            </div>
            <div
              style={{
                background: "#f7f5f2",
                borderRadius: "0 8px 8px 8px",
                padding: "25px",
              }}
            >
              <h3
                style={{ marginTop: 0, fontSize: "22px", marginBottom: "10px" }}
              >
                Overview
              </h3>
              <p
                style={{ color: "#555", lineHeight: "27px", fontSize: "16px" }}
              >
                Rajasthan Tours is a Jaipur based firm and we wanted to make
                commuting less tiresome and more relaxing. We have an infinite
                fleet for different visiting purposes ranging from Etios, Dzire,
                Crysta, Tempo Traveller. Additionally, we provide tempo
                travellers services as well.
              </p>
              <p
                style={{ color: "#e8604c", fontSize: "14px", margin: "16px 0" }}
              >
                Book now &amp; Get special discount
              </p>
              <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>
                <strong>Note:</strong> All our fleets are Sanitized after and
                before every ride.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT column - sidebar */}
        <div style={{ flex: "0 1 300px" }}>
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "22px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{ marginTop: 0, marginBottom: "18px", fontSize: "17px" }}
            >
              Enquire Now
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  comment: formData.get("comment"),
                  service: "One Way and Outstation Taxi Service",
                };
                // TODO: submit logic yahan likhni hai
                console.log(data);
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Name"
                style={inputStyle}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                style={inputStyle}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                style={inputStyle}
              />
              <textarea
                name="comment"
                placeholder="Write Comment"
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#e8604c",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "22px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{ marginTop: 0, marginBottom: "14px", fontSize: "17px" }}
            >
              Other Bus Services
            </h3>
            {[
              {
                title: "20 Seatar AC Bus 2x1",
                href: "/bus-service/20-seater-ac-bus",
              },
              { title: "Rajasthan Quick Tour", href: "/tour-packages" },
            ].map((item) => (
              <div key={item.title} style={{ display: "block", width: "100%" }}>
                <Link
                  href={item.href}
                  passHref
                  style={{
                    display: "block",
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                    color: "#555",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA section */}
      <div
        style={{
          background: "#f7f5f2",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "26px",
              color: "#2b2b2b",
              lineHeight: "27px",
            }}
          >
            We provide special discount on Call bookings
          </h2>
          <p
            style={{
              color: "#777",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

export default TaxiServicePage;
