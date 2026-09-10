import { FaRegCalendarCheck, FaPlane, FaCamera } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    icon: FaRegCalendarCheck,
    title: "Reservation",
    description:
      "As compared with earlier times where a reservation personnel has to update its inventory every time.",
  },
  {
    id: 2,
    icon: FaPlane,
    title: "Tour Pack",
    description:
      "You can dream, create, design, and build the most wonderful place in the world. But it requires people.",
  },
  {
    id: 3,
    icon: FaCamera,
    title: "Payment",
    description:
      "As compared with earlier times where a reservation personnel has to update its inventory every time.",
  },
];

const FeatureCards = () => {
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >
          {featuresData.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              style={{
                position: "relative",
                background: "#f7f5f2",
                borderRadius: "6px",
                padding: "40px 30px",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* Folded corner decoration */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "0",
                  height: "0",
                  borderStyle: "solid",
                  borderWidth: "0 30px 30px 0",
                  borderColor: "transparent #ccc transparent transparent",
                }}
              />

              <div
                style={{
                  color: "#e8604c",
                  fontSize: "32px",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Icon />
              </div>

              <h3
                style={{
                  color: "#313041",
                  fontSize: "22px",
                  fontWeight: 500,
                  margin: "0 0 15px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "27px",
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;