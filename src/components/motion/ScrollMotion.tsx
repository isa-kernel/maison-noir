"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/** A narrow client boundary: the page content itself remains a Server Component. */
export default function ScrollMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return;

    gsap.fromTo("[data-hero-copy]", { y: 36, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.12,
    });

    const heroImage = root.current?.querySelector<HTMLElement>("[data-hero-image]");
    const hero = root.current?.querySelector<HTMLElement>("[data-hero]");
    if (heroImage && hero) {
      gsap.to(heroImage, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
      });
    }

    root.current?.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      gsap.fromTo(element, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });

    root.current?.querySelectorAll<HTMLElement>("[data-image-reveal]").forEach((element) => {
      gsap.fromTo(element, { clipPath: "inset(8% 5% 8% 5%)" }, {
        clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 84%", once: true },
      });
    });

    const story = root.current?.querySelector<HTMLElement>("[data-story]");
    const storyImage = root.current?.querySelector<HTMLElement>("[data-story-image]");
    if (story && storyImage) {
      gsap.to(storyImage, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: { trigger: story, start: "top bottom", end: "bottom top", scrub: true },
      });
    }
  }, { scope: root, dependencies: [reduceMotion] });

  return <div ref={root}>{children}</div>;
}
