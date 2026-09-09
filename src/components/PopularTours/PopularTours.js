





import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import tourPackagesData from "@/data/tourPackagesData";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};

const SingleTourPackage = ({ pkg }) => {
  return (
    <Link href={`/tour-packages/${pkg.slug}`} style={{ textDecoration: "none" }} passHref>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Image src={pkg.image} alt={pkg.title}
         fill layout="fill"
  objectFit="cover"
  objectPosition="center"
  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw" />





        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "18px 20px",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "19px",
              fontWeight: 700,
              margin: "0 0 8px",
            }}
          >
            {pkg.title}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "13px",
            }}
          >
            <span style={{ color: "#eee", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {pkg.durationLabel}
            </span>
            <span style={{ color: "#f2c14e", fontWeight: 600 }}>{pkg.priceLabel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};



const PopularTours = () => {
  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Tour Packages</span>
          <p
            style={{ color: "#777", maxWidth: "520px", margin: "0 auto", fontSize: "18px", lineHeight: "34px" }}
            className="section-title text-left"
          >
            Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
          </p>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel" style={{ padding: "0 10px" }}>
              <TinySlider settings={settings}>
                {tourPackagesData.map((pkg) => (
                  <div key={pkg.id} style={{ padding: "0 8px" }}>
                    <SingleTourPackage pkg={pkg} />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;