import React from "react";
import { heroBg } from "../utils/constants";
import { buttonStyle, outlineButtonStyle } from "../utils/styles";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: `url(${heroBg}) center/cover no-repeat`,
        minHeight: "70vh",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        placeItems: "center",

        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h1>JSG Auto Ltd — Complete Auto Body Repair & Collision Service</h1>
        <p style={{ marginTop: "15px", fontSize: "1.3rem" }}>
          Collision repairs, frame straightening, and professional painting for
          all car types. Insurance claims handled efficiently so you can get
          back on the road with confidence.
        </p>
        <a href="#contact" className="btn btn-lg me-2" style={buttonStyle}>
          <i className="bi bi-envelope-fill me-2"></i>
          Get a Free Estimate
        </a>
        <a
          href="#services"
          className="btn btn-outline-light btn-lg"
          style={outlineButtonStyle}
        >
          <i className="bi bi-list-ul me-2"></i>
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
