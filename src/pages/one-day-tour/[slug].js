import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import oneDayTourData from "@/data/oneDayTourData";
import Layout from "@/components/Layout/Layout";

export const getStaticPaths = () => {
  const paths = oneDayTourData.map((tour) => ({ params: { slug: tour.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }) => {
  const tour = oneDayTourData.find((t) => t.slug === params.slug) || null;
  return { props: { tour } };
};

const infoItems = (tour) => [
  { icon: "🗓️", label: "Tour Timings", value: tour.tourTimings },
  { icon: "🕒", label: "Duration", value: tour.durationLabel },
  { icon: "📄", label: "Visa Requirments", value: tour.visaRequirements },
  { icon: "📋", label: "TYPE OF TRIP", value: tour.tripType },
  { icon: "👤", label: "Per Person", value: `₹ ${tour.priceLabel}` },
];

const TourDetailPage = ({ tour }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  if (router.isFallback) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found.</p>;

  return (
    <Layout>
      {/* HERO BANNER - full width bg image, tagline, title, breadcrumb */}
     <div style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
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
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
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
    <span
      style={{
        color: "#f2c14e",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "10px",
      }}
    >
      Travel. Discover. Connect.
    </span>
    <h1
      style={{
        color: "#fff",
        fontSize: "48px",
        fontWeight: 800,
        margin: "0 0 15px",
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}
    >
      {tour.title}
    </h1>
    <div style={{ fontSize: "14px", color: "#eee" }}>
      <Link href="/" style={{ color: "#eee", textDecoration: "none" }}>Home</Link>
      <span style={{ margin: "0 8px" }}>»</span>

<Link href="/one-day-tour" style={{ color: "#eee", textDecoration: "none" }}>One Day Tour</Link>   
   <span style={{ margin: "0 8px" }}>»</span>
      <strong style={{ color: "#fff" }}>{tour.title}</strong>
    </div>
  </div>
</div>

      <div className="container" style={{ display: "flex", gap: "35px", flexWrap: "wrap", paddingTop: "50px", paddingBottom: "60px" }}>
        {/* LEFT column */}
        <div style={{ flex: "1 1 620px" }} className="leftbasis">
         
          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #eee", marginTop: "25px" }}>
            {[
              { key: "overview", label: "Overview" },
              { key: "itinerary", label: "Itinerary" },
              { key: "inclusion", label: "Inclusion" },
              { key: "exclusion", label: "Exclusion" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: activeTab === tab.key ? "#e8604c" : "#f7f5f2",
                  color: activeTab === tab.key ? "#fff" : "#555",
                  transition: "all 0.25s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: "25px 5px" }}>
            {activeTab === "overview" && (
              <>
                <h3 style={{ marginTop: 0 }}>Overview</h3>
                {tour.overview.split(". ").reduce((acc, sentence, i) => {
                  if (i % 2 === 0) acc.push(sentence);
                  else acc[acc.length - 1] += ". " + sentence;
                  return acc;
                }, []).map((para, i) => (
                  <p key={i} style={{ color: "#666", lineHeight: 1.8, fontSize: "14px" }}>
                    {para.trim()}{para.trim().endsWith(".") ? "" : "."}
                  </p>
                ))}
              </>
            )}

            {activeTab === "itinerary" && (
              <>
                <h3 style={{ marginTop: 0 }}>Itinerary</h3>
                {tour.itinerary.map((day) => (
                  <div key={day.day} style={{ display: "flex", gap: "16px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f0f0f0" }}>
                    <div
                      style={{
                        flexShrink: 0, width: "38px", height: "38px", borderRadius: "50%",
                        background: "#e8604c", color: "#fff", display: "flex", alignItems: "center",
                        justifyContent: "center", fontWeight: 700, fontSize: "13px",
                      }}
                    >
                      {String(day.day).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 6px", fontSize: "15px", color: "#2b2b2b" }}>{day.title}</h4>
                      <p style={{ margin: 0, color: "#666", fontSize: "14px", lineHeight: 1.7 }}>{day.desc}</p>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "inclusion" && (
              <>
                <h3 style={{ marginTop: 0 }}>Inclusion</h3>
                <ul style={{ paddingLeft: "20px", color: "#555", lineHeight: 2 }}>
                  {tour.inclusions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}

            {activeTab === "exclusion" && (
              <>
                <h3 style={{ marginTop: 0 }}>Exclusion</h3>
                <ul style={{ paddingLeft: "20px", color: "#555", lineHeight: 2 }}>
                  {tour.exclusions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}
          </div>

          {/* Info block */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px 30px",
              background: "#f7f5f2",
              borderRadius: "8px",
              padding: "22px",
              marginTop: "10px",
            }}
          >
            {infoItems(tour).map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                <span style={{ color: "#2b2b2b" }}>
                  <strong>{item.label}</strong> : {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT column - sidebar */}
        <div style={{ flex: "0 1 300px" }} className="leftbasis">
          <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "22px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", marginBottom: "25px" }}>
            <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "17px" }}>Enquire Now</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  comment: formData.get("comment"),
                  tour: tour.title,
                };
                // TODO: submit logic yahan likhni hai
                console.log(data);
              }}
            >
              <input name="name" type="text" placeholder="Name" style={inputStyle} />
              <input name="email" type="email" placeholder="Email" style={inputStyle} />
              <input name="phone" type="tel" placeholder="Phone" style={inputStyle} />
              <textarea name="comment" placeholder="Write Comment" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
              <button
                type="submit"
                style={{
                  width: "100%", background: "#e8604c", color: "#fff", border: "none",
                  padding: "12px", borderRadius: "6px", fontWeight: 600, cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "22px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>

          {/* Other Tours — tourPackagesData ki jagah oneDayTourData */}
<h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "17px" }}>Other One Day Tours</h3>
{oneDayTourData.map((p) => (
  <div key={p.id} style={{ display: "block", width: "100%" }}>
    <Link
      href={`/one-day-tour/${p.slug}`}
      style={{
        display: "block",
        padding: "10px 0",
        borderBottom: "1px solid #f0f0f0",
        color: p.slug === tour.slug ? "#b5651d" : "#555",
        fontWeight: p.slug === tour.slug ? 600 : 400,
        textDecoration: "none",
        fontSize: "14px",
      }}
    >
      {p.title}
    </Link>
  </div>
))}
          </div>
        </div>
      </div>

      <div style={{ background: "#f7f5f2", padding: "50px 0", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "24px", color: "#2b2b2b" }}>Things to do in Rajasthan</h2>
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

export default TourDetailPage;