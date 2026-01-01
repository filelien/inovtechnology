import { Code, Database, Cloud, Server, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const expertiseAreas = [
  {
    icon: Code,
    titleKey: 'expertise.fullstack.title',
    skillsKey: 'expertise.fullstack.skills',
    experience: '15+ ans',
    projects: '200+',
    color: 'blue'
  },
  {
    icon: Database,
    titleKey: 'expertise.database.title',
    skillsKey: 'expertise.database.skills',
    experience: '15+ ans',
    projects: '150+',
    color: 'green'
  },
  {
    icon: Cloud,
    titleKey: 'expertise.cloud.title',
    skillsKey: 'expertise.cloud.skills',
    experience: '10+ ans',
    projects: '100+',
    color: 'orange'
  },
  {
    icon: Server,
    titleKey: 'expertise.infradevops.title',
    skillsKey: 'expertise.infradevops.skills',
    experience: '12+ ans',
    projects: '180+',
    color: 'purple'
  },
  {
    icon: Shield,
    titleKey: 'expertise.cybersecurity.title',
    skillsKey: 'expertise.cybersecurity.skills',
    experience: '8+ ans',
    projects: '80+',
    color: 'red'
  },
  {
    icon: Zap,
    titleKey: 'expertise.oracleapex.title',
    skillsKey: 'expertise.oracleapex.skills',
    experience: '15+ ans',
    projects: '120+',
    color: 'cyan'
  }
];

export default function Expertise() {
  const { t } = useLanguage();

  const getTranslatedSkills = (skillsKey: string): string[] => {
    const skills = t(skillsKey);
    return skills.split('|').map(s => s.trim());
  };

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('expertise.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('expertise.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              orange: 'from-orange-500 to-orange-600',
              purple: 'from-purple-500 to-purple-600',
              red: 'from-red-500 to-red-600',
              cyan: 'from-cyan-500 to-cyan-600'
            };

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`bg-gradient-to-br ${colorClasses[area.color as keyof typeof colorClasses]} p-6`}>
                  <Icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {area.titleKey ? t(area.titleKey) : ''}
                  </h3>
                  <div className="flex space-x-4 text-white/90 text-sm">
                    <div>
                      <p className="font-semibold">{area.experience}</p>
                      <p className="text-xs">{t('expertise.experience')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{area.projects}</p>
                      <p className="text-xs">{t('expertise.projects')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {(area.skillsKey ? getTranslatedSkills(area.skillsKey) : []).map((skill, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[area.color as keyof typeof colorClasses]} mt-1.5 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-tight">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">500+</p>
              <p className="text-gray-600 dark:text-gray-300">{t('expertise.delivered')}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">180+</p>
              <p className="text-gray-600 dark:text-gray-300">{t('expertise.countries')}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">98%</p>
              <p className="text-gray-600 dark:text-gray-300">{t('expertise.satisfaction')}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">24/7</p>
              <p className="text-gray-600 dark:text-gray-300">{t('expertise.support')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
