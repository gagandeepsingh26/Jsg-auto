import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function Insurance() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Insurance Work Made Easy</h2>
            <p>
              JSG Auto works directly with major insurance providers to simplify
              your claim. We provide fast digital estimates, photo
              documentation, and direct communication with insurers so you can
              get back on the road quickly.
            </p>
            <ul>
              <li>Direct billing to insurers (where available)</li>
              <li>Clear and accurate repair reports</li>
              <li>Step-by-step assistance from our team</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src="https://source.unsplash.com/600x400/?insurance,car"
              alt="insurance claims"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
