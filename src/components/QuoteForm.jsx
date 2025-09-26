import React, { useState } from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";

const serviceOptions = [
  "Collision Repair",
  "Paint & Refinish",
  "Detailing",
  "Tire Change / Seasonal Swap",
  "Scratch Removal",
  "Dent Removal",
  "Brake Service / Replacement",
  "Oil & Filter Change",
  "General Maintenance",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [checked, setChecked] = useState([]);
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const isMobile = window.innerWidth < 768;

  const toggleService = (service) => {
    setChecked((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);
    data.set("services", checked.join(","));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("sent");
      e.target.reset();
      setChecked([]);
      setName("");
      setMake("");
      setModel("");
    } catch {
      setStatus("idle");
      alert("Sorry, couldn't send. Try again.");
    }
  };

  const subject = `${name || "Someone"} requested a quote for ${make || ""} ${
    model || ""
  }`.trim();

  return (
    <Form
      onSubmit={handleSubmit}
      className="p-3 rounded-3 shadow-sm"
      style={{ background: "#181818", color: "#f1f1f1" }}
    >
      <input
        type="hidden"
        name="access_key"
        value="77eacd27-d0ee-483f-a0a4-2cc552e61b6c"
      />
      <input type="hidden" name="subject" value={subject} />

      {/* Personal Info Section */}
      <div
        className="mb-3 p-3 rounded"
        style={{
          border: "1px solid #444",
        }}
      >
        <h5
          style={{
            borderBottom: "1px solid #555",
            paddingBottom: "4px",
            marginBottom: "12px",
            fontWeight: 500,
            color: "#00d4ff",
          }}
        >
          Personal Information
        </h5>

        <Row className="g-2">
          <Col xs={12} sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  background: "#222",
                  borderColor: "#333",
                  color: "#fff",
                }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="john@mail.com"
                style={{
                  background: "#222",
                  borderColor: "#333",
                  color: "#fff",
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="(416) 555-1234"
            style={{
              background: "#222",
              borderColor: "#333",
              color: "#fff",
            }}
          />
        </Form.Group>
      </div>

      {/* Car Details Section */}
      <div
        className="mb-3 p-3 rounded"
        style={{
          border: "1px solid #444",
        }}
      >
        <h5
          style={{
            borderBottom: "1px solid #555",
            paddingBottom: "4px",
            marginBottom: "12px",
            fontWeight: 500,
            color: "#00d4ff",
          }}
        >
          Vehicle Details
        </h5>

        <Row className="g-2">
          <Col xs={12} sm={4}>
            <Form.Group className="mb-3">
              <Form.Label>Year *</Form.Label>
              <Form.Control
                name="year"
                type="number"
                min="1995"
                max="2030"
                required
                placeholder="2020"
                style={{
                  background: "#222",
                  borderColor: "#333",
                  color: "#fff",
                }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group className="mb-3">
              <Form.Label>Make *</Form.Label>
              <Form.Control
                name="make"
                type="text"
                required
                placeholder="Honda"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                style={{
                  background: "#222",
                  borderColor: "#333",
                  color: "#fff",
                }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group className="mb-3">
              <Form.Label>Model *</Form.Label>
              <Form.Control
                name="model"
                type="text"
                required
                placeholder="Civic"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{
                  background: "#222",
                  borderColor: "#333",
                  color: "#fff",
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>

      {/* Services */}
      <Form.Group className="mb-4">
        <Form.Label>I need a quote for:</Form.Label>
        <div className="d-flex flex-wrap mt-2 gap-2">
          {serviceOptions.map((s) => {
            const active = checked.includes(s);
            return (
              <div
                key={s}
                onClick={() => toggleService(s)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "25px",
                  border: `1px solid ${active ? "#00d4ff" : "#444"}`,
                  background: active
                    ? "linear-gradient(135deg, #00d4ff, #00aaff)"
                    : "#222",
                  color: active ? "#000" : "#ccc",
                  cursor: "pointer",
                  userSelect: "none",
                  textAlign: "center",
                  marginBottom: "6px",
                  fontWeight: active ? 600 : 400,
                  transition: "all 0.25s ease",
                  fontSize: isMobile ? "0.8rem" : "0.95rem",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  boxShadow: active
                    ? "0 0 8px rgba(0, 212, 255, 0.6)"
                    : "0 0 4px rgba(0,0,0,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  if (!active) {
                    e.currentTarget.style.borderColor = "#00d4ff";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  if (!active) {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.color = "#ccc";
                  }
                }}
              >
                {s}
              </div>
            );
          })}
        </div>
      </Form.Group>

      {/* Message */}
      <Form.Group className="mb-3">
        <Form.Label>Message / Extra details</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={4}
          placeholder="Describe damage, preferred time, etc."
          style={{ background: "#222", borderColor: "#333", color: "#fff" }}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #00aaff)",
            border: "none",
            borderRadius: 25,
            padding: "10px 22px",
            fontWeight: 600,
            color: "#000",
            transition: "all 0.25s ease",
            boxShadow: "0 0 6px rgba(0, 212, 255, 0.5)",
          }}
          disabled={status === "sending"}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 212, 255, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 6px rgba(0, 212, 255, 0.5)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
        >
          {status === "sending" ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Sending...
            </>
          ) : (
            "Request Free Quote"
          )}
        </Button>
      </div>
    </Form>
  );
}
