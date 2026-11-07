import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollMotion from "@/components/motion/ScrollMotion";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the MAISON NOIR philosophy: Kenyan roots, worldly curiosity and the art of bringing people together.",
  openGraph: { title: "Our Story | MAISON NOIR", description: "A story shaped by place, people and the pleasure of gathering.", type: "website" },
};

const chapters = [
  { number: "01", year: "THE ROOTS", title: "A sense of place", copy: "Our imagined starting point is close to home: the abundance of Kenyan produce, the generosity of its food culture and the people whose work brings ingredients to life.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1300&q=85", alt: "Fresh ingredients arranged for cooking" },
  { number: "02", year: "THE CURIOSITY", title: "A world of influence", copy: "Travel, technique and the exchange of ideas bring new perspective. We take inspiration from beyond our borders without losing sight of where the story begins.", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1300&q=85", alt: "A colourful spread of fresh food and ingredients" },
  { number: "03", year: "THE GATHERING", title: "Always room at the table", copy: "The final ingredient is human: the conversations, celebrations and everyday moments that happen when people make time to sit together.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1300&q=85", alt: "A beautifully arranged dining table" },
];

const principles = [
  { number: "01", title: "Respect the ingredient", copy: "Good cooking starts long before the plate. We value seasonality, thoughtful sourcing and the hands behind every harvest." },
  { number: "02", title: "Stay curious", copy: "Tradition gives us a foundation, not a boundary. We welcome new ideas, techniques and points of view." },
  { number: "03", title: "Make people feel at home", copy: "Hospitality is more than service. It is the care, generosity and attention that make a guest feel seen." },
];

export default function OurStoryPage() {
  return (
    <ScrollMotion>
      <div className={styles.storyPage}>
        <section className={styles.storyHero}>
          <div className={styles.heroImage}><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=88" alt="Warmly lit restaurant interior with tables ready for guests" fill priority sizes="100vw" quality={82} /></div>
          <div className={styles.heroShade} />
          <div className={styles.heroContent}><p className={styles.heroEyebrow}>A NOTE ON WHO WE ARE</p><h1 className="display-heading">Rooted here.<br /><em>Inspired everywhere.</em></h1><p>We believe a restaurant can be more than a place to eat. It can be a place to connect, discover and feel at home.</p></div>
          <span className={styles.heroIndex}>MAISON NOIR · OUR STORY</span>
        </section>

        <section className={styles.manifesto}>
          <p className="eyebrow" data-reveal>THE IDEA BEHIND THE TABLE</p>
          <div className={styles.manifestoGrid}>
            <h2 className="display-heading" data-reveal>Food brings<br />us <em>closer.</em></h2>
            <div data-reveal><p>At its best, dining is an act of connection. It brings together ingredients, places, cultures and people in a way few other things can.</p><p>MAISON NOIR is a fictional restaurant concept imagined in Kenya, shaped by local character and an open-minded approach to the wider world. Our story is a celebration of the people, flavours and moments that make a table worth gathering around.</p></div>
          </div>
        </section>

        <section className={styles.chapters}>
          <div className={styles.sectionHeading} data-reveal><p className="eyebrow">THREE PARTS OF OUR POINT OF VIEW</p><h2 className="display-heading">A story in<br /><em>every detail.</em></h2></div>
          <div className={styles.chapterList}>
            {chapters.map((chapter) => <article className={styles.chapter} key={chapter.number}>
              <div className={styles.chapterImage} data-image-reveal><Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 760px) 100vw, 48vw" quality={80} /></div>
              <div className={styles.chapterText} data-reveal><div className={styles.chapterMeta}><span>{chapter.number}</span><span>{chapter.year}</span></div><h3 className="display-heading">{chapter.title}</h3><p>{chapter.copy}</p></div>
            </article>)}
          </div>
        </section>

        <section className={styles.quoteSection}>
          <div className={styles.quoteImage}><Image src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1800&q=85" alt="A colourful meal made for sharing" fill sizes="100vw" quality={80} /></div>
          <div className={styles.quoteShade} />
          <blockquote data-reveal><span>“</span><p>The table is where good things begin.</p><cite>THE MAISON NOIR POINT OF VIEW</cite></blockquote>
        </section>

        <section className={styles.principles}>
          <div className={styles.principlesHeading} data-reveal><p className="eyebrow">WHAT GUIDES US</p><h2 className="display-heading">Our way of<br /><em>doing things.</em></h2></div>
          <div className={styles.principleList}>{principles.map((principle) => <article className={styles.principle} key={principle.number} data-reveal><span>{principle.number}</span><div><h3>{principle.title}</h3><p>{principle.copy}</p></div><ArrowUpRight size={18} /></article>)}</div>
        </section>

        <section className={styles.storyClosing}>
          <div className={styles.closingImage}><Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85" alt="An inviting restaurant space ready for an evening" fill sizes="100vw" quality={82} /></div>
          <div className={styles.closingShade} />
          <div className={styles.closingContent} data-reveal><p className={styles.heroEyebrow}>THE BEST STORIES ARE SHARED</p><h2 className="display-heading">Your place<br />is <em>at the table.</em></h2><p>Come as you are. Bring someone you love. Let the evening unfold.</p><Link href="/reservations" className={styles.closingLink}>Reserve your table <ArrowUpRight size={17} /></Link></div>
        </section>
      </div>
    </ScrollMotion>
  );
}
