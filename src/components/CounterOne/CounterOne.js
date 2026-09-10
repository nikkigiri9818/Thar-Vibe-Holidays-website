


import counterOne from "@/data/counterOne";
import React from "react";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const CounterOne = () => {
  return (
    <div className="counter-one" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        <div
          className="counter-one__container"
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            padding: "40px 20px",
            marginTop: "-60px",
            marginBottom: "-60px",
          }}
        >
          <ul
            className="list-unstyled counters-one__box"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {counterOne.map(({ id, text, count }, index) => (
              <li
                key={id}
                className="counter-one__single animated fadeInUp"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 1 200px",
                  textAlign: "center",
                  padding: "0 25px",
                  borderRight:
                    index !== counterOne.length - 1 ? "1px solid #eee" : "none",
                }}
              >
                <h3
                  className="odometer"
                  style={{
                    color: "#e8604c",
                    fontSize: "38px",
                    fontWeight: 700,
                    margin: "0 0 8px",
                    lineHeight: 1,
                  }}
                >
                  <VisibilityCountUp count={count} />
                </h3>
                <p
                  className="counter-one__text"
                  style={{ color: "#666", fontSize: "14px", margin: 0 }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;