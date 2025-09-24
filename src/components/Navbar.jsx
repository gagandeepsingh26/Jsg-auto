import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  //   const [expanded, setExpanded] = useState(false);
  const NAV_ITEMS = [
    "home",
    "services",
    "about",
    "gallery",
    "reviews",
    "contact",
  ];
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: "#0d0d0d",
        borderBottom: "2px solid #00d4ff",
        boxShadow: "0 2px 12px rgba(0, 212, 255, 0.1)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          to="home"
          smooth
          duration={500}
          className="navbar-brand d-flex align-items-center p-0"
          onClick={closeMenu}
        >
          <img src="/Jsg-auto/images/jsg-logo.png" alt="JSG Auto" height="72" />
        </Link>

        {/* Mobile Toggler */}

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu Links */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {NAV_ITEMS.map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  activeClass="active-link"
                  className="nav-link position-relative"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  style={{
                    color: "#f8f9fa",
                    margin: "0 6px",
                    transition: "color 0.3s, text-shadow 0.3s",
                  }}
                  activeStyle={{
                    color: "#00d4ff",
                    textShadow: "0 0 10px rgba(0, 212, 255, 0.9)",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains("active-link")) {
                      e.target.style.color = "#00d4ff";
                      e.target.style.textShadow =
                        "0 0 8px rgba(0, 212, 255, 0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains("active-link")) {
                      e.target.style.color = "#f8f9fa";
                      e.target.style.textShadow = "none";
                    }
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}

                  {/* Underline */}
                  <span
                    className="underline"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      height: "2px",
                      width: "0%",
                      backgroundColor: "#00d4ff",
                      boxShadow: "0 0 8px rgba(0,212,255,0.7)",
                      transition: "all 0.3s ease-in-out",
                      transform: "translateX(-50%)",
                    }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
