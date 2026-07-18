# Tasks: Invicta-Tech Maintenance Page

Reference: `PRD.md`, `assets/exampleWireframe.png` (layout reference only, not used as an asset in the build).

## 1. Project setup
- [ ] Scaffold Next.js + React app (App Router, single page, no extra routes).
- [ ] Choose styling approach: CSS Modules (plain CSS, no Tailwind dependency needed for a one-page static layout).
- [ ] Copy assets into project: `assets/logoTransparentBg.png` → `public/logo.png`, `assets/backgroundImage.jpeg` → `public/bg.jpeg`.
- [ ] Add Google Fonts: Anton + a fallback stack for Arial (system Arial, no need to load via Google Fonts since it's web-safe).
- [ ] Define design tokens (CSS custom properties) for the full color palette in §4.1 of the PRD.

## 2. Hero section
- [ ] Full-viewport hero container with `bg.jpeg` as `background-size: cover`, centered.
- [ ] Navy gradient overlay (linear-gradient using `--invicta-navy` / `--deep-marble-navy`), heavier on left/bottom, fading toward right/top.
- [ ] Logo lockup, positioned bottom-left: `logo.png` icon above "INVICTA-TECH" wordmark (Anton, "INVICTA-" `#0C192A` / "TECH" `#09488F`).
- [ ] Eyebrow label "SITE MAINTENANCE", top-right, gold, uppercase, letter-spaced.
- [ ] Headline block, center-right: "STILL" (white) / "CARVING" (navy) + "THIS SPACE" (white), Anton, stacked per wireframe.
- [ ] Thin gold divider rule beneath headline.
- [ ] Body paragraph (Arial, ivory/light gray), exact copy from PRD §6.
- [ ] CTA button: gold background, download icon + "DOWNLOAD COMPANY PROFILE" (navy, bold, uppercase), `href="#"` placeholder with a `// TODO` comment.

## 3. Footer / contact bar
- [ ] Three-column cream card (`--warm-stone`/`--invicta-ivory`), full width, vertical divider lines between columns.
- [ ] Build reusable `FooterColumn` component (icon, heading, children props) — circular gold-outlined icon badge + bold navy heading + detail text.
- [ ] Column 1 — Head Office: pin icon, address copy exactly as in PRD §6.
- [ ] Column 2 — Phone: handset icon, "India" (gold) + two numbers as `tel:` links, "Saudi Arabia" (gold) + number as `tel:` link.
- [ ] Column 3 — Email/Website/Social: envelope icon, `mailto:` email link, website text, "FOLLOW US" with 3 circular social icons (LinkedIn/Instagram/Facebook) linking to placeholder platform homepages, `target="_blank"`, commented as placeholders.

## 4. Polish & QA
- [ ] Verify all colors/fonts match tokens exactly (§4.1, §4.2).
- [ ] Verify no animations/transitions/hover motion anywhere.
- [ ] Confirm placeholder links (CTA + socials) are clearly commented as TODOs.
- [ ] Run the app locally and visually compare against the wireframe reference.
- [ ] Walk through PRD §9 Acceptance Criteria checklist end-to-end.

## Out of scope (per PRD §10)
- No responsive breakpoints, no CMS/backend, no functional PDF, no real social links, no animations.
