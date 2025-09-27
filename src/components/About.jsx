import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";
import "./About.css";
export default function About() {
  return (
    <section
      id="about"
      style={{
        ...sectionStyle("transparent"),
        position: "relative",
        background: `linear-gradient(rgba(28,28,28,0.9), rgba(28,28,28,0.9)), url('/images/garage-bg.jpg') center/cover no-repeat`,
      }}
    >
      <Container>
        <Row className="gy-4 align-items-center flex-column flex-md-row">
          {/* Left – About text */}
          <Col md={6} className="reveal-on-scroll">
            <h2 className="fw-bold mb-4 neon-glow">About Us</h2>
            <p className="lead neon-text">
              Since <span className="fw-bold text-info">2012</span>, JSG Auto
              has been Etobicoke’s trusted collision and maintenance centre.
              What began in a{" "}
              <span className="fw-bold">3,000 sq. ft. single-bay shop</span> has
              grown into a re-engineered facility equipped with OEM-approved
              welding, measuring, and paint systems.
            </p>
            <p className="neon-text">
              Every repair we perform is backed by a{" "}
              <span className="fw-bold text-info">
                lifetime workmanship warranty
              </span>
              . From a small scratch to a complete structural rebuild, our
              promise remains the same:{" "}
              <span className="fw-bold text-info">
                to get every customer back on the road—safely, quickly, and
                fairly
              </span>
              .
            </p>
          </Col>

          {/* Right – Vision / Mission / Values */}
          <Col md={6}>
            <Row className="gy-3">
              {/* Vision */}
              <Col xs={12} sm={6}>
                <div className="card-glow hover-lift h-100 p-3 rounded-3">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-eye me-2" aria-hidden="true" /> Vision
                  </h4>
                  <p className="neon-text mb-0">
                    To be the most trusted auto-care destination in Greater
                    Toronto, where quality, transparency, and customer care set
                    the standard.
                  </p>
                </div>
              </Col>

              {/* Mission */}
              <Col xs={12} sm={6}>
                <div className="card-glow hover-lift h-100 p-3 rounded-3">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-bullseye me-2" aria-hidden="true" />{" "}
                    Mission
                  </h4>
                  <p className="neon-text mb-0">
                    Deliver factory-quality repairs and maintenance with honest
                    pricing, eco-friendly practices, and a team that treats
                    every customer like family.
                  </p>
                </div>
              </Col>

              {/* Values */}
              <Col xs={12}>
                <div className="card-glow hover-lift h-100 p-3 rounded-3">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-shield-check me-2" aria-hidden="true" />{" "}
                    Values
                  </h4>
                  <ul className="list-unstyled neon-text mb-0">
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />{" "}
                      Safety first – OEM specs & lifetime warranty
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />{" "}
                      Transparency – digital inspections & upfront quotes
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />{" "}
                      Sustainability – water-borne paints & eco disposal
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />{" "}
                      Community – local hiring & charity drives
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
