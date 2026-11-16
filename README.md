# Paysagiste Roche: new website

A static, bilingual (FR/EN), mobile-first rebuild of paysagisteroche.com, made with [Astro](https://astro.build).

The old site's ~14 menu pages are consolidated into 5, plus Careers:

| FR | EN | Replaces |
|---|---|---|
| `/` | `/en/` | Accueil |
| `/services/` | `/en/services/` | AP, GP, RAP, SI, DDE pages |
| `/realisations/` | `/en/projects/` | Réalisations (broken), Prix et mérites (broken) |
| `/a-propos/` | `/en/about/` | Philosophie, Historique, Développement durable, Partenaires |
| `/contact/` | `/en/contact/` | Contact |
| `/carrieres/` | `/en/careers/` | Carrières (footer link only) |

Old URLs are redirected by `public/.htaccess` (Apache, the current host) and `public/_redirects` (Netlify / Cloudflare Pages). The admin page is no longer linked anywhere.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check
```

Deploy `dist/` to any static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages, or the current cPanel host via FTP).

## Where things live

- `src/data/site.ts`: phone, address, RBQ licence, quote-portal URL, form endpoint
- `src/data/i18n.ts`: **all copy, French and English**, in one file
- `src/data/gallery.ts`: project photos, categories and captions
- `src/views/*.astro`: page layouts (each one renders both languages)
- `src/styles/global.css`: design tokens (colours, type scale, buttons, forms)
- `public/images/`: optimized WebP photos and the logo

## Forms and quote requests

Both forms mirror the current site's mail scripts, so **the new site must be deployed to the current cPanel host**. That's where `/cgi-bin` lives. `public/.htaccess` handles the old-URL redirects and the 404 page there.

| Form | Sends to | Fields |
|---|---|---|
| Contact (`/contact/#ecrire`) | `GET /cgi-bin/simpleEmailSender.cgi` | `name`, `entreprise`, `EMAIL`, `message` (3–256 chars), `language` |
| Careers | `POST /cgi-bin/sendmailWdoc.pl` (multipart) | `language`, `Departements` (comma-separated codes), `Type_de_travail` (`A`/`P`/`C`), `EMAIL`, `message`, `filename` (CV, PDF/Word ≤ 5 MB) |

The careers form also asks for a name and phone number. These are added to the top of `message` ("Nom: …", "Téléphone: …"), so the old script only receives field names it already knows.

Override the endpoints at build time with `PUBLIC_CONTACT_ENDPOINT` / `PUBLIC_CAREERS_ENDPOINT`. Set either one to an empty string and that form only validates, then tells the visitor to call (the hosted preview uses this).

Requests time out after 20 s (60 s for uploads). The button is disabled while a request is sending, and what the visitor typed is kept if sending fails.

**Quote buttons:** the old site's "Demander une soumission" link (`roche.gestionminute.com`) only shows a staff login page, so customers can't use it. Every quote button now goes to the contact form instead. Set `site.quotePortal` in `src/data/site.ts` to a public request URL, and the buttons and the Contact page's quote panel switch back to it.

## Scripts

Astro emits component `<script>` tags as `type="module"`. Module scripts are deferred: they run after the HTML is parsed, just before `DOMContentLoaded`. So none of the scripts needs a `DOMContentLoaded` wrapper. The gallery passes its photo data through a `<script type="application/json">` block instead of an inline script, so it works wherever it sits in the page.

## Design

- Founding year: **1987** (from the old site's history page). The site states the year, never a count of years, so it doesn't go out of date.

- Palette: hedge green `#183a2c`, limestone `#edefea`, slate `#1f2522`, sage `#cfd8ca`. The logo's sun-orange `#f88000` is used only for actions (quote, call).
- Type: Archivo (self-hosted variable font). Headings use its expanded width, body text the normal width.
- The logo's half-sun arch frames the hero photo. Small half-sun markers repeat on list bullets, step numbers and the timeline.
- On phones, a fixed bottom bar keeps **Call** and **Quote** one tap away.

## Before launch: confirm with the owner

1. **APPQ membership.** The old About page mentions "changes to our membership" in 2024, so the APPQ is mentioned only as history, not as a current badge.
2. **Email.** `simon@paysagisteroche.com` comes from the Facebook page (posts date from 2015–2017). Is it still monitored?
3. **Quote portal.** `roche.gestionminute.com` is a staff login, not a public form. Quote buttons now go to the contact form. Is there a public request link?
4. **Photos.** All images are web-resolution copies from the old site and Facebook (504–960 px). Originals or new photos, especially maintenance, snow removal and seasonal décor, would make the biggest visual difference.
5. **Reviews.** The Facebook page has no reviews, so the site has no testimonials. A Google Business Profile with real reviews would be worth adding later.
6. **Awards (2004).** Names of the prizes, if they want them listed.
