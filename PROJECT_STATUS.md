# MAISON NOIR — Project Status

## Current batch
Batch 4 — Reservations, Gallery and Contact frontend

## Included

### Reservations (`/reservations`)
- Editorial hero and booking introduction.
- Accessible reservation request form with name, email, phone, date, time, guest count, occasion and notes.
- Client-side required-field validation and date minimum.
- Local request preview and clear prototype disclosure; no booking is transmitted or confirmed.
- Reservation guidance and contact cross-link.

### Gallery (`/gallery`)
- Editorial gallery hero and responsive masonry-inspired grid.
- Accessible image buttons and native dialog lightbox.
- Previous/next controls, Escape-to-close via native dialog behavior, backdrop click-to-close, descriptive alt text.
- Optimized Next Image usage with responsive sizes and quality settings.

### Contact (`/contact`)
- Editorial contact hero.
- Contact information placeholders clearly marked unconfirmed.
- Accessible inquiry form with local preview; no message is transmitted.
- Map placeholder until a verified restaurant address is provided.

### Shared implementation
- Reuses the existing Server Component page pattern and narrow `ScrollMotion` client boundary.
- Page metadata and Open Graph metadata for all three routes.
- CSS Modules colocated with page/components.
- No new dependencies.

## Files added
- `src/app/reservations/page.tsx`
- `src/app/reservations/page.module.css`
- `src/components/reservations/ReservationForm.tsx`
- `src/components/reservations/ReservationForm.module.css`
- `src/app/gallery/page.tsx`
- `src/app/gallery/page.module.css`
- `src/components/gallery/GalleryExperience.tsx`
- `src/components/gallery/GalleryExperience.module.css`
- `src/app/contact/page.tsx`
- `src/app/contact/page.module.css`
- `src/components/contact/ContactForm.tsx`
- `src/components/contact/ContactForm.module.css`

## Important limitations
- Forms are frontend-only demonstrations. They do not send, store or confirm reservations/messages.
- Contact address, phone, email and opening hours are placeholders and must be replaced with verified details.
- Gallery imagery is Unsplash demonstration photography; replace with approved/licensed restaurant assets before launch.
- Reservation time options are illustrative and should be aligned with the restaurant's real service schedule.

## Validation
Not run against the user's local project. After overlaying this batch, run lint, TypeScript and production build, then test all routes and interactions in desktop/mobile browsers.

## Next
Batch 5 — Frontend QA, accessibility and performance optimization: fix any test findings, evaluate image/font loading, animation performance, responsive breakpoints, metadata/SEO and Core Web Vitals. Then decide the real data/backend integration approach for reservations, enquiries and menu content.
