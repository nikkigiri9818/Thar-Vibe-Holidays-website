import Link from "next/link";
import Image from "next/image";
import heroBg from "@/images/brand/fortheritage.jpg"; // fort/heritage background — apni actual image se replace kar dena
import tempoImg from "@/images/brand/taxithree.png"; // apni actual images ke path daalna
import oneDayImg from "@/images/gallery/udaipurimg.jpg";
import tourPackageImg from "@/images/gallery/jaipurimage1.jpeg";
import taxiImg from "@/images/brand/taxiimages.png";
import Layout from "@/components/Layout/Layout";

const fleetServices = [
  {
    id: 1,
    image: tempoImg,
    title: "Tempo Traveller Services",
    href: "/taxi-service",
    description:
      "Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
  },
  {
    id: 2,
    image: oneDayImg,
    title: "Our One Day Tour Services",
    href: "/one-day-tour",
    description:
      "Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
  },
  {
    id: 3,
    image: tourPackageImg,
    title: "Our Tour Package Services",
    href: "/tour-packages",
    description:
      "Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
  },
  {
    id: 4,
    image: taxiImg,
    title: "Taxi Services",
    href: "/taxi-service",
    description:
      "Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
  },
];

const OurFleetPage = () => {
  return (
    <Layout>
      {/* HERO BANNER */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <img
          src={heroBg.src}
          alt="Our Fleet"
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
            background: "rgba(71, 51, 30, 0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <a style={{color:"blue"}}>Home</a>
          </Link>

          <span
            style={{
              marginRight: "15px",
              marginLeft: "15px",
              color: "#e8604c",
            }}
          >
            &gt;&gt;
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Our Fleet
          </h1>
        </div>
      </div>

      {/* Fleet grid section */}
      <section style={{ background: "#f7f5f2", padding: "70px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className="ourflete-heading"
              style={{ fontSize: "50px", margin: "0 0 15px", color: "#2b2b2b" }}
            >
              Our fleet Heading
            </h2>
            <p
              style={{
                color: "#e8604c",
                maxWidth: "560px",
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "40px 30px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {fleetServices.map((service) => (
              <div
                key={service.id}
                style={{ background: "#fff", padding: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "260px",
                  }}
                >
                  <img
                    src={service.image.src}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
                <div className="my-item">
                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "25px",
                      color: "#313041",
                    }}
                  >
                    <Link
                      href={service.href}
                      style={{
                        color: "#313041",
                        textDecoration: "none",
                        fontSize: "40px !impotant",
                      }}
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      color: "rgb(119, 119, 119)",
                      fontSize: "16px",
                      lineHeight: "26px",
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurFleetPage;
