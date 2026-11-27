# EZVaultz — sample website (groksites.com)

Static, mobile-first multi-page sample for **EZVaultz** (also written **EZ Vaultz**), a planned door-to-door storage service: rugged, weather-sealed, lockable vault crates delivered to the customer, locked by the customer, then stored in a low-key secure facility. First location planned for Kearny Mesa / central San Diego.

Plain HTML/CSS/JS. No build step. **Demo only** — every page is `noindex`. Content and pricing are placeholders.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, 4-step process, benefits, CTAs |
| `how-it-works.html` | What is EZ Vaultz — vault crates, door-to-door process, security model |
| `pricing.html` | Sample rates, what’s included, scheduling placeholder, Reserve a Vault Crate form |
| `service-area.html` | Kearny Mesa / central San Diego radius (TBD), ZIP check placeholder |
| `faq.html` | Accordion FAQ (`details`/`summary`) |
| `facility.html` | Nondescript facility, viewing room, address withheld |
| `404.html` | Not-found page (use as the host’s custom 404) |
| `styles.css` | Shared styles; theme colors are CSS variables in `:root` |
| `script.js` | Mobile menu, sample form, sample ZIP check |
| `favicon.svg` | Padlock-in-square mark |
| `images/` | Client-provided vault crate photos (optimized WebP) |

Preview locally:

```bash
python3 -m http.server 8961
```

Then open http://127.0.0.1:8961/

## How to edit

**Colors and typography.** Change the CSS variables at the top of `styles.css` (`--bg`, `--blue`, `--silver`, `--text`, `--muted`, and the silver heading gradient `--grad-silver`). The site uses Inter from Google Fonts, with a system-ui fallback.

**Copy.** Edit the HTML files directly. Header, nav, and footer are repeated on every page — if you change a nav label or the placeholder email, update all seven HTML files.

**Pricing.** On `pricing.html`, the visible figures are the `.amount` lines (`$XX`). Keep the “Sample pricing — exact rates are set per market.” note until real rates are set. Included-items marked `(TBD)` should be updated once initial delivery and pickup billing is decided.

**Reserve form.** `#reserve-form` is front-end only. In `script.js`, the submit handler prevents the default action and shows: “This is a sample form — scheduling will be connected before launch.” To wire it later, replace that handler with a form service, backend, or booking tool. Do not assume `mailto:` is wanted.

**Scheduling placeholder.** The dashed box on `pricing.html` (`#reserve`, `.sched-placeholder`) is where a Calendly-style embed should go. Replace the box with the embed (or a link-out) when the tool is chosen. There is no live scheduler on this sample.

**ZIP / coverage check.** `#zip-check` on `service-area.html` always shows a sample message. Replace it with a real radius or ZIP list when the service area is set.

**Vault crate photos and icons.** The Home hero uses the client-provided closed-trunk photo (`images/trunk-closed.webp`). The What is EZ Vaultz page uses the open-trunk photo (`images/trunk-open.webp`) beside the vault crate description. UI icons remain inline SVGs. These photos show the vault crate style under consideration; they do not claim a specific brand or published specification. Source originals are kept locally in `images/src/` and are not deployed.

## TBC — still to confirm

- [ ] Monthly storage rate and per-trip deploy fee, per market
- [ ] Whether initial empty vault crate delivery and locked vault crate pickup are included or billed as deploys
- [ ] Drive-time radius around Kearny Mesa / central San Diego
- [ ] Vault crate dimensions, capacity, materials, lock type, and any weather-seal rating
- [ ] Insurance / coverage options, and how they interact with a customer’s homeowner or renter policy
- [ ] Published prohibited-items list (typical examples are already sketched in the FAQ)
- [ ] Contact email, phone, and legal business name (hello@ezvaultz.com is a placeholder)
- [ ] Domain and production hosting
- [ ] Scheduling / ordering tool (Calendly or other)
- [ ] Customer agreement: closeout/cancel terms, minimum term, billing cycle, emergency/legal access exceptions
- [ ] Facility address (withheld by design until booking), viewing hours, monitoring details
- [x] Client-provided vault crate photos (closed and open trunk) — used on Home and What is EZ Vaultz
- [ ] Logo and any additional approved photography

## Deploy notes

This repo is static and can be published from the repo root (no output directory). A custom 404 should point at `404.html`. Cloudflare Pages deploy is handled separately from this sample build.
