import { Link } from 'react-router-dom';
import { Award, Users, Globe, TrendingUp, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.history')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {t('about.historyText1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {t('about.historyText2')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.historyText3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe INOV TECHNOLOGY"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bureau INOV TECHNOLOGY"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technologie"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Innovation"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.values')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.valuesDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence',
                description: 'Nous visons l\'excellence dans tout ce que nous faisons, en livrant des solutions de qualité supérieure.'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Nous sommes passionnés par la technologie et l\'impact positif qu\'elle peut avoir sur les organisations.'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Nous croyons en la force du travail d\'équipe et en la collaboration avec nos clients.'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Nous restons à la pointe de la technologie et innovons constamment pour offrir les meilleures solutions.'
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.achievements')}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre expertise et de notre impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '500+', label: 'Projets Livrés', color: 'text-yellow-300' },
              { icon: Globe, number: '180+', label: 'Pays Couverts', color: 'text-green-300' },
              { icon: Users, number: '200+', label: 'Experts Certifiés', color: 'text-blue-300' },
              { icon: TrendingUp, number: '98%', label: 'Satisfaction Client', color: 'text-purple-300' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition"
                >
                  <Icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <p className="text-5xl font-bold mb-2">{stat.number}</p>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.team')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe d'experts passionnés et certifiés, dédiée à votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
                name: 'Équipe Développement',
                role: 'Développeurs Full-Stack',
                description: 'Experts en React, Vue, Angular, Node.js et technologies modernes'
              },
              {
                image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
                name: 'Équipe Cloud & DevOps',
                role: 'Architectes Cloud',
                description: 'Spécialistes Oracle Cloud, AWS, Azure et infrastructure'
              },
              {
                image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
                name: 'Équipe Data & BI',
                role: 'Data Engineers',
                description: 'Experts en data warehouse, ETL, BI et analytics'
              }
            ].map((team, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{team.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{team.role}</p>
                  <p className="text-gray-600">{team.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/careers"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
            >
              <span>Rejoindre Notre Équipe</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.whyChoose')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages qui font de nous le partenaire idéal pour votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              '15+ ans d\'expérience en solutions IT',
              '500+ projets livrés avec succès',
              'Équipe de 200+ experts certifiés',
              'Présence dans 180+ pays',
              'Support 24/7 disponible',
              'Certifications Oracle, AWS, Azure',
              'Satisfaction client de 98%',
              'ROI garanti sur tous nos projets'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Travailler Avec Nous ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>Contactez-Nous</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

