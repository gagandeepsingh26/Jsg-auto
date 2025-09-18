import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const sectionStyle = (color) => ({
  backgroundColor: color,
  paddingTop: "60px",
  paddingBottom: "60px",
  color: "#f8f9fa",
});

const services = [
  {
    title: "Auto Body Repair",
    text: "Complete collision repair and restoration services. From minor dents and scratches to major collision damage, our certified technicians restore your vehicle to its original condition using state-of-the-art equipment. We focus on safety, quality, and attention to detail.",
    icon: "bi-car-front",
  },
  {
    title: "Frame Straightening",
    text: "Advanced equipment to ensure your car’s frame is perfectly aligned. Using computerized measuring systems and hydraulic frame straighteners, we correct structural damage to maintain safety and performance.",
    icon: "bi-tools",
  },
  {
    title: "Painting",
    text: "Premium auto paint services with durable finishes. Whether it’s a small touch-up or a full-body respray, our technicians apply precision techniques for a smooth, glossy, and long-lasting finish.",
    icon: "bi-brush",
  },
  {
    title: "Tire Change",
    text: "Quick tire replacements and balancing for all vehicle types. We provide professional mounting, balancing, and alignment services for a safe and smooth driving experience.",
    icon: "bi-circle",
  },
  {
    title: "Collision Service",
    text: "Comprehensive collision repair services. Our team handles everything from accident damage assessment to full repairs, ensuring your car is restored safely and efficiently.",
    icon: "bi-exclamation-triangle",
  },
  {
    title: "Brakes & More",
    text: "From brakes to suspension — complete care under one roof. We inspect, repair, and replace essential components to maintain your car’s performance, safety, and comfort.",
    icon: "bi-speedometer2",
  },
  {
    title: "Oil & Filter Change",
    text: "Full-synthetic or conventional oil with OEM-grade filters. 15-min express lane while you wait, plus free top-up between changes.",
    icon: "bi-droplet",
  },
  {
    title: "Battery & Charging System",
    text: "Load-test, clean terminals, replace with AGM or lithium batteries. Alternator and starter checks included.",
    icon: "bi-lightning-charge",
  },
  {
    title: "Coolant / Radiator Service",
    text: "Complete flush, pressure test, and refill with long-life coolant. Prevents overheating and winter freeze-ups.",
    icon: "bi-thermometer-sun",
  },
];
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
