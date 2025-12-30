import { Code, Database, Cloud, Server, Shield, Zap } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Code,
    title: 'Développement Full-Stack',
    skills: ['React, Vue, Angular, Node.js', 'Python, Java, .NET', 'React Native, Flutter', 'TypeScript, JavaScript ES6+'],
    experience: '15+ ans',
    projects: '200+',
    color: 'blue'
  },
  {
    icon: Database,
    title: 'Bases de Données & Data',
    skills: ['Oracle Database Expert', 'PostgreSQL, MySQL, MongoDB', 'Data Warehouse, ETL', 'Big Data, Spark, Hadoop'],
    experience: '15+ ans',
    projects: '150+',
    color: 'green'
  },
  {
    icon: Cloud,
    title: 'Oracle Cloud & Cloud Computing',
    skills: ['Oracle Cloud Infrastructure', 'AWS, Azure, Google Cloud', 'Kubernetes, Docker', 'Terraform, CloudFormation'],
    experience: '10+ ans',
    projects: '100+',
    color: 'orange'
  },
  {
    icon: Server,
    title: 'Infrastructure & DevOps',
    skills: ['CI/CD Jenkins, GitLab', 'Linux Administration', 'Monitoring, Observability', 'Automatisation Ansible'],
    experience: '12+ ans',
    projects: '180+',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    skills: ['Pentest & Audit Sécurité', 'SIEM, SOC', 'Conformité RGPD, ISO 27001', 'WAF, IDS/IPS'],
    experience: '8+ ans',
    projects: '80+',
    color: 'red'
  },
  {
    icon: Zap,
    title: 'Oracle Apex Development',
    skills: ['Oracle Apex Expert', 'PL/SQL Advanced', 'Oracle Forms, Reports', 'Integration & APIs'],
    experience: '15+ ans',
    projects: '120+',
    color: 'cyan'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Expertise Technique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe d'experts certifiés avec une expérience approfondie dans les technologies les plus avancées
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${colorClasses[area.color as keyof typeof colorClasses]} p-6`}>
                  <Icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {area.title}
                  </h3>
                  <div className="flex space-x-4 text-white/90 text-sm">
                    <div>
                      <p className="font-semibold">{area.experience}</p>
                      <p className="text-xs">expérience</p>
                    </div>
                    <div>
                      <p className="font-semibold">{area.projects}</p>
                      <p className="text-xs">projets</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {area.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[area.color as keyof typeof colorClasses]} mt-1.5 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm leading-tight">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600">Projets Livrés</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">180+</p>
              <p className="text-gray-600">Pays Couverts</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-purple-600">98%</p>
              <p className="text-gray-600">Satisfaction Client</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-orange-600">24/7</p>
              <p className="text-gray-600">Support Disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
