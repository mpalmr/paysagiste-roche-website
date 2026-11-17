import { routes, site, type Lang, type RouteKey } from '../data/site';

// Prefix a root-relative path with the deploy base (e.g. /paysagiste-roche-website on GitHub Pages).
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

export const href = (lang: Lang, key: RouteKey, hash = '') => withBase(routes[key][lang]) + (hash ? `#${hash}` : '');

export const other = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');

// Where "Request a quote" buttons go: the public portal if one is set, otherwise the contact form.
export const quoteHref = (lang: Lang) => site.quotePortal || href(lang, 'contact', 'ecrire');
export const quoteRel = site.quotePortal ? 'noopener' : undefined;

// Section anchors on the Services page, per language.
export const serviceAnchors = {
  fr: { design: 'conception', build: 'construction', care: 'entretien' },
  en: { design: 'design', build: 'construction', care: 'maintenance' },
} as const;
