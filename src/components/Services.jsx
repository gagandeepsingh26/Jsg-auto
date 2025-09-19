import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { services } from "../utils/constants";
import { sectionStyle } from "../utils/styles";

const isMobile = window.innerWidth < 768;

export default function Services() {
  return (
    <section id="services" style={sectionStyle("#121212")}>
      <Container>
        <h2 className="mb-4 text-center">Our Services</h2>
        {isMobile ? (
          <Carousel
            indicators={true}
            controls={false}
            interval={5000}
            touch={true}
          >
            {services.map((s, i) => (
              <Carousel.Item key={i}>
                <Card
                  className="review-card h-100 p-3 d-flex flex-column justify-content-between"
                  style={{
                    background: "rgba(20,20,20,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    color: "#f1f1f1",
                  }}
                >
                  <div className="service-icon mb-3">
                    <i
                      className={`${s.icon}`}
                      style={{ fontSize: "2.5rem", color: "#00d4ff" }}
                    ></i>
                  </div>
                  <Card.Title>{s.title}</Card.Title>
                  <div className="service-text mb-3">{s.text}</div>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row className="g-4">
            {services.map((s, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <Card
                  className="review-card h-100 p-3 d-flex flex-column justify-content-between"
                  style={{
                    background: "rgba(20,20,20,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    color: "#f1f1f1",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(0,212,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.4)";
                  }}
                >
                  <div className="service-icon mb-3">
                    <i
                      className={`${s.icon}`}
                      style={{ fontSize: "2.5rem", color: "#00d4ff" }}
                    ></i>
                  </div>
                  <Card.Title>{s.title}</Card.Title>
                  <div className="service-text mb-3">{s.text}</div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
