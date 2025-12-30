import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux projets</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{project.duration}</p>
                  <p className="text-xs text-gray-500">Durée</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Users className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{project.team}</p>
                  <p className="text-xs text-gray-500">Équipe</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <MapPin className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{project.impact}</p>
                  <p className="text-xs text-gray-500">Impact</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
              >
                <span>Discuter d'un Projet Similaire</span>
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
        <section className="py-12 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Galerie du Projet</h2>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Détails du Projet</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.details}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client</h3>
              <p className="text-gray-700 mb-8">{project.client}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Résultats Obtenus</h3>
              <div className="space-y-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technologies Utilisées</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Lancer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2"
          >
            <span>Démarrer Maintenant</span>
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

