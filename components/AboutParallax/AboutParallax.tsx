"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  {
    imgUrl: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=2000",
    subheading: "The Process",
    heading: "Every space begins with a conversation.",
    content: {
      heading: "From Brief to Blueprint",
      tag: "01 — Discovery",
      body: [
        "We start not with mood boards, but with questions. How does your family move through the morning? Where does work bleed into rest? What textures feel like home to you? This depth of inquiry allows us to build not just beautiful spaces, but spaces that fit the life being lived inside them.",
        "Our design process unfolds in four stages — Discovery, Concept, Development, and Delivery — each with defined milestones, shared documentation, and full client involvement. You are never in the dark about where your project stands.",
        "We believe the best interiors are co-authored. The studio brings expertise in material systems, spatial logic, and construction sequencing. You bring your story. Together, we produce something neither could alone.",
      ],
      stats: [
        { n: "4", l: "Design Phases" },
        { n: "100%", l: "Client Involvement" },
        { n: "2–16 wks", l: "Concept to Approval" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=2000",
    subheading: "The Craft",
    heading: "Materials that outlast trends.",
    content: {
      heading: "Craftsmanship at Every Scale",
      tag: "02 — Quality",
      body: [
        "We source natural stone, solid wood, hand-finished metals, and curated textiles from suppliers who share our commitment to longevity. Every finish is selected not just for its appearance on day one, but for how it will age across decades of everyday use.",
        "Our in-house team manages the full supply chain — from site measurement and supplier coordination to installation supervision and snagging. Nothing is delegated to chance. Every joint, every panel, every detail is reviewed against the original design intent.",
        "Craftsmanship is not just a material commitment — it is a time commitment. We do not rush to handover. We stay on site until the last detail is right, because that is the only standard we are willing to meet.",
      ],
      stats: [
        { n: "200+", l: "Projects Completed" },
        { n: "12+", l: "Years of Experience" },
        { n: "0", l: "Compromise on Quality" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=2000",
    subheading: "The Vision",
    heading: "Light, volume, and nothing unnecessary.",
    content: {
      heading: "A Philosophy of Restraint",
      tag: "03 — Design",
      body: [
        "We are drawn to interiors where every element earns its place. Not minimalism for its own sake, but a considered reduction — removing the unnecessary so that the essential becomes luminous. Our aesthetic sits at the intersection of material warmth and spatial clarity.",
        "We study how natural light moves through a room across different times of day, how acoustic quality changes with surface choices, and how proportions affect the emotional experience of a space. These invisible decisions shape how a space truly feels — and they are what distinguish design from decoration.",
        "Our work is rooted in Hyderabad's cultural context while reaching for a universal standard of refinement. We believe great design transcends geography — a space can feel equally at home in South India as it does in any city in the world.",
      ],
      stats: [
        { n: "50+", l: "Design Awards" },
        { n: "3", l: "Studio Principals" },
        { n: "∞", l: "Attention to Detail" },
      ],
    },
  },
];

export const AboutParallax = () => (
  <div style={{ background: "#f8f6f2", paddingBottom: "2rem" }}>
    {SECTIONS.map((s) => (
      <TextParallaxContent
        key={s.subheading}
        imgUrl={s.imgUrl}
        subheading={s.subheading}
        heading={s.heading}
      >
        <SectionContent {...s.content} />
      </TextParallaxContent>
    ))}
  </div>
);

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}) => (
  /* px-0 on mobile, px-3 on md+ so image is edge-to-edge on small screens */
  <div className="px-0 md:px-3 mb-6 md:mb-0">
    <div className="relative h-[60vh] md:h-[90vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
      }}
      /* rounded-none on mobile, rounded-2xl on md+ */
      className="sticky z-0 overflow-hidden top-3 h-[60vh] md:h-[calc(90vh-24px)] rounded-none md:rounded-2xl"
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
      }} />
      <motion.div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.5)", opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-[60vh] md:h-[90vh] w-full flex-col items-center justify-center text-white px-8 md:px-16"
    >
      <p style={{
        fontSize: "0.55rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "#c5a46d",
        marginBottom: "1.1rem",
        textAlign: "center",
      }}>
        {subheading}
      </p>
      <p style={{
        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
        fontSize: "clamp(1.6rem,5vw,4.5rem)",
        fontWeight: 700,
        textAlign: "center",
        maxWidth: "680px",
        lineHeight: 1.18,
        padding: "0 1rem",
      }}>
        {heading}
      </p>
    </motion.div>
  );
};

const SectionContent = ({
  heading,
  tag,
  body,
  stats,
}: {
  heading: string;
  tag: string;
  body: string[];
  stats: { n: string; l: string }[];
}) => (
  <div style={{
    maxWidth: "800px",
    margin: "0 auto",
    padding: "8rem 2rem",
    textAlign: "center",
    position: "relative"
  }}>

    {/* Tag */}
    <p style={{
      fontSize: "0.6rem",
      letterSpacing: "0.45em",
      color: "#c5a46d",
      textTransform: "uppercase",
      marginBottom: "2.5rem",
    }}>
      {tag}
    </p>

    {/* Section Heading */}
    <h3 style={{
      fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
      fontSize: "clamp(2rem, 5vw, 4rem)",
      color: "#111111",
      lineHeight: 1.1,
      fontWeight: 700,
      marginBottom: "4.5rem",
    }}>
      {heading}
    </h3>

    {/* Body text */}
    <div style={{ marginBottom: "6rem" }}>
      {body.map((para, i) => (
        <p key={i} style={{
          fontSize: "1.1rem",
          lineHeight: 2,
          color: "#555555",
          marginBottom: "2.5rem",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 2.5rem"
        }}>
          {para}
        </p>
      ))}
    </div>

    {/* Stats — centered row */}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "4rem",
      marginBottom: "6rem"
    }}>
      {stats.map(s => (
        <div key={s.l} style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-playfair,Georgia,serif)",
            fontSize: "2.5rem",
            color: "#111111",
            fontWeight: 600,
            lineHeight: 1,
          }}>{s.n}</div>
          <div style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c5a46d",
            marginTop: "0.75rem",
          }}>{s.l}</div>
        </div>
      ))}
    </div>

    {/* CTA button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <Link
        href="/contact"
        className="btn-dark-hover"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "1.5rem 3rem",
          background: "#111111",
          color: "#c5a46d",
          fontWeight: 600,
          transition: "all 0.4s ease",
          border: "1px solid #111111",
        }}
      >
        Start a Conversation →
      </Link>
    </div>
  </div>
);
