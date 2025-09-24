import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { services } from "../utils/constants";
import { sectionStyle } from "../utils/styles";

const isMobile = window.innerWidth < 768;

export default function Services() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Update card width based on device width
  const updateCardWidth = () => {
    const peek = 15;
    const width = Math.min(Math.max(window.innerWidth * 0.75, 250), 400); // responsive: min 250, max 400
    setCardWidth(width - 2 * peek); // leave space for prev/next cards
  };

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Update center card index on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const children = Array.from(containerRef.current.children);
    const containerCenter =
      containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial highlight
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" style={sectionStyle("#121212")}>
      <Container>
        <h2 className="mb-4 text-center">Our Services</h2>

        {isMobile ? (
          <div
            ref={containerRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "16px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              // padding ensures first/last card can reach center with tiny peek of prev/next cards
              padding: `24px ${(window.innerWidth - cardWidth) / 2}px`, // <-- center cards
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="no-scrollbar"
          >
            {services.map((s, i) => {
              const isCenter = i === centerIndex;

              // width calculation: full viewport minus peek
              // const peek = 15; // pixels of prev/next cards to show
              const width = cardWidth;

              const centerGlow =
                "0 0 10px #00d4ff, 0 0 18px rgba(0,212,255,0.6), 0 0 24px rgba(0,212,255,0.4)";
              const sideGlow = "0 0 6px #00d4ff, 0 0 12px rgba(0,212,255,0.3)";

              return (
                <div
                  key={i}
                  style={{
                    flex: `0 0 ${width}px`,
                    maxWidth: `${width}px`,
                    scrollSnapAlign: "center",
                    background: "rgba(20,20,20,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    borderRadius: "12px",
                    boxShadow: isCenter ? centerGlow : sideGlow,
                    color: "#f1f1f1",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transform: isCenter ? "scale(1.05)" : "scale(0.92)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    animation: isCenter
                      ? "pulseGlow 2s infinite alternate"
                      : "none",
                  }}
                >
                  <div
                    className="service-icon mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <i
                      className={s.icon}
                      style={{ fontSize: "2.5rem", color: "#00d4ff" }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    {s.title}
                  </div>
                  <div style={{ fontSize: "0.95rem", lineHeight: "1.3rem" }}>
                    {s.text}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Row className="g-4">
            {services.map((s, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <Card
                  className="review-card h-100 p-3 d-flex flex-column justify-content-between"
                  style={{
                    background: "rgba(20,20,20,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
                  <div className="service-icon mb-3">
                    <i
                      className={`${s.icon}`}
                      style={{ fontSize: "2.5rem", color: "#00d4ff" }}
                    ></i>
                  </div>
                  <Card.Title>{s.title}</Card.Title>
                  <div className="service-text mb-3">{s.text}</div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
