// src/components/Gallery.jsx
import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sectionStyle } from "../utils/styles";
import { GalleryList } from "../utils/constants";
import Lightbox from "./Lightbox";
import ThumbnailStrip from "./ThumbnailStrip";
import "./Gallery.css";

export default function Gallery() {
  const [index, setIndex] = useState(-1); // desktop lightbox
  const isMobile = window.innerWidth < 768;
  const swiperRef = useRef(null);

  // desktop lightbox
  const openLightbox = (i) => setIndex(i);
  const closeLightbox = () => setIndex(-1);
  const navigate = (newIndex) => setIndex(newIndex);

  // mobile swiper active-index hook
  useEffect(() => {
    if (!isMobile || !swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    const onSlideChange = () => setIndex(swiper.realIndex);
    swiper.on("slideChange", onSlideChange);
    return () => swiper.off("slideChange", onSlideChange);
  }, [isMobile]);

  // mobile / desktop split
  return (
    <section id="gallery" style={sectionStyle("#1e1e1e")}>
      <Container>
        <h2 className="text-center mb-4 neon-glow">Our Work</h2>

        {isMobile ? (
          <>
            {/* MOBILE : 1 card per swipe + peek + arrows + thumb strip (no lightbox) */}
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1.2} // 1 card + 20 % peek
              centeredSlides={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              className="gallery-swiper"
            >
              {GalleryList.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery-card">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="gallery-img"
                    />
                    <div className="gallery-info">
                      <h5 className="gallery-title">{item.caption}</h5>
                      <p className="gallery-sub">{item.sub}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* arrows + thumbnail strip (always visible) */}
            <div className="gallery-controls">
              <button className="swiper-button-prev">
                <i className="bi bi-chevron-left" />
              </button>
              <ThumbnailStrip
                items={GalleryList}
                activeIndex={swiperRef.current?.swiper?.realIndex || 0}
                onNavigate={(i) => swiperRef.current?.swiper?.slideTo(i)}
              />
              <button className="swiper-button-next">
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </>
        ) : (
          /* DESKTOP : original grid + lightbox */
          <div className="gallery-grid">
            {GalleryList.map((item, i) => (
              <div
                className="gallery-card"
                key={i}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                aria-label={`Open ${item.caption}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <h5 className="gallery-title">{item.caption}</h5>
                  <p className="gallery-sub">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* DESKTOP only lightbox */}
      {!isMobile && (
        <Lightbox
          items={GalleryList}
          index={index}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </section>
  );
}
