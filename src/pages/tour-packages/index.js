import Link from "next/link";
import Image from "next/image";
import tourPackagesData from "@/data/tourPackagesData";
import Layout from "@/components/Layout/Layout";

const TourPackagesPage = () => {
  return (
    <Layout>
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Explore Rajasthan</span>
            <h2 className="section-title__title">Tour Packages</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              marginTop: "50px",
            }}
          >
            {tourPackagesData.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/tour-packages/${pkg.slug}`}
                passHref
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                   layout="fill"
  objectFit="cover"
  objectPosition="center"
  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
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
                        fontSize: "20px",
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
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourPackagesPage;