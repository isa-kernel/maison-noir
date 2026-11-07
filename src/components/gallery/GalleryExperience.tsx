"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./GalleryExperience.module.css";

const images = [
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=82", alt: "Fresh seasonal salad with colourful ingredients", title: "Fresh from the kitchen", shape: "tall" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=82", alt: "Beautifully plated restaurant dish", title: "Made with intention", shape: "wide" },
  { src: "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1200&q=82", alt: "A carefully arranged dining table", title: "Gather around", shape: "wide" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=82", alt: "Chef preparing a dish in the kitchen", title: "The craft behind it", shape: "tall" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=82", alt: "Elegant restaurant table setting", title: "An evening well spent", shape: "wide" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=82", alt: "Dessert served at a restaurant", title: "A sweet finish", shape: "wide" },
];

export default function GalleryExperience() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setActive(null);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  function move(direction: -1 | 1) {
    setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
  }

  return (
    <>
      <div className={styles.grid} aria-label="Restaurant photo gallery">
        {images.map((image, index) => (
          <button type="button" className={`${styles.tile} ${styles[image.shape]}`} key={image.src} onClick={() => setActive(index)} aria-label={`Open image: ${image.title}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" quality={78} />
            <span className={styles.caption}><span>{image.title}</span><span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} className={styles.lightbox} onClick={(event) => { if (event.target === dialogRef.current) setActive(null); }} aria-label="Gallery image viewer">
        {active !== null && <div className={styles.viewer}>
          <button ref={closeButtonRef} type="button" className={styles.close} onClick={() => setActive(null)} aria-label="Close image viewer"><X /></button>
          <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
          <div className={styles.viewerImage}><Image src={images[active].src} alt={images[active].alt} fill sizes="90vw" quality={88} priority /></div>
          <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
          <p className={styles.viewerCaption}>{images[active].title} <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></p>
        </div>}
      </dialog>
    </>
  );
}
