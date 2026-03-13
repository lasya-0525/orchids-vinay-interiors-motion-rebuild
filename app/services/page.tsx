"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const SERVICES = [
  {
    tag: "01",
    heading: "Cupboards & Wardrobes",
    imgUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    content:
      "Walk-in wardrobes, built-in cupboards, and bespoke storage systems crafted to maximise space and complement your interior palette.",
  },
  {
    tag: "02",
    heading: "Modular Kitchen",
    imgUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    content:
      "Contemporary modular kitchens designed for beauty and practicality. From high-gloss lacquered shutters to textured laminates, easy to maintain.",
  },
  {
    tag: "03",
    heading: "False Ceiling",
    imgUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    content:
      "Gypsum, POP, and baffle ceiling systems that define zones, conceal services, and elevate ambient lighting. Integrated seamlessly.",
  },
  {
    tag: "04",
    heading: "Office Interiors",
    imgUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    content:
      "Premium office interiors balancing productivity with prestige. Designed with acoustic detailing, brand language, and ergonomic principles.",
  },
  {
    tag: "05",
    heading: "Home Theater",
    imgUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
    content:
      "Immersive home theater rooms and feature TV wall units with integrated acoustic panels, 4K projection, and calibrated surround sound.",
  },
  {
    tag: "06",
    heading: "Main Door Elevation",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    content:
      "Your entrance sets the tone. We design statement main doors with premium hardware, custom cladding, security integration, and matching elevation.",
  },
  {
    tag: "07",
    heading: "Pest Control",
    imgUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    content:
      "Protecting your investment. Our facility management team provides scheduled pest control and deep cleaning, ensuring your space stays pristine.",
  },
  {
    tag: "08",
    heading: "Home Automation",
    imgUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    content:
      "Single-touch or voice control of lighting scenes, HVAC, security cameras, motorised blinds, and entertainment systems — all from one interface.",
  },
];

export default function ServicesPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const faqData = faqJsonLd([
    { q: "What interior design services do you offer in Hyderabad?", a: "We offer modular kitchens, wardrobes, false ceilings, office interiors, home automation, and full residential renovations across Gachibowli, Madhapur, and all of Hyderabad." },
    { q: "Do you provide turnkey interior solutions?", a: "Yes, Vinay Interiors provides end-to-end turnkey solutions from architecture planning to final execution and handover." },
  ]);

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* ── Page header ───────────────────────────── */}
      <section
        style={{
          background: "#111111",
          padding: "10rem 2.5rem 6rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(197,164,109,0.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ width: "28px", height: "1px", background: "#c5a46d" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d", textTransform: "uppercase" }}>
              What We Do
            </p>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,7vw,6rem)",
              lineHeight: 0.9,
              color: "#ffffff",
              maxWidth: "800px",
              marginBottom: "2.5rem",
              fontWeight: 700,
            }}
          >
            Integrated Design,<br />Planning &amp; Execution
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8 }}>
            Eight specialised disciplines, one seamless studio experience — from concept to handover.
          </p>
        </div>
      </section>

      {/* ── 3D Service Cards Grid ─────────────────── */}
      <section style={{ maxWidth: "1440px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "0",
          }}
        >
          {SERVICES.map((service) => (
            <CardContainer key={service.tag} containerClassName="py-8 px-4">
              <CardBody
                className="relative"
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(197,164,109,0.15)",
                  width: "320px",
                  height: "auto",
                }}
              >
                {/* Image */}
                <CardItem translateZ={80} className="w-full">
                  <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                    <Image
                      src={service.imgUrl}
                      alt={service.heading}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="320px"
                    />
                    {/* Dark overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.6) 100%)" }} />
                  </div>
                </CardItem>

                {/* Tag + Heading */}
                <CardItem
                  translateZ={60}
                  className="w-full"
                  style={{ padding: "1.5rem 1.5rem 0" }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.6rem" }}>
                    <span style={{ color: "#c5a46d", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                      {service.tag}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                        fontSize: "1.25rem",
                        color: "#ffffff",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {service.heading}
                    </h2>
                  </div>
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ={40}
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    padding: "0 1.5rem",
                    margin: 0,
                  }}
                >
                  {service.content}
                </CardItem>

                {/* CTA */}
                <CardItem
                  translateZ={20}
                  style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", justifyContent: "flex-end" }}
                >
                  <Link
                    href="/contact"
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#c5a46d",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontWeight: 500,
                      borderBottom: "1px solid rgba(197,164,109,0.3)",
                      paddingBottom: "2px",
                      transition: "border-color 0.2s",
                    }}
                    className="footer-contact-link"
                  >
                    Enquire Now <FiArrowUpRight />
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section style={{ background: "#111111", padding: "6rem 2.5rem", borderTop: "1px solid rgba(197,164,109,0.12)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ready to bring your vision to life?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "#ffffff",
              marginBottom: "2.5rem",
              lineHeight: 1.1,
            }}
          >
            Let&apos;s Discuss Your Project.
          </h2>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "#c5a46d",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Get In Touch <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
