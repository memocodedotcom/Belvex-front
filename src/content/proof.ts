/** Add only real, owner-approved items. Testimonials require explicit consent. */
export type PartnerProof = {
  name: string
  city: string
  category: 'pharmacie' | 'parapharmacie' | 'salle-de-sport' | 'distributeur'
  logo?: string
}

export type TestimonialProof = {
  quote: string
  person: string
  role: string
  organization: string
  city: string
  portrait?: string
  consentConfirmed: true
}

export type QualityProof = {
  title: string
  description: string
  document: string
}

export const proof = {
  partners: [] as PartnerProof[],
  testimonials: [] as TestimonialProof[],
  qualityDocuments: [] as QualityProof[],
}
