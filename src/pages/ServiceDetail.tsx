import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { services as servicesData } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getTranslatedServices } from '../utils/getTranslatedServices';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const services = getTranslatedServices(t);
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('notFound.serviceNotFound')}</h1>
          <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            {t('notFound.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const colors = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', gradient: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', gradient: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', gradient: 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700' },
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', gradient: 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', gradient: 'from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', gradient: 'from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', gradient: 'from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700' },
    gray: { bg: 'bg-gray-100 dark:bg-gray-700', text: 'text-gray-600 dark:text-gray-300', gradient: 'from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', gradient: 'from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', gradient: 'from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-700', text: 'text-slate-600 dark:text-slate-300', gradient: 'from-slate-500 to-slate-600 dark:from-slate-600 dark:to-slate-700' }
  }[service.color];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{t('footer.allServices')}</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-full mb-6`}>
                <Icon className="h-6 w-6" />
                <span className="font-semibold">{t('services.title')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
                >
                  <span>{t('contact.title')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+22870662821"
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>{t('common.callNow')}</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('common.details')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {service.details}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('common.results')}</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className={`h-6 w-6 ${colors.text} flex-shrink-0 mt-0.5`} />
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('common.features')}</h3>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('common.technologies')}</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${colors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('common.ready')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('common.contactToday')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>{t('common.sendMessage')}</span>
            </Link>
            <a
              href="tel:+22870662821"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition font-semibold text-lg border-2 border-white/30 inline-flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>{t('common.callNow')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

