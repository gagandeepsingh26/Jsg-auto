import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Lightbox.css";
import ThumbnailStrip from "./ThumbnailStrip";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  // keyboard nav
  useEffect(() => {
    if (index === -1) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onNavigate]);

  if (index === -1) return null;

  const item = items[index];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <img
          src={item.image}
          alt={item.caption}
          className="lightbox-img"
          onClick={() => onNavigate((index + 1) % items.length)}
        />

        <div className="lightbox-info">
          <h5 className="neon-glow">{item.caption}</h5>
          <p>{item.sub}</p>
        </div>

        <ThumbnailStrip
          items={items}
          activeIndex={index}
          onNavigate={onNavigate}
        />

        {items.length > 1 && (
          <>
            <button
              className="lightbox-arrow left"
              onClick={() =>
                onNavigate((index - 1 + items.length) % items.length)
              }
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              className="lightbox-arrow right"
              onClick={() => onNavigate((index + 1) % items.length)}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      sub: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};
