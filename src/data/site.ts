// Business facts shared by both languages.
// Items marked TODO(owner) still need the owner's confirmation.
export const site = {
  name: 'Paysagiste Roche',
  legalName: 'Paysagiste Roche Inc.',
  url: 'https://www.paysagisteroche.com',
  phone: '514-769-6685',
  phoneHref: 'tel:+15147696685',
  // Listed on the company's Facebook page. TODO(owner): confirm it is still monitored.
  email: 'simon@paysagisteroche.com',
  street: '3520, rue St-Patrick',
  city: 'Montréal',
  region: 'QC',
  postal: 'H4E 1A2',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3520+rue+St-Patrick+Montr%C3%A9al+QC+H4E+1A2',
  facebook: 'https://www.facebook.com/people/Paysagiste-Roche-Inc/100066717889259/',
  // The old site's quote button pointed to https://roche.gestionminute.com, which only shows a staff
  // login page (checked 2026-11-16). Until the owner provides a public request link, quote buttons go
  // to the contact form instead. Put a public URL here to send them there again.
  quotePortal: '',
  rbq: '8350-1148-01',
  founded: 1987, // Founding year from the old site's history page; the site states this year, never a number of years.
  // Careers form: the same upload script the current site uses (multipart POST with the fields
  // language, Departements, Type_de_travail, EMAIL, message, filename). Same-host requirement as above.
  careersEndpoint: import.meta.env.PUBLIC_CAREERS_ENDPOINT ?? '/cgi-bin/sendmailWdoc.pl',
  cvMaxBytes: 5 * 1024 * 1024,
  // Contact form: the same mail script the current site uses. It is called with GET and the
  // fields EMAIL, message, name, entreprise, language (fr|en), so the site must be served from the
  // same host as /cgi-bin. Set PUBLIC_CONTACT_ENDPOINT='' to show the "not connected" notice instead.
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '/cgi-bin/simpleEmailSender.cgi',
  messageMin: 3,
  messageMax: 256,
};

export type Lang = 'fr' | 'en';

export const routes = {
  home: { fr: '/', en: '/en/' },
  services: { fr: '/services/', en: '/en/services/' },
  projects: { fr: '/realisations/', en: '/en/projects/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  careers: { fr: '/carrieres/', en: '/en/careers/' },
} as const;

export type RouteKey = keyof typeof routes;
