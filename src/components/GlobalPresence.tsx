import { Globe, MapPin, Users, Building2, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function GlobalPresence() {
  const { t } = useLanguage();
  return (
    <section id="presence" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 text-white relative overflow-hidden transition-colors">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Globe className="h-6 w-6" />
            <span className="font-semibold">{t('presence.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('presence.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('presence.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('presence.westAfrica')}</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {t('presence.westAfricaDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('presence.international')}</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {t('presence.internationalDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('presence.partners')}</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {t('presence.partnersDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Global Network"
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-2xl mb-6"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-3xl font-bold">180+</p>
                  <p className="text-sm text-blue-100">{t('presence.activeCountries')}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-blue-100">{t('presence.certifications')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">{t('presence.sectors')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              t('sectors.public'),
              t('sectors.banking'),
              t('sectors.fintech'),
              t('sectors.ngo'),
              t('sectors.ecommerce'),
              t('sectors.health'),
              t('sectors.telecom'),
              t('sectors.insurance')
            ].map((sector, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition">
                <p className="font-semibold">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
