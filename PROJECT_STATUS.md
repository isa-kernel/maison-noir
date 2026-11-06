# MAISON NOIR — Project Status

## Current batch
Batch 2 — Complete homepage

## Implemented in this batch (local verification pending)
- Batch 1 foundation retained.
- Added homepage-specific metadata and Open Graph preview.
- Added cinematic full-screen hero with responsive food photography.
- Added restaurant introduction and editorial image reveal.
- Added signature dish preview with KES demonstration prices.
- Added food philosophy split-screen section.
- Added horizontal, touch-scrollable restaurant experience cards.
- Added prominent reservation closing section.
- Added GSAP / ScrollTrigger reveal and parallax animations.
- Added Motion viewport entrance treatment.
- Added reduced-motion handling.
- Added remote image host configuration for images.unsplash.com.
- Kept homepage styling in a colocated CSS Module.

## Important files
- `next.config.ts`
- `src/app/page.tsx`
- `src/components/home/HomePage.tsx`
- `src/components/home/HomePage.module.css`
- `PROJECT_STATUS.md`

## Dependencies
No new dependencies. Uses GSAP, @gsap/react, Motion, Lucide React and Next Image.

## Database
No database integration yet. Dish content is demonstration data and will be connected to the database in later batches.

## Known issues / follow-up
- Dish names, descriptions and KES prices are fictional demonstration content.
- Confirm actual restaurant address, opening hours and contact details before launch.
- Replace the placeholder metadataBase domain before production.
- Verify image licensing and replace demo imagery with approved restaurant photography before commercial launch.
- Run lint, TypeScript and production build after applying; completion is confirmed once these pass locally.
- Test desktop, mobile, reduced-motion and touch scrolling in a real browser.

## Next batch
Batch 3 — Menu and Our Story: functional menu categories, search, filters and dish details using structured seed data; editorial story page, timeline, philosophy and responsive storytelling.
