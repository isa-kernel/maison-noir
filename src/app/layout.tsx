import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "../app/structuredData";
import "./globals.css";
import "@/styles/tokens.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.maisonoir.vercel.app"), // Replace with your actual domain

  title: {
    default: "Maison Noir | Fine Dining & Memorable Experiences",
    template: "%s | Maison Noir",
  },

  description:
    "Discover Maison Noir, an elegant dining destination offering exceptional cuisine, curated menus, and unforgettable dining experiences.",

  applicationName: "Maison Noir",

  keywords: [
    "Maison Noir",
    "fine dining",
    "luxury restaurant",
    "restaurant",
    "dining experience",
    "restaurant reservations",
    "gourmet cuisine",
  ],

  authors: [{ name: "Saane Technology", url: "https://saane.online" }],
  creator: "Saane Technology",
  publisher: "Maison Noir",

  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Maison Noir",
    title: "Maison Noir | Fine Dining & Memorable Experiences",
    description:
      "Exceptional cuisine, elegant surroundings, and memorable dining experiences at Maison Noir.",
    url: "https://www.maisonoir.vercel.app",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Noir restaurant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maison Noir | Fine Dining",
    description: "Discover exceptional dining at Maison Noir.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "food",
};


const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// export const metadata: Metadata = {
//   metadataBase: new URL("https://maisonoir.example"),
//   title: {
//     default: "MAISON NOIR — A Table Beyond the Ordinary",
//     template: "%s | MAISON NOIR",
//   },
//   description:
//     "An expressive dining destination bringing together Kenyan heritage, global inspiration and thoughtful hospitality.",
//   applicationName: "MAISON NOIR",
//   openGraph: {
//     title: "MAISON NOIR — A Table Beyond the Ordinary",
//     description:
//       "An expressive dining destination bringing together Kenyan heritage and global inspiration.",
//     type: "website",
//     siteName: "MAISON NOIR",
//   },
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#21100f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <StructuredData />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
