// App.jsx — Dark Theme with Neon Blue Highlights
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { animateScroll as scroll, Events } from "react-scroll";
import { SEO, LocalBusinessSchema } from "./seo";
import {
  Navbar,
  Services,
  BrandsCarousel,
  Hero,
  About,
  Gallery,
  Reviews,
  Contact,
  Footer,
} from "./components";
import "./styles/App.css";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });

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

  useEffect(() => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => scroll.scrollToTop({ duration: 500, smooth: true });

  const SECTIONS = [
    { id: "navbar", Component: Navbar },
    { id: "hero", Component: Hero },
    { id: "services", Component: Services },
    { id: "brands", Component: BrandsCarousel },
    { id: "about", Component: About },
    { id: "gallery", Component: Gallery },
    { id: "reviews", Component: Reviews },
    { id: "contact", Component: Contact },
    { id: "footer", Component: Footer },
  ];

  return (
    <>
      {/* =====  SEO & SOCIAL META  ===== */}
      <SEO />
      <LocalBusinessSchema />
      <div>
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
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
