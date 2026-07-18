# CHANGES: Invicta-Tech Site Maintenance Page — Revision 1

This document describes changes to be made to the existing implementation of the site maintenance page (built from `PRD.md`). Apply these on top of the current build.

---

## 1. Lighten the background gradient overlay

- The current navy gradient overlay on top of `bg.jpeg` is too dark.
- Reduce the opacity/strength of the overlay so more of the background image's detail and warm tones show through, while still keeping enough contrast for the white/light text to stay easily readable.
- Keep the same gradient direction and color (navy), just lighter overall.

---

## 2. Make the whole page fit in one viewport, with the contact section as a floating card (no scrolling)

- The entire page — hero content **and** the contact/footer section — must fit within `100vh`. There should be **no scrolling** at all; the contact section should never be revealed by scrolling.
- Turn the contact/footer section into a **self-contained rectangular card**:
  - Rounded corners (a moderate corner radius, not sharp, not fully pill-shaped).
  - Positioned near the **bottom of the viewport**, but not flush against the edges — leave visible spacing (margin) below it and on both left/right sides, so the background image is visible around/behind the card, like the card is "floating" or placed on top of the page.
  - Think of it as a card inset within the page, sitting near the bottom, with the background peeking through on its sides and below it.
- This means the hero content above (logo, wordmark, eyebrow, headline, subtext, CTA) and the contact card below must all be vertically fit and balanced within the single viewport height — reduce spacing/sizing as needed so nothing overflows or gets cut off.

---

## 3. Remove the text outline/stroke on "Invicta-Tech" and "Still Carving This Space"

- Both the "INVICTA-TECH" wordmark and the "STILL / CARVING THIS SPACE" headline currently have a white border/outline around the letters (text-stroke effect).
- Remove this stroke entirely — the text should just be solid fill color with no outline, as originally specified in the PRD (wordmark: `#0C192A` / `#09488F`; headline: white / navy / white per word).

---

## 4. Increase the size of the logo and wordmark

- Increase the size of both the logo icon and the "INVICTA-TECH" wordmark beneath it compared to the current implementation.
- Keep their proportions/relationship to each other the same — just scale both up together.

---

## 5. Restructure the hero layout into two equal halves (left: logo, right: text content)

Replace the current layout (where everything is right-aligned, and the logo/wordmark sit bottom-left) with a **two-column, equal-width split** of the hero section:

**Left half:**
- Contains only the logo icon + "INVICTA-TECH" wordmark (at the increased size from point 4).
- The logo and wordmark should be **centered relative to each other** (i.e., stacked and horizontally centered as a group).
- This group should also be **centered within the left half** of the screen (both horizontally and vertically within that half).

**Right half:**
- Contains the eyebrow label ("SITE MAINTENANCE"), the headline ("STILL CARVING THIS SPACE"), the body/subtext paragraph, and the CTA button — in that order, stacked vertically.
- This block of content should be **vertically centered within the right half** of the screen.
- Within that block, all text and the CTA should be **left-aligned** (not centered text, not right-aligned as it currently is).

So: no more right-alignment of the eyebrow/headline/subtext/CTA, and no more bottom-left placement of the logo/wordmark. Instead: logo/wordmark centered as a group in the left half; text content block vertically centered and left-aligned in the right half.

---

## 6. Remove the divider between headline and subtext; add a vertical divider between the two halves instead

- Remove the existing thin gold horizontal divider that currently sits between the "STILL CARVING THIS SPACE" headline and the body paragraph. There should be no divider between these two elements anymore.
- Add a **new vertical divider line** running down the middle of the page, separating the left half (logo/wordmark) from the right half (text content).
  - Style: very thin, light/subtle gold color (low opacity).
  - The top and bottom ends of the line should **fade out** (e.g., via a gradient from transparent → gold → transparent along its length), rather than having hard-cut ends.

---

## 7. Adjust footer icons: slightly smaller, aligned inline with their labels

- In the contact card's three columns, the circular icons (location pin, phone, envelope) are currently sized in a way that should be reduced — decrease their size **slightly** (a small reduction, not drastic).
- Align each icon **inline with its heading text** ("HEAD OFFICE", "PHONE", "EMAIL") — icon and heading should sit side-by-side on the same horizontal line (icon to the left, label text to the right, vertically centered with each other), rather than the icon sitting above the heading as a separate stacked element.

---

## Summary of Net Effect

- Lighter background overlay for a less heavy hero.
- Full page (hero + contact) fits in one viewport with no scroll; contact section becomes a rounded, inset floating card near the bottom with visible background margins around it.
- Clean solid-color text with no white outlines on the wordmark/headline.
- Bigger, more prominent logo + wordmark.
- New two-column hero layout: logo/wordmark centered in the left half; eyebrow/headline/subtext/CTA left-aligned and vertically centered in the right half.
- A faint, fading vertical gold divider replaces the old horizontal divider, now separating the two halves instead of separating headline from subtext.
- Footer icons: slightly smaller and aligned inline with their column headings instead of stacked above them.
