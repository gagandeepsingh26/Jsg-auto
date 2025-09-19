import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      className="py-4 bg-black text-white"
      style={{
        borderTop: "2px solid #00d4ff",
        boxShadow: "0 -2px 8px rgba(0, 212, 255, 0.12)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left: Contact (left on md+, centered on sm) */}
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <p className="mb-0">
              <i className="bi bi-telephone-fill me-2"></i>
              <a
                href="tel:+1234567890"
                style={{ color: "#00d4ff", textDecoration: "none" }}
              >
                +1 (647) 648-4680
              </a>
              <br />
              <i className="bi bi-envelope-fill me-2"></i>
              <a
                href="mailto:info@jsgauto.com"
                style={{ color: "#00d4ff", textDecoration: "none" }}
              >
                jsgauto@live.com
              </a>
            </p>
          </Col>

          {/* Center: Copyright (always centered) */}
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} JSG Auto — All rights reserved.
            </p>
          </Col>

          {/* Right: Powered By (right on md+, centered on sm) */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0" style={{ color: "#00d4ff" }}>
              <i className="bi bi-gear-fill me-1"></i> Powered by{" "}
              <strong>PreetHari Tech</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
