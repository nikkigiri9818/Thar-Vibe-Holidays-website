import { useState } from "react";
import { FaHiking, FaHorseHead, FaBinoculars, FaCampground, FaCamera, FaShoppingBag } from "react-icons/fa";

const thingsToDoData = [
  {
    id: 1,
    icon: FaHiking,
    title: "Trekking",
    description: "Explore rugged Aravalli trails and hidden desert paths on foot.",
  },
  {
    id: 2,
    icon: FaHorseHead,
    title: "Camel & Horse Riding",
    description: "Ride through the golden dunes of Jaisalmer or royal trails of Jaipur.",
  },
  {
    id: 3,
    icon: FaBinoculars,
    title: "Sightseeing",
    description: "Visit majestic forts, palaces, lakes and heritage havelis.",
  },
  {
    id: 4,
    icon: FaCampground,
    title: "Desert Camping",
    description: "Spend a night under the stars in the Thar Desert with cultural performances.",
  },
  {
    id: 5,
    icon: FaCamera,
    title: "Wildlife Safari",
    description: "Spot tigers and wildlife on a jeep safari in Ranthambore & Sariska.",
  },
  {
    id: 6,
    icon: FaShoppingBag,
    title: "Local Shopping",
    description: "Shop for handicrafts, textiles and jewellery in vibrant local bazaars.",
  },
];

const ThingsToDoCard = ({ icon: Icon, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "35px 25px",
        textAlign: "center",
        boxShadow: hovered
          ? "0 20px 40px rgba(181, 101, 29, 0.18)"
          : "0 6px 20px rgba(0,0,0,0.06)",
        transform: hovered
          ? "translateY(-10px) rotate(-0.5deg)"
          : "translateY(0) rotate(0deg)",
        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top accent line that expands on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: hovered ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
          width: "100%",
          height: "3px",
          background: "#b5651d",
          transition: "transform 0.4s ease",
          transformOrigin: "center",
        }}
      />

      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: hovered ? "#e8604c" : "#fdece4",
          color: hovered ? "#fff" : "#e8604c",
          fontSize: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          transform: hovered ? "scale(1.12) rotate(8deg)" : "scale(1) rotate(0deg)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Icon />
      </div>

      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "17px",
          color: hovered ? "#e8604c" : "#2b2b2b",
          transition: "color 0.3s ease",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#777",
          fontSize: "13px",
          lineHeight: 1.7,
          opacity: hovered ? 1 : 0.85,
          transition: "opacity 0.3s ease",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const ThingsToDo = () => {
  return (
    <div style={{ background: "#f7f5f2", padding: "60px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "30px", color: "#e8604c" }}>
            Things to do in Rajasthan
          </h2>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: "27px" }}>
            From desert adventures to royal heritage, Rajasthan offers experiences for every traveler.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {thingsToDoData.map((item) => (
            <ThingsToDoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;