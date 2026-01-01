import { Smartphone, Globe, Database, Cloud, Shield, LineChart, Wrench, Users, Code2, Layers, Server, Lock } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  {
    icon: Smartphone,
    titleKey: 'services.webmobile.title',
    descriptionKey: 'services.webmobile.description',
    featuresKey: 'services.webmobile.features',
    color: 'blue',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'web-mobile'
  },
  {
    icon: Database,
    titleKey: 'services.dataengineering.title',
    descriptionKey: 'services.dataengineering.description',
    featuresKey: 'services.dataengineering.features',
    color: 'green',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'data'
  },
  {
    icon: Cloud,
    titleKey: 'services.cloudinfrastructure.title',
    descriptionKey: 'services.cloudinfrastructure.description',
    featuresKey: 'services.cloudinfrastructure.features',
    color: 'purple',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'cloud'
  },
  {
    icon: Shield,
    titleKey: 'services.cybersecurity.title',
    descriptionKey: 'services.cybersecurity.description',
    featuresKey: 'services.cybersecurity.features',
    color: 'red',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'security'
  },
  {
    icon: Code2,
    titleKey: 'services.oracleapex.title',
    descriptionKey: 'services.oracleapex.description',
    featuresKey: 'services.oracleapex.features',
    color: 'orange',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'oracle'
  },
  {
    icon: Layers,
    titleKey: 'services.devops.title',
    descriptionKey: 'services.devops.description',
    featuresKey: 'services.devops.features',
    color: 'teal',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'support'
  },
  {
    icon: Server,
    titleKey: 'services.databaseadmin.title',
    descriptionKey: 'services.databaseadmin.description',
    featuresKey: 'services.databaseadmin.features',
    color: 'cyan',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'oracle'
  },
  {
    icon: Wrench,
    titleKey: 'services.support.title',
    descriptionKey: 'services.support.description',
    featuresKey: 'services.support.features',
    color: 'gray',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'support'
  },
  {
    icon: LineChart,
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    featuresKey: 'services.consulting.features',
    color: 'yellow',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'other'
  },
  {
    icon: Users,
    titleKey: 'services.erpcrm.title',
    descriptionKey: 'services.erpcrm.description',
    featuresKey: 'services.erpcrm.features',
    color: 'pink',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'erp'
  },
  {
    icon: Lock,
    titleKey: 'services.compliance.title',
    descriptionKey: 'services.compliance.description',
    featuresKey: 'services.compliance.features',
    color: 'slate',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'security'
  },
  {
    icon: Globe,
    titleKey: 'services.migration.title',
    descriptionKey: 'services.migration.description',
    featuresKey: 'services.migration.features',
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
  const { t } = useLanguage();

  const getTranslatedFeatures = (featuresKey: string): string[] => {
    const features = t(featuresKey);
    return features.split('|').map(f => f.trim());
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-double hover:shadow-double-hover transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.titleKey ? t(service.titleKey) : ''}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 ${colors.bg} dark:bg-gray-700 p-3 rounded-xl`}>
                    <Icon className={`h-8 w-8 ${colors.text} dark:text-white`} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.titleKey ? t(service.titleKey) : ''}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.descriptionKey ? t(service.descriptionKey) : ''}
                  </p>

                  <div className="space-y-2 mb-4">
                    {(service.featuresKey ? getTranslatedFeatures(service.featuresKey) : []).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} dark:bg-gray-600 mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigateToSection('contact', { subject: service.subject })}
                    className={`w-full ${colors.bg} ${colors.text} ${colors.hover} group-hover:text-white px-4 py-2 rounded-lg transition font-semibold`}
                  >
                    {t('services.learnMore')}
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
