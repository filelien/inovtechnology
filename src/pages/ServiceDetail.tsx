import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', gradient: 'from-teal-500 to-teal-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', gradient: 'from-cyan-500 to-cyan-600' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-600', gradient: 'from-gray-500 to-gray-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', gradient: 'from-yellow-500 to-yellow-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', gradient: 'from-pink-500 to-pink-600' },
    slate: { bg: 'bg-slate-100', text: 'text-slate-600', gradient: 'from-slate-500 to-slate-600' }
  }[service.color];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux services</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-full mb-6`}>
                <Icon className="h-6 w-6" />
                <span className="font-semibold">Service IT</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Demander un Devis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+22890000000"
                  className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg border-2 border-gray-200 inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Nous Appeler</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Détails du Service</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.details}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages Clés</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className={`h-6 w-6 ${colors.text} flex-shrink-0 mt-0.5`} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités</h3>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies Utilisées</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold`}
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
      <section className={`py-20 bg-gradient-to-br ${colors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Envoyer un Message</span>
            </Link>
            <a
              href="tel:+22890000000"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition font-semibold text-lg border-2 border-white/30 inline-flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Appeler Maintenant</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

