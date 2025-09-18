import React from "react";
import { Container, Carousel } from "react-bootstrap";

const images = [
  "https://source.unsplash.com/collection/190727/1200x800",
  "https://source.unsplash.com/collection/190728/1200x800",
  "https://source.unsplash.com/collection/190726/1200x800",
];

export default function Gallery() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4">Gallery — Before & After</h2>
        <Carousel>
          {images.map((src, i) => (
            <Carousel.Item key={i} interval={3500}>
              <img
                className="d-block w-100 rounded"
                src={src}
                alt={`gallery-${i}`}
              />
              <Carousel.Caption>
                <h5>Expert Repair #{i + 1}</h5>
                <p>High-quality finish and color match.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
