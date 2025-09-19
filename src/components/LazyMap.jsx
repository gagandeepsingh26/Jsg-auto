import React from "react";

export default function LazyMap() {
  return (
    <iframe
      title="JSG Auto Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.3616968680244!2d-79.60658722268542!3d43.744585271098025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b029b2d754b%3A0xa9066bebf76d3393!2sJSG%20AUTO%20LTD!5e0!3m2!1sen!2sca!4v1757966917811!5m2!1sen!2sca"
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: 12 }}
      allowFullScreen
      loading="lazy"
    />
  );
}
