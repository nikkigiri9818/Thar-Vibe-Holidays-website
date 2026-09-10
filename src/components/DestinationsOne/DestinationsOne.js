import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import DestinationsSlider from "./SingleDestination";

const DestinationsOne = () => {
  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Explore Rajasthan</span>
          <h2 className="section-title__title">Popular Destinations</h2>
        </div>
        {/* <Row className="masonary-layout">
          {destinationsOne.slice(0, 10).map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Row> */}

          <DestinationsSlider destinations={destinationsOne} />

      </Container>
    </section>
  );
};

export default DestinationsOne;
