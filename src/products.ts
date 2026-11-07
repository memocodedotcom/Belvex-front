export type Product = {
  code: string
  pillar: string
  slug: string
  name: string
  tagline: string
  measure: string
  figure: string
  figureLabel: string
  form: 'jar' | 'tub'
  tone: 'blue' | 'gold' | 'silver' | 'teal' | 'violet'
  intro: string
  description: string[]
  claims: string[]
  composition: { ingredient: string; amount: string }[]
  image?: string
  imageAlt?: string
  signature: string
}

export const products: Product[] = [
  {
    code: 'BX–01', pillar: 'BALANCE', slug: 'magnesium-glycinate', name: 'Magnesium Glycinate',
    tagline: 'Retrouvez votre équilibre, naturellement.', measure: '133 mg par capsule · 90 capsules',
    figure: '133 mg', figureLabel: 'de magnésium par capsule', form: 'jar', tone: 'blue',
    intro: 'Dans un quotidien où les exigences physiques et mentales se multiplient, votre organisme mérite une attention particulière.',
    description: ['BELVEX Magnesium Glycinate apporte du magnésium sous forme de glycinate, pour accompagner votre équilibre nutritionnel au quotidien.', 'Une formule pensée pour celles et ceux qui recherchent équilibre, vitalité et bien-être.'],
    claims: ['Le magnésium contribue au fonctionnement normal du système nerveux et des muscles, à la réduction de la fatigue et à l’équilibre électrolytique.'],
    composition: [{ ingredient: 'Magnésium (bisglycinate)', amount: '133 mg / capsule' }],
    signature: 'BELVEX — L’équilibre est votre force.',
  },
  {
    code: 'BX–02', pillar: 'ENERGY', slug: 'citrulline-malate', name: 'Citrulline Malate',
    tagline: 'Chaque effort mérite une préparation d’excellence.', measure: '250 g · 2 g de citrulline + 1 g de malate par portion de 3 g',
    figure: '2:1', figureLabel: '2 g de citrulline + 1 g de malate', form: 'tub', tone: 'gold',
    intro: 'Que votre passion soit la musculation, le fitness, la course à pied ou toute autre activité physique, la préparation fait partie de votre progression.',
    description: ['BELVEX Citrulline Malate associe la L-citrulline et le malate dans une formule destinée aux personnes actives et aux passionnés de sport.', 'La citrulline est un acide aminé impliqué dans le métabolisme de l’arginine et de l’oxyde nitrique, un mécanisme étudié dans le contexte de l’exercice physique.', 'Une formule pour compléter votre routine de nutrition sportive et accompagner votre engagement à l’entraînement.'],
    claims: [], composition: [{ ingredient: 'L-citrulline', amount: '2 g / portion' }, { ingredient: 'Malate', amount: '1 g / portion' }], signature: 'BELVEX — Préparez l’effort. Visez l’excellence.',
  },
  {
    code: 'BX–03', pillar: 'VITALITY', slug: 'zinc-glycinate', name: 'Zinc Glycinate',
    tagline: 'La vitalité intérieure se reflète à l’extérieur.', measure: '30 mg par portion · 60 capsules',
    figure: '30 mg', figureLabel: 'de zinc par portion', form: 'jar', tone: 'teal',
    intro: 'Votre bien-être commence de l’intérieur et se reflète dans votre vitalité au quotidien.',
    description: ['BELVEX Zinc Glycinate apporte du zinc sous forme de glycinate, un minéral essentiel qui joue un rôle important dans de nombreuses fonctions de l’organisme.', 'Conçue pour les femmes comme pour les hommes, cette formule contribue à accompagner votre équilibre nutritionnel, prendre soin de votre beauté et soutenir votre vitalité, à chaque étape de votre quotidien.'],
    claims: ['Beauté naturelle : maintenir une peau, des cheveux et des ongles normaux.', 'Défenses naturelles : soutenir le fonctionnement normal du système immunitaire.', 'Équilibre hormonal masculin : maintenir un taux normal de testostérone dans le sang.', 'Fertilité : contribuer à une fertilité et une reproduction normales.', 'Protection cellulaire : protéger les cellules contre le stress oxydatif.', 'Vitalité : participer à un métabolisme énergétique normal.'],
    composition: [{ ingredient: 'Zinc (bisglycinate)', amount: '30 mg / portion' }],
    signature: 'BELVEX — La force de votre équilibre. L’éclat de votre vitalité.',
  },
  {
    code: 'BX–04', pillar: 'LIFE', slug: 'vitamin-d3-k2', name: 'Vitamin D3 + K2',
    tagline: 'La force de l’équilibre, au cœur de votre quotidien.', measure: 'D3 : 2 000 UI (50 µg) · K2 : 50 µg · 90 capsules',
    figure: '2 000 UI', figureLabel: 'de vitamine D3 par capsule', form: 'jar', tone: 'silver',
    intro: 'Prenez soin de votre organisme avec une association de deux vitamines essentielles.',
    description: ['BELVEX Vitamin D3 + K2 réunit la vitamine D3 et la vitamine K2 dans une formule complémentaire pensée pour accompagner votre équilibre nutritionnel.', 'Une alliance de vitamines essentielles pour accompagner votre bien-être au quotidien.'],
    claims: ['La vitamine D contribue à l’absorption et à l’utilisation normales du calcium et du phosphore, au maintien d’une fonction musculaire normale et au fonctionnement normal du système immunitaire.', 'La vitamine K contribue au maintien d’une ossature normale.'],
    composition: [{ ingredient: 'Vitamine D3', amount: '2 000 UI (50 µg) / capsule' }, { ingredient: 'Vitamine K2', amount: '50 µg / capsule' }],
    signature: 'BELVEX — Les essentiels de votre vitalité.',
  },
  {
    code: 'BX–05', pillar: 'EXCELLENCE', slug: 'ashwagandha', name: 'Ashwagandha',
    tagline: 'L’inspiration de la nature, l’exigence de BELVEX.', measure: '250 mg d’extrait par capsule · standardisé à 5 % · 90 capsules',
    figure: '5 %', figureLabel: 'extrait standardisé en withanolides', form: 'jar', tone: 'violet',
    intro: 'Depuis des siècles, l’ashwagandha (Withania somnifera) occupe une place importante dans les traditions botaniques indiennes.',
    description: ['BELVEX Ashwagandha met à l’honneur cet ingrédient d’origine végétale à travers un extrait standardisé à 5 %, pour une composition précisément définie.', 'Une formule conçue pour les adultes qui souhaitent intégrer un complément botanique à leur routine de bien-être.', 'Découvrez une approche de la nutrition qui associe héritage botanique, précision et exigence de qualité.'],
    claims: [], composition: [{ ingredient: 'Extrait d’ashwagandha (Withania somnifera)', amount: '250 mg / capsule' }, { ingredient: 'Withanolides', amount: '12,5 mg (5 %) / capsule' }], signature: 'BELVEX — L’excellence inspirée par la nature.',
  },
]
