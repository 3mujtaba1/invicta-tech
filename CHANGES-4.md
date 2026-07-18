# CHANGES: Invicta-Tech Site Maintenance Page — Revision 4

This document describes the next set of changes to be made to the existing implementation of the site maintenance page (on top of Revisions 1–3). Apply these to the current build.

**Scope note:** These changes are described generally and are assumed to apply to the hero section's current layout as-is (desktop two-column layout, per Revision 1 point 5). If the intent is for either change to apply only to a specific breakpoint (desktop only, or mobile/tablet only), flag that for a follow-up revision — for now, apply both changes consistently across all breakpoints unless it visibly breaks the mobile/tablet layout from Revision 3, in which case scale proportionally to fit.

---

## 1. Increase the size of the logo and wordmark slightly

- Increase the size of the logo icon and the "INVICTA-TECH" wordmark a little further from their current size (they were already increased once in Revision 1 point 4).
- This should be a modest, incremental increase — not as large a jump as the previous resize — just enough to give them a bit more visual presence.
- Keep the same proportions and spacing relationship between the icon and the wordmark as they currently have; scale both together.

---

## 2. Shift the eyebrow, headline, subtext, and CTA button downward as a group, toward vertical center

- Currently, the group consisting of the eyebrow label ("SITE MAINTENANCE"), the headline ("STILL CARVING THIS SPACE"), the body/subtext paragraph, and the CTA button ("DOWNLOAD COMPANY PROFILE") sits vertically centered within its container per Revision 1, but should now be nudged **further down**, so it sits a little lower on the screen than it currently does — landing roughly around the vertical center of the overall screen rather than the vertical center of just its own right-half container.
- This is a **group move** — the relative spacing and alignment between the eyebrow, headline, subtext, and CTA stays exactly the same as it currently is; only the entire block's vertical position shifts down together.
- Make sure this doesn't cause the block to overflow the viewport or collide with the contact card below — adjust spacing/margins as needed to keep everything fitting cleanly within the single-viewport, no-scroll desktop layout (per Revision 1 point 2), and within the scrollable mobile/tablet layout (per Revision 3).

---

## Summary of Net Effect

- Logo and wordmark are modestly larger than their current size.
- The eyebrow/headline/subtext/CTA block moves down as a single unit, sitting closer to the true center of the screen rather than centered only within its half/section, without changing the internal spacing between those elements.
