import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getTranslatedProjects } from '../utils/getTranslatedProjects';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const projects = useMemo(() => getTranslatedProjects(t), [t]);
  
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
    return [t('common.all'), ...uniqueCategories];
  }, [projects, t]);
  
  const [selectedCategory, setSelectedCategory] = useState(t('common.all'));
  const filteredProjects = useMemo(() => {
    return selectedCategory === t('common.all')
      ? projects
      : projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory, t]);

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
              {t('projects.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">{t('common.filterBy')}</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-600 transform hover:-translate-y-2"
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
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b dark:border-gray-600">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.duration')}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.team}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.team')}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">{project.impact}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.impact')}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
                  </div>
                </div>
              </Link>
            ))}
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
            className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>{t('hero.startProject')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
