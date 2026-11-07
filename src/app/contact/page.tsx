import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import ScrollMotion from "@/components/motion/ScrollMotion";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MAISON NOIR for dining enquiries, private occasions and general questions.",
  openGraph: { title: "Contact | MAISON NOIR", description: "We would love to hear from you.", type: "website" },
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} data-hero>
        <Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2200&q=85" alt="Welcoming restaurant dining room with warm lighting" fill priority sizes="100vw" quality={82} data-hero-image />
        <div className={styles.shade} />
        <div className={styles.heroContent}><p className={styles.eyebrow} data-hero-copy>WE'RE ALL EARS</p><h1 className="display-heading" data-hero-copy>Let's start<br /><em>a conversation.</em></h1><p data-hero-copy>For a question, a celebration or simply to say hello — we would love to hear from you.</p></div>
        <span className={styles.index}>01 / CONTACT</span>
      </section>
      <ScrollMotion>
        <section className={styles.contactSection}>
          <div className={styles.info} data-reveal>
            <p className="eyebrow">GET IN TOUCH</p><h2 className="display-heading">The details<br />matter. <em>So do you.</em></h2>
            <p className={styles.copy}>We are preparing our official contact details for this prototype. The information below is intentionally marked as unconfirmed until the restaurant supplies its real details.</p>
            <div className={styles.infoList}>
              <div><MapPin /><span><strong>Visit</strong><small>Restaurant address to be confirmed · Kenya</small></span></div>
              <div><Phone /><span><strong>Call</strong><small>Official phone number to be confirmed</small></span></div>
              <div><Mail /><span><strong>Email</strong><small>Official email address to be confirmed</small></span></div>
              <div><Clock3 /><span><strong>Opening hours</strong><small>Operating hours to be confirmed</small></span></div>
            </div>
            <Link className={styles.reservationLink} href="/reservations">Looking for a table? Make a reservation <ArrowUpRight size={17} /></Link>
          </div>
          <div className={styles.formColumn} data-reveal><ContactForm /></div>
        </section>
      </ScrollMotion>
      <section className={styles.mapPlaceholder}><div><p className={styles.eyebrow}>FIND YOUR WAY</p><h2 className="display-heading">A place to <em>gather.</em></h2><p>An interactive map will be added once the restaurant's verified address is available.</p></div><div className={styles.mapGraphic} aria-hidden="true"><MapPin size={36} strokeWidth={1.2} /><span>LOCATION TO BE CONFIRMED</span></div></section>
    </div>
  );
}
