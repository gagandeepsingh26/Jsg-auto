import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container className="d-flex justify-content-between align-items-center">
        <div>© {new Date().getFullYear()} JSG Auto — All rights reserved.</div>
        <div>
          <a className="text-white me-3" href="#">
            Privacy
          </a>
          <a className="text-white" href="#">
            Terms
          </a>
        </div>
      </Container>
    </footer>
  );
}
