import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import "@/styles/tokens.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonnoir.example"),
  title: {
    default: "MAISON NOIR — A Table Beyond the Ordinary",
    template: "%s | MAISON NOIR",
  },
  description:
    "An expressive dining destination bringing together Kenyan heritage, global inspiration and thoughtful hospitality.",
  applicationName: "MAISON NOIR",
  openGraph: {
    title: "MAISON NOIR — A Table Beyond the Ordinary",
    description:
      "An expressive dining destination bringing together Kenyan heritage and global inspiration.",
    type: "website",
    siteName: "MAISON NOIR",
  },
  robots: {
    index: false,
    follow: false,
  },
};

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
