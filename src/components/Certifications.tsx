import { Award, CheckCircle, Shield, Star } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import { useLanguage } from '../contexts/LanguageContext';

const certifications = [
  {
    name: 'Oracle Certified Professional',
    category: 'Database Administration',
    level: 'Expert',
    year: '2024',
    icon: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Oracle Cloud Infrastructure',
    category: 'Cloud Architecture',
    level: 'Architect Associate',
    year: '2024',
    icon: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'AWS Solutions Architect',
    category: 'Cloud Computing',
    level: 'Professional',
    year: '2023',
    icon: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Oracle Apex Developer',
    category: 'Application Development',
    level: 'Certified Expert',
    year: '2024',
    icon: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Certified Information Systems Security',
    category: 'Cybersecurity',
    level: 'CISSP',
    year: '2023',
    icon: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Kubernetes Administrator',
    category: 'Container Orchestration',
    level: 'CKA',
    year: '2023',
    icon: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'ISO 27001 Lead Auditor',
    category: 'Information Security',
    level: 'Certified',
    year: '2023',
    icon: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Microsoft Azure Administrator',
    category: 'Cloud Services',
    level: 'AZ-104',
    year: '2024',
    icon: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Certifications() {
  const { navigateToSection } = useSectionNavigation();
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: t('certifications.moreThan50'),
      description: t('certifications.moreThan50Desc')
    },
    {
      icon: Star,
      title: t('certifications.excellence'),
      description: t('certifications.excellenceDesc')
    },
    {
      icon: Shield,
      title: t('certifications.security'),
      description: t('certifications.securityDesc')
    },
    {
      icon: CheckCircle,
      title: t('certifications.training'),
      description: t('certifications.trainingDesc')
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full mb-6">
            <Award className="h-6 w-6" />
            <span className="font-semibold">{t('certifications.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-gray-700 hover:shadow-lg transition"
              >
                <div className="bg-blue-600 dark:bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('certifications.main')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {cert.year}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                      {cert.level}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {cert.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            {t('certifications.excellenceTitle')}
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('certifications.excellenceDesc2')}
          </p>
          <button
            onClick={() => navigateToSection('contact', { subject: 'other' })}
            className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>{t('certifications.discuss')}</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
