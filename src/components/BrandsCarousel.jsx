import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { brandLogos } from "../utils/constants";
import "./BrandsCarousel.css";

// const isMobile = window.innerWidth < 768;

export default function BrandsCarousel() {
  return (
    <section
      id="brands"
      style={{ backgroundColor: "#181818", padding: "60px 0" }}
    >
      <Container>
        <h2 className="text-center mb-4 neon-glow">Brands We Service</h2>

        {/* Centred, neon-glass cards */}
        <Row className="g-4 justify-content-center">
          {brandLogos.map((b, i) => (
            <Col xs={6} sm={4} md={3} lg={2} key={i}>
              <div className="brand-card">
                <div className="brand-logo-wrapper">
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
                <h6 className="brand-name neon-glow">{b.name}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
