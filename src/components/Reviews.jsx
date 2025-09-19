import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    fetch("/reviews.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setReviews)
      .catch(() => setReviews([]));
  }, []);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
  );
}
