import React from "react";
import { Link } from "react-scroll";

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <h1 className="display-1 neon-glow">404</h1>
      <p className="lead">Looks like this page is in the shop for repairs.</p>
      <Link to="home" smooth className="btn btn-info mt-3">
        <i className="bi bi-house-door me-2" />
        Back to Home
      </Link>
    </div>
  );
}
