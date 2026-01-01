import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { projects as projectsData } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getTranslatedProjects } from '../utils/getTranslatedProjects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const projects = getTranslatedProjects(t);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('notFound.projectNotFound')}</h1>
          <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            {t('notFound.backToProjects')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{t('footer.projects')}</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6 font-semibold">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.duration')}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{project.team}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.team')}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{project.impact}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('common.impact')}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
              >
                <span>{t('common.discussProject')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.images && project.images.length > 1 && (
        <section className="py-12 bg-white dark:bg-gray-800 transition-colors">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('common.projectGallery')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.images.map((img, idx) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden group">
                  <img
                    src={img}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Details Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('common.details')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {project.details}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('common.client')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{project.client}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('common.results')}</h3>
              <div className="space-y-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-100 dark:border-gray-600">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">{result}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">{t('common.technologies')}</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold"
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
            <span>{t('common.startNow')}</span>
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

