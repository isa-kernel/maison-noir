import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import ReservationForm from "@/components/reservations/ReservationForm";
import ScrollMotion from "@/components/motion/ScrollMotion";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Plan your next MAISON NOIR dining experience. Send a reservation request and our team can confirm availability.",
  openGraph: { title: "Reservations | MAISON NOIR", description: "Make time for a table beyond the ordinary.", type: "website" },
};

export default function ReservationsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} data-hero>
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85" alt="An intimate restaurant table prepared for dinner" fill priority sizes="100vw" quality={82} data-hero-image />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow} data-hero-copy>YOUR TABLE IS WAITING</p>
          <h1 className="display-heading" data-hero-copy>Make an evening<br />of <em>it.</em></h1>
          <p data-hero-copy>Good food deserves good company. Tell us when you would like to join us.</p>
        </div>
        <span className={styles.heroIndex}>01 / RESERVATIONS</span>
      </section>

      <ScrollMotion>
        <section className={styles.bookingSection}>
          <div className={styles.bookingIntro} data-reveal>
            <p className="eyebrow">A PLACE AT THE TABLE</p>
            <h2 className="display-heading">A few details.<br /><em>A lovely evening.</em></h2>
            <p>Share your preferred date, time and party size. This prototype records no booking and does not check live availability; a real reservation workflow will be connected in a later integration phase.</p>
            <div className={styles.details}>
              <div><CalendarDays size={18} /><span><strong>Plan ahead</strong><small>For special occasions, contact the team in advance.</small></span></div>
              <div><Clock3 size={18} /><span><strong>Allow confirmation</strong><small>Your request is not confirmed until the restaurant replies.</small></span></div>
              <div><MapPin size={18} /><span><strong>Find us</strong><small>Restaurant location to be confirmed.</small></span></div>
            </div>
            <Link href="/contact" className={styles.textLink}>Have a question? Get in touch <ArrowUpRight size={16} /></Link>
          </div>
          <div className={styles.formWrap} data-reveal><ReservationForm /></div>
        </section>
      </ScrollMotion>

      <section className={styles.note}><p>CELEBRATING SOMETHING?</p><h2 className="display-heading">Let us make it <em>memorable.</em></h2><p>For private dining, group occasions or special requests, please use the notes field and we can discuss the details once a real contact channel is configured.</p></section>
    </div>
  );
}
