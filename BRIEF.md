# RELAIS DEL SOL — AGRITURISMO WEBSITE REBUILD
## Cursor Project Initialization Prompt

You are a senior full-stack developer and hospitality UX specialist.
Rebuild the website for Relais Del Sol, a family-run agriturismo in
Pacengo di Lazise (VR), directly on Lake Garda.

---

## 1. BUSINESS INTELLIGENCE (read carefully — this informs every decision)

**Property profile:**
- Agriturismo run by the Pietropoli family (family story = core brand asset)
- Sabrina is the main contact and host — mention naturally, not as protagonist
- Use "famiglia Pietropoli" or "noi" as the narrative voice, never first-person singular
- Location: Loc. Casa Antonia, 1 — 37017 Pacengo di Lazise (VR)
- Direct lakefront access — this is a MAJOR differentiator, use it everywhere
- Rooms: mix of standard, lake-view balcony, kitchenette + veranda
- Style: provençal/country-romantic with natural materials, exposed beams
- Agricamping: 8 luxury mobilehomes (40sqm, 2bed/2bath, 18sqm veranda)
- Amenities: pool, breakfast, dog-friendly, private events, wine/oil products
- Booking engine: BookingExpert (be.bookingexpert.it, hotel ID 42837)
- Languages needed: IT (primary), EN, DE

**Competitive positioning:**
- Premium but not luxury. Authentic but curated.
- "Quiet luxury agriturismo" — not a resort, not a B&B
- Direct competitor pressure from Booking.com / Expedia must be countered
  with direct booking incentives (currently offers: acetaia tasting in omaggio)

**Current site weaknesses to fix:**
- No individual room pages (kills SEO + conversion)
- No storytelling about Paolo & Sabrina
- No experience/territory section
- Flat navigation diluted by low-value pages (social wall, virtual tour)
- No structured reviews/social proof
- Outdated tech (WordPress + qtranslate-x + RevSlider)

---

## 2. TECH STACK

- **Framework:** Next.js 14+ (App Router only — no Pages Router)
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Language:** TypeScript throughout
- **i18n:** next-intl (IT/EN/DE, IT default)
- **CMS:** Sanity v3 (schema-first, typed) — optional integration,
  but all components must be CMS-ready with typed props
- **Booking:** BookingExpert iframe integration + deep-link CTA buttons
- **Images:** next/image exclusively, with blur placeholder
- **Animation:** Framer Motion (minimal, purposeful — no decoration)
- **Forms:** React Hook Form + Zod validation
- **Analytics:** GA4 + consent-mode v2 ready
- **Deployment target:** Vercel

---

## 3. PROJECT FILE STRUCTURE

Generate this exact structure:
cadelsol/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Home
│   │   ├── camere/
│   │   │   ├── page.tsx                # Rooms index
│   │   │   └── [slug]/page.tsx         # Individual room (dynamic)
│   │   ├── agricamping/page.tsx
│   │   ├── esperienze/page.tsx
│   │   ├── prodotti/page.tsx
│   │   ├── chi-siamo/page.tsx
│   │   ├── dove-siamo/page.tsx
│   │   ├── offerte/page.tsx
│   │   ├── faq/page.tsx
│   │   └── contatti/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                  # Sticky, with booking CTA
│   │   ├── Footer.tsx
│   │   └── LocaleSwitcher.tsx
│   ├── ui/
│   │   ├── Button.tsx                  # variants: primary/ghost/outline
│   │   ├── Badge.tsx
│   │   ├── Divider.tsx                 # decorative botanical SVG divider
│   │   └── SectionLabel.tsx            # small caps label above headings
│   ├── sections/
│   │   ├── Hero.tsx                    # fullscreen, video/image, parallax
│   │   ├── ValueProposition.tsx        # 3-column USP grid
│   │   ├── RoomsPreview.tsx            # horizontal scroll on mobile
│   │   ├── AgricampingHighlight.tsx
│   │   ├── ExperiencesGrid.tsx
│   │   ├── DirectBookingBanner.tsx     # anti-OTA conversion block
│   │   ├── Testimonials.tsx            # structured review cards
│   │   ├── LocationTeaser.tsx          # map + lake proximity copy
│   │   ├── FamilyStory.tsx             # Paolo & Sabrina narrative
│   │   └── FinalCTA.tsx
│   ├── booking/
│   │   ├── BookingWidget.tsx           # BookingExpert iframe wrapper
│   │   ├── StickyBookingBar.tsx        # mobile bottom bar
│   │   └── DirectBookingBadge.tsx      # "Miglior prezzo garantito"
│   └── cards/
│       ├── RoomCard.tsx
│       ├── ExperienceCard.tsx
│       └── ProductCard.tsx
├── lib/
│   ├── content/
│   │   ├── rooms.ts                    # static room data (CMS-ready shape)
│   │   ├── experiences.ts
│   │   └── products.ts
│   ├── seo/
│   │   ├── metadata.ts                 # generateMetadata helpers
│   │   └── schemas.ts                  # JSON-LD: Hotel, LocalBusiness, etc.
│   └── utils.ts
├── messages/                           # next-intl translation files
│   ├── it.json
│   ├── en.json
│   └── de.json
├── public/
│   └── images/ (placeholder references)
├── styles/
│   └── globals.css
├── tailwind.config.ts                  # custom tokens below
└── sanity/                             # optional, scaffold only
├── schemas/
│   ├── room.ts
│   ├── experience.ts
│   └── product.ts
└── lib/client.ts

---

## 4. DESIGN SYSTEM — TOKENS

In `tailwind.config.ts`, define these exact tokens:

```ts
colors: {
  sol: {
    cream:    '#F5F0E8',   // primary background
    sand:     '#E8DCC8',   // section alternates
    terracotta: '#C4714A', // primary accent / CTAs
    olive:    '#7A8C5E',   // secondary accent
    lake:     '#4A7C9E',   // lake-blue accent (use sparingly)
    bark:     '#5C4A32',   // dark text / headings
    mist:     '#F9F6F0',   // cards / elevated surfaces
  }
},
fontFamily: {
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],    // headings
  sans:  ['DM Sans', 'system-ui', 'sans-serif'],        // body / UI
},
```

Typography scale rule: H1 in serif, all UI elements in sans-serif.
Never use pure black (#000) — use `sol.bark` for text.

---

## 5. COMPONENT SPECIFICATIONS

### Navbar.tsx
- Transparent on hero, solid `sol.cream` on scroll
- Logo centered on mobile, left on desktop
- Nav links: Camere | Agricamping | Esperienze | Prodotti | Chi Siamo
- Sticky CTA button (right): "Prenota Ora" → BookingExpert deep-link
- Locale switcher: flag icons IT/EN/DE
- On mobile: hamburger menu with full-screen overlay

### Hero.tsx
- Full viewport height (100dvh)
- Background: video (autoplay, muted, loop) with image fallback
- Overlay: subtle gradient bottom-to-top (bark 40% opacity)
- Content centered:
  - Small label: "Pacengo di Lazise · Lago di Garda"
  - H1: "Dove la campagna tocca il lago"
  - Subheading: 1–2 lines emotional copy
  - Two CTAs: primary "Scopri le Camere" + ghost "Prenota Direttamente"
- Scroll indicator (animated chevron)

### RoomCard.tsx
Props: { slug, name, description, images[], features[], priceFrom, badge? }
- Aspect ratio 4:3 image with next/image
- Hover: subtle scale + overlay with "Scopri" CTA
- Badge (optional): "Vista Lago", "Con Cucina", "Romantica"
- No price unless explicitly provided — avoid cheapening the brand

### DirectBookingBanner.tsx
3 benefit columns (icon + label + description):
1. 🏷 Miglior prezzo garantito
2. 🎁 Regalo di benvenuto esclusivo (degustazione acetaia)
3. 🔒 Cancellazione flessibile
Include: "Prenota sul sito ufficiale — nessuna commissione a terzi"

---

## 6. SEO & STRUCTURED DATA

In `lib/seo/schemas.ts`, generate JSON-LD for:

```ts
// Schema: LodgingBusiness (covers Agriturismo)
{
  "@type": "LodgingBusiness",
  "name": "Agriturismo Ca' del Sol",
  "address": {
    "streetAddress": "Loc. Casa Antonia, 1",
    "addressLocality": "Pacengo di Lazise",
    "addressRegion": "VR",
    "postalCode": "37017",
    "addressCountry": "IT"
  },
  "geo": { "latitude": 45.5083, "longitude": 10.7378 },
  "telephone": "+390456490008",
  "priceRange": "€€",
  "amenityFeature": ["Pool", "Breakfast", "WiFi", "Dog Friendly", "Lake View"]
}
```

Target keyword clusters (use in metadata + copy):
- Primary: "agriturismo lago di garda" / "agriturismo Lazise"
- Secondary: "glamping lago di garda" / "mobilhome luxury lago di garda"
- Long-tail: "agriturismo con piscina Verona" / "agriturismo dog friendly lago di garda"

Page-level H1 guidelines:
- Home: "Agriturismo Ca' del Sol — Lazise, Lago di Garda"
- Camere: "Le Camere dell'Agriturismo: eleganza tra campagna e lago"
- Agricamping: "Agricamping Luxury — Mobilhome sul Lago di Garda"

---

## 7. CONTENT VOICE GUIDELINES

Apply to all copy generated or placeholder text:

**Tone:** Warm, slow, sensory. Never corporate. Never salesy.
**POV:** Second-person ("Svegliati con il lago davanti…")
**Avoid:** "offriamo", "disponiamo di", "si trova"
**Use instead:** Narrative, present-tense, sensory language

Example rewrite:
- ❌ "Le camere dispongono di aria condizionata e TV"
- ✅ "Rientri la sera nella tua stanza — fresca, silenziosa, profumata
     di lavanda — e trovi tutto quello che ti serve per dimenticare
     il resto del mondo."

**Family story framing:** Sabrina and her family are not "the owners."
They are the reason the place feels different.
Always reference their personal choices (profumi, tessuti,
prodotti ecocompatibili) as intentional acts of care.

---

## 8. BOOKING INTEGRATION

BookingExpert configuration:
- Hotel ID: 42837
- Layout ID: 14194
- Base URL: https://be.bookingexpert.it/book/simple/noavail

CTA deep-link pattern:
https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR

In `BookingWidget.tsx`: render as iframe on /contatti and modal trigger.
Everywhere else: use CTA buttons with direct deep-link.
`StickyBookingBar.tsx`: fixed bottom bar on mobile only (hidden on desktop).

---

## 9. IMPLEMENTATION ORDER

Generate files in this sequence:

1. `tailwind.config.ts` + `globals.css` (tokens + font imports)
2. `lib/content/rooms.ts` (static data, 3 example rooms typed)
3. `lib/seo/schemas.ts` + `lib/seo/metadata.ts`
4. `components/ui/*` (Button, Badge, SectionLabel, Divider)
5. `components/layout/Navbar.tsx` + `Footer.tsx`
6. `components/booking/StickyBookingBar.tsx` + `DirectBookingBadge.tsx`
7. `app/[locale]/layout.tsx`
8. **Home page** — full implementation:
   `components/sections/*` + `app/[locale]/page.tsx`
9. **Camere index** + `[slug]/page.tsx` with generateStaticParams
10. `app/[locale]/agricamping/page.tsx`
11. Remaining pages as shells with proper metadata

---

## 10. QUALITY GATES

Before considering any component complete, verify:
- [ ] Mobile-first: works at 375px without horizontal scroll
- [ ] No hardcoded Italian strings — all text via next-intl keys
- [ ] All images use next/image with width/height + alt text
- [ ] No `<a>` tags — use Next.js `<Link>`
- [ ] Semantic HTML: section > article > h2 hierarchy respected
- [ ] Lighthouse target: Performance 90+, SEO 95+, Accessibility 90+
- [ ] No inline styles — Tailwind classes only
- [ ] TypeScript: no `any` types

---

## FINAL BRIEF REMINDER

This is not a hotel website.
This is a place where a family decided to share
what they love most about living on Lake Garda.
Every design decision should make the visitor feel
that visiting Relais Del Sol is a privilege,
not a transaction.

Build accordingly.