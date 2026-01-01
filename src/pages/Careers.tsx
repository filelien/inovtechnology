import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const jobOpenings = [
  {
    id: '1',
    title: 'Développeur Full-Stack Senior',
    location: 'Lomé, Togo / Remote',
    type: 'Temps plein',
    department: 'Développement',
    description: 'Nous recherchons un développeur full-stack senior expérimenté en React, Node.js et bases de données pour rejoindre notre équipe de développement.',
    requirements: [
      '5+ ans d\'expérience en développement web',
      'Maîtrise de React, Node.js, TypeScript',
      'Expérience avec bases de données (PostgreSQL, MongoDB)',
      'Connaissance de Docker et Kubernetes'
    ],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Architecte Cloud Solutions',
    location: 'Remote',
    type: 'Temps plein',
    department: 'Cloud & Infrastructure',
    description: 'Rejoignez notre équipe cloud pour concevoir et déployer des architectures cloud scalables sur Oracle Cloud, AWS et Azure.',
    requirements: [
      '8+ ans d\'expérience en architecture cloud',
      'Certifications Oracle Cloud, AWS ou Azure',
      'Expérience avec Kubernetes, Terraform',
      'Connaissance approfondie de la sécurité cloud'
    ],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Data Engineer',
    location: 'Lomé, Togo',
    type: 'Temps plein',
    department: 'Data & Analytics',
    description: 'Nous cherchons un data engineer pour construire et maintenir nos pipelines de données et data warehouses.',
    requirements: [
      '4+ ans d\'expérience en data engineering',
      'Maîtrise de Python, SQL, ETL/ELT',
      'Expérience avec Apache Spark, Airflow',
      'Connaissance de Power BI ou Tableau'
    ],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Expert Cybersécurité',
    location: 'Remote',
    type: 'Temps plein',
    department: 'Sécurité',
    description: 'Rejoignez notre équipe sécurité pour protéger nos clients contre les cybermenaces et assurer la conformité.',
    requirements: [
      '6+ ans d\'expérience en cybersécurité',
      'Certifications CISSP, ISO 27001',
      'Expérience en audit sécurité et pentest',
      'Connaissance de SIEM et outils de monitoring'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Développeur Oracle Apex',
    location: 'Lomé, Togo',
    type: 'Temps plein',
    department: 'Développement',
    description: 'Expert Oracle Apex recherché pour développer des applications d\'entreprise sur Oracle Database et Oracle Cloud.',
    requirements: [
      '5+ ans d\'expérience Oracle Apex',
      'Maîtrise de PL/SQL',
      'Expérience Oracle Forms, Reports',
      'Connaissance Oracle Database'
    ],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Temps plein',
    department: 'DevOps',
    description: 'Nous recherchons un DevOps engineer pour automatiser nos déploiements et améliorer notre infrastructure CI/CD.',
    requirements: [
      '4+ ans d\'expérience DevOps',
      'Maîtrise de Jenkins, GitLab CI',
      'Expérience avec Terraform, Ansible',
      'Connaissance de Kubernetes, Docker'
    ],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Careers() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Award, title: t('careers.continuousTraining'), description: t('careers.continuousTrainingDesc') },
    { icon: TrendingUp, title: t('careers.careerGrowth'), description: t('careers.careerGrowthDesc') },
    { icon: Users, title: t('careers.dynamicTeam'), description: t('careers.dynamicTeamDesc') },
    { icon: MapPin, title: t('careers.flexibility'), description: t('careers.flexibilityDesc') }
  ];

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
              {t('careers.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('careers.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('careers.whyJoin')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('careers.whyJoinDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('careers.openPositions')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('careers.openPositionsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2">{t('careers.mainRequirements')}</p>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    <span>{t('careers.apply')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('careers.notFindPosition')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('careers.spontaneous')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <Briefcase className="h-5 w-5" />
            <span>{t('careers.spontaneousApplication')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

