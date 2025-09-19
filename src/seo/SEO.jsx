// SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function SEO({
  title = "JSG Auto Ltd | Collision & Auto Body Repair Etobicoke",
  description = "Certified collision repair, frame straightening, painting, tires & brakes. Lifetime warranty, free loaners. 1770 Albion Rd, Etobicoke.",
  image = "/images/jsg-logo.png",
  url = "https://jsgauto.ca",
  type = "website",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="JSG Auto logo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};
