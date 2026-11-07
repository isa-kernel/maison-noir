import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollMotion from "@/components/motion/ScrollMotion";
import GalleryExperience from "@/components/gallery/GalleryExperience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse into the MAISON NOIR experience — thoughtful plates, intimate spaces and moments around the table.",
  openGraph: { title: "Gallery | MAISON NOIR", description: "A glimpse of the moments made around our table.", type: "website" },
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} data-hero>
        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85" alt="Warmly lit restaurant interior with tables ready for guests" fill priority sizes="100vw" quality={82} data-hero-image />
        <div className={styles.shade} />
        <div className={styles.heroContent}><p className={styles.eyebrow} data-hero-copy>A FEAST FOR THE SENSES</p><h1 className="display-heading" data-hero-copy>Come for the food.<br /><em>Stay for the feeling.</em></h1><p data-hero-copy>Small details. Beautiful plates. The kind of moments that ask you to stay a little longer.</p></div>
        <span className={styles.index}>01 / THE GALLERY</span>
      </section>
      <ScrollMotion>
        <section className={styles.intro} data-reveal><p className="eyebrow">A VISUAL JOURNAL</p><h2 className="display-heading">A little look<br />around <em>our table.</em></h2><p>Explore the textures, flavours and atmosphere that shape the MAISON NOIR idea. Select any photograph to take a closer look.</p></section>
        <GalleryExperience />
      </ScrollMotion>
      <section className={styles.closing}><p>THE BEST PART IS BEING HERE</p><h2 className="display-heading">Some things are better <em>experienced.</em></h2><Link href="/reservations">Find your table <span aria-hidden="true">↗</span></Link></section>
    </div>
  );
}
