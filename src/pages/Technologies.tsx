import { Code, Database, Cloud, Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function TechnologiesPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const techCategories = [
    {
      title: t('technologies.development'),
      icon: Code,
      color: 'blue',
      technologies: [
      { name: 'React', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Vue.js', logo: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Angular', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Node.js', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Python', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Java', logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: '.NET', logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Laravel', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
    ]
  },
    {
      title: t('technologies.database'),
      icon: Database,
      color: 'green',
      technologies: [
      { name: 'Oracle DB', logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'PostgreSQL', logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'MySQL', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'MongoDB', logo: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Redis', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Elasticsearch', logo: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'SQL Server', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Cassandra', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
    ]
  },
    {
      title: t('technologies.cloud'),
      icon: Cloud,
      color: 'purple',
      technologies: [
      { name: 'Oracle Cloud', logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'AWS', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Azure', logo: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Google Cloud', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Docker', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Kubernetes', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Terraform', logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Ansible', logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
    ]
  },
    {
      title: t('technologies.devops'),
      icon: Wrench,
      color: 'orange',
      technologies: [
      { name: 'Git', logo: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Jenkins', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'GitLab CI', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Prometheus', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Grafana', logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Apache', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Nginx', logo: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
      { name: 'Linux', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
      ]
    }
  ];

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
            <Link
              to="/"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>{t('common.backHome')}</span>
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('technologies.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('technologies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-16">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600'
              };

              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-600">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} p-4 rounded-2xl`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center space-y-3 group border border-gray-100 dark:border-gray-700"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          {tech.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-white text-center transition-colors">
            <h3 className="text-3xl font-bold mb-4">
              {t('technologies.adapted')}
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('technologies.adaptedDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">{t('technologies.performance')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">{t('technologies.scalability')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">{t('technologies.securityTech')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">{t('technologies.cost')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

