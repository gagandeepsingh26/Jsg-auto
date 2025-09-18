import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function WhyChooseUs() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h3>Why Customers Choose JSG Auto</h3>
        <Row className="mt-3">
          <Col md={4}>
            <h5>Certified Technicians</h5>
            <p>Trained, certified, and up-to-date with OEM standards.</p>
          </Col>
          <Col md={4}>
            <h5>Fast Turnaround</h5>
            <p>Efficient workflows and clear timelines reduce downtime.</p>
          </Col>
          <Col md={4}>
            <h5>Warranty & Support</h5>
            <p>Workmanship warranty on repairs and paint for peace of mind.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
