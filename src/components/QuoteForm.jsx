// QuoteForm.jsx
import React, { useState } from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";

const serviceOptions = [
  "Collision Repair",
  "Paint & Refinish",
  "Dent Removal",
  "Scratch Removal",
  "Detailing",
  "Tire Change / Seasonal Swap",
  "Brake Service / Replacement",
  "Oil & Filter Change",
  "General Maintenance",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [checked, setChecked] = useState([]);
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const handleCheck = (e) =>
    setChecked(
      e.target.checked
        ? [...checked, e.target.value]
        : checked.filter((s) => s !== e.target.value)
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);
    data.set("services", checked.join(", "));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("sent");
      e.target.reset(); // clear form
      setChecked([]);
      setName("");
      setMake("");
      setModel(""); // clear checkboxes
    } catch {
      setStatus("idle");
      alert("Sorry, couldn't send. Try again.");
    }
  };

  /* build subject live */
  const subject = `${name || "Someone"} requested a quote for ${make || ""} ${
    model || ""
  }`.trim();

  if (status === "sent") {
    return (
      <>
        {/* full-screen overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20,20,20,0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setStatus("idle")} // click backdrop to close
        >
          {/* message box */}
          <div
            style={{
              background: "#121212",
              border: "1px solid #00d4ff",
              borderRadius: "12px",
              padding: "40px 50px",
              textAlign: "center",
              color: "#f1f1f1",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
              maxWidth: 420,
            }}
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside
          >
            <i
              className="bi bi-check-circle-fill"
              style={{ fontSize: "3.5rem", color: "#00d4ff" }}
            />
            <h4 className="mt-3 mb-2">Quote request sent!</h4>
            <p className="mb-4">
              {`We'll get back to you within one business day.`}
            </p>
            <Button
              onClick={() => setStatus("idle")}
              style={{
                backgroundColor: "#00d4ff",
                borderColor: "#00d4ff",
                borderRadius: 25,
                padding: "6px 22px",
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="1cfdc2bd-2b81-4170-b816-9c521bfce9f0"
      />
      <input type="hidden" name="subject" value={subject} />

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Name *</Form.Label>
            <Form.Control
              name="name"
              type="text"
              required
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
              placeholder="john@mail.com"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Vehicle Year *</Form.Label>
            <Form.Control
              name="year"
              type="number"
              min="1995"
              max="2030"
              required
              placeholder="2020"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Make *</Form.Label>
            <Form.Control
              name="make"
              type="text"
              required
              placeholder="Honda"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Model *</Form.Label>
            <Form.Control
              name="model"
              type="text"
              required
              placeholder="Civic"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" type="tel" placeholder="(416) 555-1234" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>I need a quote for:</Form.Label>
        <Row>
          {serviceOptions.map((s) => (
            <Col xs={6} key={s}>
              <Form.Check
                id={`service-${s}`} // ← unique id
                type="checkbox"
                label={s}
                value={s}
                checked={checked.includes(s)}
                onChange={handleCheck}
                className="mb-1"
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message / Extra details</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={4}
          placeholder="Describe damage, preferred time, etc."
        />
      </Form.Group>

      <Button
        type="submit"
        style={{ backgroundColor: "#00d4ff", borderColor: "#00d4ff" }}
        disabled={status === "sending"}
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
    </Form>
  );
}
