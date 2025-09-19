import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";

export default function About() {
  return (
    <section id="about" style={sectionStyle("#2c2c2c")}>
      <Container>
        <Row className="gy-4 align-items-center flex-column flex-md-row">
          {/* Left – About text with subtle parallax reveal */}
          <Col md={6} className="reveal-on-scroll">
            <h2 className="fw-bold mb-4 neon-glow">About Us</h2>
            <p className="lead neon-text">
              JSG Auto has been Etobicoke’s trusted collision and maintenance
              centre since 2015. From a single-bay shop to a 6,000 sq. ft.
              facility, our growth is built on one promise:
              <span className="text-info">
                {" "}
                get every customer back on the road—safely, quickly, and fairly.
              </span>
            </p>
            <p className="neon-text">
              We work with all major insurers, provide lifetime workmanship
              warranties, and offer free loaner cars so your life doesn’t stop
              when your car does.
            </p>
          </Col>

          {/* Right – Vision / Mission / Values with animated icons & cards */}
          <Col md={6}>
            {/* Vision */}
            <div className="mb-4 card-glow">
              <h4 className="fw-bold text-info mb-2 pulse-icon">
                <i className="bi bi-eye me-2" />
                Vision
              </h4>
              <p className="neon-text">
                To be the most trusted auto-care destination in Greater
                Toronto—where quality, transparency, and customer care set the
                standard.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-4 card-glow">
              <h4 className="fw-bold text-info mb-2 pulse-icon">
                <i className="bi bi-bullseye me-2" />
                Mission
              </h4>
              <p className="neon-text">
                Deliver factory-quality repairs and maintenance with honest
                pricing, eco-friendly practices, and a team that treats every
                customer like family.
              </p>
            </div>

            {/* Values – with hover-glow cards */}
            <div className="card-glow">
              <h4 className="fw-bold text-info mb-2 pulse-icon">
                <i className="bi bi-shield-check me-2" />
                Values
              </h4>
              <ul className="list-unstyled neon-text">
                <li className="mb-2 hover-glow-li">
                  <i className="bi bi-check-circle-fill text-info me-2" />
                  Safety first – OEM specs & lifetime warranty
                </li>
                <li className="mb-2 hover-glow-li">
                  <i className="bi bi-check-circle-fill text-info me-2" />
                  Transparency – digital inspections & upfront quotes
                </li>
                <li className="mb-2 hover-glow-li">
                  <i className="bi bi-check-circle-fill text-info me-2" />
                  Sustainability – water-borne paints & eco disposal
                </li>
                <li className="mb-2 hover-glow-li">
                  <i className="bi bi-check-circle-fill text-info me-2" />
                  Community – local hiring, charity drives, free loaners
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
