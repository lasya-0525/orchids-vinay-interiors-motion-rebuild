import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

// ─── Shared keyword bank ─────────────────────────────────────────────────────
export const KEYWORDS = [
  // ── Brand ──
  "Vinay Interiors", "Vinay Interiors Hyderabad", "Vinay Atelier", "Vinay Interiors reviews",
  "Vinay Interiors Gachibowli", "Vinay Interiors Madhapur", "Vinay Interiors HITEC City",

  // ── Generic intent ──
  "interior designer Hyderabad", "interior design Hyderabad",
  "best interior designer Hyderabad", "top interior designers Hyderabad",
  "interior designer near me Hyderabad", "interior design company Hyderabad",
  "home interior design Hyderabad", "luxury interior design Hyderabad",
  "premium interior design Hyderabad", "turnkey interior design Hyderabad",
  "residential interior design Hyderabad", "commercial interior design Hyderabad",
  "office interior design Hyderabad", "renovation services Hyderabad",
  "architecture firm Hyderabad", "interior design studio Hyderabad",
  "affordable interior designer Hyderabad", "low cost interior design Hyderabad",
  "best interior design firm Hyderabad", "award winning interior designer Hyderabad",
  "2BHK interior design Hyderabad", "3BHK interior design Hyderabad",
  "villa interior design Hyderabad", "apartment interior design Hyderabad",
  "flat interior design Hyderabad", "duplex interior design Hyderabad",

  // ── West Hyderabad — primary service areas ──
  "interior designer Gachibowli", "interior design Gachibowli", "best interior designer Gachibowli",
  "interior designer Madhapur", "interior design Madhapur", "best interior designer Madhapur",
  "interior designer HITEC City", "interior design HITEC City", "best interior designer HITEC City",
  "interior designer HiTech City", "interior design HiTech City",
  "interior designer Raidurg", "interior design Raidurg",
  "interior designer Kondapur", "interior design Kondapur", "best interior designer Kondapur",
  "interior designer Kokapet", "interior design Kokapet", "best interior designer Kokapet",
  "interior designer Nanakaramguda", "interior design Nanakaramguda", "interior designer Nanakramguda",
  "interior designer Financial District Hyderabad", "interior design Financial District Hyderabad",
  "interior designer Tellapur", "interior design Tellapur", "best interior designer Tellapur",
  "interior designer Miyapur", "interior design Miyapur", "best interior designer Miyapur",
  "interior designer Bachupally", "interior design Bachupally", "best interior designer Bachupally",
  "interior designer Medchal", "interior design Medchal",
  "interior designer Nallagandla", "interior design Nallagandla",
  "interior designer Manikonda", "interior design Manikonda", "best interior designer Manikonda",
  "interior designer Narsingi", "interior design Narsingi",
  "interior designer Serilingampally", "interior design Serilingampally",
  "interior designer Kukatpally", "interior design Kukatpally",
  "interior designer Chandanagar", "interior designer Hafeezpet",
  "interior designer Puppalaguda", "interior designer Attapur",

  // ── Central / premium Hyderabad ──
  "interior designer Banjara Hills", "interior design Banjara Hills",
  "interior designer Jubilee Hills", "interior design Jubilee Hills",
  "interior designer Begumpet", "interior design Begumpet",
  "interior designer Himayatnagar", "interior design Hitech City Hyderabad",
  "interior designer Panjagutta", "interior designer Somajiguda",

  // ── East / South Hyderabad ──
  "interior designer LB Nagar", "interior design LB Nagar",
  "interior designer Nagole", "interior design Nagole",
  "interior designer Uppal", "interior design Uppal",
  "interior designer Saroornagar", "interior design Saroornagar",
  "interior designer Kothapet", "interior design Kothapet",
  "interior designer Dilsukhnagar",

  // ── Services × location ──
  "modular kitchen Hyderabad", "modular kitchen designer Hyderabad",
  "modular kitchen Gachibowli", "modular kitchen Madhapur", "modular kitchen HITEC City",
  "modular kitchen Kondapur", "modular kitchen Manikonda", "modular kitchen Miyapur",
  "modular kitchen Bachupally", "modular kitchen Tellapur", "modular kitchen Financial District",
  "false ceiling Hyderabad", "gypsum ceiling Hyderabad", "POP ceiling Hyderabad",
  "false ceiling designer Hyderabad", "false ceiling Gachibowli", "false ceiling Madhapur",
  "false ceiling Kondapur", "false ceiling Miyapur", "false ceiling Bachupally",
  "wardrobes Hyderabad", "built-in wardrobe Hyderabad", "walk-in wardrobe Hyderabad",
  "cupboard design Hyderabad", "wardrobe designer Gachibowli", "wardrobe designer Madhapur",
  "wardrobe designer Kondapur", "wardrobe designer Miyapur",
  "home theater design Hyderabad", "home theater Gachibowli", "home theater Madhapur",
  "home automation Hyderabad", "smart home Hyderabad", "home automation Gachibowli",
  "home automation Madhapur", "home automation Kondapur",
  "main door elevation Hyderabad", "main door design Hyderabad",
  "office interior design Gachibowli", "office interior design Madhapur",
  "office interior design HITEC City", "office interior design Financial District",
  "full home renovation Hyderabad", "home renovation Gachibowli", "home renovation Madhapur",
  "home renovation Kondapur", "home renovation Miyapur", "home renovation Bachupally",

  // ── State / region ──
  "interior design Telangana", "premium interior design Telangana",
  "interior designer Hyderabad Telangana",
];

const BASE_DESCRIPTION =
  "Vinay Interiors — Hyderabad's premium interior design & architecture studio since 2014. Modular kitchens, wardrobes, false ceilings, office interiors & home automation. Serving Gachibowli, Madhapur, HITEC City, Kondapur, Manikonda, Miyapur, Bachupally, Tellapur, Financial District, Nanakaramguda, Nallagandla & all of Hyderabad. 200+ projects. Free consultation.";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=630";

// ─── Default (root layout) metadata ─────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: `${SITE.name} | Best Interior Designer Hyderabad – Gachibowli, Madhapur, Kondapur, Miyapur`,
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
    title: `${SITE.name} | Best Interior Designer Hyderabad`,
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
    "coverage": "Gachibowli, Madhapur, HITEC City, Raidurg, Kondapur, Kokapet, Nanakaramguda, Financial District, Tellapur, Miyapur, Bachupally, Medchal, Nallagandla, Manikonda, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet, Hyderabad, Telangana",
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
    "coverage": "Gachibowli, Madhapur, HITEC City, Raidurg, Kondapur, Nanakaramguda, Financial District, Tellapur, Miyapur, Bachupally, Medchal, Nallagandla, Manikonda, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet, Hyderabad",
    "classification": "Interior Design, Architecture",
    "language": "English",
  },
});

// ─── WebSite JSON-LD ─────────────────────────────────────────────────────────
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.siteUrl}/#website`,
  url: SITE.siteUrl,
  name: SITE.name,
  description: BASE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE.siteUrl}/#organization` },
};

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
  logo: {
    "@type": "ImageObject",
    url: `${SITE.siteUrl}/logo.webp`,
    width: 400,
    height: 200,
  },
  priceRange: "₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  paymentAccepted: "Cash, Bank Transfer, UPI, Cheque",
  currenciesAccepted: "INR",
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
    { "@type": "Neighborhood", name: "Kondapur", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kokapet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nanakaramguda", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Financial District", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Tellapur", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Miyapur", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Bachupally", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Medchal", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nallagandla", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Manikonda", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Narsingi", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Serilingampally", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Banjara Hills", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Jubilee Hills", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Begumpet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Dilsukhnagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "LB Nagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nagole", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Uppal", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Saroornagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kothapet", containedInPlace: "Hyderabad" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design & Architecture Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design", areaServed: "Hyderabad", description: "Contemporary modular kitchens for Hyderabad homes — high-gloss lacquered shutters, textured laminates, easy to maintain. Serving Gachibowli, Madhapur, Kondapur, Miyapur, Bachupally, Manikonda, Financial District." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wardrobe & Cupboard Design", areaServed: "Hyderabad", description: "Walk-in wardrobes and built-in cupboards crafted to maximise space across Hyderabad residences including Gachibowli, Kondapur, Tellapur, Nallagandla." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "False Ceiling Design", areaServed: "Hyderabad", description: "Gypsum, POP and baffle ceiling systems with integrated ambient lighting for Hyderabad interiors. Available across Madhapur, HITEC City, Miyapur, Bachupally." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design", areaServed: "Hyderabad", description: "Premium office interiors for Hyderabad's HITEC City, Gachibowli, Madhapur, Financial District and Raidurg businesses." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Theater Design", areaServed: "Hyderabad", description: "Immersive home theater rooms with 4K projection and calibrated surround sound in Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Automation", areaServed: "Hyderabad", description: "Smart home automation — lighting, HVAC, security, entertainment — for Hyderabad homes across Gachibowli, Madhapur, Kondapur, Miyapur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Main Door Elevation Design", areaServed: "Hyderabad", description: "Statement main door designs with premium hardware across Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Home Renovation", areaServed: "Hyderabad", description: "Complete renovation services across Hyderabad — Gachibowli, Madhapur, Kondapur, Miyapur, Bachupally, Tellapur, Nanakaramguda, Financial District, Nallagandla, Manikonda and beyond." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Interior Design", areaServed: "Hyderabad", description: "Bespoke interior design for villas, apartments and independent houses across Hyderabad including all premium localities." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interior Design", areaServed: "Hyderabad", description: "End-to-end commercial interior design for offices, retail and hospitality venues in Hyderabad's business districts." } },
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

// ─── Homepage FAQ data (for rich snippets) ───────────────────────────────────
export const homepageFaqJsonLd = faqJsonLd([
  {
    q: "Who is the best interior designer in Hyderabad?",
    a: "Vinay Interiors is one of Hyderabad's most trusted interior design studios, with 12+ years of experience and 200+ completed projects across Gachibowli, Madhapur, HITEC City, Kondapur, Miyapur, Bachupally, Tellapur, Financial District, Nanakaramguda, Nallagandla, Manikonda and beyond. Call +91 9866618370 for a free consultation.",
  },
  {
    q: "What areas in Hyderabad does Vinay Interiors serve?",
    a: "Vinay Interiors serves all major localities in Hyderabad — with a primary focus on West Hyderabad including Gachibowli, Madhapur, HITEC City, Raidurg, Kondapur, Kokapet, Nanakaramguda, Financial District, Tellapur, Miyapur, Bachupally, Medchal, Nallagandla, Manikonda, Narsingi, and Serilingampally. We also serve Banjara Hills, Jubilee Hills, LB Nagar, Uppal, Nagole, Kothapet and the entire city.",
  },
  {
    q: "How much does interior design cost in Hyderabad?",
    a: "Interior design costs in Hyderabad depend on the size of the project, materials selected, and the scope of work. Vinay Interiors offers transparent pricing for modular kitchens, wardrobes, false ceilings, full home interiors, and office fit-outs. Contact us at +91 9866618370 for a free site visit and detailed quote.",
  },
  {
    q: "Do you offer free interior design consultation in Hyderabad?",
    a: "Yes, Vinay Interiors provides a free initial consultation and site visit across all areas in Hyderabad. Call +91 9866618370 or fill out our inquiry form to schedule a visit.",
  },
  {
    q: "What interior design services does Vinay Interiors offer?",
    a: "Vinay Interiors offers modular kitchen design, wardrobe & cupboard design, false ceiling design, office interiors, home theater design, main door elevation, home automation (smart home), pest control, and full turnkey interior design and renovation services across Hyderabad.",
  },
  {
    q: "Do you provide turnkey interior design projects in Hyderabad?",
    a: "Yes. Vinay Interiors handles the entire project from concept and 3D visualization to material procurement and on-site execution — delivering a fully finished, move-in-ready space. We serve clients in Gachibowli, Madhapur, HITEC City, Kondapur, Miyapur, Bachupally, Financial District, Tellapur, and all of Hyderabad.",
  },
  {
    q: "How long does a full home interior design project take in Hyderabad?",
    a: "A typical 3BHK interior design project in Hyderabad takes 45–90 days from finalised design to handover, depending on scope and material availability. Vinay Interiors maintains clear timelines and provides project updates at every stage.",
  },
  {
    q: "Can I get interior design done in the Financial District or Nanakaramguda, Hyderabad?",
    a: "Absolutely. Vinay Interiors actively serves both the Financial District and Nanakaramguda, two of our primary areas in West Hyderabad. We have completed multiple residential and commercial projects in these localities. Call +91 9866618370 to discuss your project.",
  },
  {
    q: "Does Vinay Interiors do office interior design in HITEC City and Madhapur?",
    a: "Yes. We specialise in premium office interiors for HITEC City, Madhapur, Gachibowli, Raidurg, and the Financial District — Hyderabad's primary tech and business corridors. Our office design work includes space planning, acoustic ceiling systems, workstation layouts, and brand-aligned finishes.",
  },
  {
    q: "What is the difference between modular and semi-modular kitchens?",
    a: "A modular kitchen uses pre-fabricated, factory-made cabinet modules that are assembled on-site, offering precision, uniformity, and easy future reconfiguration. A semi-modular kitchen combines some factory modules with custom-built components. Vinay Interiors designs and installs both types across Hyderabad — from Gachibowli and Kondapur to Miyapur and Bachupally.",
  },
]);
