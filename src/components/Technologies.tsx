import { Code, Database, Cloud, Wrench } from 'lucide-react';

const techCategories = [
  {
    title: 'Développement',
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
    title: 'Bases de Données',
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
    title: 'Cloud & Infrastructure',
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
    title: 'DevOps & Outils',
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

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies & Outils Maîtrisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous travaillons avec les technologies les plus modernes et éprouvées pour garantir performance et fiabilité
          </p>
        </div>

        <div className="space-y-12">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600',
              orange: 'from-orange-500 to-orange-600'
            };

            return (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} p-4 rounded-2xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center space-y-3 group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 text-center">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Technologies Adaptées à Vos Besoins
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nous sélectionnons les meilleures technologies en fonction de votre contexte, vos contraintes et vos objectifs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Performance Optimale</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Évolutivité Garantie</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Sécurité Renforcée</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Coûts Optimisés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
