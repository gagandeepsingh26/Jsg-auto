import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="py-5">
      <Container>
        <h2>Contact & Bookings</h2>
        <Row>
          <Col md={6}>
            <h5>JSG Auto</h5>
            <p>123 Main St, Brampton, ON (example)</p>
            <p>Phone: (555) 123-4567</p>
            <p>
              Email: <a href="mailto:info@jsgauto.ca">info@jsgauto.ca</a>
            </p>
            <p>Business hours: Mon–Fri 8:00–18:00, Sat 9:00–14:00</p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your request"
                  required
                />
              </Form.Group>
              <Button type="submit">Send Message</Button>
            </Form>
            <small className="d-block mt-2 text-muted">
              Integrate EmailJS, Formspree, or a backend route for production
              email handling.
            </small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
