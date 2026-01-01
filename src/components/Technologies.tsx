import { Code, Database, Cloud, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Technologies() {
  const { t } = useLanguage();

  const techCategories = [
    {
      title: t('technologies.development'),
      icon: Code,
      color: 'blue',
      description: t('technologies.developmentDesc')
    },
    {
      title: t('technologies.database'),
      icon: Database,
      color: 'green',
      description: t('technologies.databaseDesc')
    },
    {
      title: t('technologies.cloud'),
      icon: Cloud,
      color: 'purple',
      description: t('technologies.cloudDesc')
    },
    {
      title: t('technologies.devops'),
      icon: Wrench,
      color: 'orange',
      description: t('technologies.devopsDesc')
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('technologies.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600',
              orange: 'from-orange-500 to-orange-600'
            };

            return (
              <Link
                key={index}
                to="/technologies"
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  <span>{t('technologies.seeTech')}</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            {t('technologies.adapted')}
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('technologies.adaptedDesc')}
          </p>
          <Link
            to="/technologies"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <span>{t('technologies.discover')}</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
