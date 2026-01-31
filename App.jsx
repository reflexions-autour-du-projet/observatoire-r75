import React, { useState, useEffect } from 'react';
import { 
  Home, Calendar, Network, Map, Twitter, Scale, FileText, Sun, Moon, 
  ChevronLeft, Plus, Minus, Copy, Check, AlertTriangle,
  Tv, Radio, Newspaper, Building2, Users, TrendingUp,
  Filter, Landmark, Gavel, Info, Quote, BookOpen, Lightbulb,
  Shield, GraduationCap, Eye, EyeOff, Zap, DollarSign, Globe,
  Ship, Plane, Smartphone, Factory, Briefcase, Crown,
  CircleDot, MapPin, AlertCircle, CheckCircle, Clock, Hash,
  MessageSquare, Hexagon
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// OBSERVATOIRE CITOYEN — R75
// Version 2.0 — Flamengo Font + Lucide Icons
// ═══════════════════════════════════════════════════════════════════════════════

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('r75-observatory-darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('r75-observatory-fontSize');
    return saved ? parseInt(saved) : 16;
  });
  const [activeModule, setActiveModule] = useState('home');
  const [selectedEntity, setSelectedEntity] = useState(null);

  useEffect(() => {
    localStorage.setItem('r75-observatory-darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('r75-observatory-fontSize', fontSize.toString());
  }, [fontSize]);

  const colors = {
    bg: darkMode ? '#111111' : '#EEC21D',
    primary: darkMode ? '#EEC21D' : '#111111',
    cardBg: darkMode ? '#1a1a1a' : '#f5d63d',
    cardBorder: darkMode ? '#333333' : '#cca000',
    danger: '#a74040',
    bonus: '#50769a',
    muted: darkMode ? '#888888' : '#555555',
  };

  const titleFont = "'Flamengo', 'Georgia', serif";
  const textFont = "'Avenir', 'Segoe UI', sans-serif";

  const fs = {
    xs: fontSize - 4,
    sm: fontSize - 2,
    base: fontSize,
    lg: fontSize + 2,
    xl: fontSize + 6,
    xxl: fontSize + 12,
    xxxl: fontSize + 20,
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // DONNÉES — OLIGARQUES
  // ═══════════════════════════════════════════════════════════════════════════
  const oligarques = [
    {
      id: 'bollore', nom: 'Vincent Bolloré', groupe: 'Groupe Bolloré / Vivendi',
      fortune: '10 milliards €', icon: Crown,
      secteurs: ['Transport', 'Logistique', 'Médias', 'Publicité'],
      medias: [
        { nom: 'Canal+', type: 'TV', acquisition: 2015 },
        { nom: 'C8', type: 'TV', acquisition: 2016 },
        { nom: 'CNews', type: 'TV', acquisition: 2017 },
        { nom: 'CStar', type: 'TV', acquisition: 2016 },
        { nom: 'Europe 1', type: 'Radio', acquisition: 2021 },
        { nom: 'JDD', type: 'Presse', acquisition: 2023 },
        { nom: 'Paris Match', type: 'Presse', acquisition: 2023 },
        { nom: 'Prisma Media', type: 'Presse', acquisition: 2021 },
        { nom: 'Havas', type: 'Publicité', acquisition: 2017 },
      ],
      conflits: [
        'CNews: mise en demeure ARCOM pour manquement au pluralisme (2022, 2023, 2024)',
        'Licenciement de journalistes critiques (iTélé 2016, Europe 1 2021)',
        'Soutien éditorial affiché à Éric Zemmour puis au RN',
        'Contrats publicitaires Havas avec État français',
      ],
    },
    {
      id: 'arnault', nom: 'Bernard Arnault', groupe: 'LVMH',
      fortune: '230 milliards €', icon: Briefcase,
      secteurs: ['Luxe', 'Mode', 'Vins & Spiritueux', 'Médias'],
      medias: [
        { nom: 'Les Échos', type: 'Presse', acquisition: 2007 },
        { nom: 'Le Parisien', type: 'Presse', acquisition: 2015 },
        { nom: 'Radio Classique', type: 'Radio', acquisition: 2007 },
      ],
      conflits: [
        'Les Échos: ligne éditoriale favorable au monde des affaires',
        'Le Parisien: couverture favorable aux JO 2024 (LVMH sponsor majeur)',
        'Procès contre Mediapart et autres médias critiques',
      ],
    },
    {
      id: 'niel', nom: 'Xavier Niel', groupe: 'Iliad/Free',
      fortune: '9 milliards €', icon: Smartphone,
      secteurs: ['Télécoms', 'Tech', 'Médias', 'Immobilier'],
      medias: [
        { nom: 'Le Monde (actionnaire)', type: 'Presse', acquisition: 2010 },
        { nom: "L'Obs", type: 'Presse', acquisition: 2014 },
        { nom: 'Télérama', type: 'Presse', acquisition: 2014 },
        { nom: 'Courrier International', type: 'Presse', acquisition: 2014 },
      ],
      conflits: [
        'Concentration via le Groupe Le Monde',
        'Conflits sur la gouvernance du Monde avec la Société des Rédacteurs',
        'Station F: liens avec startups et couverture médiatique',
      ],
    },
    {
      id: 'drahi', nom: 'Patrick Drahi', groupe: 'Altice',
      fortune: '5 milliards €', icon: Zap,
      secteurs: ['Télécoms', 'Câble', 'Médias'],
      medias: [
        { nom: 'BFM TV', type: 'TV', acquisition: 2015 },
        { nom: 'RMC', type: 'Radio', acquisition: 2015 },
        { nom: 'RMC Sport', type: 'TV', acquisition: 2015 },
        { nom: 'BFM Business', type: 'TV', acquisition: 2015 },
      ],
      conflits: [
        'BFM TV: critiques sur la couverture des mouvements sociaux',
        "Endettement massif d'Altice: pression économique sur les rédactions",
        'Résidence fiscale en Suisse',
      ],
    },
    {
      id: 'dassault', nom: 'Famille Dassault', groupe: 'Groupe Dassault',
      fortune: '25 milliards €', icon: Plane,
      secteurs: ['Aéronautique', 'Défense', 'Médias'],
      medias: [
        { nom: 'Le Figaro', type: 'Presse', acquisition: 2004 },
        { nom: 'Le Figaro Magazine', type: 'Presse', acquisition: 2004 },
        { nom: 'Madame Figaro', type: 'Presse', acquisition: 2004 },
      ],
      conflits: [
        'Le Figaro: ligne éditoriale conservatrice assumée',
        'Conflits d\'intérêts: contrats militaires État / couverture défense',
        'Affaire des commissions Rafale',
      ],
    },
    {
      id: 'bouygues', nom: 'Famille Bouygues', groupe: 'Groupe Bouygues',
      fortune: '4 milliards €', icon: Building2,
      secteurs: ['BTP', 'Télécoms', 'Médias'],
      medias: [
        { nom: 'TF1', type: 'TV', acquisition: 1987 },
        { nom: 'TMC', type: 'TV', acquisition: 2010 },
        { nom: 'LCI', type: 'TV', acquisition: 1994 },
        { nom: 'TFX', type: 'TV', acquisition: 2012 },
      ],
      conflits: [
        'TF1: couverture favorable aux annonceurs',
        'Marchés publics BTP / couverture politique',
        'Tentative de fusion TF1-M6 bloquée (2022)',
      ],
    },
    {
      id: 'kretinsky', nom: 'Daniel Křetínský', groupe: 'Czech Media Invest',
      fortune: '8 milliards €', icon: Factory,
      secteurs: ['Énergie', 'Distribution', 'Médias'],
      medias: [
        { nom: 'Marianne', type: 'Presse', acquisition: 2018 },
        { nom: 'Elle', type: 'Presse', acquisition: 2019 },
        { nom: 'Le Monde (part.)', type: 'Presse', acquisition: 2018 },
      ],
      conflits: [
        'Montée progressive au capital du Monde (2018-2023)',
        'Activités dans le charbon (EPH) vs image écologique',
        'Nationalité tchèque: influence étrangère sur médias français',
      ],
    },
    {
      id: 'saade', nom: 'Rodolphe Saadé', groupe: 'CMA CGM',
      fortune: '41 milliards €', icon: Ship,
      secteurs: ['Transport maritime', 'Logistique', 'Médias'],
      medias: [
        { nom: 'La Provence', type: 'Presse', acquisition: 2022 },
        { nom: 'La Tribune', type: 'Presse', acquisition: 2022 },
        { nom: 'BFM Marseille', type: 'TV', acquisition: 2023 },
      ],
      conflits: [
        'Concentration médiatique dans le Sud',
        "Port de Marseille: conflits d'intérêts évidents",
        'Intérêts commerciaux en Méditerranée',
      ],
    },
    {
      id: 'lagardere', nom: 'Arnaud Lagardère', groupe: 'Lagardère (Vivendi)',
      fortune: '200 millions €', icon: BookOpen,
      secteurs: ['Édition', 'Travel Retail', 'Médias'],
      medias: [
        { nom: 'Europe 1 (cédé)', type: 'Radio', acquisition: 'héritage - cédé 2021' },
        { nom: 'Paris Match (cédé)', type: 'Presse', acquisition: 'héritage - cédé 2023' },
        { nom: 'Hachette', type: 'Édition', acquisition: 'héritage' },
      ],
      conflits: [
        'Absorption par Vivendi/Bolloré (2023)',
        "Gestion controversée de l'héritage paternel",
        'Amitiés avec Nicolas Sarkozy',
      ],
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // DONNÉES — TIMELINE
  // ═══════════════════════════════════════════════════════════════════════════
  const timelineEvents = [
    { date: '2017-05-07', type: 'politique', titre: "Élection d'Emmanuel Macron", description: 'Victoire avec 66,1% face à Marine Le Pen.', importance: 5 },
    { date: '2017-06-21', type: 'media', titre: "iTélé devient CNews", description: 'Bolloré prend le contrôle total. Ligne éditoriale droitière.', importance: 4 },
    { date: '2018-07-30', type: 'loi', titre: 'Loi Secret des Affaires', description: "Risques sur le journalisme d'investigation.", importance: 4 },
    { date: '2018-11-17', type: 'politique', titre: 'Début des Gilets Jaunes', description: 'Couverture médiatique controversée.', importance: 5 },
    { date: '2018-12-22', type: 'loi', titre: 'Loi Fake News', description: "Lutte contre la manipulation de l'information.", importance: 4 },
    { date: '2020-03-17', type: 'politique', titre: 'Premier confinement COVID-19', description: 'Médias en première ligne.', importance: 5 },
    { date: '2020-06-25', type: 'loi', titre: 'Loi Avia censurée', description: 'Censurée par le Conseil Constitutionnel.', importance: 4 },
    { date: '2021-06-01', type: 'media', titre: 'Bolloré rachète Europe 1', description: 'Départs massifs de journalistes.', importance: 5 },
    { date: '2021-09-28', type: 'media', titre: 'Zemmour sur CNews', description: 'Cumul émission/pré-candidature controversé.', importance: 5 },
    { date: '2022-04-24', type: 'politique', titre: "Réélection Macron", description: '58,5% face à Marine Le Pen.', importance: 5 },
    { date: '2022-09-21', type: 'media', titre: 'Échec fusion TF1-M6', description: 'Concentration évitée.', importance: 4 },
    { date: '2022-11-16', type: 'loi', titre: 'DSA (UE)', description: 'Digital Services Act européen.', importance: 4 },
    { date: '2023-01-19', type: 'politique', titre: 'Retraites (49.3)', description: 'Adoption sans vote. Mobilisations massives.', importance: 5 },
    { date: '2023-08-01', type: 'media', titre: 'Bolloré prend le JDD', description: 'Grève historique de 40 jours.', importance: 5 },
    { date: '2023-11-22', type: 'media', titre: 'Vivendi rachète Lagardère', description: 'Bolloré contrôle Hachette.', importance: 5 },
    { date: '2024-06-09', type: 'politique', titre: 'Dissolution Assemblée', description: 'Élections anticipées.', importance: 5 },
    { date: '2024-07-07', type: 'politique', titre: 'Victoire NFP', description: 'Nouveau Front Populaire en tête.', importance: 5 },
    { date: '2024-12-04', type: 'politique', titre: 'Censure Barnier', description: 'Motion de censure adoptée.', importance: 5 },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // DONNÉES — LOIS
  // ═══════════════════════════════════════════════════════════════════════════
  const loisComparees = [
    { id: 'fake-news', nom: "Loi Fake News", date: '2018-12-22', avant: 'Pas de cadre légal spécifique pour les "fake news" en période électorale.', apres: 'Le juge peut ordonner le retrait de contenus "manifestement inexacts" en 48h.', critique: 'Risque de censure arbitraire. Peu appliquée.', lienUE: 'Anticipation du DSA.', categorie: 'information' },
    { id: 'secret-affaires', nom: 'Loi Secret des Affaires', date: '2018-07-30', avant: 'Protection par le droit commun.', apres: 'Protection renforcée du secret des affaires.', critique: "Menace pour le journalisme d'investigation.", lienUE: 'Transposition directive UE.', categorie: 'presse' },
    { id: 'avia', nom: 'Loi Avia', date: '2020-06-25', avant: 'Signalement sans obligation de délai.', apres: 'Obligation de retrait en 24h.', critique: "Censurée pour atteinte à la liberté d'expression.", lienUE: 'Remplacée par le DSA.', categorie: 'numerique' },
    { id: 'securite-globale', nom: 'Loi Sécurité Globale', date: '2021-05-25', avant: "Liberté de filmer les forces de l'ordre.", apres: "Pénalisation de la diffusion d'images de policiers.", critique: 'Atteinte à la liberté de la presse.', lienUE: 'Spécificité française.', categorie: 'presse' },
    { id: 'dsa', nom: 'Digital Services Act (DSA)', date: '2022-11-16', avant: 'Responsabilité limitée des hébergeurs.', apres: 'Obligations de modération. Amendes jusqu\'à 6% du CA.', critique: 'Mise en œuvre inégale.', lienUE: 'Règlement européen.', categorie: 'numerique' },
    { id: 'dma', nom: 'Digital Markets Act (DMA)', date: '2022-11-01', avant: 'Droit de la concurrence classique.', apres: 'Régulation ex ante des GAFAM.', critique: 'Définition des gatekeepers discutée.', lienUE: 'Règlement européen.', categorie: 'numerique' },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // DONNÉES — PROJET R75
  // ═══════════════════════════════════════════════════════════════════════════
  const projetR75 = {
    titre: 'LE PROJET',
    sousTitre: 'Pour une information libre et pluraliste',
    introduction: "Face à la concentration des médias, Le Projet propose un projet de réforme structurelle pour garantir l'indépendance de l'information.",
    axes: [
      { titre: '1. Limiter la concentration', icon: Shield, propositions: ['Plafonnement des parts de marché à 30%', 'Interdiction pour les entreprises sous marchés publics', 'Autorité indépendante de contrôle'] },
      { titre: '2. Garantir l\'indépendance', icon: FileText, propositions: ['Droit d\'agrément des rédactions', 'Chartes éthiques obligatoires', 'Protection des sources'] },
      { titre: '3. Financer le journalisme', icon: DollarSign, propositions: ['Taxe sur les revenus publicitaires des plateformes', "Fonds de soutien à l'investigation", 'Médias coopératifs'] },
      { titre: '4. Éduquer aux médias', icon: GraduationCap, propositions: ['Éducation aux médias obligatoire', 'Transparence des algorithmes', 'Labellisation qualité'] },
      { titre: '5. Réformer l\'audiovisuel public', icon: Tv, propositions: ['Financement indépendant', 'Gouvernance citoyenne', 'Interdiction de la publicité'] },
    ],
    conclusion: "De fleur en fleur, d'idée en idée, ensemble, pollinisons le débat public",
  };

  const modules = [
    { id: 'home', name: 'ACCUEIL', icon: Home },
    { id: 'timeline', name: 'TIMELINE', icon: Calendar },
    { id: 'reseau', name: 'RÉSEAU', icon: Network },
    { id: 'carte', name: 'CARTE', icon: Map },
    { id: 'threads', name: 'THREADS', icon: Twitter },
    { id: 'comparateur', name: 'LOIS', icon: Scale },
    { id: 'projet', name: 'LE PROJET', icon: FileText },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // HEADER
  // ═══════════════════════════════════════════════════════════════════════════
  const Header = () => (
    <header style={{ background: colors.cardBg, borderBottom: `2px solid ${colors.cardBorder}`, padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div onClick={() => setActiveModule('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Hexagon size={40} color={colors.primary} strokeWidth={2} />
          <div>
            <h1 style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.primary, margin: 0 }}>OBSERVATOIRE CITOYEN</h1>
            <p style={{ fontFamily: textFont, fontSize: fs.xs, color: colors.muted, margin: 0 }}>R75</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => setFontSize(f => Math.max(12, f - 2))} style={{ width: '36px', height: '36px', background: 'transparent', border: `1px solid ${colors.primary}`, color: colors.primary, borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Réduire"><Minus size={18} /></button>
            <button onClick={() => setFontSize(f => Math.min(24, f + 2))} style={{ width: '36px', height: '36px', background: 'transparent', border: `1px solid ${colors.primary}`, color: colors.primary, borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Agrandir"><Plus size={18} /></button>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} style={{ width: '44px', height: '44px', background: 'transparent', border: `2px solid ${colors.primary}`, color: colors.primary, borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={darkMode ? 'Mode clair' : 'Mode sombre'}>{darkMode ? <Sun size={22} /> : <Moon size={22} />}</button>
        </div>
      </div>
      <nav style={{ maxWidth: '1400px', margin: '15px auto 0', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {modules.map(mod => { const IconComponent = mod.icon; return (<button key={mod.id} onClick={() => setActiveModule(mod.id)} style={{ padding: '10px 18px', background: activeModule === mod.id ? colors.primary : 'transparent', border: `1px solid ${colors.primary}`, color: activeModule === mod.id ? colors.bg : colors.primary, borderRadius: '4px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.sm, display: 'flex', alignItems: 'center', gap: '8px' }}><IconComponent size={18} /><span>{mod.name}</span></button>); })}
      </nav>
    </header>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // ACCUEIL
  // ═══════════════════════════════════════════════════════════════════════════
  const HomeModule = () => (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Hexagon size={80} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '20px' }} />
        <h1 style={{ fontFamily: titleFont, fontSize: fs.xxxl, color: colors.primary, marginBottom: '20px' }}>R75 OBSERVATOIRE CITOYEN</h1>
        <p style={{ fontFamily: textFont, fontSize: fs.lg, color: colors.primary, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>Lire entre les lignes, relier les événements et connecter les points que d'autres préfèrent laisser épars - médias, lois, pouvoir.. depuis 2017</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {modules.filter(m => m.id !== 'home').map(mod => { const IconComponent = mod.icon; return (<button key={mod.id} onClick={() => setActiveModule(mod.id)} style={{ padding: '30px 20px', background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = colors.primary; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = colors.cardBorder; e.currentTarget.style.transform = 'translateY(0)'; }}><IconComponent size={44} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} /><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, marginBottom: '10px' }}>{mod.name}</h3><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>{mod.id === 'timeline' && 'Frise chronologique depuis 2017'}{mod.id === 'reseau' && 'Cartographie oligarques/médias'}{mod.id === 'carte' && 'Implantation géographique'}{mod.id === 'threads' && 'Générateur de threads'}{mod.id === 'comparateur' && 'Lois avant/après'}{mod.id === 'projet' && 'Propositions R75'}</p></button>); })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', padding: '30px', background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '8px' }}>
        <div style={{ textAlign: 'center' }}><Users size={32} color={colors.primary} style={{ marginBottom: '10px' }} /><p style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: 0 }}>9</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>Oligarques</p></div>
        <div style={{ textAlign: 'center' }}><Tv size={32} color={colors.primary} style={{ marginBottom: '10px' }} /><p style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: 0 }}>{oligarques.reduce((acc, o) => acc + o.medias.length, 0)}</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>Médias</p></div>
        <div style={{ textAlign: 'center' }}><Clock size={32} color={colors.primary} style={{ marginBottom: '10px' }} /><p style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: 0 }}>{timelineEvents.length}</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>Événements</p></div>
        <div style={{ textAlign: 'center' }}><Scale size={32} color={colors.primary} style={{ marginBottom: '10px' }} /><p style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: 0 }}>{loisComparees.length}</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>Lois</p></div>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // TIMELINE
  // ═══════════════════════════════════════════════════════════════════════════
  const TimelineModule = () => {
    const [filterType, setFilterType] = useState('all');
    const typeColors = { politique: '#a74040', media: colors.primary, loi: '#50769a', autre: colors.muted };
    const typeIcons = { politique: Landmark, media: Tv, loi: Gavel, autre: Info };
    const filteredEvents = timelineEvents.filter(e => filterType === 'all' || e.type === filterType).sort((a, b) => new Date(a.date) - new Date(b.date));
    const years = [...new Set(filteredEvents.map(e => e.date.slice(0, 4)))];

    return (
      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Calendar size={48} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginBottom: '10px' }}>TIMELINE 2017-2024</h2>
          <p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.muted }}>Chronologie des événements majeurs</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          {[{ id: 'all', label: 'Tous', icon: Filter }, { id: 'politique', label: 'Politique', icon: Landmark }, { id: 'media', label: 'Médias', icon: Tv }, { id: 'loi', label: 'Lois', icon: Gavel }].map(f => { const IconComp = f.icon; return (<button key={f.id} onClick={() => setFilterType(f.id)} style={{ padding: '10px 18px', background: filterType === f.id ? colors.primary : 'transparent', border: `1px solid ${colors.primary}`, color: filterType === f.id ? colors.bg : colors.primary, borderRadius: '20px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.sm, display: 'flex', alignItems: 'center', gap: '8px' }}><IconComp size={16} />{f.label}</button>); })}
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: colors.cardBorder, transform: 'translateX(-50%)' }} />
          {years.map(year => (<div key={year} style={{ marginBottom: '40px' }}><div style={{ textAlign: 'center', position: 'relative', zIndex: 1, marginBottom: '20px' }}><span style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.primary, background: colors.bg, padding: '10px 30px', border: `3px solid ${colors.primary}`, borderRadius: '30px' }}>{year}</span></div>{filteredEvents.filter(e => e.date.startsWith(year)).map((event, idx) => { const TypeIcon = typeIcons[event.type]; return (<div key={idx} style={{ display: 'flex', justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '20px', paddingLeft: idx % 2 === 0 ? 0 : '52%', paddingRight: idx % 2 === 0 ? '52%' : 0 }}><div style={{ background: colors.cardBg, border: `2px solid ${typeColors[event.type]}`, borderRadius: '8px', padding: '15px 20px', maxWidth: '100%', position: 'relative' }}><p style={{ fontFamily: textFont, fontSize: fs.xs, color: typeColors[event.type], marginBottom: '5px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={12} />{new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</p><h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, marginBottom: '8px' }}>{event.titre}</h4><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, lineHeight: 1.5, margin: 0 }}>{event.description}</p><span style={{ position: 'absolute', top: '10px', right: '10px', padding: '4px 10px', background: typeColors[event.type], color: colors.bg, borderRadius: '10px', fontFamily: textFont, fontSize: fs.xs, display: 'flex', alignItems: 'center', gap: '4px' }}><TypeIcon size={12} /></span></div></div>); })}</div>))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RÉSEAU
  // ═══════════════════════════════════════════════════════════════════════════
  const ReseauModule = () => {
    const [selectedOligarque, setSelectedOligarque] = useState(null);
    return (
      <div style={{ padding: '30px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Network size={48} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginBottom: '10px' }}>RÉSEAU OLIGARCHIQUE</h2>
          <p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.muted }}>Qui possède quoi ?</p>
        </div>
        {!selectedOligarque && (<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>{oligarques.map(o => { const IconComp = o.icon; return (<div key={o.id} onClick={() => setSelectedOligarque(o)} style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '25px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = colors.primary; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = colors.cardBorder; e.currentTarget.style.transform = 'scale(1)'; }}><div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}><div style={{ width: '60px', height: '60px', borderRadius: '50%', background: colors.bg, border: `2px solid ${colors.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconComp size={28} color={colors.primary} /></div><div><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, margin: 0 }}>{o.nom}</h3><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, margin: 0 }}>{o.groupe}</p></div></div><p style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.primary, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><DollarSign size={20} />{o.fortune}</p><div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px' }}>{o.secteurs.map((s, i) => (<span key={i} style={{ fontSize: fs.xs, padding: '3px 10px', background: colors.bg, border: `1px solid ${colors.cardBorder}`, borderRadius: '15px', fontFamily: textFont, color: colors.muted }}>{s}</span>))}</div><p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.primary, marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}><Tv size={16} /><strong>{o.medias.length}</strong> médias</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.danger, display: 'flex', alignItems: 'center', gap: '8px' }}><AlertTriangle size={16} />{o.conflits.length} conflits</p></div>); })}</div>)}
        {selectedOligarque && (<div><button onClick={() => setSelectedOligarque(null)} style={{ padding: '10px 20px', background: 'transparent', border: `2px solid ${colors.primary}`, color: colors.primary, borderRadius: '8px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.base, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronLeft size={20} />Retour</button><div style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '30px' }}><div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}><div style={{ width: '100px', height: '100px', borderRadius: '50%', background: colors.bg, border: `3px solid ${colors.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{React.createElement(selectedOligarque.icon, { size: 48, color: colors.primary })}</div><div><h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: 0 }}>{selectedOligarque.nom}</h2><p style={{ fontFamily: textFont, fontSize: fs.lg, color: colors.muted }}>{selectedOligarque.groupe}</p><p style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.primary, display: 'flex', alignItems: 'center', gap: '8px' }}><DollarSign size={24} />{selectedOligarque.fortune}</p></div></div><div style={{ marginBottom: '30px' }}><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, marginBottom: '15px', paddingBottom: '10px', borderBottom: `2px solid ${colors.cardBorder}`, display: 'flex', alignItems: 'center', gap: '10px' }}><Tv size={24} />Médias ({selectedOligarque.medias.length})</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>{selectedOligarque.medias.map((m, i) => (<div key={i} style={{ padding: '15px', background: colors.bg, border: `1px solid ${colors.cardBorder}`, borderRadius: '8px' }}><p style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>{m.type === 'TV' && <Tv size={16} />}{m.type === 'Radio' && <Radio size={16} />}{m.type === 'Presse' && <Newspaper size={16} />}{m.type === 'Publicité' && <TrendingUp size={16} />}{m.type === 'Édition' && <BookOpen size={16} />}{m.nom}</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, margin: '5px 0 0 0' }}>{m.type} • {m.acquisition}</p></div>))}</div></div><div><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.danger, marginBottom: '15px', paddingBottom: '10px', borderBottom: `2px solid ${colors.danger}`, display: 'flex', alignItems: 'center', gap: '10px' }}><AlertTriangle size={24} />Conflits ({selectedOligarque.conflits.length})</h3><ul style={{ fontFamily: textFont, fontSize: fs.base, color: colors.primary, lineHeight: 1.8, paddingLeft: '0', listStyle: 'none' }}>{selectedOligarque.conflits.map((c, i) => (<li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><AlertCircle size={18} color={colors.danger} style={{ marginTop: '3px', flexShrink: 0 }} />{c}</li>))}</ul></div><button onClick={() => { setSelectedEntity(selectedOligarque); setActiveModule('threads'); }} style={{ marginTop: '30px', padding: '15px 30px', background: colors.primary, border: 'none', color: colors.bg, borderRadius: '8px', cursor: 'pointer', fontFamily: titleFont, fontSize: fs.base, display: 'flex', alignItems: 'center', gap: '10px' }}><Twitter size={20} />Générer un thread</button></div></div>)}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CARTE
  // ═══════════════════════════════════════════════════════════════════════════
  const CarteModule = () => (
    <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Map size={48} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} />
        <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginBottom: '10px' }}>CARTE DES IMPLANTATIONS</h2>
        <p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.muted }}>Localisation des sièges</p>
      </div>
      <div style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '30px', position: 'relative', minHeight: '500px' }}>
        <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'block' }}>
          <path d="M200,20 L280,40 L340,100 L350,180 L320,280 L280,350 L200,380 L120,350 L60,280 L50,180 L80,100 L120,40 Z" fill="none" stroke={colors.primary} strokeWidth="3" />
          <circle cx="200" cy="150" r="30" fill={colors.primary} opacity="0.3" /><circle cx="200" cy="150" r="8" fill={colors.primary} />
          <text x="200" y="195" textAnchor="middle" fill={colors.primary} style={{ fontFamily: textFont, fontSize: '12px', fontWeight: 'bold' }}>PARIS</text>
          <text x="200" y="210" textAnchor="middle" fill={colors.muted} style={{ fontFamily: textFont, fontSize: '10px' }}>8 oligarques</text>
          <circle cx="260" cy="320" r="15" fill={colors.primary} opacity="0.3" /><circle cx="260" cy="320" r="5" fill={colors.primary} />
          <text x="260" y="345" textAnchor="middle" fill={colors.primary} style={{ fontFamily: textFont, fontSize: '11px', fontWeight: 'bold' }}>MARSEILLE</text>
          <text x="260" y="358" textAnchor="middle" fill={colors.muted} style={{ fontFamily: textFont, fontSize: '9px' }}>Saadé</text>
          <circle cx="300" cy="180" r="10" fill={colors.danger} opacity="0.3" /><circle cx="300" cy="180" r="4" fill={colors.danger} />
          <text x="340" y="183" textAnchor="start" fill={colors.danger} style={{ fontFamily: textFont, fontSize: '10px', fontWeight: 'bold' }}>GENÈVE</text>
          <text x="340" y="195" textAnchor="start" fill={colors.muted} style={{ fontFamily: textFont, fontSize: '8px' }}>Drahi (fiscal)</text>
          <text x="370" y="100" textAnchor="start" fill={colors.danger} style={{ fontFamily: textFont, fontSize: '10px', fontWeight: 'bold' }}>PRAGUE →</text>
          <text x="370" y="112" textAnchor="start" fill={colors.muted} style={{ fontFamily: textFont, fontSize: '8px' }}>Křetínský</text>
        </svg>
        <div style={{ marginTop: '30px', padding: '20px', background: colors.bg, borderRadius: '8px', border: `1px solid ${colors.cardBorder}` }}>
          <h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={20} />Concentration parisienne</h4>
          <p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, lineHeight: 1.6 }}><strong>8 des 9 oligarques</strong> ont leur siège en région parisienne (8e, 16e, Neuilly).</p>
          <p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.danger, lineHeight: 1.6, marginTop: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} /><span><strong>2 résidences fiscales à l'étranger</strong> : Drahi (Suisse), Křetínský (Tchéquie).</span></p>
        </div>
      </div>
      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        {[{ type: 'TV', count: oligarques.reduce((acc, o) => acc + o.medias.filter(m => m.type === 'TV').length, 0), icon: Tv }, { type: 'Radio', count: oligarques.reduce((acc, o) => acc + o.medias.filter(m => m.type === 'Radio').length, 0), icon: Radio }, { type: 'Presse', count: oligarques.reduce((acc, o) => acc + o.medias.filter(m => m.type === 'Presse').length, 0), icon: Newspaper }].map(stat => { const IconComp = stat.icon; return (<div key={stat.type} style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '8px', padding: '20px', textAlign: 'center' }}><IconComp size={40} color={colors.primary} style={{ marginBottom: '10px' }} /><p style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, margin: '10px 0' }}>{stat.count}</p><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>{stat.type}</p></div>); })}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // THREADS
  // ═══════════════════════════════════════════════════════════════════════════
  const ThreadsModule = () => {
    const [selectedSubject, setSelectedSubject] = useState(selectedEntity || null);
    const [generatedThread, setGeneratedThread] = useState(null);
    const [copied, setCopied] = useState(false);

    const generateThread = () => {
      if (!selectedSubject || !selectedSubject.medias) return;
      const o = selectedSubject;
      const thread = [
        `🧵 THREAD : Qui est vraiment ${o.nom} et pourquoi possède-t-il nos médias ?\n\n⬇️`,
        `1/ ${o.nom} pèse ${o.fortune}. Sa fortune vient de ${o.secteurs.slice(0, -1).join(', ')}.\n\nMais depuis quelques années, il s'intéresse de très près à nos médias.`,
        `2/ Son empire médiatique comprend :\n\n${o.medias.map(m => `• ${m.nom} (${m.type})`).join('\n')}\n\nSoit ${o.medias.length} médias.`,
        `3/ Les conflits d'intérêts :\n\n${o.conflits.map(c => `• ${c}`).join('\n')}`,
        `4/ Face à cette concentration, Le Projet propose :\n\n✅ Limiter les parts de marché à 30%\n✅ Interdire aux entreprises sous marchés publics de posséder des médias\n✅ Garantir l'indépendance des rédactions`,
        `5/ L'information ne devrait pas être une marchandise.\n\nPartagez ce thread pour informer.\n\n🐝 LeProjet\n\n#Médias #Oligarchie #InformationLibre`,
      ];
      setGeneratedThread(thread);
    };

    const copyThread = () => { if (!generatedThread) return; navigator.clipboard.writeText(generatedThread.join('\n\n---\n\n')); setCopied(true); setTimeout(() => setCopied(false), 2000); };

    useEffect(() => { if (selectedEntity) { setSelectedSubject(selectedEntity); } }, [selectedEntity]);

    return (
      <div style={{ padding: '30px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Twitter size={48} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginBottom: '10px' }}>GÉNÉRATEUR DE THREADS</h2>
          <p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.muted }}>Créez des threads structurés</p>
        </div>
        <div style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '25px', marginBottom: '20px' }}>
          <h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><CircleDot size={20} />Choisir un oligarque</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {oligarques.map(o => { const IconComp = o.icon; return (<button key={o.id} onClick={() => { setSelectedSubject(o); setGeneratedThread(null); }} style={{ padding: '10px 15px', background: selectedSubject?.id === o.id ? colors.primary : 'transparent', border: `1px solid ${colors.primary}`, color: selectedSubject?.id === o.id ? colors.bg : colors.primary, borderRadius: '6px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.sm, display: 'flex', alignItems: 'center', gap: '8px' }}><IconComp size={16} />{o.nom}</button>); })}
          </div>
        </div>
        {selectedSubject && (<div style={{ textAlign: 'center', marginBottom: '30px' }}><button onClick={generateThread} style={{ padding: '15px 40px', background: colors.primary, border: 'none', color: colors.bg, borderRadius: '8px', cursor: 'pointer', fontFamily: titleFont, fontSize: fs.lg, display: 'inline-flex', alignItems: 'center', gap: '10px' }}><Hash size={22} />GÉNÉRER LE THREAD</button></div>)}
        {generatedThread && (<div style={{ background: colors.cardBg, border: `2px solid ${colors.primary}`, borderRadius: '12px', padding: '25px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, display: 'flex', alignItems: 'center', gap: '10px' }}><MessageSquare size={20} />Thread ({generatedThread.length} tweets)</h3><button onClick={copyThread} style={{ padding: '10px 20px', background: copied ? '#4CAF50' : 'transparent', border: `2px solid ${copied ? '#4CAF50' : colors.primary}`, color: copied ? '#fff' : colors.primary, borderRadius: '6px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.sm, display: 'flex', alignItems: 'center', gap: '8px' }}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Copié !' : 'Copier tout'}</button></div>{generatedThread.map((tweet, i) => (<div key={i} style={{ background: colors.bg, border: `1px solid ${colors.cardBorder}`, borderRadius: '8px', padding: '15px', marginBottom: '10px' }}><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.primary, whiteSpace: 'pre-line', lineHeight: 1.6, margin: 0 }}>{tweet}</p><p style={{ fontFamily: textFont, fontSize: fs.xs, color: colors.muted, marginTop: '10px', textAlign: 'right' }}>{tweet.length}/280</p></div>))}</div>)}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPARATEUR
  // ═══════════════════════════════════════════════════════════════════════════
  const ComparateurModule = () => {
    const [selectedLoi, setSelectedLoi] = useState(null);
    const [filterCat, setFilterCat] = useState('all');
    const categories = [{ id: 'all', label: 'Toutes', icon: Filter }, { id: 'information', label: 'Info', icon: Newspaper }, { id: 'presse', label: 'Presse', icon: FileText }, { id: 'numerique', label: 'Numérique', icon: Globe }];
    const filteredLois = loisComparees.filter(l => filterCat === 'all' || l.categorie === filterCat);

    return (
      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Scale size={48} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginBottom: '10px' }}>COMPARATEUR DE LOIS</h2>
          <p style={{ fontFamily: textFont, fontSize: fs.base, color: colors.muted }}>Avant / Après depuis 2017</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          {categories.map(cat => { const IconComp = cat.icon; return (<button key={cat.id} onClick={() => setFilterCat(cat.id)} style={{ padding: '10px 18px', background: filterCat === cat.id ? colors.primary : 'transparent', border: `1px solid ${colors.primary}`, color: filterCat === cat.id ? colors.bg : colors.primary, borderRadius: '20px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.sm, display: 'flex', alignItems: 'center', gap: '8px' }}><IconComp size={16} />{cat.label}</button>); })}
        </div>
        {!selectedLoi && (<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>{filteredLois.map(loi => (<div key={loi.id} onClick={() => setSelectedLoi(loi)} style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '25px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = colors.primary; }} onMouseLeave={e => { e.currentTarget.style.borderColor = colors.cardBorder; }}><p style={{ fontFamily: textFont, fontSize: fs.xs, color: colors.muted, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} />{new Date(loi.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</p><h3 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, marginBottom: '15px' }}>{loi.nom}</h3><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, lineHeight: 1.5 }}>{loi.critique.slice(0, 80)}...</p></div>))}</div>)}
        {selectedLoi && (<div><button onClick={() => setSelectedLoi(null)} style={{ padding: '10px 20px', background: 'transparent', border: `2px solid ${colors.primary}`, color: colors.primary, borderRadius: '8px', cursor: 'pointer', fontFamily: textFont, fontSize: fs.base, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronLeft size={20} />Retour</button><div style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '30px' }}><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} />{new Date(selectedLoi.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p><h2 style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.primary, marginBottom: '30px' }}>{selectedLoi.nom}</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}><div style={{ padding: '20px', background: colors.bg, border: `2px solid ${colors.danger}`, borderRadius: '8px' }}><h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.danger, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><EyeOff size={20} />AVANT</h4><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.primary, lineHeight: 1.6 }}>{selectedLoi.avant}</p></div><div style={{ padding: '20px', background: colors.bg, border: `2px solid ${colors.bonus}`, borderRadius: '8px' }}><h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.bonus, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><Eye size={20} />APRÈS</h4><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.primary, lineHeight: 1.6 }}>{selectedLoi.apres}</p></div></div><div style={{ padding: '20px', background: colors.bg, border: `2px solid ${colors.cardBorder}`, borderRadius: '8px', marginBottom: '20px' }}><h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><Quote size={20} />Analyse critique</h4><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.primary, lineHeight: 1.6 }}>{selectedLoi.critique}</p></div><div style={{ padding: '20px', background: colors.bg, border: `2px solid ${colors.primary}`, borderRadius: '8px' }}><h4 style={{ fontFamily: titleFont, fontSize: fs.base, color: colors.primary, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={20} />Europe</h4><p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.primary, lineHeight: 1.6 }}>{selectedLoi.lienUE}</p></div></div></div>)}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PROJET
  // ═══════════════════════════════════════════════════════════════════════════
  const ProjetModule = () => (
    <div style={{ padding: '30px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Hexagon size={80} color={colors.primary} strokeWidth={1.5} style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: titleFont, fontSize: fs.xxl, color: colors.primary, marginTop: '15px', marginBottom: '10px' }}>{projetR75.titre}</h2>
        <p style={{ fontFamily: textFont, fontSize: fs.lg, color: colors.muted }}>{projetR75.sousTitre}</p>
      </div>
      <div style={{ background: colors.cardBg, border: `2px solid ${colors.primary}`, borderRadius: '12px', padding: '30px', marginBottom: '30px' }}>
        <p style={{ fontFamily: textFont, fontSize: fs.lg, color: colors.primary, lineHeight: 1.8, textAlign: 'center', fontStyle: 'italic' }}>"{projetR75.introduction}"</p>
      </div>
      {projetR75.axes.map((axe, i) => { const IconComp = axe.icon; return (<div key={i} style={{ background: colors.cardBg, border: `2px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '25px', marginBottom: '20px' }}><h3 style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary, marginBottom: '20px', paddingBottom: '15px', borderBottom: `2px solid ${colors.cardBorder}`, display: 'flex', alignItems: 'center', gap: '12px' }}><IconComp size={28} />{axe.titre}</h3><ul style={{ fontFamily: textFont, fontSize: fs.base, color: colors.primary, lineHeight: 1.8, paddingLeft: '0', listStyle: 'none' }}>{axe.propositions.map((prop, j) => (<li key={j} style={{ marginBottom: '15px', paddingLeft: '35px', position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle size={20} color={colors.primary} style={{ position: 'absolute', left: 0, top: '2px' }} />{prop}</li>))}</ul></div>); })}
      <div style={{ background: colors.primary, borderRadius: '12px', padding: '30px', marginTop: '30px' }}>
        <p style={{ fontFamily: textFont, fontSize: fs.lg, color: colors.bg, lineHeight: 1.8, textAlign: 'center' }}>{projetR75.conclusion}</p>
        <p style={{ fontFamily: titleFont, fontSize: fs.xl, color: colors.bg, textAlign: 'center', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><Hexagon size={28} />Butiner l'information, polliniser les consciences, cultiver le débat</p>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ minHeight: '100vh', background: colors.bg, transition: 'all 0.3s' }}>
      <style>{`
        @font-face { font-family: 'Flamengo'; src: url('/fonts/Flamengo.ttf') format('truetype'); font-weight: normal; font-style: normal; font-display: swap; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Avenir', 'Segoe UI', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${colors.bg}; }
        ::-webkit-scrollbar-thumb { background: ${colors.primary}; border-radius: 4px; }
        button:hover { opacity: 0.9; }
        button:active { transform: scale(0.98); }
      `}</style>
      <Header />
      <main style={{ paddingBottom: '50px' }}>
        {activeModule === 'home' && <HomeModule />}
        {activeModule === 'timeline' && <TimelineModule />}
        {activeModule === 'reseau' && <ReseauModule />}
        {activeModule === 'carte' && <CarteModule />}
        {activeModule === 'threads' && <ThreadsModule />}
        {activeModule === 'comparateur' && <ComparateurModule />}
        {activeModule === 'projet' && <ProjetModule />}
      </main>
      <footer style={{ background: colors.cardBg, borderTop: `2px solid ${colors.cardBorder}`, padding: '30px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}><Hexagon size={24} color={colors.primary} /><p style={{ fontFamily: titleFont, fontSize: fs.lg, color: colors.primary }}>OBSERVATOIRE CITOYEN R75</p></div>
        <p style={{ fontFamily: textFont, fontSize: fs.sm, color: colors.muted }}>Données vérifiables</p>
        <p style={{ fontFamily: textFont, fontSize: fs.xs, color: colors.muted, marginTop: '15px' }}>© 2026 R75</p>
      </footer>
    </div>
  );
};

export default App;
