export default function StructuredData() {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Maison Noir",
    description:
      "An elegant dining destination offering exceptional cuisine and memorable experiences.",
    url: "https://www.maisonnoir.vercel.app",
    image: "https://www.maisonnoir.vercel.app/images/og-image.jpg",
    servesCuisine: ["Contemporary Cuisine"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(restaurant).replace(/</g, "\\u003c"),
      }}
    />
  );
}