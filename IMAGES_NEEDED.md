# Images Needed — Acraft Systems Website

Generate these images with ChatGPT (or any image tool) and drop them into `public/images/`. The site currently uses placeholder boxes that describe each image. Once images exist, swap the placeholder div for `<Image src="/images/<filename>" .../>` in the matching page.

## Global style guide

- **Palette**: navy (#0A1628 / #152B4E), accent red (#E11D2E), neutral whites/greys. Photos should feel cool/cinematic, not orange-warm.
- **Aspect ratios**: hero portrait = 4:5, service hero = 4:3, partner logos = SVG monotone.
- **People**: predominantly Nigerian professionals, ages 25–50, mixed gender, business-casual.
- **Locations**: Lagos/Abuja-style modern offices, server rooms, retail spaces, meeting rooms.

---

## 1. Hero & brand

| File | Page | Aspect | Prompt |
|---|---|---|---|
| `hero-engineer.jpg` | Home | 4:5 portrait | Friendly Nigerian IT engineer (early 30s, business-casual) at a clean workstation, multiple monitors, navy/charcoal interior tones, soft daylight, smiling subtly at camera. Cinematic, sharp focus. |
| `logo.svg` | Header / Footer | square | Wordmark "Acraft" in geometric sans-serif, with a single accent-red dot or chevron. Variants: white-on-navy, navy-on-white. |
| `og-image.jpg` | OpenGraph | 1200×630 | "Acraft Systems · Expert IT support across Nigeria" — navy background, large white wordmark, accent-red underline, subtle circuit pattern. |

## 2. About Us

| File | Aspect | Prompt |
|---|---|---|
| `about-team.jpg` | 4:3 | Team of 4–5 IT professionals (mixed Nigerian, business attire) collaborating around a laptop in a modern Lagos office, warm natural lighting. |

## 3. Partner logos (replace the text placeholders in `PartnerStrip`)

Monotone navy SVGs for: **Microsoft 365**, **Fortinet**, **Dell**, **Cyber Essentials**, **Google Reviews**, **Cisco**. Either use official press-kit logos (preferred) or generate clean monotone equivalents.

## 4. Service sub-pages (each is 4:3, currently a placeholder card)

| Path | File | Prompt |
|---|---|---|
| `/it-services/managed-it-support` | `svc-managed-it.jpg` | IT engineer remotely monitoring multiple screens, navy/charcoal palette, calm and focused atmosphere. |
| `/it-services/backup-continuity` | `svc-backup.jpg` | Secure data centre interior with neat server racks, blue accent lighting, clean and professional. |
| `/it-services/it-consulting` | `svc-consulting.jpg` | Senior consultant in business attire presenting on a whiteboard to a small team, modern Lagos office. |
| `/cyber/managed-cybersecurity` | `svc-cyber-managed.jpg` | Cybersecurity analyst monitoring a SOC dashboard, dark room with blue/red screen glow, professional intensity. |
| `/cyber/cyber-essentials` | `svc-cyber-essentials.jpg` | Close-up of an official cybersecurity certificate next to a laptop, professional office context. |
| `/cyber/cyber-essentials-assessor` | `svc-cyber-assessor.jpg` | Auditor reviewing documentation with a client, professional handshake atmosphere, neutral office. |
| `/connectivity/microsoft-365` | `svc-m365.jpg` | Laptop showing Microsoft Teams interface in a modern office, person typing, hands and screen in focus. |
| `/connectivity/business-broadband` | `svc-broadband.jpg` | Network engineer running a cable through a server-room patch panel, hands in focus, professional context. |
| `/connectivity/leased-lines` | `svc-leased-lines.jpg` | Fibre optic strands glowing blue, abstract macro shot, premium technology aesthetic. |
| `/connectivity/mobile-internet` | `svc-mobile-internet.jpg` | 5G router mounted in a small office or retail space, antenna visible, clean modern interior. |
| `/connectivity/guest-wifi` | `svc-guest-wifi.jpg` | Phone showing a branded WiFi captive-portal login screen, café/reception background slightly blurred. |
| `/mobile/sim-only` | `svc-sim-only.jpg` | SIM card held between thumb and forefinger, smartphone in background, sharp macro detail. |
| `/mobile/mobile-with-handset` | `svc-handset.jpg` | A fan of modern smartphones (iPhone + Pixel + Samsung) on a wooden desk, top-down view, product-shot quality. |
| `/telecoms/cloud-phone-system` | `svc-cloud-phone.jpg` | Modern VoIP desk phone next to a laptop, warm office lighting, clean product context. |
| `/telecoms/contact-centre` | `svc-contact-centre.jpg` | Contact-centre agent wearing a headset at a tidy desk, dual monitors with chat interface visible, modern professional setting. |
| `/telecoms/microsoft-teams` | `svc-teams.jpg` | Modern meeting room with large display showing Microsoft Teams, video bar and conference camera visible. |

---

## How to swap a placeholder for a real image

Each service page passes `imagePrompt={...}` to `ServicePageTemplate`. To swap:

1. Drop the image into `public/images/svc-<name>.jpg`.
2. Open `src/components/sections/ServicePageTemplate.tsx`, find the placeholder div (`<div className="aspect-[4/3] ...">`) and replace with:
   ```tsx
   <Image src={imageSrc} alt={title} fill className="object-cover rounded-xl" />
   ```
3. Add an `imageSrc` prop to `ServicePageProps` and pass it from each page.

(For the home hero, the same swap applies in `src/app/page.tsx`.)
