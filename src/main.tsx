import React, { lazy, Suspense, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ArrowUpRight, Check, Crown, Menu, X } from 'lucide-react'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'
import '@fontsource/manrope/latin-ext-400.css'
import '@fontsource/manrope/latin-ext-500.css'
import '@fontsource/manrope/latin-ext-600.css'
import '@fontsource/manrope/latin-ext-700.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-500-italic.css'
import '@fontsource/cormorant-garamond/latin-ext-500.css'
import '@fontsource/cormorant-garamond/latin-ext-500-italic.css'
import { products, type Product } from './products'
import { faqItems } from './content/faq'
import { proof } from './content/proof'
import { siteAssets } from './content/siteAssets'
import './styles.css'

const HeroProductScene = lazy(() => import('./components/HeroProductScene'))

function Jar({ product, large = false }: { product: Product; large?: boolean }) {
  return <div className={`jar-scene ${large ? 'jar-scene-large' : ''} tone-${product.tone}`} aria-label={`Illustration du produit ${product.name}`} role="img">
    {product.image ? <img className="product-owner-image" src={product.image} alt="" /> : <>
      <span className="orbit orbit-one" /><span className="orbit orbit-two" />
      <div className={`jar ${product.form}`}>
        <div className="jar-cap"><span className="cap-line" /><span className="cap-crown"><Crown size={18} fill="currentColor" /></span></div>
        <div className="jar-neck" />
        <div className="jar-body">
          <div className="jar-label">
            <div className="label-rule"><span /> BELVEX <Crown size={13} fill="currentColor" /><span /></div>
            <div className="label-pills">BALANCE · ENERGY · LIFE · VITALITY · EXCELLENCE</div>
            <div className="label-premium">PREMIUM NUTRITION</div>
            <div className="label-product">{product.name}</div>
            <div className="label-pillar">{product.pillar}</div>
            <div className="label-figure">{product.figure}</div>
            <div className="label-measure">{product.figureLabel}</div>
            <div className="label-footer">COMPLÉMENT ALIMENTAIRE</div>
          </div>
          <div className="jar-glint" />
        </div>
        <div className="jar-base" />
      </div>
      <div className="jar-shadow" />
      {product.form === 'tub' && <div className="powder-scoop" aria-hidden="true" />}
    </>}
  </div>
}

function App() {
  const [selected, setSelected] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [heroSceneEnabled, setHeroSceneEnabled] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', type: 'Parapharmacie', city: '', phone: '' })
  const product = products[selected]

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroSceneEnabled(true), 250)
    return () => window.clearTimeout(timer)
  }, [])

  const choose = (index: number) => {
    setSelected((index + products.length) % products.length)
    setSubmitted(false)
    history.replaceState(null, '', `#${products[index].slug}`)
  }
  const openForm = () => { setFormOpen(true); setMenuOpen(false); setSubmitted(false); requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })) }
  const inquiry = `Bonjour BELVEX, je souhaite recevoir des informations professionnelles.\nNom : ${form.name}\nEntreprise : ${form.business}\nActivité : ${form.type}\nVille : ${form.city}\nTéléphone : ${form.phone}\nProduit d’intérêt : ${product.name} (${product.code})`
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') ?? ''
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiry)}`, '_blank', 'noopener,noreferrer')
      setSubmitted(true)
      return
    }
    setSubmitted(true)
  }
  const copyRequest = async () => {
    await navigator.clipboard.writeText(inquiry)
    setCopied(true)
  }
  const openProduct = (index: number) => { choose(index); setDetailOpen(true); requestAnimationFrame(() => document.getElementById('product-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })) }

  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <div className="announcement"><span>BIENVENUE CHEZ BELVEX</span><span className="announcement-separator">·</span><span>PREMIUM NUTRITION POUR VOTRE ÉQUILIBRE</span><ArrowRight size={13} /></div>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-mark header-brand" href="#top" aria-label="BELVEX, accueil"><img src="/brand/belvex-logo-on-blue.png" alt="BELVEX" /></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navigation principale">
          <a href="#collection" onClick={() => setMenuOpen(false)}>La collection</a>
          <a href="#maison" onClick={() => setMenuOpen(false)}>La maison</a>
          <a href="#professionnels" onClick={() => setMenuOpen(false)}>Professionnels</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <button className="nav-cta" onClick={openForm}>Nous contacter <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>L’excellence au service<br />de votre <em>équilibre.</em></h1>
            <p className="hero-subtitle">Cinq formules précises, conçues autour de cinq piliers pour accompagner vos besoins nutritionnels.</p>
            <div className="hero-actions">
              <button className="button button-gold" onClick={openForm}>Devenir partenaire <ArrowUpRight size={16} /></button>
              <a className="button button-outline" href="#collection">Découvrir la collection <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-jar">
              {siteAssets.heroProductImage ? <img className="hero-owner-image" src={siteAssets.heroProductImage} alt={siteAssets.heroProductImageAlt} /> : <>
                <div className="hero-jar-fallback" aria-hidden={heroSceneEnabled}><Jar product={products[0]} large /></div>
                {heroSceneEnabled && <Suspense fallback={null}><HeroProductScene /></Suspense>}
              </>}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Les repères BELVEX">
        <div><span className="trust-mark">✦</span><strong>Fabriqué au Maroc</strong></div>
        <div><span className="trust-mark">✦</span><strong>Dosages précis</strong></div>
        <div><span className="trust-mark">✦</span><strong>5 formules complémentaires</strong></div>
        <div><span className="trust-mark">✦</span><strong>5 piliers BELVEX</strong></div>
      </section>

      <section className="collection section" id="collection">
        <div className="section-heading">
          <div><div className="eyebrow">LA COLLECTION <span className="eyebrow-line" /></div><h2>Les essentiels<br />de <em>l’équilibre.</em></h2></div>
          <div className="collection-heading-side"><p>Cinq formules. Cinq piliers. Une collection conçue pour accompagner les besoins nutritionnels de chacun.</p><a href="#product-panel" onClick={() => setDetailOpen(true)}>EXPLORER LA GAMME <ArrowRight size={15} /></a></div>
        </div>
        <div className="collection-grid">
          {products.map((item, index) => <article className={`product-card ${selected === index ? 'product-card-selected' : ''}`} key={item.slug}>
            <span className="product-card-code">{item.code} <span>·</span> {item.pillar}</span>
            <h3>{item.name}</h3>
            <div className="product-card-art"><Jar product={item} /></div>
            <button className="product-card-action" onClick={() => openProduct(index)}>Découvrir <ArrowRight size={14} /></button>
            <span className="product-card-measure">{item.measure.split('·')[0].trim()}</span>
          </article>)}
        </div>
        {detailOpen && <div className="product-details" id="product-panel">
          <div className="details-copy"><div className="eyebrow eyebrow-dark">{product.code} · {product.pillar}</div><h3>{product.tagline}</h3><p className="details-intro">{product.intro}</p>{product.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{product.claims.length > 0 && <div className="claim-list"><span className="details-label">CONTRIBUTIONS</span>{product.claims.map(claim => <p key={claim}><span className="claim-mark">✳</span>{claim}</p>)}</div>}</div>
          <div className="composition-card"><div className="eyebrow eyebrow-dark">COMPOSITION</div><h4>Une formule précisément définie.</h4><div className="composition-rows">{product.composition.map(row => <div className="composition-row" key={row.ingredient}><span>{row.ingredient}</span><strong>{row.amount}</strong></div>)}</div><p className="composition-note">Les informations sont présentées selon le dossier de marque fourni.</p><button className="text-link" onClick={openForm}>Référencer ce produit <ArrowRight size={15} /></button></div>
        </div>}
      </section>

      <section className="precision-band">
        <div className="precision-head"><div className="eyebrow">L’EXIGENCE BELVEX</div><h2>La précision<br /><em>en chiffres.</em></h2></div>
        <div className="precision-items">
          {[products[0], products[3], products[4], products[1]].map((item, index) => <button className="precision-item" key={item.slug} onClick={() => openProduct(products.indexOf(item))}><span className="precision-number">{item.figure}</span><span className="precision-label">{['magnésium / capsule', 'vitamine D3 / capsule', 'withanolides / extrait', 'citrulline : malate'][index]}</span><span className="precision-arrow"><ArrowUpRight size={17} /></span></button>)}
        </div>
      </section>

      <section className="about section" id="maison">
        <div className="about-art"><div className="about-feature">{siteAssets.brandStoryImage ? <img className="about-owner-image" src={siteAssets.brandStoryImage} alt={siteAssets.brandStoryAlt} /> : <><div className="about-pair"><Jar product={products[0]} /><Jar product={products[3]} /></div><span className="asset-slot-note">VISUEL DE MARQUE À AJOUTER</span></>}</div><div className="about-thumbnails">{[products[1], products[2], products[4]].map(item => <div className="about-thumb" key={item.slug}><Jar product={item} /><span>{item.code}</span></div>)}</div></div>
        <div className="about-copy"><div className="eyebrow eyebrow-dark">À PROPOS DE BELVEX <span className="eyebrow-line" /></div><h2>Cinq formules.<br />Cinq piliers.<br /><em>Un équilibre.</em></h2><p>La collection BELVEX s’organise autour de cinq piliers : BALANCE, ENERGY, LIFE, VITALITY et EXCELLENCE. Chacun correspond à une formule distincte, de Magnesium Glycinate à Ashwagandha.</p><p>Explorez les ingrédients, les compositions et les informations disponibles pour chaque produit afin de trouver la formule qui correspond à vos besoins.</p><div className="brand-values"><span>BALANCE</span><span>ENERGY · LIFE</span><span>VITALITY · EXCELLENCE</span></div><a href="#collection" className="text-link">Explorer les cinq formules <ArrowRight size={16} /></a></div>
      </section>

      <section className="pillars">
        {['BALANCE', 'ENERGY', 'LIFE', 'VITALITY', 'EXCELLENCE'].map((pillar, index) => <button className={`pillar pillar-${index + 1}`} key={pillar} onClick={() => openProduct([0, 1, 3, 2, 4][index])}><span className="pillar-letter">{pillar[0]}</span><span className="pillar-name">{pillar}</span><span className="pillar-code">BX–0{[1, 2, 4, 3, 5][index]}</span></button>)}
      </section>

      <section className="proof-section" id="confiance">
        <div className="proof-heading"><div><div className="eyebrow eyebrow-dark">TRANSPARENCE & CONFIANCE <span className="eyebrow-line" /></div><h2>La confiance se construit<br /><em>avec des preuves.</em></h2></div><p>Les partenaires, retours d’expérience et documents qualité seront publiés ici après validation et accord de leurs propriétaires.</p></div>
        <div className="proof-grid">
          {proof.partners.map(partner => <article className="proof-card proof-partner" key={`${partner.name}-${partner.city}`}><div className="proof-mark">{partner.logo ? <img src={partner.logo} alt={`${partner.name} logo`} /> : partner.name.slice(0, 1)}</div><span className="proof-type">PARTENAIRE · {partner.category.replaceAll('-', ' ').toUpperCase()}</span><h3>{partner.name}</h3><p>{partner.city}</p></article>)}
          {proof.testimonials.map(item => <article className="proof-card proof-quote" key={`${item.person}-${item.organization}`}><span className="proof-type">TÉMOIGNAGE PROFESSIONNEL</span><blockquote>« {item.quote} »</blockquote><div className="proof-person">{item.portrait && <img src={item.portrait} alt="" />}<span><strong>{item.person}</strong><small>{item.role} · {item.organization}, {item.city}</small></span></div></article>)}
          {proof.qualityDocuments.map(item => <a className="proof-card proof-document" href={item.document} key={item.title} target="_blank" rel="noreferrer"><span className="proof-type">DOCUMENT QUALITÉ</span><h3>{item.title}</h3><p>{item.description}</p><span className="proof-document-link">Consulter le document <ArrowUpRight size={14} /></span></a>)}
          {proof.partners.length + proof.testimonials.length + proof.qualityDocuments.length === 0 && <>
            <article className="proof-slot"><span className="proof-slot-index">01</span><div><h3>Partenaires</h3><p>Logos et noms ajoutés avec l’accord des établissements.</p></div><span className="proof-slot-state">EMPLACEMENT PRÉVU</span></article>
            <article className="proof-slot"><span className="proof-slot-index">02</span><div><h3>Retours d’expérience</h3><p>Témoignages publiés avec validation et consentement.</p></div><span className="proof-slot-state">EMPLACEMENT PRÉVU</span></article>
            <article className="proof-slot"><span className="proof-slot-index">03</span><div><h3>Qualité & traçabilité</h3><p>Documents partageables ajoutés après validation par BELVEX.</p></div><span className="proof-slot-state">EMPLACEMENT PRÉVU</span></article>
          </>}
        </div>
      </section>

      <section className="professionals" id="professionnels">
        <div className="pro-inner"><div className="eyebrow">ESPACE PARTENAIRES <span className="eyebrow-line" /></div><h2>Construisons<br />un partenariat<br /><em>équilibré.</em></h2><p>BELVEX s’adresse aux professionnels qui souhaitent découvrir la gamme et échanger sur son référencement dans leur établissement.</p><div className="partner-segments"><article><span>01 / CONSEIL</span><h3>Pharmacies & parapharmacies</h3><p>Découvrez les cinq formules et leurs compositions.</p></article><article><span>02 / ACTIVITÉ</span><h3>Salles de sport</h3><p>Explorez la gamme orientée nutrition et activité.</p></article><article><span>03 / DISTRIBUTION</span><h3>Distributeurs</h3><p>Échangez avec BELVEX sur les produits de la collection.</p></article></div><div className="partner-process"><span><b>1</b> Présentez votre activité</span><span><b>2</b> Choisissez les produits d’intérêt</span><span><b>3</b> Échangez avec BELVEX</span></div><button className="button button-gold" onClick={openForm}>Parlons partenariat <ArrowRight size={17} /></button></div>
        <div className="pro-visual">{siteAssets.partnersImage ? <img className="partners-owner-image" src={siteAssets.partnersImage} alt={siteAssets.partnersImageAlt} /> : <><div className="pro-circle pro-circle-one" /><div className="pro-circle pro-circle-two" /><div className="pro-monogram">B<span>·</span>X</div><div className="pro-visual-caption">VISUEL PARTENAIRES À AJOUTER</div></>}</div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-intro"><div className="eyebrow eyebrow-dark">QUESTIONS FRÉQUENTES <span className="eyebrow-line" /></div><h2>Les réponses<br />à vos <em>questions.</em></h2><p>Les conditions commerciales et détails logistiques seront précisés par l’équipe BELVEX.</p><button className="text-link" onClick={openForm}>Poser une question <ArrowRight size={15} /></button></div>
        <div className="faq-list">{faqItems.map((item, index) => <details className="faq-item" key={item.question} open={index === 0}><summary><span className="faq-number">0{index + 1}</span><span>{item.question}</span><span className="faq-toggle">+</span></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className={`contact-section ${formOpen ? 'contact-open' : ''}`} id="contact">
        <div className="contact-top"><div><div className="eyebrow eyebrow-dark">PRENONS CONTACT <span className="eyebrow-line" /></div><h2>Votre prochain<br /><em>partenaire.</em></h2></div><p>Partagez quelques informations et notre équipe pourra revenir vers vous pour parler de la gamme.</p></div>
        {!formOpen ? <button className="button button-dark contact-reveal" onClick={() => setFormOpen(true)}>Commencer une demande <ArrowRight size={17} /></button> : <form className="partner-form" onSubmit={submit}>
          <label>Nom complet<input required autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" /></label>
          <label>Entreprise<input required autoComplete="organization" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} placeholder="Nom de votre établissement" /></label>
          <label>Type d’activité<select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option>Parapharmacie</option><option>Pharmacie</option><option>Salle de sport</option><option>Distributeur</option><option>Autre</option></select></label>
          <label>Ville<input required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Votre ville" /></label>
          <label className="form-wide">Téléphone<input required type="tel" autoComplete="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+212 …" /></label>
          <div className="form-product form-wide"><span>Produit d’intérêt</span><strong>{product.code} · {product.name}</strong><button type="button" className="text-link" onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}>Modifier <ArrowUpRight size={14} /></button></div>
          <button className="button button-dark form-wide" type="submit">Préparer ma demande <ArrowRight size={16} /></button>
          <p className="form-note form-wide">La demande sera préparée pour WhatsApp. Aucun envoi automatique ni stockage n’a lieu sur ce site.</p>
          {submitted && <div className="form-result form-wide"><Check size={18} /> {whatsappNumber ? 'Votre application WhatsApp devrait s’ouvrir avec votre message.' : 'Le numéro WhatsApp de BELVEX doit être configuré. Vous pouvez copier votre demande pour la conserver.'}{!whatsappNumber && <button className="text-link" type="button" onClick={copyRequest}>{copied ? 'Copié' : 'Copier la demande'}</button>}</div>}
        </form>}
      </section>
    </main>

    <footer className="footer">
      <div className="footer-top"><a className="brand-mark footer-brand" href="#top"><img src="/brand/belvex-logo-on-blue.png" alt="BELVEX" /></a><p>Votre équilibre.<br /><em>Votre vitalité. Votre excellence.</em></p><a className="footer-up" href="#top" aria-label="Retour en haut"><ArrowUpRight /></a></div>
      <div className="footer-bottom"><span>© BELVEX · PREMIUM NUTRITION</span><span>BALANCE · ENERGY · LIFE · VITALITY · EXCELLENCE</span><a href="#contact">CONTACT PROFESSIONNELS <ArrowUpRight size={13} /></a></div>
    </footer>
  </>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
