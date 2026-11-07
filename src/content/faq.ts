export type FAQItem = { question: string; answer: string }

/** Answers limited to facts already confirmed in the BELVEX dossier. */
export const faqItems: FAQItem[] = [
  {
    question: 'À quels professionnels s’adresse BELVEX ?',
    answer: 'La gamme est présentée aux pharmacies, parapharmacies, salles de sport et distributeurs. Utilisez le formulaire pour préciser votre activité et votre ville.',
  },
  {
    question: 'Quels produits composent la collection ?',
    answer: 'La collection comprend Magnesium Glycinate, Citrulline Malate, Zinc Glycinate, Vitamin D3 + K2 et Ashwagandha.',
  },
  {
    question: 'Comment demander les conditions de partenariat ?',
    answer: 'Envoyez une demande en indiquant votre activité, votre ville et les produits qui vous intéressent. Les modalités commerciales doivent être confirmées directement par l’équipe BELVEX.',
  },
]
