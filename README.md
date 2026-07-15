# Divyam Tours and Taxi Services — Website

High-conversion, SEO-dense website for Divyam Tours (Varanasi).
Built with **Next.js 16 (App Router) · React 19.2 · Tailwind CSS v4 · TypeScript · Turbopack**.

See `CLAUDE (1).md` (in the parent folder) for the master brand brief.

---

## Quick start

```bash
npm install
npm run dev        # local dev — http://localhost:3000
npm run build      # production build
npm start          # serve production build
npx tsc --noEmit   # type-check only
```

---

## Project layout

```
app/                          # routes (App Router)
├── layout.tsx                # fonts + Header + Footer + sticky CTA + LocalBusiness JSON-LD
├── page.tsx                  # Home
├── taxi-services/            # service pages
├── airport-transfer/
├── local-sightseeing/
├── outstation-taxi/
├── tour-packages/
├── tour-guide/
├── fleet/
├── about/
├── contact/
├── faq/
├── reviews/
├── routes/                   # routes hub
│   ├── page.tsx
│   ├── varanasi-airport-to-city-taxi/page.tsx
│   ├── varanasi-to-sarnath-taxi/page.tsx
│   ├── varanasi-to-prayagraj-taxi/page.tsx
│   └── varanasi-to-ayodhya-taxi/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── layout/                   # Header, Footer, StickyMobileCTA, Logo
├── ui/                       # Container, Button (CVA variants)
├── primitives/               # CallButton, WhatsAppButton, EnquireCTA
├── sections/                 # Hero, TrustStrip, ServiceOverview, PopularRoutes,
│                             # VehicleSelector, WhyChooseUs, PackageSpotlight,
│                             # Testimonials, FAQAccordion, FAQTeaser,
│                             # ContactConversion, AnswerBlock, SectionHeader
├── route/                    # RoutePageTemplate, Breadcrumbs
└── seo/                      # JsonLd

content/                      # ★ single source of truth for editable data
├── business.ts               # NAP, phone, WhatsApp, URL — placeholders
├── routes.ts                 # route page data (Sarnath, Prayagraj, Ayodhya, Airport)
├── packages.ts               # tour package data
├── fleet.ts                  # vehicle category data
├── faqs.ts                   # FAQ blocks by topic
└── testimonials.ts           # empty until real reviews exist

lib/
├── seo.ts                    # buildMetadata helper (Next Metadata API)
├── schema.ts                 # JSON-LD builders (LocalBusiness, Service, TouristTrip, FAQPage, Breadcrumb)
├── cta.ts                    # tel: and wa.me link composers (with prefilled context messages)
├── nav.ts                    # header + footer link maps
└── utils.ts                  # cn() helper (clsx + tailwind-merge)

app/globals.css               # design tokens + Tailwind v4 @theme + base
```

---

## Before going live — placeholder checklist

Every value below is currently a placeholder. Replace it before launch.
All edits happen in **`content/business.ts`** unless noted otherwise.

### `content/business.ts`

- [ ] `phone.e164` — operator phone in E.164 (e.g. `+919876543210`)
- [ ] `phone.display` — visible phone format (e.g. `+91 98765 43210`)
- [ ] `whatsapp.e164` — WhatsApp number, **no `+`** (e.g. `919876543210`)
- [ ] `whatsapp.display` — visible WhatsApp number
- [ ] `email` — primary contact email
- [ ] `address.street` — street address
- [ ] `address.postalCode` — PIN code
- [ ] `hours.display` — operating window text
- [ ] `url` — final canonical site URL (e.g. `https://divyamtours.com`)
- [ ] `geo.latitude` / `geo.longitude` — adjust to operator's actual base
- [ ] `socials.googleBusiness` — Google Business Profile URL
- [ ] `socials.facebook` / `socials.instagram` (optional)

### `content/fleet.ts`
Replace `{{SEDAN_MODEL_1}}`, `{{SUV_MODEL_1}}` etc. with actual fleet models.

### `content/testimonials.ts`
Add real testimonials when collected (with traveller permission). Remove the `noindex` from `app/reviews/page.tsx` once at least 4–6 real reviews are in.

### Images (`public/images/`)
Hero, ServiceOverview, route and package sections currently use editorial placeholders. Replace with real Varanasi-specific photography:

- Dawn ghats, evening aarti, old lanes
- Real vehicles (clean interiors, luggage-ready)
- Sarnath, temple-area approaches
- Driver assistance moments

**Photo style rules** (per brief): warm natural light, low-to-medium saturation, documentary framing. **No** generic foreign-model stock, no oversaturated drone montages.

### OG images (`public/og/`)
Add `default.png` (1200×630) for default social share image. Optionally per-page OG images passed via `buildMetadata({ openGraphImage: "..." })`.

### Logo
A custom inline SVG mark is in `components/layout/Logo.tsx` — a single flowing curve suggesting a route / river-bend. This is intentionally abstract per brief. Refine the curve or commission a final vector mark; the swap is one component.

### Email backend
Contact uses direct call / WhatsApp / email tap-targets only (no form, per brief — `Form policy: A short form may exist, but it should never compete with phone and WhatsApp`). If a form is added later, wire `app/api/enquiry/route.ts` to Resend or similar.

### Analytics
GA4 / GTM is not yet wired in. Add a `<Script>` to `app/layout.tsx` once a GA Measurement ID is available.

---

## Design system

Tokens defined as CSS variables in `app/globals.css`, exposed as Tailwind utilities via `@theme inline`:

| Token | Use |
|---|---|
| `bg-ivory` / `text-charcoal` | Default page background + text |
| `bg-limestone` / `bg-paper` | Surfaces (cards, alternate sections) |
| `text-ink` / `text-mist` | Secondary / tertiary text |
| `bg-ganga` (#2C6E68) | Primary accent — buttons, links |
| `bg-ganga-soft` | Tinted accent surfaces |
| `text-brass-deep` (#8A6A26) | Eyebrows, secondary accent (used <5% of UI) |
| `bg-terracotta` | Error / urgency only |
| `bg-whatsapp` | WhatsApp brand green — only on WhatsApp CTAs |

Fonts loaded via `next/font/google`:
- **Fraunces** (display serif) — `font-serif` utility, used on h1/h2/h3
- **Inter** (UI sans) — default body font

---

## SEO & schema

Every page exports its own `metadata` using `buildMetadata()` from `lib/seo.ts`.
JSON-LD blocks (LocalBusiness, Service, TouristTrip, FAQPage, BreadcrumbList) are injected via `<JsonLd>` per page.

Internal linking map driven by `lib/nav.ts` (footer) and individual page links. Sitemap auto-generates from static routes + route data.

To validate schema after launch, paste a rendered page's JSON-LD into [Google's Rich Results Test](https://search.google.com/test/rich-results).

---

## Anti-AI-slop policy (from brief)

Do **not** add:
- Blue-purple gradients
- Floating blobs / glass-morphism decoration
- Generic icon-in-circle 3-card "services" rows
- Hollow spiritual lines ("Discover the divine journey with us")
- Stock photos of generic smiling tourists
- Over-animation or parallax

Use instead:
- Editorial typography hierarchy
- Specific route-led content
- Real local photography
- Carefully paced motion (200–400ms, single-trigger reveals)

---

## Verification (pre-launch)

1. **Build:** `npm run build` — must pass with zero errors
2. **Type-check:** `npx tsc --noEmit` — zero errors
3. **Lighthouse mobile (4G):** Performance ≥ 90, Accessibility ≥ 95, SEO = 100 on Home + one route page
4. **Schema:** every page's JSON-LD passes Google's Rich Results Test
5. **Mobile CTAs:** on a real phone — both Call and WhatsApp launch with prefilled context
6. **Placeholder audit:** `grep -r "{{" .` should return only items still listed in this README's checklist
7. **Anti-AI-slop visual QA:** read against the brief's "Anti-AI-slop design policy" — fix anything that creeps in
8. **Copy QA:** read every page aloud against the brief's "Anti-generic copy rules" — replace any sentence that could fit a generic travel agency
