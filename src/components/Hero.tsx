import { Code, Database, Cloud, Shield, TrendingUp, Award } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

export default function Hero() {
  const { navigateToSection } = useSectionNavigation();

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Leader en Solutions IT & Data en Afrique
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Solutions IT Complètes pour
              <span className="text-blue-600"> l'Afrique Moderne</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              INOV TECHNOLOGY vous accompagne dans votre transformation digitale avec des services de développement d'applications web & mobile, cloud, data engineering, cybersécurité et infrastructure IT.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Démarrer un Projet
              </button>
              <button
                onClick={() => navigateToSection('services')}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg border-2 border-gray-200"
              >
                Nos Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t">
              <div>
                <p className="text-3xl font-bold text-gray-900">180+</p>
                <p className="text-sm text-gray-600">Pays Couverts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Projets Réalisés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Ans d'Expérience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Développement Web & Mobile</h3>
              <p className="text-sm text-gray-600">Applications sur mesure, performantes et évolutives</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 mt-8">
              <Database className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data & BI</h3>
              <p className="text-sm text-gray-600">Data warehouse, analytics et visualisation</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
              <Cloud className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud & Infrastructure</h3>
              <p className="text-sm text-gray-600">Oracle Cloud, AWS, Azure, architecture scalable</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 mt-8">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cybersécurité</h3>
              <p className="text-sm text-gray-600">Protection avancée et conformité</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-4">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-center space-x-12 text-white overflow-hidden">
            <div className="flex items-center space-x-2 animate-pulse">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Certifié Oracle</span>
            </div>
            <div className="flex items-center space-x-2 animate-pulse delay-100">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">ROI Garanti</span>
            </div>
            <div className="flex items-center space-x-2 animate-pulse delay-200">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Sécurité Maximale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
