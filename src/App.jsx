// App.jsx — Dark Theme with Neon Blue Highlights
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { animateScroll as scroll, Events } from "react-scroll";
import "./App.css";
import SEO from "./SEO";
import LocalBusinessSchema from "./LocalBusinessSchema";
// import NotFound from "./pages/NotFound";
import QuoteForm from "./QuoteForm";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";

export default function App() {
  const heroBg =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

  const Gallery = [
    {
      image:
        "https://images.unsplash.com/photo-1597007203645-1e3f08b4374c?auto=format&fit=crop&w=800&q=80",
      caption: "Expert Auto Body Repair",
      sub: "Restoring vehicles to their original condition with precision and care.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      caption: "Premium Auto Painting",
      sub: "High-quality finishes for a flawless and lasting shine.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511391401446-3c0b2f43f1b2?auto=format&fit=crop&w=800&q=80",
      caption: "Collision & Frame Straightening",
      sub: "Advanced equipment to ensure perfect alignment and safety.",
    },
  ];

  const [showScroll, setShowScroll] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const LazyMap = () => {
    // const isMobile = window.innerWidth < 768; // simple breakpoint

    return (
      <iframe
        title="JSG Auto Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.3616968680244!2d-79.60658722268542!3d43.744585271098025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b029b2d754b%3A0xa9066bebf76d3393!2sJSG%20AUTO%20LTD!5e0!3m2!1sen!2sca!4v1757966917811!5m2!1sen!2sca"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: 12 }}
        allowFullScreen
        loading="lazy"
      />
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    fetch("/reviews.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setReviews)
      .catch(() => setReviews([]));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Add to App.jsx (inside your DOM-ready useEffect)
  useEffect(() => {
    const reveal = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("reveal", entry.isIntersecting)
        );
      },
      { threshold: 0.2 }
    );
    reveal.forEach((el) => observer.observe(el));
  }, []);
  const scrollToTop = () => scroll.scrollToTop({ duration: 500, smooth: true });

  React.useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const sectionStyle = (color) => ({
    backgroundColor: color,
    paddingTop: "60px",
    paddingBottom: "60px",
    color: "#f8f9fa",
  });

  const buttonStyle = { backgroundColor: "#00d4ff", borderColor: "#00d4ff" };
  const outlineButtonStyle = { color: "#00d4ff", borderColor: "#00d4ff" };

  return (
    <>
      {/* =====  SEO & SOCIAL META  ===== */}
      <SEO />
      <LocalBusinessSchema />
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
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
            <h1>
              JSG Auto Ltd — Complete Auto Body Repair & Collision Service
            </h1>
            <p style={{ marginTop: "15px", fontSize: "1.3rem" }}>
              Collision repairs, frame straightening, and professional painting
              for all car types. Insurance claims handled efficiently so you can
              get back on the road with confidence.
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
        {/* Services */}
        <Services />
        {/* ---------- About Us ---------- */}
        {/* About Us – with effects & appealing visuals */}
        <section id="about" style={sectionStyle("#2c2c2c")}>
          <Container>
            <Row className="gy-4 align-items-center flex-column flex-md-row">
              {/* Left – About text with subtle parallax reveal */}
              <Col md={6} className="reveal-on-scroll">
                <h2 className="fw-bold mb-4 neon-glow">About Us</h2>
                <p className="lead neon-text">
                  JSG Auto has been Etobicoke’s trusted collision and
                  maintenance centre since 2015. From a single-bay shop to a
                  6,000 sq. ft. facility, our growth is built on one promise:
                  <span className="text-info">
                    {" "}
                    get every customer back on the road—safely, quickly, and
                    fairly.
                  </span>
                </p>
                <p className="neon-text">
                  We work with all major insurers, provide lifetime workmanship
                  warranties, and offer free loaner cars so your life doesn’t
                  stop when your car does.
                </p>
              </Col>

              {/* Right – Vision / Mission / Values with animated icons & cards */}
              <Col md={6}>
                {/* Vision */}
                <div className="mb-4 card-glow">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-eye me-2" />
                    Vision
                  </h4>
                  <p className="neon-text">
                    To be the most trusted auto-care destination in Greater
                    Toronto—where quality, transparency, and customer care set
                    the standard.
                  </p>
                </div>

                {/* Mission */}
                <div className="mb-4 card-glow">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-bullseye me-2" />
                    Mission
                  </h4>
                  <p className="neon-text">
                    Deliver factory-quality repairs and maintenance with honest
                    pricing, eco-friendly practices, and a team that treats
                    every customer like family.
                  </p>
                </div>

                {/* Values – with hover-glow cards */}
                <div className="card-glow">
                  <h4 className="fw-bold text-info mb-2 pulse-icon">
                    <i className="bi bi-shield-check me-2" />
                    Values
                  </h4>
                  <ul className="list-unstyled neon-text">
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />
                      Safety first – OEM specs & lifetime warranty
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />
                      Transparency – digital inspections & upfront quotes
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />
                      Sustainability – water-borne paints & eco disposal
                    </li>
                    <li className="mb-2 hover-glow-li">
                      <i className="bi bi-check-circle-fill text-info me-2" />
                      Community – local hiring, charity drives, free loaners
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Gallery */}
        <section id="gallery" style={sectionStyle("#1e1e1e")}>
          <Container>
            <h2 className="mb-4 text-center">Our Work</h2>
            <Carousel fade interval={5000} indicators={true} controls={true}>
              {Gallery.map((item, i) => (
                <Carousel.Item key={i}>
                  <div className="carousel-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      className="d-block w-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="carousel-caption-custom">
                      <h5>{item.caption}</h5>
                      <p>{item.sub}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>
        {/* Reviews */}
        <section id="reviews" style={sectionStyle("#2c2c2c")}>
          <Container>
            <h2 className="mb-4 text-center">What Our Clients Say</h2>
            {isMobile ? (
              <Carousel
                indicators={true}
                controls={false}
                interval={5000}
                touch={true}
              >
                {reviews.map((review, i) => (
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
                      <Card.Body className="d-flex flex-column">
                        <div className="mb-2">
                          {Array(review.stars)
                            .fill()
                            .map((_, idx) => (
                              <i
                                className="bi bi-star-fill text-warning me-1"
                                key={idx}
                              />
                            ))}
                        </div>
                        <Card.Text
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            flex: 1,
                          }}
                        >
                          {review.text}
                        </Card.Text>
                        <Card.Subtitle
                          className="mt-2 text-end"
                          style={{
                            color: "#00d4ff",
                            textShadow: "0 0 6px rgba(0,212,255,0.9)",
                            fontWeight: 500,
                            fontSize: "0.85rem",
                          }}
                        >
                          — {review.author}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Row className="g-4">
                {reviews.map((review, i) => (
                  <Col xs={12} sm={6} lg={3} key={i}>
                    <Card
                      className="review-card h-100 p-3 d-flex flex-column justify-content-between"
                      style={{
                        background: "rgba(20,20,20,0.6)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(0,212,255,0.25)",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                        transition:
                          "transform 0.25s ease, box-shadow 0.25s ease",
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
                      <Card.Body className="d-flex flex-column">
                        {/* stars */}
                        <div className="mb-2">
                          {Array(review.stars)
                            .fill()
                            .map((_, idx) => (
                              <i
                                className="bi bi-star-fill text-warning me-1"
                                key={idx}
                              />
                            ))}
                        </div>

                        <Card.Text
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            flex: 1,
                          }}
                        >
                          {review.text}
                        </Card.Text>

                        <Card.Subtitle
                          className="mt-2 text-end"
                          style={{
                            color: "#00d4ff",
                            textShadow: "0 0 6px rgba(0,212,255,0.9)",
                            fontWeight: 500,
                            fontSize: "0.85rem",
                          }}
                        >
                          — {review.author}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            <div className="text-center mt-4">
              <Button
                as="a"
                href="https://www.google.com/maps/place/?q=place_id:ChIJS3UtmwI7K4gRkzNt9-trBqk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#00d4ff", borderColor: "#00d4ff" }}
              >
                See All Google Reviews
              </Button>
            </div>
          </Container>
        </section>
        {/* Contact + Location */}
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
              Have questions or need a repair estimate? Fill out the form below
              or visit us—JSG Auto is ready for fast, reliable, professional
              service.
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

        {/* Footer */}
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

        {/* Scroll-to-top button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="btn btn-info btn-floating d-flex align-items-center justify-content-center"
            style={{
              position: "fixed",
              bottom: window.innerWidth < 576 ? 70 : 30, // lift up on phones
              right: 20,
              zIndex: 1030,
              borderRadius: "50%",
              width: 50,
              height: 50,
              fontSize: "1.6rem", // thicker arrow
              fontWeight: 700,
            }}
            aria-label="Back to top"
          >
            <i className="bi bi-chevron-up fs-4" />
          </button>
        )}
      </div>
    </>
  );
}
