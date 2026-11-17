import { withBase } from '../lib/paths';

export type Cat = 'pool' | 'wood' | 'light' | 'design' | 'site';

export interface Photo {
  src: string;
  w: number;
  h: number;
  cat: Cat;
  fr: string;
  en: string;
}

const p = (src: string, w: number, h: number, cat: Cat, fr: string, en: string): Photo => ({
  src: withBase(`/images/${src}.webp`), w, h, cat, fr, en,
});

// Captions describe only what is visible in each photo.
export const photos: Photo[] = [
  p('piscine-vivaces', 960, 682, 'pool', 'Piscine bordée de dalles, de graminées et d’échinacées', 'Pool edged with slabs, grasses and coneflowers'),
  p('allee-piscine', 588, 442, 'pool', 'Pas japonais et plates-bandes le long de la piscine', 'Stepping stones and garden beds along the pool'),
  p('escalier-piscine', 588, 442, 'pool', 'Escalier en bois et grandes dalles de pierre', 'Wood stairs and large stone slabs'),
  p('terrasse-dalles', 588, 442, 'pool', 'Terrasse en dalles de pierre près de la piscine', 'Stone slab patio by the pool'),
  p('spa-pas-japonais', 588, 442, 'pool', 'Spa et dalles posées sur gravier', 'Hot tub and slabs set in gravel'),
  p('cour-pave-cloture', 588, 440, 'wood', 'Cour en pavé et clôture de cèdre', 'Paver yard and cedar fence'),
  p('cloture-cedre', 588, 440, 'wood', 'Écran de cèdre à planches horizontales', 'Horizontal-board cedar screen'),
  p('porte-coulissante', 588, 440, 'wood', 'Porte coulissante en cèdre', 'Sliding cedar gate'),
  p('terrasse-cedre', 588, 440, 'wood', 'Terrasse et banc-jardinière en cèdre', 'Cedar deck and planter bench'),
  p('ecran-cedre', 588, 440, 'wood', 'Écran d’intimité en cèdre ajouré', 'Slatted cedar privacy screen'),
  p('porte-pergola', 588, 440, 'wood', 'Porte et pergola sur terrasse', 'Gate and pergola on a deck'),
  p('rangement-bois', 588, 440, 'wood', 'Rangement intégré sous la terrasse', 'Built-in storage under the deck'),
  p('eclairage-6', 504, 504, 'light', 'Jardin d’eau éclairé', 'Lit water garden'),
  p('eclairage-1', 504, 504, 'light', 'Végétaux éclairés en soirée', 'Plantings lit at night'),
  p('eclairage-2', 504, 504, 'light', 'Éclairage de plates-bandes en soirée', 'Garden bed lighting at dusk'),
  p('eclairage-5', 504, 504, 'light', 'Arbuste et éclairage d’ambiance', 'Shrub with accent lighting'),
  p('eclairage-3', 504, 504, 'light', 'Borne lumineuse dans un massif', 'Bollard light in a planting bed'),
  p('eclairage-4', 504, 504, 'light', 'Lumière encastrée dans une terrasse', 'Recessed light in a deck'),
  p('rendu-maison-1', 398, 152, 'design', 'Rendu 3D d’une résidence et de son aménagement', '3D rendering of a home and its landscape'),
  p('rendu-maison-3', 398, 160, 'design', 'Rendu 3D d’une maison contemporaine avec piscine', '3D rendering of a contemporary home with pool'),
  p('rendu-maison-2', 398, 158, 'design', 'Rendu 3D d’un agrandissement', '3D rendering of an addition'),
  p('plans-techniques', 493, 701, 'design', 'Plans de construction et liste de plantation', 'Construction drawings and planting schedule'),
  p('rendu-jardin-1', 200, 179, 'design', 'Rendu 3D d’une cour avec piscine', '3D rendering of a yard with pool'),
  p('rendu-jardin-2', 200, 183, 'design', 'Rendu 3D d’une terrasse et d’un mur d’eau', '3D rendering of a patio and water wall'),
  p('plan-jardin', 200, 178, 'design', 'Plan d’aménagement vu du dessus', 'Landscape plan, top view'),
  p('chantier-4', 504, 504, 'site', 'Rénovation de façade en cours', 'Front façade renovation under way'),
  p('chantier-3', 504, 504, 'site', 'Construction d’une pergola et d’une terrasse', 'Building a pergola and deck'),
  p('chantier-6', 504, 504, 'site', 'Excavation avec mini-pelle', 'Excavation with a mini excavator'),
  p('chantier-7', 504, 504, 'site', 'Construction d’un muret', 'Building a low wall'),
  p('chantier-9', 504, 504, 'site', 'Structure de terrasse autour d’une piscine hors terre', 'Deck framing around an above-ground pool'),
  p('chantier-1', 504, 504, 'site', 'Charpente d’une terrasse', 'Deck framing'),
  p('chantier-5', 504, 504, 'site', 'Découpe des matériaux sur le chantier', 'Cutting materials on site'),
  p('chantier-8', 504, 504, 'site', 'Travaux de menuiserie', 'Carpentry work'),
];
