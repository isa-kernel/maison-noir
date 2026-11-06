import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "A Table Beyond the Ordinary",
  description:
    "Discover MAISON NOIR: an expressive dining destination where Kenyan heritage meets global inspiration. Explore our menu and reserve your table.",
  openGraph: {
    title: "MAISON NOIR — A Table Beyond the Ordinary",
    description:
      "Rooted in Kenyan heritage. Inspired by the world. Created for the moments that bring us together.",
    images: [{
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85",
      width: 1600,
      height: 1000,
      alt: "An elegant fine dining table at MAISON NOIR",
    }],
  },
};

export default function Home() {
  return <HomePage />;
}
