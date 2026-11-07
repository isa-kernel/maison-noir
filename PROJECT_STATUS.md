# MAISON NOIR — Project Status

## Current batch
Batch 3 — Menu, Our Story and frontend architecture refinement

## Included in this batch

### Frontend architecture refinement
- Refactored the homepage into a Server Component (`HomePage.tsx`).
- Added a small client-side `ScrollMotion` boundary for GSAP / ScrollTrigger behavior.
- Server-rendered page content is passed as children; animation hooks no longer require the whole homepage to be a Client Component.
- Removed the homepage's Motion paragraph animation in favour of the shared GSAP reveal treatment.
- Kept animation setup scoped to the page root and tied to component lifecycle through `@gsap/react`.
- Preserved reduced-motion handling.
- Reduced image quality targets from 85–90 to 78–85 for non-critical imagery; hero images retain priority loading.
- Added a reusable visually-hidden utility class for accessible form labels.

### Menu page (`/menu`)
- Editorial menu hero and introduction.
- Structured demonstration menu data in `src/data/menu.ts`.
- Category filtering, text search and dietary filters.
- Responsive dish grid with image, description, KES price and dietary labels.
- Native HTML dialog for dish details, including allergens and availability.
- Empty state and clear-filters action.
- Accessible labels, pressed states, dialog title and Escape-to-close behavior.
- Menu metadata and Open Graph metadata.

### Our Story page (`/our-story`)
- Editorial hero.
- Brand manifesto and story chapters.
- Three-part editorial timeline/storytelling sequence.
- Full-width quote section.
- Brand principles and reservation CTA.
- Scroll reveal and image reveal using the shared animation boundary.
- Page metadata and Open Graph metadata.

## Files added or replaced
- `src/app/page.tsx` (replaced)
- `src/components/home/HomePage.tsx` (replaced; now a Server Component)
- `src/components/home/HomePage.module.css` (retained from Batch 2)
- `src/components/motion/ScrollMotion.tsx` (new)
- `src/data/menu.ts` (new)
- `src/components/menu/MenuExperience.tsx` (new)
- `src/components/menu/MenuExperience.module.css` (new)
- `src/app/menu/page.tsx` (new)
- `src/app/menu/page.module.css` (new)
- `src/app/our-story/page.tsx` (new)
- `src/app/our-story/page.module.css` (new)
- `src/app/globals.css` (updated with `.sr-only` utility)
- `PROJECT_STATUS.md` (new status)

## Dependencies
No new dependencies. Uses the existing Next.js, React, Next Image, GSAP, `@gsap/react`, Motion and Lucide React dependencies.

## Important content caveats
- MAISON NOIR is a fictional restaurant concept for this build.
- Menu items, descriptions, KES prices, dietary labels and allergen details are demonstration data only. Verify with the actual kitchen before publication.
- Story copy is brand concept copy, not a factual history of an operating restaurant.
- Confirm location, contact details, opening hours, policies and actual restaurant identity before launch.
- Replace demo Unsplash imagery with licensed, approved restaurant photography before commercial launch.

## Validation status
This package has not been run against the user's local project. After applying it, run lint, TypeScript and production build, then test the menu filters/dialog and responsive layouts in a browser.

## Known follow-up engineering work
- Run Lighthouse and measure Core Web Vitals on a production deployment.
- Audit keyboard/focus behavior, screen-reader output, contrast and touch targets.
- Review image payloads and loading behavior on a throttled mobile connection.
- Confirm the real production domain and indexing policy; the current root layout still contains placeholder metadata configuration from the foundation batch.
- Build Reservations, Gallery and Contact pages, then implement database-backed menu/reservation/inquiry operations and the admin platform.
