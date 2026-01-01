import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getTranslatedServices } from '../utils/getTranslatedServices';

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

export default function ServicesPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const services = getTranslatedServices(t);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 text-white relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('services.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
              >
                <span>{t('contact.title')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-blue-500/30 transition font-semibold text-lg border-2 border-white/30"
              >
                {t('projects.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = colorClasses[service.color];

              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 ${colors.bg} p-4 rounded-xl`}>
                      <Icon className={`h-10 w-10 ${colors.text}`} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className={`h-4 w-4 ${colors.text} mr-2 flex-shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className={`w-full ${colors.bg} dark:bg-gray-700 ${colors.text} dark:text-white ${colors.hover} dark:hover:bg-gray-600 group-hover:text-white px-4 py-3 rounded-lg transition font-semibold flex items-center justify-center space-x-2`}
                    >
                      <span>{t('services.learnMore')}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('common.ready')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('common.contactToday')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>{t('contact.title')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
