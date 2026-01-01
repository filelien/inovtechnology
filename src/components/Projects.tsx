import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslatedProjects } from '../utils/getTranslatedProjects';
import { useMemo } from 'react';

// Note: Les projets sont maintenant chargés dynamiquement via getTranslatedProjects
// Ce composant affiche les 6 premiers projets sur la page d'accueil

export default function Projects() {
  const { navigateToSection } = useSectionNavigation();
  const { t } = useLanguage();
  const allProjects = useMemo(() => getTranslatedProjects(t), [t]);
  const projects = allProjects.slice(0, 6); // Afficher les 6 premiers projets sur la page d'accueil

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-semibold">
                    {project.client}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('projects.duration')}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.team}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('projects.team')}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.impact}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('projects.impact')}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('projects.technologies')}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigateToSection('contact', { subject: project.subject })}
                  className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 text-gray-700 dark:text-gray-200 hover:text-white px-4 py-3 rounded-lg transition font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span>{t('projects.viewDetails')}</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg inline-block"
          >
            {t('projects.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
