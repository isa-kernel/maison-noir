import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Reservations", href: "/reservations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.identity}>
          <p className={styles.kicker}>THE ART OF GATHERING</p>
          <p className={styles.wordmark}>MAISON<br />NOIR<span>.</span></p>
          <p className={styles.tagline}>
            A table beyond the ordinary.
            <br />
            Rooted in place. Inspired by everywhere.
          </p>
        </div>

        <div className={styles.navigation}>
          <p className={styles.heading}>EXPLORE</p>
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.contact}>
          <p className={styles.heading}>COME FIND US</p>
          <p>Kenya</p>
          <p>Location details coming soon.</p>
          <Link className={styles.contactLink} href="/contact">
            Get in touch <ArrowUpRight size={15} />
          </Link>
          <Link className={styles.contactLink} href="/reservations">
            Reserve your table <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {CURRENT_YEAR} MAISON NOIR. ALL RIGHTS RESERVED.</span>
        <span>MADE FOR MEMORABLE MOMENTS.</span>
      </div>
    </footer>
  );
}
