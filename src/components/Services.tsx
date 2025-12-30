import { Smartphone, Globe, Database, Cloud, Shield, LineChart, Wrench, Users, Code2, Layers, Server, Lock } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

const services = [
  {
    icon: Smartphone,
    title: 'Développement Web & Mobile',
    description: 'Applications web progressives, sites e-commerce, applications mobiles cross-platform (iOS/Android), interfaces utilisateur modernes et responsives.',
    features: ['React, Vue, Angular', 'React Native, Flutter', 'Progressive Web Apps', 'UI/UX Design'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'web-mobile'
  },
  {
    icon: Database,
    title: 'Data Engineering & BI',
    description: 'Conception et gestion de data warehouses, pipelines ETL/ELT, business intelligence, visualisation de données, analytics avancés.',
    features: ['Data Warehouse', 'ETL/ELT Pipelines', 'Power BI, Tableau', 'Big Data Analytics'],
    color: 'green',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'data'
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Déploiement Oracle Cloud, AWS, Azure. Architecture cloud-native, conteneurisation Docker/Kubernetes, solutions IaaS/PaaS.',
    features: ['Oracle Cloud', 'AWS, Azure, GCP', 'Docker & Kubernetes', 'Infrastructure as Code'],
    color: 'purple',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'cloud'
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Audits de sécurité, protection contre les menaces, conformité RGPD, sécurisation des infrastructures et applications.',
    features: ['Audit Sécurité', 'Protection DDoS', 'Conformité RGPD', 'Pentest & Monitoring'],
    color: 'red',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'security'
  },
  {
    icon: Code2,
    title: 'Développement Oracle Apex',
    description: 'Expertise Oracle Apex pour applications d\'entreprise rapides et sécurisées. Développement de solutions métier personnalisées.',
    features: ['Oracle Apex', 'PL/SQL Expert', 'Forms & Reports', 'Integration SOA'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'oracle'
  },
  {
    icon: Layers,
    title: 'DevOps & CI/CD',
    description: 'Automatisation des déploiements, intégration continue, orchestration, monitoring et observabilité des systèmes.',
    features: ['Jenkins, GitLab CI', 'Terraform, Ansible', 'Prometheus, Grafana', 'Automatisation'],
    color: 'teal',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'support'
  },
  {
    icon: Server,
    title: 'Administration Bases de Données',
    description: 'Administration Oracle, PostgreSQL, MySQL, MongoDB. Optimisation, sauvegarde, haute disponibilité, migration.',
    features: ['Oracle DBA', 'PostgreSQL, MySQL', 'Performance Tuning', 'Backup & Recovery'],
    color: 'cyan',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'oracle'
  },
  {
    icon: Wrench,
    title: 'Infogérance & Support',
    description: 'Maintenance applicative, support 24/7, supervision des systèmes, gestion de parc IT, helpdesk, SLA garantis.',
    features: ['Support 24/7', 'Monitoring Proactif', 'Maintenance Préventive', 'SLA Personnalisés'],
    color: 'gray',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'support'
  },
  {
    icon: LineChart,
    title: 'Conseil & Transformation Digitale',
    description: 'Accompagnement stratégique, audit IT, gouvernance, roadmap digitale, formation des équipes, transfert de compétences.',
    features: ['Audit & Conseil', 'Stratégie IT', 'Formation Équipes', 'Change Management'],
    color: 'yellow',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'other'
  },
  {
    icon: Users,
    title: 'Solutions ERP/CRM Métier',
    description: 'Développement et déploiement d\'ERP, CRM, solutions comptables, paie, microfinance, e-commerce personnalisés.',
    features: ['ERP Sur Mesure', 'CRM & Sales', 'Fintech Solutions', 'E-commerce'],
    color: 'pink',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'erp'
  },
  {
    icon: Lock,
    title: 'Conformité & Gouvernance',
    description: 'Mise en conformité RGPD, ISO 27001, audits, politiques de sécurité, documentation, plan de continuité d\'activité.',
    features: ['RGPD/ISO 27001', 'Audit Conformité', 'PCA/PRA', 'Documentation'],
    color: 'slate',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'security'
  },
  {
    icon: Globe,
    title: 'Migration & Modernisation',
    description: 'Migration vers le cloud, modernisation d\'applications legacy, refonte architecturale, migration bases de données.',
    features: ['Cloud Migration', 'Legacy Modernization', 'Re-architecture', 'Zero Downtime'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'cloud'
  }
];

const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600' },
  red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-600' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-600', hover: 'hover:bg-gray-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', hover: 'hover:bg-yellow-600' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-600' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-600', hover: 'hover:bg-slate-600' }
};

export default function Services() {
  const { navigateToSection } = useSectionNavigation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services IT Complets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services IT pour accompagner votre transformation digitale de A à Z
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 ${colors.bg} p-3 rounded-xl`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigateToSection('contact', { subject: service.subject })}
                    className={`w-full ${colors.bg} ${colors.text} ${colors.hover} group-hover:text-white px-4 py-2 rounded-lg transition font-semibold`}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
