import Link from "next/link";

const TaxiServiceIntro = () => {
  return (
    <section style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title" style={{ marginBottom: "10px" }}>
            One way &amp; Outstation Taxi Service
          </h2>
          <p
            style={{
              color: "#e8604c",
              fontSize: "14px",
              fontWeight: 600,
              margin: 0,
            }}
            className="section-title__tagline"
          >
            We Provide Taxi Service to All India.
          </p>

          <div style={{ marginTop: "40px", marginBottom: "20px" }}>
            <Link href="/taxi-service" passHref>
              <a className="about-one__btn thm-btn">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiServiceIntro;
