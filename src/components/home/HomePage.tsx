import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import ScrollMotion from "@/components/motion/ScrollMotion";
import styles from "./HomePage.module.css";

const dishes = [
  { number: "01", name: "Ember-Roasted Tenderloin", description: "Charred seasonal vegetables, smoked jus, garden herbs.", price: "KES 2,850", category: "FROM THE FIRE", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=85", alt: "Fire roasted steak served with seasonal accompaniments" },
  { number: "02", name: "Coastal Citrus Crudo", description: "Fresh catch, bright citrus, coriander oil, a little heat.", price: "KES 1,950", category: "FROM THE COAST", image: "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1100&q=85", alt: "Fresh seafood dish with citrus and herbs" },
  { number: "03", name: "The Noir Chocolate", description: "Dark chocolate crémeux, roasted nuts, salted caramel.", price: "KES 1,250", category: "SOMETHING SWEET", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=85", alt: "Elegant chocolate dessert" },
];

const moments = [
  { index: "01", title: "The first pour", copy: "A warm welcome, a thoughtful drink and the feeling that you are exactly where you should be.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85", alt: "Warmly lit restaurant bar" },
  { index: "02", title: "Made to be shared", copy: "Plates designed to bring people closer. Familiar flavours, unexpected details and room for discovery.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85", alt: "Thoughtfully arranged fine dining table" },
  { index: "03", title: "Stay a little longer", copy: "Because the best part of a meal is often everything that happens around it.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85", alt: "Intimate restaurant dining room" },
];

export default function HomePage() {
  return (
    <ScrollMotion>
      <div className={styles.home}>
        <section className={styles.hero} data-hero>
          <div className={styles.heroImage} data-hero-image>
            <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=90" alt="An intimate fine dining table prepared for an evening at MAISON NOIR" fill priority sizes="100vw" quality={85} />
          </div>
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow} data-hero-copy><span /> KENYA · A NEW WAY TO GATHER</p>
            <h1 className={styles.heroTitle} data-hero-copy>A table<br />beyond the<br /><em>ordinary.</em></h1>
            <p className={styles.heroDescription} data-hero-copy>A meeting of Kenyan soul and worldly curiosity. Come for the food. Stay for everything around it.</p>
            <div className={styles.heroActions} data-hero-copy>
              <Link href="/reservations" className={styles.lightButton}>Reserve your table <ArrowUpRight size={17} /></Link>
              <Link href="/menu" className={styles.textButton}>Discover the menu <ArrowDownRight size={17} /></Link>
            </div>
          </div>
          <div className={styles.heroBottom}>
            <span>GOOD FOOD. GOOD COMPANY. ALWAYS.</span>
            <a href="#introduction" aria-label="Scroll to discover">SCROLL TO DISCOVER <ArrowDown size={14} /></a>
            <span>01 — 06</span>
          </div>
          <div className={styles.heroVertical}>THE ART OF GATHERING</div>
        </section>

        <section className={styles.intro} id="introduction">
          <div className={styles.introTop}><p className="eyebrow" data-reveal>MORE THAN A MEAL</p><p className={styles.introIndex} data-reveal>01 / THE HOUSE</p></div>
          <div className={styles.introGrid}>
            <div className={styles.introHeading} data-reveal><h2 className="display-heading">Some things<br />are better<br /><em>around a table.</em></h2></div>
            <div className={styles.introCopy} data-reveal>
              <p>There is a certain magic in gathering. In the passing of plates, the unexpected conversation, the first taste of something unforgettable.</p>
              <p>MAISON NOIR is built around that feeling. A considered expression of hospitality where the richness of Kenya meets inspiration from further afield.</p>
              <Link href="/our-story" className={styles.underlinedLink}>A little about us <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className={styles.introImageWrap} data-image-reveal>
            <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85" alt="Warm and intimate restaurant interior" fill sizes="(max-width: 768px) 100vw, 90vw" />
            <div className={styles.imageCaption}><span>AN INVITATION TO SLOW DOWN</span><span>MAISON NOIR · KENYA</span></div>
          </div>
        </section>

        <section className={styles.signature}>
          <div className={styles.signatureHeader}>
            <div data-reveal><p className="eyebrow">A TASTE OF MAISON NOIR</p><h2 className="display-heading">Made with<br /><em>intention.</em></h2></div>
            <div className={styles.signatureAside} data-reveal><p>Thoughtful ingredients. Confident flavours. A little unexpected. Here are a few expressions of what we love to put on the table.</p><Link href="/menu" className={styles.darkLink}>Explore the full menu <ArrowUpRight size={16} /></Link></div>
          </div>
          <div className={styles.dishGrid}>
            {dishes.map((dish) => <article className={styles.dishCard} key={dish.number} data-reveal>
              <Link href="/menu" className={styles.dishImage}>
                <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 700px) 88vw, (max-width: 1100px) 45vw, 30vw" />
                <span className={styles.dishNumber}>{dish.number}</span><span className={styles.dishArrow}><ArrowUpRight size={19} /></span>
              </Link>
              <div className={styles.dishMeta}><span>{dish.category}</span><span>{dish.price}</span></div>
              <h3>{dish.name}</h3><p>{dish.description}</p>
            </article>)}
          </div>
          <p className={styles.menuNote}>A preview of our kitchen. Menu and availability may change with the season.</p>
        </section>

        <section className={styles.philosophy} data-story>
          <div className={styles.philosophyImage}>
            <Image src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85" alt="Fresh seasonal ingredients prepared with care" fill sizes="(max-width: 800px) 100vw, 50vw" data-story-image />
            <span className={styles.philosophyImageLabel}>THE BEAUTY IS IN THE DETAILS</span>
          </div>
          <div className={styles.philosophyContent}>
            <p className="eyebrow" data-reveal>OUR FOOD PHILOSOPHY</p>
            <h2 className="display-heading" data-reveal>Grounded<br />in <em>place.</em><br />Open to<br />the <em>world.</em></h2>
            <div className={styles.philosophyBody} data-reveal>
              <p>We believe the best cooking begins with respect: for ingredients, for the people who grow them and for the traditions that give food its meaning.</p>
              <p>Our kitchen takes that foundation somewhere new, bringing local character into conversation with flavours and techniques from across the world.</p>
              <Link href="/our-story" className={styles.lightTextLink}>Discover our philosophy <ArrowUpRight size={16} /></Link>
            </div>
            <span className={styles.philosophyIndex}>02 / THE PHILOSOPHY</span>
          </div>
        </section>

        <section className={styles.experience}>
          <div className={styles.experienceHeader}>
            <div data-reveal><p className="eyebrow">IT`S ALL IN THE MOMENT</p><h2 className="display-heading">Come for dinner.<br /><em>Make an evening of it.</em></h2></div>
            <p data-reveal>The details matter. The atmosphere, the welcome, the little things that turn an evening out into a memory worth keeping.</p>
          </div>
          <div className={styles.momentsTrack} aria-label="The MAISON NOIR dining experience">
            {moments.map((moment) => <article className={styles.momentCard} key={moment.index}>
              <div className={styles.momentImage}><Image src={moment.image} alt={moment.alt} fill sizes="(max-width: 700px) 82vw, (max-width: 1100px) 60vw, 42vw" /><span>{moment.index}</span></div>
              <div className={styles.momentText}><h3>{moment.title}</h3><p>{moment.copy}</p></div>
            </article>)}
          </div>
          <div className={styles.trackHint}><span>EXPLORE THE EXPERIENCE</span><span>SCROLL <ArrowRight size={14} /></span></div>
        </section>

        <section className={styles.reservation}>
          <div className={styles.reservationImage}><Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85" alt="An atmospheric restaurant ready for an evening of dining" fill sizes="100vw" /></div>
          <div className={styles.reservationOverlay} />
          <div className={styles.reservationContent} data-reveal>
            <p className={styles.reservationEyebrow}>YOUR TABLE IS WAITING</p>
            <h2 className="display-heading">Good evenings<br /><em>start here.</em></h2>
            <p>Bring your favourite people. We`ll take care of the rest.</p>
            <Link href="/reservations" className={styles.lightButton}>Make a reservation <MoveUpRight size={17} /></Link>
          </div>
          <span className={styles.reservationNumber}>03 / THE INVITATION</span>
        </section>

        <section className={styles.closingNote}>
          <p data-reveal>MAISON NOIR <span>—</span> A TABLE BEYOND THE ORDINARY.</p>
        </section>
      </div>
    </ScrollMotion>
  );
}
