import React from "react";
import { Helmet } from "react-helmet-async";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": "https://jsgauto.ca/#business",
    name: "JSG Auto Ltd",
    description:
      "Certified collision repair, frame straightening, painting, brakes & more in Etobicoke. Lifetime warranty, free loaners.",
    url: "https://jsgauto.ca",
    telephone: "+1-647-648-4680",
    email: "jsgauto@live.com",
    priceRange: "$$",
    image: "https://jsgauto.ca/images/jsg-logo.png",
    logo: "https://jsgauto.ca/images/jsg-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1770 Albion Rd #31",
      addressLocality: "Etobicoke",
      addressRegion: "ON",
      postalCode: "M9V 1C2",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.744585,
      longitude: -79.606587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/jsgauto",
      "https://www.instagram.com/jsgauto",
      "https://g.page/jsgauto",
    ],
    hasMap: "https://www.google.com/maps?cid=18344490816352776076",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
