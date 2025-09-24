/* Navbar.jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const NAV_ITEMS = [
    "home",
    "services",
    "about",
    "gallery",
    "reviews",
    "contact",
  ];
  const [expanded, setExpanded] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const closeMenu = () => setExpanded(false);

  useEffect(() => {
    const measure = () => {
      const nav = document.getElementById("mainNavbar");
      if (nav) setNavHeight(nav.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const desktopLinks = (
    <ul className="navbar-nav ms-auto">
      {NAV_ITEMS.map((s) => (
        <li className="nav-item" key={s}>
          <Link
            activeClass="active-link"
            className="nav-link position-relative"
            to={s}
            spy
            smooth
            offset={-navHeight}
            duration={500}
            onClick={closeMenu}
            style={{
              color: "#f8f9fa",
              margin: "0 6px",
              transition: "color .3s,text-shadow .3s",
            }}
            activeStyle={{
              color: "#00d4ff",
              textShadow: "0 0 10px rgba(0,212,255,.9)",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active-link")) {
                e.target.style.color = "#00d4ff";
                e.target.style.textShadow = "0 0 8px rgba(0,212,255,.8)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active-link")) {
                e.target.style.color = "#f8f9fa";
                e.target.style.textShadow = "none";
              }
            }}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
            <span
              className="underline"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                height: "2px",
                width: "0%",
                backgroundColor: "#00d4ff",
                boxShadow: "0 0 8px rgba(0,212,255,.7)",
                transition: "all .3s ease-in-out",
                transform: "translateX(-50%)",
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );

  const mobileDrawer = (
    <>
      <div
        className={`mobile-drawer ${expanded ? "open" : ""}`}
        style={{ top: navHeight, height: `calc(100vh - ${navHeight}px)` }}
      >
        <div className="drawer-body">
          <ul className="navbar-nav flex-column">
            {NAV_ITEMS.map((s) => (
              <li className="nav-item" key={s}>
                <Link
                  activeClass="active-link"
                  className="nav-link drawer-link"
                  to={s}
                  spy
                  smooth
                  offset={-navHeight}
                  duration={500}
                  onClick={closeMenu}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="drawer-footer">
          <div className="contact-icons">
            <a href="tel:+16476484680">
              <i className="bi bi-telephone" />
            </a>
            <a href="mailto:jsgauto@live.com">
              <i className="bi bi-envelope" />
            </a>
            <a
              href="https://google.com/maps?rlz=1C5CHFA_enCA917CA917&gs_lcrp=EgZjaHJvbWUqDQgCEC4YrwEYxwEYgAQyBggAEEUYPDIGCAEQRRg5Mg0IAhAuGK8BGMcBGIAEMg0IAxAuGK8BGMcBGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMjAzajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KUt1LZsCOyuIMZMzbffrawap&daddr=1770+Albion+Rd+%2331,+Etobicoke,+ON+M9V+1C2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-geo-alt" />
            </a>
          </div>
          <small className="copyright">
            © {new Date().getFullYear()} JSG Auto. All rights reserved.
          </small>
        </div>
      </div>
      {expanded && <div className="mobile-backdrop" onClick={closeMenu} />}
    </>
  );

  return (
    <>
      <nav
        id="mainNavbar"
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: "#0d0d0d",
          borderBottom: "2px solid #00d4ff",
          boxShadow: "0 2px 12px rgba(0, 212, 255, 0.1)",
          zIndex: 1050,
        }}
      >
        <div className="container-fluid">
          <Link
            to="home"
            smooth
            duration={500}
            className="navbar-brand d-flex align-items-center p-0"
            onClick={closeMenu}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/jsg-logo.png"}
              alt="JSG Auto"
              height="72"
            />
          </Link>
          <div className="d-none d-lg-flex">{desktopLinks}</div>
          <div className="d-lg-none ms-auto">
            <button
              className="navbar-toggler custom-toggler"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Close navigation" : "Open navigation"}
            >
              {expanded ? (
                <i
                  className="bi bi-x"
                  style={{ color: "#00d4ff", fontSize: "1.8rem" }}
                />
              ) : (
                <i
                  className="bi bi-list"
                  style={{ color: "#00d4ff", fontSize: "1.8rem" }}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileDrawer}

      <style>{`
        .mobile-drawer{position:fixed;top:0;right:-100%;width:280px;max-width:75vw;background-color:#0d0d0d;border-left:2px solid #00d4ff;transition:right .35s ease-in-out;z-index:1040;display:flex;flex-direction:column;}
        .mobile-drawer.open{right:0;}
        .drawer-body{flex:1 1 auto;overflow-y:auto;padding-bottom:1rem;}
        .drawer-link{color:#f8f9fa;font-size:18px;padding:14px 24px;border-bottom:1px solid rgba(0,212,255,.15);transition:background .25s,color .25s;}
        .drawer-link:hover,.drawer-link.active-link{color:#00d4ff;background:rgba(0,212,255,.08);}
        .drawer-footer{flex-shrink:0;border-top:1px solid rgba(0,212,255,.2);padding:1rem 24px 1.25rem;text-align:center;}
        .contact-icons{display:flex;justify-content:center;gap:1.25rem;margin-bottom:.75rem;}
        .contact-icons a{color:#b3b3b3;font-size:1.3rem;transition:color .25s,transform .25s;}
        .contact-icons a:hover{color:#00d4ff;transform:scale(1.15);}
        .copyright{color:#888;font-size:.75rem;}
        .mobile-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1035;}
        /* pull toggler flush to right edge */
        /* Remove default border + padding */
        .custom-toggler {
          border: none !important;
          outline: none !important;
          padding: 0 !important;
          margin: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%; /* makes glow look circular */
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }

        /* Glow effect on hover & focus */
        .custom-toggler:hover {
          box-shadow: none;
          transform: none;
        }
        /* Active (when pressed) */
        .custom-toggler:active {
          box-shadow: 0 0 14px #00d4ff, 0 0 28px #00d4ff inset;
          transform: scale(0.95);
        }

        /* Icons */
        .custom-toggler i {
          font-size: 1.8rem;
          color: #00d4ff;
          line-height: 1; /* keeps it centered vertically */
        }

        /* Remove Bootstrap container side padding */
        .navbar .container {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        /* Logo alignment */
        .navbar-brand {
          padding-left: 0 !important;
          margin-left: 0 !important;
        }

      `}</style>
    </>
  );
}
