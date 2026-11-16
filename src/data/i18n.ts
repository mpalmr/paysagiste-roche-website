import type { Lang } from './site';

const fr = {
  langName: 'Français',
  otherLangLabel: 'English',
  skip: 'Aller au contenu',
  nav: {
    home: 'Accueil',
    services: 'Services',
    projects: 'Réalisations',
    about: 'À propos',
    contact: 'Contact',
    careers: 'Carrières',
    menu: 'Menu',
    close: 'Fermer',
  },
  cta: {
    quote: 'Demander une soumission',
    quoteShort: 'Soumission',
    call: 'Appeler',
    seeProjects: 'Voir nos réalisations',
    allServices: 'Tous nos services',
    contactUs: 'Nous joindre',
  },
  footer: {
    tagline: 'Conception, construction et entretien paysager à Montréal depuis 1987.',
    hours: 'Heures d’ouverture',
    follow: 'Facebook',
    licence: 'Licence RBQ',
    rights: 'Tous droits réservés.',
    standards: 'Travaux conformes aux normes du Bureau de normalisation du Québec (BNQ).',
  },
  hours: [
    ['Lundi au vendredi', '8 h à 17 h'],
    ['Samedi', '8 h à 14 h'],
    ['Dimanche', 'Fermé'],
  ],
  meta: {
    home: {
      title: 'Paysagiste Roche | Aménagement paysager à Montréal depuis 1987',
      description:
        'Conception, construction et entretien paysager résidentiel et commercial à Montréal. Terrasses, pavé, cèdre, piscines, éclairage, déneigement. Licence RBQ 8350-1148-01.',
    },
    services: {
      title: 'Services | Paysagiste Roche',
      description:
        'Architecture de paysage, design architectural, construction, irrigation, éclairage, entretien, décors saisonniers et déneigement à Montréal.',
    },
    projects: {
      title: 'Réalisations | Paysagiste Roche',
      description: 'Piscines, terrasses, menuiserie de cèdre, éclairage et plans 3D réalisés par Paysagiste Roche.',
    },
    about: {
      title: 'À propos | Paysagiste Roche',
      description: 'Entreprise de paysagement montréalaise fondée en 1987 par Luigi Persechino et Frank Mazzarelli.',
    },
    contact: {
      title: 'Contact | Paysagiste Roche',
      description: '3520, rue St-Patrick, Montréal. 514-769-6685. Demandez une soumission ou posez-nous une question.',
    },
    careers: {
      title: 'Carrières | Paysagiste Roche',
      description: 'Joignez l’équipe de Paysagiste Roche : aménagement, entretien, horticulture, décors et déneigement.',
    },
  },
  home: {
    title: 'Un\u00a0aménagement paysager à\u00a0votre image.',
    lead:
      'De l’esquisse au dernier plant, notre équipe conçoit, construit et entretient des cours résidentielles et des terrains commerciaux partout à Montréal.',
    since: 'Depuis 1987 dans le Sud-Ouest de Montréal',
    heroAlt: 'Piscine creusée bordée de dalles de pierre, de graminées et d’échinacées roses',
    servicesTitle: 'Un seul entrepreneur, du plan à l’entretien',
    servicesLead:
      'Nous gérons votre projet de bout en bout, ce qui veut dire un seul interlocuteur et un échéancier clair.',
    featuredTitle: 'Quelques projets récents',
    featuredLead: 'Piscines, dalles de pierre, menuiserie de cèdre : un aperçu de ce que nous construisons.',
    trustTitle: 'Ce qui ne change pas',
    trustLead: 'Ce qui encadre chacun de nos chantiers, du plus petit au plus grand.',
    trust: [
      ['1987', 'Fondée à Montréal', 'Une entreprise qui appartient toujours à ses fondateurs.'],
      ['RBQ', 'Licence 8350-1148-01', 'Délivrée par la Régie du bâtiment du Québec.'],
      ['BNQ', 'Normes BNQ', 'Nos méthodes de construction respectent les normes du Bureau de normalisation du Québec.'],
      ['OTPQ', 'Plans approuvés', 'Nos plans d’architecture sont approuvés par un membre de l’Ordre des technologues professionnels.'],
    ],
    aboutTitle: 'Polyvalence, compétence et expérience',
    aboutText:
      'Luigi Persechino et Frank Mazzarelli ont fondé Paysagiste Roche en 1987. Ils ont bâti l’entreprise autour d’employés fidèles qui suivent chaque projet, du plus petit au plus ambitieux.',
    aboutLink: 'Notre histoire',
    ctaTitle: 'Parlons de votre cour.',
    ctaText: 'Une consultation pour évaluer votre terrain, vos goûts et votre budget. Nous sommes ouverts à l’année.',
  },
  services: {
    title: 'Nos services',
    lead:
      'Trois façons de travailler avec nous : concevoir votre projet, le construire, puis en prendre soin saison après saison. Prenez un volet, ou les trois.',
    groups: {
      design: {
        title: 'Design et conception',
        short: 'Plans, rendus 3D et estimation précise avant le premier coup de pelle.',
        intro:
          'Nos designers vous rencontrent pour comprendre vos besoins, puis dessinent un aménagement que vous pouvez voir avant qu’il existe. Un plan détaillé nous permet aussi d’établir les coûts avec précision et de planifier les travaux.',
        blocks: [
          {
            title: 'Architecture de paysage',
            items: [
              'Relevé du site',
              'Plans d’aménagement',
              'Croquis, perspectives et rendus 3D',
              'Planification budgétaire',
              'Design de jardins et aménagements écologiques',
              'Terrasses, piscines, spas et jardins d’eau',
              'Pergolas, clôtures, murs et écrans d’intimité',
              'Cuisines extérieures, mobilier et éclairage',
            ],
          },
          {
            title: 'Design architectural',
            items: [
              'Agrandissements et rénovations',
              'Bâtiments et structures accessoires',
              'Résidences et projets écologiques',
              'Plans préliminaires, plans et devis de construction',
              'Modélisation 3D et plans couleur',
              'Suivi auprès de la municipalité',
              'Surveillance des travaux et suivi après réalisation',
            ],
          },
        ],
        note:
          'Les plans d’architecture respectent les prescriptions de l’Ordre des architectes du Québec quant à la pratique des technologues, sont approuvés par un membre de l’Ordre des technologues professionnels du Québec et sont conçus selon le Code national du bâtiment en vigueur.',
      },
      build: {
        title: 'Construction',
        short: 'Pierre, pavé, cèdre, béton, plantation, irrigation et éclairage.',
        intro:
          'Nos équipes réalisent l’aménagement complet, clé en main : elles préparent le terrain, construisent et plantent, et installent l’arrosage et l’éclairage.',
        blocks: [
          {
            title: 'Aménagement',
            items: [
              'Menuiserie : terrasses, clôtures, pergolas, rangements',
              'Pierre naturelle',
              'Pavé et murets',
              'Travaux de béton',
              'Cabanons sur mesure',
              'Jardins d’eau et fontaines',
              'Plantation',
            ],
          },
          {
            title: 'Irrigation et éclairage',
            items: [
              'Conception et installation de systèmes d’irrigation automatisés',
              'Ouverture et fermeture saisonnières',
              'Entretien, mise à jour ou réparation',
              'Conception d’éclairage paysager',
              'Conseils sur la récupération de l’eau de pluie',
            ],
          },
        ],
      },
      care: {
        title: 'Entretien et saisons',
        short: 'Entretien paysager, décors saisonniers et déneigement.',
        intro:
          'Une fois le projet terminé, nos jardiniers peuvent continuer de s’en occuper. L’hiver, nous déneigeons et installons vos décors.',
        blocks: [
          {
            title: 'Entretien paysager',
            items: [
              'Entretien du gazon et fertilisation',
              'Nettoyage printanier et automnal',
              'Désherbage des plates-bandes',
              'Taille et élagage des végétaux',
              'Protection hivernale',
            ],
          },
          {
            title: 'Décors saisonniers',
            items: [
              'Installation de lumières de Noël',
              'Décors faits sur mesure, loués ou achetés',
              'Fleurs annuelles et arrangements en pots',
            ],
          },
          {
            title: 'Déneigement',
            items: [
              'Résidentiel : Île-des-Sœurs',
              'Commercial : Verdun et Montréal',
              'Déneigement à la main des patios, balcons et entrées',
            ],
          },
        ],
      },
    },
  },
  projects: {
    title: 'Réalisations',
    lead: 'Des cours terminées, des chantiers en cours et des plans qui deviendront des cours. Touchez une photo pour l’agrandir.',
    all: 'Tout',
    cats: {
      pool: 'Piscines et pierre',
      wood: 'Menuiserie de cèdre',
      light: 'Éclairage',
      design: 'Plans et rendus 3D',
      site: 'En chantier',
    },
    prev: 'Photo précédente',
    next: 'Photo suivante',
    close: 'Fermer',
    count: (n: number) => `${n} photo${n > 1 ? 's' : ''}`,
  },
  about: {
    title: 'Une entreprise de paysagistes, fondée en 1987',
    lead:
      'Paysagiste Roche repose sur trois valeurs : polyvalence, compétence et expérience. Elles nous guident depuis le premier contrat.',
    storyTitle: 'Notre histoire',
    story: [
      'Luigi Persechino et Frank Mazzarelli ont fondé Paysagiste Roche à Montréal en 1987. Ils en sont toujours les propriétaires.',
      'Au fil des années, ils se sont entourés d’employés professionnels et fidèles. Aujourd’hui, l’entreprise conçoit, construit et entretient des aménagements résidentiels, commerciaux et institutionnels, de la petite cour urbaine aux grands terrains.',
      'Peu importe la taille du projet, notre priorité reste la même : qu’il réponde aux attentes du client.',
    ],
    timelineTitle: 'Quelques dates',
    timeline: [
      ['1987', 'Fondation de Paysagiste Roche.'],
      ['1999', 'Ajout du service d’architecture de paysage.'],
      ['2004', 'Plusieurs prix pour nos travaux d’aménagement et de design de jardins.'],
      ['2010', 'Installation dans nos bureaux actuels, rue St-Patrick, dans le Sud-Ouest.'],
      ['2014', 'Ajout du service de design architectural.'],
    ],
    teamAlt: 'Camion de Paysagiste Roche sur un chantier résidentiel',
    signAlt: 'Affiche de Paysagiste Roche devant une maison en rénovation',
    sustainTitle: 'Développement durable',
    sustain: [
      ['Fournisseurs locaux', 'Nous privilégions les fournisseurs et les matériaux de la région.'],
      ['Nos employés', 'Conditions de travail axées sur la sécurité, le bien-être et la formation de la relève.'],
      ['L’environnement', 'Une bonne planification réduit les pertes de matériaux, et nous conseillons l’irrigation efficace et la récupération de l’eau de pluie.'],
    ],
    credTitle: 'Normes et affiliations',
    cred: [
      ['Régie du bâtiment du Québec', 'Licence 8350-1148-01'],
      ['Ordre des technologues professionnels du Québec', 'Membre depuis 2013'],
      ['Bureau de normalisation du Québec', 'Travaux conformes aux normes BNQ'],
    ],
  },
  contact: {
    title: 'Nous joindre',
    lead: 'Le plus rapide, c’est le téléphone. Vous pouvez aussi demander une soumission en ligne ou nous écrire.',
    phoneLabel: 'Téléphone',
    emailLabel: 'Courriel',
    addressLabel: 'Bureau',
    map: 'Voir sur la carte',
    quoteTitle: 'Demande de soumission ou de service',
    quoteText: 'Remplissez notre formulaire de soumission en ligne. Nous communiquerons avec vous pour fixer une consultation.',
    formTitle: 'Une question?',
    formTitleQuote: 'Demande de soumission ou question',
    formIntroQuote: 'Décrivez brièvement votre projet ou votre question. Nous vous répondrons pour fixer une consultation.',
    areasTitle: 'Secteurs desservis',
    areas: 'Montréal et environs pour l’aménagement et l’entretien. Déneigement résidentiel à l’Île-des-Sœurs, commercial à Verdun et à Montréal.',
    form: {
      name: 'Nom, prénom',
      company: 'Nom de l’entreprise (si applicable)',
      email: 'Courriel',
      message: 'Message',
      count: (n: number, max: number) => `${n} / ${max} caractères`,
      send: 'Envoyer',
      sent: 'Message envoyé. Nous vous répondrons dans les prochains jours ouvrables.',
      demo: 'Aperçu : ce formulaire n’est pas encore relié à une boîte courriel. Pour l’instant, appelez-nous au 514-769-6685.',
      error: 'Le message n’a pas pu être envoyé. Réessayez ou appelez-nous au 514-769-6685.',
      required: 'Ce champ est requis.',
      badEmail: 'Entrez votre adresse courriel pour que nous puissions vous répondre, par exemple nom@exemple.com.',
      tooShort: 'Écrivez un message d’au moins 3 caractères.',
    },
  },
  careers: {
    title: 'Carrières',
    lead:
      'Vous aimez le travail bien fait et le grand air? Envoyez-nous votre candidature. Nous embauchons sur appel, à temps partiel et à temps plein.',
    teamsLabel: 'Équipes qui vous intéressent',
    teams: [['Aménagement Paysager', 'Aménagement paysager'], ['EntretienPaysager', 'Entretien paysager'], ['Horti', 'Horticulture'], ['Decorateur', 'Décors saisonniers'], ['pelleteur', 'Déneigement']],
    typeLabel: 'Disponibilité',
    types: [['A', 'Sur appel'], ['P', 'Temps partiel'], ['C', 'Temps plein']],
    name: 'Nom',
    email: 'Courriel',
    phone: 'Téléphone',
    intro: 'Présentez-vous',
    introHint: 'Votre expérience, vos certifications, vos disponibilités.',
    cv: 'CV (PDF ou Word, 5 Mo max., facultatif)',
    cvTooBig: 'Ce fichier dépasse 5 Mo. Joignez une version plus légère, ou envoyez votre candidature sans CV.',
    cvBadType: 'Joignez un fichier PDF ou Word (.pdf, .doc ou .docx).',
    nameLabel: 'Nom',
    phoneLabel: 'Téléphone',
    send: 'Envoyer ma candidature',
    sent: 'Candidature envoyée. Merci! Nous communiquerons avec vous si votre profil correspond à nos besoins.',
  },
  notFound: {
    title: 'Cette page n’existe plus.',
    text: 'Notre site a été réorganisé. Vous trouverez tout dans le menu, ou revenez à l’accueil.',
  },
};

type Dict = typeof fr;

const en: Dict = {
  langName: 'English',
  otherLangLabel: 'Français',
  skip: 'Skip to content',
  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    careers: 'Careers',
    menu: 'Menu',
    close: 'Close',
  },
  cta: {
    quote: 'Request a quote',
    quoteShort: 'Quote',
    call: 'Call',
    seeProjects: 'See our projects',
    allServices: 'All services',
    contactUs: 'Contact us',
  },
  footer: {
    tagline: 'Landscape design, construction and maintenance in Montréal since 1987.',
    hours: 'Opening hours',
    follow: 'Facebook',
    licence: 'RBQ licence',
    rights: 'All rights reserved.',
    standards: 'Work meets the standards of the Bureau de normalisation du Québec (BNQ).',
  },
  hours: [
    ['Monday to Friday', '8 a.m. to 5 p.m.'],
    ['Saturday', '8 a.m. to 2 p.m.'],
    ['Sunday', 'Closed'],
  ],
  meta: {
    home: {
      title: 'Paysagiste Roche | Montréal landscaping since 1987',
      description:
        'Residential and commercial landscape design, construction and maintenance in Montréal. Patios, pavers, cedar, pools, lighting, snow removal. RBQ licence 8350-1148-01.',
    },
    services: {
      title: 'Services | Paysagiste Roche',
      description:
        'Landscape architecture, architectural design, construction, irrigation, lighting, maintenance, seasonal décor and snow removal in Montréal.',
    },
    projects: {
      title: 'Projects | Paysagiste Roche',
      description: 'Pools, stone patios, cedar woodwork, lighting and 3D plans by Paysagiste Roche.',
    },
    about: {
      title: 'About | Paysagiste Roche',
      description: 'A Montréal landscaping company founded in 1987 by Luigi Persechino and Frank Mazzarelli.',
    },
    contact: {
      title: 'Contact | Paysagiste Roche',
      description: '3520 St-Patrick Street, Montréal. 514-769-6685. Request a quote or ask us a question.',
    },
    careers: {
      title: 'Careers | Paysagiste Roche',
      description: 'Join the Paysagiste Roche team: landscaping, maintenance, horticulture, seasonal décor and snow removal.',
    },
  },
  home: {
    title: 'A landscape that looks like you.',
    lead:
      'From the first sketch to the last plant, our team designs, builds and maintains residential yards and commercial grounds across Montréal.',
    since: 'In Montréal’s South-West since 1987',
    heroAlt: 'In-ground pool edged with stone slabs, ornamental grasses and pink coneflowers',
    servicesTitle: 'One contractor, from plan to upkeep',
    servicesLead: 'We handle your project from start to finish, so you get one contact and a clear schedule.',
    featuredTitle: 'A few recent projects',
    featuredLead: 'Pools, stone slabs and cedar woodwork: a look at what we build.',
    trustTitle: 'What doesn’t change',
    trustLead: 'What backs every one of our projects, from the smallest to the largest.',
    trust: [
      ['1987', 'Founded in Montréal', 'A company still owned by its founders.'],
      ['RBQ', 'Licence 8350-1148-01', 'Issued by the Régie du bâtiment du Québec.'],
      ['BNQ', 'BNQ standards', 'Our construction methods follow the Bureau de normalisation du Québec standards.'],
      ['OTPQ', 'Approved plans', 'Our architectural plans are approved by a member of the Ordre des technologues professionnels.'],
    ],
    aboutTitle: 'Versatility, skill and experience',
    aboutText:
      'Luigi Persechino and Frank Mazzarelli founded Paysagiste Roche in 1987. They built the company around loyal staff who see every project through, from the smallest to the most ambitious.',
    aboutLink: 'Our story',
    ctaTitle: 'Let’s talk about your yard.',
    ctaText: 'A consultation to look at your property, your taste and your budget. We’re open year-round.',
  },
  services: {
    title: 'Our services',
    lead:
      'Three ways to work with us: design your project, build it, then look after it season after season. Choose one, or all three.',
    groups: {
      design: {
        title: 'Design',
        short: 'Plans, 3D renderings and an accurate estimate before any digging starts.',
        intro:
          'Our designers meet with you to understand what you need, then draw a landscape you can see before it exists. A detailed plan also lets us price the work accurately and schedule it properly.',
        blocks: [
          {
            title: 'Landscape architecture',
            items: [
              'Site survey',
              'Landscape plans',
              'Sketches, perspectives and 3D renderings',
              'Budget planning',
              'Garden design and ecological landscaping',
              'Patios, pools, spas and water gardens',
              'Pergolas, fences, walls and privacy screens',
              'Outdoor kitchens, furniture and lighting',
            ],
          },
          {
            title: 'Architectural design',
            items: [
              'Additions and renovations',
              'Accessory buildings and structures',
              'Homes and green building projects',
              'Preliminary plans, construction plans and specifications',
              '3D modelling and colour plans',
              'Permit follow-up with the city',
              'Site supervision and post-construction follow-up',
            ],
          },
        ],
        note:
          'Architectural plans follow the Ordre des architectes du Québec rules for technologists, are approved by a member of the Ordre des technologues professionnels du Québec, and are designed to the National Building Code in force.',
      },
      build: {
        title: 'Construction',
        short: 'Stone, pavers, cedar, concrete, planting, irrigation and lighting.',
        intro:
          'Our crews build the complete landscape, turnkey: they prepare the site, build and plant, and install the watering and lighting.',
        blocks: [
          {
            title: 'Landscaping',
            items: [
              'Woodwork: decks, fences, pergolas, storage',
              'Natural stone',
              'Pavers and retaining walls',
              'Concrete work',
              'Custom sheds',
              'Water gardens and fountains',
              'Planting',
            ],
          },
          {
            title: 'Irrigation and lighting',
            items: [
              'Design and installation of automated irrigation',
              'Seasonal start-up and shutdown',
              'Maintenance, upgrades and repairs',
              'Landscape lighting design',
              'Advice on rainwater harvesting',
            ],
          },
        ],
      },
      care: {
        title: 'Maintenance and seasons',
        short: 'Landscape maintenance, seasonal décor and snow removal.',
        intro:
          'Once your project is done, our gardeners can keep looking after it. In winter, we clear the snow and put up your décor.',
        blocks: [
          {
            title: 'Landscape maintenance',
            items: [
              'Lawn care and fertilizing',
              'Spring and fall clean-up',
              'Weeding of garden beds',
              'Pruning and trimming',
              'Winter protection',
            ],
          },
          {
            title: 'Seasonal décor',
            items: [
              'Christmas light installation',
              'Custom, rented or purchased décor',
              'Annual flowers and container plantings',
            ],
          },
          {
            title: 'Snow removal',
            items: [
              'Residential: Nuns’ Island',
              'Commercial: Verdun and Montréal',
              'Hand shovelling of patios, balconies and entrances',
            ],
          },
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    lead: 'Finished yards, work in progress, and plans on their way to becoming yards. Tap a photo to enlarge it.',
    all: 'All',
    cats: {
      pool: 'Pools and stone',
      wood: 'Cedar woodwork',
      light: 'Lighting',
      design: 'Plans and 3D',
      site: 'On site',
    },
    prev: 'Previous photo',
    next: 'Next photo',
    close: 'Close',
    count: (n: number) => `${n} photo${n > 1 ? 's' : ''}`,
  },
  about: {
    title: 'A landscaping company, founded in 1987',
    lead:
      'Paysagiste Roche is built on three values: versatility, skill and experience. They have guided us since our first contract.',
    storyTitle: 'Our story',
    story: [
      'Luigi Persechino and Frank Mazzarelli founded Paysagiste Roche in Montréal in 1987. They still own the company today.',
      'Over the years they surrounded themselves with skilled, loyal staff. Today the company designs, builds and maintains residential, commercial and institutional landscapes, from small city yards to large properties.',
      'Whatever the size of the project, our priority stays the same: making sure it meets the client’s expectations.',
    ],
    timelineTitle: 'Milestones',
    timeline: [
      ['1987', 'Paysagiste Roche is founded.'],
      ['1999', 'Landscape architecture service added.'],
      ['2004', 'Several awards for our landscaping and garden design work.'],
      ['2010', 'Move to our current offices on St-Patrick Street, in the South-West.'],
      ['2014', 'Architectural design service added.'],
    ],
    teamAlt: 'Paysagiste Roche truck at a residential job site',
    signAlt: 'Paysagiste Roche sign in front of a house under renovation',
    sustainTitle: 'Sustainability',
    sustain: [
      ['Local suppliers', 'We favour suppliers and materials from the region.'],
      ['Our people', 'Working conditions centred on safety, well-being and training the next generation.'],
      ['The environment', 'Careful planning cuts material waste, and we recommend efficient irrigation and rainwater harvesting.'],
    ],
    credTitle: 'Standards and affiliations',
    cred: [
      ['Régie du bâtiment du Québec', 'Licence 8350-1148-01'],
      ['Ordre des technologues professionnels du Québec', 'Member since 2013'],
      ['Bureau de normalisation du Québec', 'Work meets BNQ standards'],
    ],
  },
  contact: {
    title: 'Contact us',
    lead: 'Calling is the fastest way to reach us. You can also request a quote online or send us a message.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Office',
    map: 'View on map',
    quoteTitle: 'Quote or service request',
    quoteText: 'Fill in our online quote form. We’ll contact you to book a consultation.',
    formTitle: 'Have a question?',
    formTitleQuote: 'Quote request or question',
    formIntroQuote: 'Briefly describe your project or question. We’ll get back to you to book a consultation.',
    areasTitle: 'Service areas',
    areas: 'Montréal and surrounding areas for landscaping and maintenance. Residential snow removal on Nuns’ Island, commercial in Verdun and Montréal.',
    form: {
      name: 'First and last name',
      company: 'Company name (if applicable)',
      email: 'Email',
      message: 'Message',
      count: (n: number, max: number) => `${n} / ${max} characters`,
      send: 'Send',
      sent: 'Message sent. We’ll get back to you within a few business days.',
      demo: 'Preview: this form isn’t connected to an inbox yet. For now, call us at 514-769-6685.',
      error: 'The message couldn’t be sent. Try again or call us at 514-769-6685.',
      required: 'This field is required.',
      badEmail: 'Enter your email address so we can reply, like name@example.com.',
      tooShort: 'Write a message of at least 3 characters.',
    },
  },
  careers: {
    title: 'Careers',
    lead:
      'Like doing things right and working outdoors? Send us your application. We hire on-call, part-time and full-time.',
    teamsLabel: 'Teams you’re interested in',
    teams: [['Aménagement Paysager', 'Landscaping'], ['EntretienPaysager', 'Landscape maintenance'], ['Horti', 'Horticulture'], ['Decorateur', 'Seasonal décor'], ['pelleteur', 'Snow removal']],
    typeLabel: 'Availability',
    types: [['A', 'On call'], ['P', 'Part-time'], ['C', 'Full-time']],
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    intro: 'Tell us about yourself',
    introHint: 'Your experience, certifications and availability.',
    cv: 'Résumé (PDF or Word, 5 MB max, optional)',
    cvTooBig: 'This file is over 5 MB. Attach a smaller version, or send your application without a résumé.',
    cvBadType: 'Attach a PDF or Word file (.pdf, .doc or .docx).',
    nameLabel: 'Name',
    phoneLabel: 'Phone',
    send: 'Send my application',
    sent: 'Application sent. Thank you! We’ll be in touch if your profile matches our needs.',
  },
  notFound: {
    title: 'This page no longer exists.',
    text: 'Our site has been reorganized. Everything is in the menu, or head back home.',
  },
};

export const t = (lang: Lang) => (lang === 'en' ? en : fr);
export type { Dict };
