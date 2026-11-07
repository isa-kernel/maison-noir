import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MenuExperience from "@/components/menu/MenuExperience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Menu",
  description: "Explore the MAISON NOIR menu: thoughtful plates inspired by Kenyan ingredients and flavours from around the world.",
  openGraph: { title: "The Menu | MAISON NOIR", description: "Thoughtful plates. Confident flavours. A little unexpected.", type: "website" },
};

export default function MenuPage() {
  return (
    <div className={styles.menuPage}>
      <section className={styles.menuHero}>
        <div className={styles.heroImage}><Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2200&q=88" alt="A generous table of beautifully prepared food" fill priority sizes="100vw" quality={82} /></div>
        <div className={styles.heroShade} />
        <div className={styles.heroContent}><p className={styles.eyebrow}>THE MAISON NOIR KITCHEN</p><h1 className="display-heading">A little<br />something <em>for everyone.</em></h1><p>Seasonal ingredients, considered technique and flavours that travel — all brought together at one table.</p></div>
        <span className={styles.heroIndex}>01 / THE MENU</span>
      </section>

      <section className={styles.menuIntro}><p className="eyebrow">MADE WITH INTENTION</p><div><h2 className="display-heading">Good food<br />is a <em>conversation.</em></h2><p>Start with something bright. Stay for something slow and generous. Finish with a little sweetness. Explore the menu and find your own way through it.</p></div></section>

      <MenuExperience />

      <section className={styles.menuFootnote}><p>* All menu items, prices, dietary labels and allergen details are illustrative placeholders for this prototype. Please confirm with the restaurant before ordering.</p><Link href="/reservations">Make an evening of it <ArrowUpRight size={16} /></Link></section>
    </div>
  );
}
