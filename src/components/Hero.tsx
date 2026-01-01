import { Code, Database, Cloud, Shield, TrendingUp, Award } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { navigateToSection } = useSectionNavigation();
  const { t } = useLanguage();

  return (
        <div className="pt-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors relative overflow-hidden">
          {/* Pattern de carreaux avec bordures épaisses */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-[0.1] dark:opacity-[0.085]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-checkerboard-light" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect x="3" y="3" width="54" height="54" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3"/>
                  <rect x="63" y="63" width="54" height="54" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3"/>
                </pattern>
                <pattern id="hero-checkerboard-dark" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect x="3" y="3" width="54" height="54" fill="#4b5563" stroke="#6b7280" strokeWidth="3"/>
                  <rect x="63" y="63" width="54" height="54" fill="#4b5563" stroke="#6b7280" strokeWidth="3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-checkerboard-light)" className="dark:hidden"/>
              <rect width="100%" height="100%" fill="url(#hero-checkerboard-dark)" className="hidden dark:block"/>
            </svg>
          </div>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.title')}
              <span className="text-blue-600 dark:text-blue-400">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateToSection('contact')}
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.startProject')}
              </button>
              <button
                onClick={() => navigateToSection('services')}
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-semibold text-lg border-2 border-gray-200 dark:border-gray-700"
              >
                {t('hero.ourServices')}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">180+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('hero.countries')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">500+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('hero.projects')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('hero.experience')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-double hover:shadow-double-hover transition transform hover:-translate-y-1 duration-300 border border-gray-200/50 dark:border-gray-700/50">
              <Code className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('hero.webMobile')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.webMobileDesc')}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 mt-8 border border-gray-100 dark:border-gray-700">
              <Database className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('hero.dataBi')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.dataBiDesc')}</p>
            </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-double hover:shadow-double-hover transition transform hover:-translate-y-1 duration-300 border border-gray-200/50 dark:border-gray-700/50">
              <Cloud className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('hero.cloud')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.cloudDesc')}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 mt-8 border border-gray-100 dark:border-gray-700">
              <Shield className="h-12 w-12 text-red-600 dark:text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('hero.security')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.securityDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 dark:bg-blue-700 py-4 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-center space-x-12 text-white overflow-hidden">
            <div className="flex items-center space-x-2 animate-pulse">
              <Award className="h-5 w-5" />
              <span className="font-semibold">{t('hero.certified')}</span>
            </div>
            <div className="flex items-center space-x-2 animate-pulse delay-100">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">{t('hero.roi')}</span>
            </div>
            <div className="flex items-center space-x-2 animate-pulse delay-200">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">{t('hero.maxSecurity')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
