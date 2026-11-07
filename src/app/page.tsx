import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "A Table Beyond the Ordinary",
  description: "An expressive dining destination bringing together Kenyan heritage, global inspiration and thoughtful hospitality.",
  openGraph: {
    title: "MAISON NOIR — A Table Beyond the Ordinary",
    description: "A meeting of Kenyan soul and worldly curiosity. Discover the MAISON NOIR experience.",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
