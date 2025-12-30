import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 'plateforme-nationale',
    title: 'Plateforme Nationale de Gestion Administrative',
    client: 'Gouvernement - Afrique de l\'Ouest',
    description: 'Système intégré de gestion administrative pour 15 ministères avec Oracle Database, Oracle Apex et infrastructure cloud complète.',
    technologies: ['Oracle Apex', 'Oracle Cloud', 'PL/SQL', 'Oracle DB'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '18 mois',
    team: '25 personnes',
    impact: '500K+ utilisateurs',
    category: 'Administration Publique',
    images: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Développement d\'une plateforme complète de gestion administrative pour 15 ministères, avec intégration de tous les processus administratifs, gestion documentaire, workflow et reporting avancé.',
    results: [
      'Réduction de 60% du temps de traitement des dossiers',
      '500K+ utilisateurs actifs',
      '15 ministères interconnectés',
      '99.9% de disponibilité'
    ]
  },
  {
    id: 'microfinance-bancaire',
    title: 'Solution de Microfinance Bancaire',
    client: 'Institution Financière - UEMOA',
    description: 'Plateforme complète de gestion de microfinance avec intégration mobile money, reporting BI et conformité bancaire.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Power BI'],
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '12 mois',
    team: '15 personnes',
    impact: '200K+ clients',
    category: 'Finance & Banque',
    images: [
      'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Développement d\'une solution complète de microfinance avec intégration mobile money, gestion des prêts, épargne, reporting réglementaire et dashboards BI en temps réel.',
    results: [
      '200K+ clients actifs',
      'Intégration mobile money réussie',
      'Conformité bancaire 100%',
      'ROI de 300% en 2 ans'
    ]
  },
  {
    id: 'erp-multinational',
    title: 'ERP Multinational Cloud',
    client: 'Groupe International - 8 Pays',
    description: 'Déploiement d\'un ERP sur mesure avec modules comptabilité, RH, paie, inventaire sur Oracle Cloud Infrastructure.',
    technologies: ['Oracle Cloud', 'Java', 'Oracle DB', 'Docker'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '24 mois',
    team: '30 personnes',
    impact: '8 pays, 2000+ utilisateurs',
    category: 'ERP & Gestion',
    images: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Déploiement d\'un ERP cloud pour un groupe multinational opérant dans 8 pays, avec modules comptabilité, RH, paie, inventaire et reporting consolidé multi-pays.',
    results: [
      'Déploiement dans 8 pays',
      '2000+ utilisateurs simultanés',
      'Réduction de 40% des coûts opérationnels',
      'Unification des processus'
    ]
  },
  {
    id: 'data-warehouse-bi',
    title: 'Data Warehouse & Analytics BI',
    client: 'ONG Internationale',
    description: 'Construction d\'un data warehouse centralisé avec pipelines ETL, dashboards interactifs et analyses prédictives.',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Tableau'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '10 mois',
    team: '12 personnes',
    impact: '50M+ données',
    category: 'Data & Analytics',
    images: [
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Construction d\'un data warehouse centralisé pour une ONG internationale, avec pipelines ETL automatisés, dashboards interactifs et analyses prédictives pour optimiser les programmes.',
    results: [
      '50M+ données traitées',
      'Dashboards en temps réel',
      'Amélioration de 35% de l\'efficacité',
      'Analyses prédictives opérationnelles'
    ]
  },
  {
    id: 'app-mobile-ecommerce',
    title: 'Application Mobile E-commerce',
    client: 'Retailer - Afrique de l\'Ouest',
    description: 'Application mobile e-commerce cross-platform avec paiement mobile money, livraison tracking et gestion stocks.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '8 mois',
    team: '10 personnes',
    impact: '100K+ téléchargements',
    category: 'Mobile & E-commerce',
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Développement d\'une application mobile e-commerce cross-platform avec intégration mobile money, système de tracking de livraison en temps réel et gestion automatisée des stocks.',
    results: [
      '100K+ téléchargements',
      'Intégration mobile money réussie',
      'Croissance de 250% des ventes',
      'Satisfaction client 4.8/5'
    ]
  },
  {
    id: 'infrastructure-cloud',
    title: 'Infrastructure Cloud Sécurisée',
    client: 'Banque Régionale',
    description: 'Migration complète vers cloud avec architecture hautement disponible, sécurité renforcée et conformité bancaire.',
    technologies: ['Oracle Cloud', 'Kubernetes', 'Terraform', 'Security'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '14 mois',
    team: '20 personnes',
    impact: '99.99% uptime',
    category: 'Cloud & Infrastructure',
    images: [
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Migration complète de l\'infrastructure d\'une banque régionale vers le cloud avec architecture hautement disponible, sécurité renforcée et conformité bancaire totale.',
    results: [
      '99.99% de disponibilité',
      'Réduction de 50% des coûts infrastructure',
      'Conformité bancaire 100%',
      'Sécurité renforcée'
    ]
  },
  {
    id: 'portail-educatif',
    title: 'Portail Éducatif National',
    client: 'Ministère de l\'Éducation',
    description: 'Plateforme d\'e-learning nationale avec gestion des cours, évaluations en ligne, suivi pédagogique et analytics.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '16 mois',
    team: '18 personnes',
    impact: '1M+ étudiants',
    category: 'Éducation',
    images: [
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Développement d\'une plateforme d\'e-learning nationale avec gestion complète des cours, évaluations en ligne, suivi pédagogique détaillé et analytics pour optimiser l\'enseignement.',
    results: [
      '1M+ étudiants inscrits',
      'Amélioration de 30% des résultats',
      'Accessibilité 24/7',
      'Plateforme multilingue'
    ]
  },
  {
    id: 'systeme-sante',
    title: 'Système de Santé Digitalisé',
    client: 'Réseau Hospitalier',
    description: 'Dossier médical électronique, gestion hospitalière, télémédecine et analyse de données de santé.',
    technologies: ['React', '.NET', 'SQL Server', 'Azure'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '20 mois',
    team: '22 personnes',
    impact: '50+ hôpitaux',
    category: 'Santé',
    images: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    details: 'Développement d\'un système complet de santé digitalisé avec dossier médical électronique, gestion hospitalière intégrée, télémédecine et analyse de données de santé pour 50+ hôpitaux.',
    results: [
      '50+ hôpitaux connectés',
      'Réduction de 45% du temps administratif',
      'Amélioration des soins',
      'Conformité santé 100%'
    ]
  }
];

const categories = ['Tous', ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Nos Projets Réalisés
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Plus de 500 projets déployés avec succès à travers le monde, des solutions qui transforment les organisations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Filtrer par catégorie:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-200 text-sm font-semibold">
                      {project.client}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">{project.duration}</p>
                      <p className="text-xs text-gray-500">Durée</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">{project.team}</p>
                      <p className="text-xs text-gray-500">Équipe</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <MapPin className="h-4 w-4 text-purple-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">{project.impact}</p>
                      <p className="text-xs text-gray-500">Impact</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre Projet Suivant ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discutons de votre projet et découvrons comment nous pouvons transformer votre vision en réalité
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>Démarrer un Projet</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

