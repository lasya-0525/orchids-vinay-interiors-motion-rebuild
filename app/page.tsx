import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import MarqueeStrip from "@/components/MarqueeStrip/MarqueeStrip";
import { PROJECTS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Interior Designer Hyderabad | Gachibowli, Madhapur, HITEC City, LB Nagar, Uppal",
  description: "Vinay Interiors — Hyderabad's #1 interior design & architecture studio. Premium modular kitchens, wardrobes, false ceilings, office interiors & home automation. Serving Gachibowli, Madhapur, HITEC City, Raidurg, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet. 200+ projects. Free consultation.",
  path: "/",
  keywords: [
    "interior designer Hyderabad", "best interior designer Hyderabad", "interior design Hyderabad",
    "home interior design Hyderabad", "luxury interior design Hyderabad",
    "modular kitchen Hyderabad", "false ceiling Hyderabad", "wardrobes Hyderabad",
    "interior designer Gachibowli", "interior designer Madhapur", "interior designer HITEC City",
    "interior designer Raidurg", "interior designer LB Nagar", "interior designer Nagole",
    "interior designer Uppal", "interior designer Saroornagar", "interior designer Kothapet",
    "Vinay Interiors", "turnkey interior design Hyderabad", "architecture firm Hyderabad",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ProjectGrid projects={PROJECTS.slice(0, 4)} />
      <AboutSection />
      <MarqueeStrip />
      <ServicesSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
