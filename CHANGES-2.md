# CHANGES: Invicta-Tech Site Maintenance Page — Revision 2

This document describes the next set of changes to be made to the existing implementation of the site maintenance page (on top of Revision 1). Apply these to the current build.

---

## 1. Split the contact card into four columns instead of three

- The contact/footer card currently has three equal-width columns (Head Office, Phone, Email/Website/Social). Change this to **four equal-width columns**, to accommodate two separate addresses (see point 2).
- New column order:
  1. Registered Address
  2. Communication Address
  3. Phone
  4. Email / Website / Social
- **Dividers between columns:**
  - Between column 3 (Phone) and column 4 (Email/Website/Social): keep the existing vertical divider style as-is (same as the current dividers).
  - Between column 1 (Registered Address) and column 2 (Communication Address): add a vertical divider too, but make it **thinner** than the standard dividers, and its top and bottom ends should **fade out** (transparent → visible → transparent), similar in spirit to the fading gold divider used between the hero's left/right halves.
  - Between column 2 (Communication Address) and column 3 (Phone): keep the existing standard divider style (same as between columns 3 and 4).

---

## 2. Rename "Head Office" to "Registered Address" and add a new "Communication Address" column

- Change the existing column heading from **"HEAD OFFICE"** to **"REGISTERED ADDRESS"**.
- The address currently shown under "Head Office" stays exactly as-is, now under the "REGISTERED ADDRESS" heading:
  > WeWork Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, R.R. Dist., Financial District, Hyderabad, Telangana - 500032
- Add a new second column titled **"COMMUNICATION ADDRESS"**, using the same icon + heading + detail-text pattern as the other columns (location-pin icon, aligned inline with the heading as per Revision 1), with the address:
  > HINDUSTAN BLUE FIELD APARTMENT bearing Municipal No. 9-4-116/39/B, Bal Reddy Nagar, Tolichowki, Golconda, Hyderabad, T.S. 500008.

---

## 3. Update social media links

Replace the current placeholder social links with the real profile URLs:

- **LinkedIn:** `https://www.linkedin.com/company/invicta-tech/`
- **Instagram:** `https://www.instagram.com/invictatech.official?igsh=ZHlrbXl6N2ljYWNl`
- **Facebook:** keep as the placeholder homepage link (`https://www.facebook.com`) for now, since no real profile URL has been provided yet — leave the existing TODO comment in place for this one.
- Both updated links should continue to open in a new tab, same as before.

---

## 4. Add a subtle hover animation to the "Download Company Profile" CTA button

- Add a small, minimalist hover effect to the CTA button — something understated that fits the rest of the page's clean, static feel (e.g., a slight background shade shift, a gentle scale-up, or a subtle shadow/lift on hover).
- Keep the transition quick and subtle (short duration, simple easing) — this should read as a small polish detail, not a flashy animation.
- Note: this is the **only** animation/interaction to be added to the page. All other elements remain fully static, per the original PRD.

---

## Summary of Net Effect

- Contact card now has four equal columns: Registered Address, Communication Address, Phone, Email/Website/Social.
- A thin, fading vertical divider separates the two address columns; standard dividers remain between the other columns.
- "Head Office" is renamed to "Registered Address"; a new "Communication Address" column is added with the new address.
- LinkedIn and Instagram now link to the real Invicta-Tech profiles; Facebook remains a placeholder.
- The CTA button gets a subtle, minimalist hover animation — the one intentional exception to the page's otherwise fully static design.
