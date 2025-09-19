import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";
import QuoteForm from "./QuoteForm";
import LazyMap from "./LazyMap";

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
        {/* headline + sub */}
        <h2 className="text-center">Contact & Location</h2>
        <p className="text-center mb-5">
          Have questions or need a repair estimate? Fill out the form below or
          visit us—JSG Auto is ready for fast, reliable, professional service.
        </p>

        {/* quick-info strip */}
        <Row className="justify-content-center mb-5 g-3 text-center">
          {[
            {
              icon: "bi-telephone",
              label: "Call Us",
              val: "(647) 648-4680",
            },
            {
              icon: "bi-clock",
              label: "Hours",
              val: "Mon-Fri 9-7 / Sat 9-4",
            },
            {
              icon: "bi-envelope",
              label: "Email",
              val: "jsgauto@live.com",
            },
          ].map((c, i) => (
            <Col xs={12} sm={6} md={4} lg={2} key={i}>
              <div
                className="py-3 rounded-3"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  color: "#00d4ff",
                  boxShadow: "0 2px 8px rgba(0,212,255,0.15)",
                }}
              >
                <i className={`bi ${c.icon} fs-3`} />
                <div className="mt-2 fw-bold">{c.label}</div>
                <small className="text-light">{c.val}</small>
              </div>
            </Col>
          ))}
        </Row>

        {/* form + map row (unchanged internals) */}
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <QuoteForm />
          </Col>
          <Col lg={6} className="mb-4">
            <LazyMap />
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
