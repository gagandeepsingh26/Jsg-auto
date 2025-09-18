import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Paint() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <img
              src="https://source.unsplash.com/600x400/?car,paint"
              alt="car painting"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Premium Paint & Color Matching</h2>
            <p>
              Our paint shop uses advanced spray booths and color-matching
              technology to deliver flawless finishes. Whether you need spot
              repair or a complete respray, our certified technicians provide
              OEM-quality results.
            </p>
            <p>
              With infrared curing and multi-stage clear coats, we ensure your
              vehicle leaves our shop looking like new.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
