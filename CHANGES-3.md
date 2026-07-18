# CHANGES: Invicta-Tech Site Maintenance Page — Revision 3

This document describes the next set of changes to be made to the existing implementation of the site maintenance page (on top of Revisions 1 and 2), following the introduction of responsive behavior. Apply these to the current build.

---

## 1. Fix desktop view: background image is now cut off above the contact section

- A regression was introduced while making the page responsive: on **desktop**, the background image now only covers the area above the contact card, and a plain blue color fills the space behind/around the contact card instead.
- Restore the original desktop behavior from Revision 1: the background image should cover the **entire viewport, top to bottom**, with no solid color showing anywhere.
- Specifically, the background image must remain visible **behind and around the contact card** — to its left, right, and below it — exactly as it was before responsiveness was added (see Revision 1, point 2: the contact card floats above the background with visible image margins on its sides and bottom).
- No other desktop behavior should change — this is a fix to restore prior behavior, not a new design change.

---

## 2. Mobile/tablet: make the background image fixed, with the contact card scrolling on top of it

- On **mobile and tablet** breakpoints, the background image should behave as a **fixed backdrop** (e.g. `background-attachment: fixed`, or an equivalent fixed-position background layer) — it stays in place and does not scroll with the page content.
- The background image should extend all the way down so it **touches the bottom of the screen**, with no solid color visible below it at any scroll position.
- The contact card should sit **on top of this fixed background** and scroll normally as the user scrolls the page — so visually, the card scrolls up over the fixed background image, and the background image is the only thing ever visible behind/around it (never a plain color).
- Net effect: hero content and background feel "pinned," while the contact card scrolls independently on top, like a floating panel moving over a static backdrop.

---

## 3. Mobile/tablet: restructure the contact card into a 2x2 grid with mixed divider styles

On mobile and tablet, change the contact card's internal layout from a single stacked column (or four-in-a-row) into a **2x2 grid**, ordered as follows:

- **Top row:** "Registered Address" and "Communication Address" side by side, as two equal-width columns.
  - Separated by a **vertical divider with faded ends** (same thin, fading-gold divider style introduced in Revision 2 between the two address columns).
- Below the top row, a **horizontal solid divider** spans the full width of the card, separating the top row from the bottom row.
- **Bottom row:** "Phone" and "Email" (with Website/Follow Us content as already grouped with Email) side by side, as two equal-width columns.
  - Separated by the **same vertical divider with faded ends** style used in the top row.

So the mobile/tablet contact card becomes a 2x2 grid: (Registered Address | Communication Address) on top, a full-width solid divider, then (Phone | Email) on the bottom — with faded vertical dividers used within each row, and a solid horizontal divider between the rows.

---

## 4. Mobile/tablet: move "Follow Us" and social icons to the top, next to the logo/wordmark

- On mobile and tablet, relocate the "FOLLOW US" label and its three social icons (LinkedIn, Instagram, Facebook) out of the contact card's email column and up to the **top of the page**, positioned alongside the logo and wordmark.
- This "Follow Us" block should be **right-aligned** at the top of the screen (opposite side from the logo/wordmark — see point 5).
- The email/website details remain in the contact card as before — only the "Follow Us" label + icons move up to the header area.

---

## 5. Mobile/tablet: left-align logo/wordmark at the top, and slightly reduce headline size

- On mobile and tablet, position the logo icon and "INVICTA-TECH" wordmark **left-aligned** at the top of the screen, side-by-side with each other (same relative arrangement as desktop — icon next to/above wordmark as currently styled — just now anchored to the left edge instead of centered).
- This sits in the same top row as the "Follow Us" block from point 4: logo + wordmark on the left, "Follow Us" + icons on the right, both aligned along the top of the page.
- Slightly **decrease the font size** of the "STILL CARVING THIS SPACE" headline on mobile/tablet — a modest reduction, not a drastic one, just enough to fit and balance better on smaller screens.

---

## Summary of Net Effect

- Desktop: background image regression fixed — full-viewport coverage restored, no blue showing around the contact card.
- Mobile/Tablet: background image is fixed in place and extends to the bottom of the screen; the contact card scrolls independently on top of it.
- Mobile/Tablet: contact card becomes a 2x2 grid — addresses on top (faded vertical divider between them), phone/email on bottom (faded vertical divider between them), with a solid horizontal divider separating the two rows.
- Mobile/Tablet: top of page now has a header-style row — logo/wordmark left-aligned, "Follow Us" + social icons right-aligned.
- Mobile/Tablet: headline text size is slightly reduced for better fit.
