 "use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="MAISON NOIR home"
            onClick={closeMenu}
          >
            <span className={styles.brandName}>MAISON NOIR</span>
            <span className={styles.brandDescriptor}>A TABLE BEYOND THE ORDINARY</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {links.map((link) => (
              <Link className={styles.navLink} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className={styles.reservationLink} href="/reservations">
            <span>Reserve a table</span>
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={styles.drawerTop}>
          <span className={styles.drawerBrand}>MAISON NOIR</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={23} strokeWidth={1.5} />
          </button>
        </div>

        <p className={styles.drawerEyebrow}>EXPLORE THE EXPERIENCE</p>

        <nav className={styles.drawerNav}>
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              className={styles.drawerLink}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className={styles.linkIndex}>0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </Link>
          ))}
        </nav>

        <Link
          href="/reservations"
          className={styles.drawerReservation}
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
        >
          Make a reservation <ArrowUpRight size={17} />
        </Link>

        <p className={styles.drawerFooter}>GOOD FOOD. GOOD COMPANY. ALWAYS.</p>
      </aside>
    </>
  );
}
