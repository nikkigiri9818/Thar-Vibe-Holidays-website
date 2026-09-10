import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import oneDayTourData from "@/data/oneDayTourData";
import Layout from "@/components/Layout/Layout";

const OneDayTourPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Layout>
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

      <section style={{ background: "#f7f5f2", padding: "70px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <h2 className="section-title__tagline">One Day Tours</h2>
            <p
              style={{
                color: "#777",
                maxWidth: "520px",
                margin: "0 auto",
                fontSize: "14px",
                lineHeight: "27px",
              }}
            >
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "35px 25px",
            }}
          >
            {oneDayTourData.map((tour) => {
              const isHovered = hoveredId === tour.id;
              return (
                <div
                  key={tour.id}
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
                   <img
  src={tour.image.src}
  alt={tour.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  }}
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
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OneDayTourPage;
