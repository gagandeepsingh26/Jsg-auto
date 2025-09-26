import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";
import QuoteForm from "./QuoteForm";
import LazyMap from "./LazyMap";

const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        ...sectionStyle("#121212"),
        paddingTop: "60px",
        paddingBottom: "30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions or need a repair estimate? Fill out the form below or
          visit us—JSG Auto is ready for fast, reliable, professional service.
        </p>

        {/* Form: 100% width */}
        <Row className="mb-5">
          <Col xs={12}>
            <QuoteForm />
          </Col>
        </Row>

        {/* Map 70% | Hours 30% */}
        <Row className="g-4 mb-4">
          <Col lg={8} xl={8}>
            <LazyMap />
          </Col>

          <Col lg={4} xl={4}>
            <Card
              className="h-100"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#f1f1f1",
              }}
            >
              <Card.Body>
                <Card.Title
                  className="mb-3 text-center"
                  style={{ color: "#00d4ff" }}
                >
                  Business Hours
                </Card.Title>
                {hours.map(({ day, time }) => (
                  <Row key={day} className="mb-2">
                    <Col xs={5} className="fw-bold">
                      {day}
                    </Col>
                    <Col xs={7} className="text-end">
                      {time}
                    </Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Visit-us line: 100% width */}
        <Row>
          <Col xs={12}>
            <p className="text-center mt-2" style={{ color: "#00d4ff" }}>
              Visit us at: <br />
              <strong>JSG Auto LTD</strong>
              <br />
              1770 Albion Rd #31, Etobicoke, ON M9V 1C2
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
