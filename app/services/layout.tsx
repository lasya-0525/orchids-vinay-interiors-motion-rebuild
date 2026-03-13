import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design Services Hyderabad | Modular Kitchen, False Ceiling, Wardrobes & More",
  description: "Vinay Interiors offers 8 specialist interior design services in Hyderabad: modular kitchens, wardrobes & cupboards, false ceilings, office interiors, home theater, main door elevation, home automation & pest control. Serving Gachibowli, Madhapur, HITEC City, Raidurg, LB Nagar, Nagole, Uppal, Saroornagar, Kothapet.",
  path: "/services",
  keywords: [
    "interior design services Hyderabad", "modular kitchen designer Hyderabad",
    "false ceiling Hyderabad", "wardrobe designer Hyderabad", "cupboard design Hyderabad",
    "office interior design Hyderabad", "home theater design Hyderabad",
    "home automation Hyderabad", "smart home Hyderabad", "main door elevation Hyderabad",
    "interior design services Gachibowli", "interior design services Madhapur",
    "interior design services HITEC City", "interior design services LB Nagar",
    "interior design services Uppal", "interior design services Kothapet",
    "interior design services Nagole", "interior design services Saroornagar",
    "turnkey interior design Hyderabad", "full home renovation Hyderabad",
  ],
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
