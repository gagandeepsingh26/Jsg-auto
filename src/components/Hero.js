import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section py-5 text-white text-center">
      <div className="hero-overlay">
        <Container>
          <h1 className="display-5">JSG Auto — Auto Body & Paint Experts</h1>
          <p className="lead">
            Frame straightening • Collision repair • Professional painting •
            Insurance claims handled
          </p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <a href="/contact" className="btn btn-primary btn-lg">
              Get a Free Estimate
            </a>
            <a href="/services" className="btn btn-outline-light btn-lg">
              Our Services
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
