import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { sectionStyle } from "../utils/styles";
import { GalleryList } from "../utils/constants";

export default function Gallery() {
  return (
    <section id="gallery" style={sectionStyle("#1e1e1e")}>
      <Container>
        <h2 className="mb-4 text-center">Our Work</h2>
        <Carousel fade interval={5000} indicators={true} controls={true}>
          {GalleryList.map((item, i) => (
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
  );
}
