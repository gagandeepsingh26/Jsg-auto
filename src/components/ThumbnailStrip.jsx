import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ThumbnailStrip.css";

export default function ThumbnailStrip({ items, activeIndex, onNavigate }) {
  useEffect(() => {
    const node = document.querySelector(`.thumb[data-index="${activeIndex}"]`);
    if (node)
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }, [activeIndex]);

  return (
    <div className="thumb-strip">
      {items.map((item, i) => (
        <button
          key={i}
          className={`thumb ${i === activeIndex ? "active" : ""}`}
          onClick={() => onNavigate(i)}
          aria-label={`Go to slide ${i + 1}`}
        >
          <img src={item.image} alt={item.caption} />
        </button>
      ))}
    </div>
  );
}

ThumbnailStrip.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
};
