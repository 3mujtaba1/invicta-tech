# PRD: Invicta-Tech — Site Maintenance Page

## 1. Overview

**Product:** A single-page "Site Under Maintenance" landing page for **Invicta-Tech**, to be deployed on the company's main domain, temporarily replacing the existing live site while the full website is rebuilt.

**Goal:** Communicate that the site is under construction while preserving brand identity and giving visitors a way to learn about the company (via a downloadable company profile) and contact them directly.

**Scope:** This PRD covers **only** this one maintenance page. No routing, no additional pages, no CMS, no backend, no forms. When the full site is ready, this page and its route will simply be swapped out/removed.

**Non-goals:**
- No animations or transitions of any kind (static layout only).
- No responsive/breakpoint design work — desktop-first, fixed layout is acceptable for v1.
- No functional PDF download yet (placeholder button — client will wire up the file later).
- No real social media links yet (use platform homepages as placeholders).

---

## 2. Tech Stack

- **Framework:** React + Next.js
- **Styling:** Developer's choice of CSS approach best suited to this design (e.g., CSS Modules, plain CSS, or Tailwind — pick whichever makes the layout, gradients, and custom font integration cleanest to implement and maintain). Keep it to a single page/component structure — no need for a complex design system.
- **Fonts:** Google Fonts
  - **Anton** — used for the headline ("STILL CARVING THIS SPACE") and the "INVICTA-TECH" wordmark in the logo lockup.
  - **Arial** (system/web-safe) — used for all other text (eyebrow label, body paragraph, CTA button label, footer contact details).
- **Deployment context:** This page will temporarily replace the current live homepage at the root domain. It should be self-contained (no dependency on other pages/routes of the eventual full site) so it can be easily swapped in and later swapped out.

---

## 3. Assets

Provided by client, stored in `/assets`:

| Asset | File | Usage |
|---|---|---|
| Logo icon | `assets/logo.png` | Faceted "C/T" monogram, navy + cyan-blue 3D-beveled glass style. Top-left, above wordmark. |
| Background image | `assets/bg.jpeg` | Full-bleed hero background — a light, cream/gold-toned carved marble cave/tunnel interior with warm lighting. Used as the full-viewport hero background. |

**Background image treatment:** The image is light (cream/marble tones), but the headline and body text are white/light on top of it. Implement a **dark navy gradient overlay** (using the Invicta Navy palette, e.g. `linear-gradient` from `INVICTA NAVY (#071A33)` / `DEEP MARBLE NAVY (#041225)` at higher opacity on the left/bottom where text sits, fading out toward the right/top where the image detail should show through) so all text meets accessible contrast against the background. Background should be `background-size: cover`, centered.

---

## 4. Design Tokens

### 4.1 Color Palette

```
/* Navy */
--invicta-navy:        #071A33;
--deep-marble-navy:     #041225;
--midnight-blue:        #0B274A;
--navy-reflection:      #15395F;

/* Ivory / Neutral */
--invicta-ivory:        #F7F4EE;
--warm-stone:           #EFE9DE;
--quartz-white:         #FCFAF6;
--stone-shadow:         #D8D1C5;

/* Gold */
--invicta-gold:         #B28A45;
--champagne-gold:       #C9A667;
--deep-metallic-gold:   #80602B;
--gold-reflection:      #DFC88E;
--mineral-shadow:       #4E391C;

/* Text */
--primary-text-navy:    #071A33;
--body-text:            #292B2F;
--muted-text:           #6D6A64;

/* Wordmark-specific */
--wordmark-invicta:     #0C192A;  /* "Invicta-" */
--wordmark-tech:        #09488F;  /* "Tech" */
```

### 4.2 Typography

| Element | Font | Weight/Style | Color |
|---|---|---|---|
| "INVICTA-TECH" wordmark | Anton | Bold, condensed uppercase | "INVICTA-" → `#0C192A`, "TECH" → `#09488F` |
| Headline ("STILL CARVING THIS SPACE") | Anton | Bold, uppercase, large display size | Mixed: "STILL" → `--quartz-white` / white; "CARVING" → `--invicta-navy`; "THIS SPACE" → white |
| Eyebrow label ("SITE MAINTENANCE") | Arial | Bold, uppercase, letter-spaced (tracked out) | `--invicta-gold` |
| Body paragraph | Arial | Regular | `--invicta-ivory` / light gray-white |
| CTA button label | Arial | Bold, uppercase | `--invicta-navy` (on gold button background) |
| Footer column headings ("HEAD OFFICE", "PHONE", "EMAIL", "WEBSITE", "FOLLOW US") | Arial | Bold, uppercase | `--primary-text-navy` |
| Footer detail text (address, numbers, email) | Arial | Regular | `--body-text` or `--muted-text` |
| Footer sub-labels ("India", "Saudi Arabia") | Arial | Bold | `--invicta-gold` |

### 4.3 Divider

- Thin horizontal rule beneath the headline, in `--invicta-gold` or `--champagne-gold`.

---

## 5. Page Structure & Components

The page is a single full-viewport hero section followed by a footer/contact strip.

### 5.1 Hero Section (full viewport height)

**Background:** `bg.jpeg` with navy gradient overlay (see §3).

**Top-left: Logo lockup**
- `logo.png` icon.
- Below it, wordmark "INVICTA-TECH" in Anton, uppercase, bold/condensed — "INVICTA-" in `#0C192A`, "TECH" in `#09488F`.
- Positioned near the bottom-left of the hero area (logo icon above, wordmark below it).

**Top-right: Eyebrow label**
- Small, uppercase, letter-spaced text: "SITE MAINTENANCE"
- Color: `--invicta-gold`
- Aligned right, sits above the headline block.

**Center-right: Headline block**
- Large bold display headline (Anton), stacked:
  - Line 1: "STILL" (white)
  - Line 2: "CARVING" (navy) + "THIS SPACE" (white) — same line
- Thin gold divider rule beneath the headline.
- Body paragraph (Arial, white/light gray), 3 lines:
  > "Our site is being reshaped, much like the space above — with care and no shortcuts. We'll be back online shortly. In the meantime, get to know us below."

**CTA Button**
- Solid gold/tan rectangular button.
- Down-arrow (download) icon + bold uppercase navy text: **"DOWNLOAD COMPANY PROFILE"**
- **Non-functional placeholder for now** — `href="#"` or disabled state; client will supply the PDF and wire up the link later. Add a clear code comment marking this as a placeholder (e.g. `// TODO: replace with actual PDF link once provided`).

### 5.2 Footer / Contact Bar

A three-column light cream card (`--warm-stone` or `--invicta-ivory` background), full-width, sitting below the hero, separated by thin vertical divider lines between columns.

**Column 1 — Head Office**
- Circular outlined location-pin icon (gold outline, `--invicta-gold`).
- Bold navy label: "HEAD OFFICE"
- Address (gray/muted text):
  > WeWork Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, R.R. Dist., Financial District, Hyderabad, Telangana - 500032

**Column 2 — Phone**
- Circular outlined phone-handset icon (gold outline).
- Bold navy label: "PHONE"
- Sub-label "India" (gold) with two numbers: `+91 7259613084`, `+91 9740472216`
- Sub-label "Saudi Arabia" (gold) with number: `+966 535095453`
- Phone numbers should be clickable `tel:` links.

**Column 3 — Email / Website / Social**
- Circular outlined envelope icon (gold outline).
- Bold navy label "EMAIL" → `mwa@invicta-tech.com` (clickable `mailto:` link)
- Bold navy label "WEBSITE" → `www.invicta-tech.com`
- Bold navy label "FOLLOW US" with three circular outlined social icons (gold outline, navy glyph): LinkedIn, Instagram, Facebook.
  - **Placeholder links for now:** point to platform homepages (`https://www.linkedin.com`, `https://www.instagram.com`, `https://www.facebook.com`), opening in a new tab. Add a code comment noting these are placeholders to be replaced with actual company profile URLs later.

### 5.3 Shared Component Pattern

The footer icon + heading + detail-text pattern (circular outlined icon badge, bold navy heading, detail text below) repeats across all three columns and should be built as a single reusable component (e.g. `FooterColumn`) taking icon, heading, and children/content as props.

---

## 6. Content Reference (exact copy)

- Eyebrow: `SITE MAINTENANCE`
- Headline: `STILL` / `CARVING THIS SPACE`
- Body: `Our site is being reshaped, much like the space above — with care and no shortcuts. We'll be back online shortly. In the meantime, get to know us below.`
- CTA: `DOWNLOAD COMPANY PROFILE`
- Head Office: `WeWork Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, R.R. Dist., Financial District, Hyderabad, Telangana - 500032`
- Phone (India): `+91 7259613084`, `+91 9740472216`
- Phone (Saudi Arabia): `+966 535095453`
- Email: `mwa@invicta-tech.com`
- Website: `www.invicta-tech.com`

---

## 7. Responsiveness

Out of scope for v1 — desktop-first, fixed layout is acceptable. No specific breakpoints required. (Optional/nice-to-have: basic `min-width`/overflow safety so the page doesn't visibly break on smaller screens, but this is not a requirement.)

---

## 8. Animations / Interactions

None. This should be a clean, fully static layout — no fade-ins, no hover transitions, no scroll effects. Standard link/button cursor states are fine, but no motion design.

---

## 9. Acceptance Criteria

- [ ] Page renders as a single full-viewport hero + footer contact strip, matching the layout order and structure described in §5.
- [ ] `bg.jpeg` is used as the hero background with a navy gradient overlay ensuring all hero text is clearly legible.
- [ ] Logo icon (`logo.png`) + "INVICTA-TECH" wordmark appear top-left of hero, wordmark in Anton with correct two-tone coloring (`#0C192A` / `#09488F`).
- [ ] Eyebrow "SITE MAINTENANCE" appears top-right in gold, uppercase, letter-spaced.
- [ ] Headline renders in Anton with correct per-word color emphasis (white / navy / white).
- [ ] Gold divider rule appears beneath the headline.
- [ ] Body paragraph copy matches §6 exactly.
- [ ] CTA button renders with gold background, download icon, and correct navy uppercase label; link is a clearly marked placeholder.
- [ ] Footer renders as a three-column cream card with vertical dividers between columns, each column following the icon + heading + detail pattern.
- [ ] All footer content (address, phone numbers, email, website, social icons) matches §6 exactly.
- [ ] Phone numbers are `tel:` links; email is a `mailto:` link.
- [ ] Social icons link to placeholder platform homepages, opening in a new tab, clearly commented as placeholders.
- [ ] All colors used match the token values in §4.1; all fonts match §4.2 (Anton for titles/wordmark, Arial for everything else).
- [ ] No animations, transitions, or hover motion effects anywhere on the page.

---

## 10. Out of Scope

- Full website build-out, additional pages, or routing.
- CMS or backend integration.
- Functional PDF download (to be added later by client).
- Real social media profile links (to be added later by client).
- Responsive breakpoints / mobile optimization.
- Any animation or interactivity beyond standard link/button behavior.
