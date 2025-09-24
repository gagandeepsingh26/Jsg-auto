import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const autoScrollRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  // Fetch reviews
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/reviews.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setReviews)
      .catch(() => setReviews([]));
  }, []);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card width based on screen size
  const updateCardWidth = () => {
    const width = window.innerWidth * 0.75;
    setCardWidth(Math.min(Math.max(width, 250), 400)); // min 250px, max 400px
  };
  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Update center card on scroll
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
        closestIndex = index % reviews.length;
      }
    });

    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [reviews, cardWidth, isMobile]);

  // Scroll to card
  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = Array.from(container.children);
    const child = children[index];
    if (!child) return;
    const scrollLeft =
      child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  // Auto-scroll with pause on interaction
  useEffect(() => {
    if (!isMobile || reviews.length === 0) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const nextIndex = (centerIndex + 1) % reviews.length;
        scrollToCard(nextIndex);
      }, 5000);
    };

    startAutoScroll();

    const container = containerRef.current;
    const pauseAutoScroll = () => {
      clearInterval(autoScrollRef.current);
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(startAutoScroll, 4000);
    };

    container.addEventListener("touchstart", pauseAutoScroll, {
      passive: true,
    });
    container.addEventListener("mousedown", pauseAutoScroll);

    return () => {
      clearInterval(autoScrollRef.current);
      clearTimeout(pauseTimeoutRef.current);
      container.removeEventListener("touchstart", pauseAutoScroll);
      container.removeEventListener("mousedown", pauseAutoScroll);
    };
  }, [centerIndex, reviews, isMobile]);

  // Desktop version
  if (!isMobile) {
    return (
      <section id="reviews" style={sectionStyle("#2c2c2c")}>
        <Container>
          <h2 className="mb-4 text-center">What Our Clients Say</h2>
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
                      style={{ fontSize: "0.9rem", lineHeight: 1.5, flex: 1 }}
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

          {/* Google Reviews Button */}
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
    );
  }

  // Mobile version
  return (
    <section style={sectionStyle("#2c2c2c")}>
      <Container>
        <h2 className="mb-4 text-center">What Our Clients Say</h2>
        <div
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "16px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
            paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            paddingRight: `calc(50% - ${cardWidth / 2}px)`,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="no-scrollbar"
        >
          {reviews.map((review, i) => {
            const isCenter = i === centerIndex;
            // const centerGlow = "0 12px 28px rgba(0,212,255,0.25)";
            const sideGlow = "0 0 4px #00d4ff, 0 0 8px rgba(0,212,255,0.1)";

            return (
              <div
                key={i}
                style={{
                  flex: `0 0 ${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                  boxSizing: "border-box",
                  scrollSnapAlign: "center",
                  background: "rgba(20,20,20,0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  borderRadius: "12px",
                  boxShadow: sideGlow,
                  color: "#f1f1f1",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transform: isCenter ? "scale(0.98)" : "scale(0.92)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  minHeight: "280px",
                }}
              >
                <div className="mb-2">
                  {Array(review.stars)
                    .fill()
                    .map((_, idx) => (
                      <i
                        key={idx}
                        className="bi bi-star-fill text-warning me-1"
                        style={{ textShadow: "0 0 4px #FFD700" }}
                      />
                    ))}
                </div>
                <div style={{ fontSize: "0.95rem", lineHeight: 1.4, flex: 1 }}>
                  {review.text}
                </div>
                <div
                  style={{
                    color: "#00d4ff",
                    textShadow: "0 0 6px rgba(0,212,255,0.9)",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    textAlign: "right",
                    marginTop: "8px",
                  }}
                >
                  — {review.author}
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
            gap: "6px",
          }}
        >
          {reviews.map((_, i) => (
            <div
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: i === centerIndex ? "#00d4ff" : "#555",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Google Reviews Button */}
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
  );
}
