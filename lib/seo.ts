import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

// ─── Shared keyword bank ─────────────────────────────────────────────────────
export const KEYWORDS = [
  "Vinay Interiors", "Vinay Interiors Hyderabad", "Vinay Atelier",
  "interior designer Hyderabad", "interior design Hyderabad",
  "best interior designer Hyderabad", "top interior designers Hyderabad",
  "home interior design Hyderabad", "luxury interior design Hyderabad",
  "premium interior design Hyderabad", "turnkey interior design Hyderabad",
  "residential interior design Hyderabad", "commercial interior design Hyderabad",
  "office interior design Hyderabad", "renovation services Hyderabad",
  "architecture firm Hyderabad",
  "modular kitchen Hyderabad", "modular kitchen designer Hyderabad",
  "false ceiling Hyderabad", "gypsum ceiling Hyderabad",
  "wardrobes cupboards Hyderabad", "built-in wardrobe Hyderabad",
  "home theater design Hyderabad", "home automation Hyderabad",
  "smart home Hyderabad", "main door elevation Hyderabad",
  "interior designer Gachibowli", "interior design Gachibowli",
  "interior designer Madhapur", "interior design Madhapur",
  "interior designer HITEC City", "interior design HITEC City",
  "interior designer HiTech City", "interior designer Raidurg",
  "interior design Raidurg", "interior designer Kondapur",
  "interior designer Kokapet", "interior designer Nanakramguda",
  "interior designer Financial District Hyderabad",
  "interior designer LB Nagar", "interior design LB Nagar",
  "interior designer Nagole", "interior design Nagole",
  "interior designer Uppal", "interior design Uppal",
  "interior designer Saroornagar", "interior design Saroornagar",
  "interior designer Kothapet", "interior design Kothapet",
  "interior designer Dilsukhnagar",
  "interior designer Banjara Hills", "interior designer Jubilee Hills",
  "interior designer Begumpet", "interior designer Himayatnagar",
  "interior design Telangana", "premium interior design Telangana",
];

const BASE_DESCRIPTION =
  "Vinay Interiors — Hyderabad's premium interior design & architecture studio. Specialising in modular kitchens, wardrobes, false ceilings, office interiors & home automation. Serving Gachibowli, Madhapur, HITEC City, Raidurg, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet and all of Hyderabad since 2014.";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=630";

// ─── Default (root layout) metadata ─────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: `${SITE.name} | Interior Design & Architecture Studio Hyderabad`,
    template: `%s | ${SITE.name}`,
  },
  description: BASE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.siteUrl }],
  icons: {
    icon: "/Untitled design.png",
    shortcut: "/Untitled design.png",
    apple: "/Untitled design.png",
  },
  creator: SITE.name,
  publisher: SITE.name,
  category: "Interior Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.siteUrl,
    siteName: SITE.name,
    title: `${SITE.name} | Interior Design & Architecture Studio Hyderabad`,
    description: BASE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE.name} — luxury interior design and architecture studio in Hyderabad, Telangana, India` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vinayinteriors",
    creator: "@vinayinteriors",
    title: `${SITE.name} | Interior Designer Hyderabad`,
    description: BASE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: `${SITE.name} — bespoke interior design and architecture, Hyderabad` }],
  },
  alternates: { canonical: "/" },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
    "coverage": "Gachibowli, Madhapur, HITEC City, Raidurg, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet, Hyderabad, Telangana",
    "classification": "Interior Design, Architecture, Home Renovation",
    "language": "English",
    "revisit-after": "7 days",
    "rating": "general",
    "DC.language": "en-IN",
    "DC.coverage": "Hyderabad, Telangana, India",
    "DC.subject": "Interior Design, Architecture, Home Renovation, Hyderabad",
  },
};

// ─── Per-page metadata builder ───────────────────────────────────────────────
type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export const buildMetadata = ({ title, description, path = "/", image = OG_IMAGE, keywords }: SeoProps): Metadata => ({
  title,
  description,
  keywords: keywords ?? KEYWORDS,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${SITE.siteUrl}${path}`,
    images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${SITE.name}, Interior Design Studio Hyderabad` }],
  },
  twitter: {
    title: `${title} | ${SITE.name}`,
    description,
    images: [image],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
    "coverage": "Gachibowli, Madhapur, HITEC City, Raidurg, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet, Hyderabad",
    "classification": "Interior Design, Architecture",
    "language": "English",
  },
});

// ─── Organization / LocalBusiness JSON-LD ───────────────────────────────────
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["InteriorDesignCompany", "LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE.siteUrl}/#organization`,
  name: SITE.legalName,
  alternateName: ["Vinay Interiors", "Vinay Atelier", "Vinay Interiors Hyderabad"],
  url: SITE.siteUrl,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: "2014",
  description: BASE_DESCRIPTION,
  image: OG_IMAGE,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#8-8-1/1, Chittireddy Complex, Green Park Colony, Sagar Road, Karmanghat",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500079",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "17.3850", longitude: "78.4867" },
  areaServed: [
    { "@type": "City", name: "Hyderabad", sameAs: "https://en.wikipedia.org/wiki/Hyderabad" },
    { "@type": "Neighborhood", name: "Gachibowli", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Madhapur", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "HITEC City", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Raidurg", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "LB Nagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nagole", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Uppal", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Saroornagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kothapet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Banjara Hills", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Jubilee Hills", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kondapur", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kokapet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Begumpet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Dilsukhnagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nanakramguda", containedInPlace: "Hyderabad" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design & Architecture Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design", description: "Contemporary modular kitchens for Hyderabad homes — high-gloss lacquered shutters, textured laminates, easy to maintain." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wardrobe & Cupboard Design", description: "Walk-in wardrobes and built-in cupboards crafted to maximise space across Hyderabad residences." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "False Ceiling Design", description: "Gypsum, POP and baffle ceiling systems with integrated ambient lighting for Hyderabad interiors." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design", description: "Premium office interiors for Hyderabad's HITEC City, Gachibowli and Madhapur businesses." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Theater Design", description: "Immersive home theater rooms with 4K projection and calibrated surround sound in Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Automation", description: "Smart home automation — lighting, HVAC, security, entertainment — for Hyderabad homes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Main Door Elevation Design", description: "Statement main door designs with premium hardware across Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Home Renovation", description: "Complete renovation services across Hyderabad — Gachibowli, Madhapur, LB Nagar, Uppal, Kothapet and beyond." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Interior Design", description: "Bespoke interior design for villas, apartments and independent houses across Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interior Design", description: "End-to-end commercial interior design for offices, retail and hospitality venues in Hyderabad." } },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5", worstRating: "1" },
  sameAs: [SITE.social.instagram, SITE.social.behance, SITE.social.linkedin],
};

// ─── Breadcrumb JSON-LD helper ───────────────────────────────────────────────
export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.siteUrl}${item.url}`,
  })),
});

// ─── FAQ JSON-LD helper ──────────────────────────────────────────────────────
export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
