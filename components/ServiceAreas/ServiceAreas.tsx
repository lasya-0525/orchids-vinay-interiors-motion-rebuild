"use client";

import { motion } from "framer-motion";

const areas = [
  "Nanakaramguda",
  "Financial District",
  "Tellapur",
  "Gachibowli",
  "Kondapur",
  "Nallagandla",
  "Miyapur",
  "Bachupally",
  "Medchal",
  "Manikonda",
  "Raidurg",
  "Madhapur",
  "HITEC City",
  "Kokapet",
];

export default function ServiceAreas() {
  return (
    <section
      style={{
        background: "#0c0c0c",
        padding: "8rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Service areas in Hyderabad"
    >
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-playfair, Georgia, serif)",
          fontSize: "clamp(6rem, 18vw, 18rem)",
          color: "rgba(255,255,255,0.025)",
          fontWeight: 700,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          userSelect: "none",
        }}
      >
        Hyderabad
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "end",
          }}
          className="md:grid-cols-[1fr_1fr]"
        >
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              fontSize: "0.6rem",
              letterSpacing: "0.42em",
              color: "#c5a46d",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}>
              <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#c5a46d" }} />
              Service Coverage
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 0.95,
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}>
              Serving West<br />
              <span style={{ color: "#c5a46d", fontStyle: "italic" }}>Hyderabad</span>
            </h2>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "1.75rem",
            }}>
              From the Financial District to Bachupally, we bring precision craftsmanship and curated design to Hyderabad&apos;s most sought-after neighbourhoods.
            </p>
            <p style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}>
              Free consultation · On-site visits available
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "4rem",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Areas grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0",
          }}
          className="sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.055 }}
              style={{
                padding: "1.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                paddingLeft: "1.25rem",
                cursor: "default",
              }}
            >
              <span style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c5a46d",
                flexShrink: 0,
                opacity: 0.7,
              }} />
              <span style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.01em",
                lineHeight: 1.3,
              }}>
                {area}
              </span>
            </motion.div>
          ))}

          {/* "& More" end cell */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: areas.length * 0.055 }}
            style={{
              padding: "1.5rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingLeft: "1.25rem",
            }}
          >
            <span style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(197,164,109,0.35)",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
            }}>
              & More
            </span>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: "3rem",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          Hyderabad · Telangana · India
        </motion.p>
      </div>
    </section>
  );
}
