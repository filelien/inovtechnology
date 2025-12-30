import { Globe, MapPin, Users, Building2, TrendingUp, Award } from 'lucide-react';

export default function GlobalPresence() {
  return (
    <section id="presence" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Globe className="h-6 w-6" />
            <span className="font-semibold">Présence Mondiale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            INOV TECHNOLOGY dans Plus de 180 Pays
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une expertise reconnue internationalement avec des projets déployés sur tous les continents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Afrique de l'Ouest</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Présence forte au Togo, Bénin, Ghana, Côte d'Ivoire, Sénégal, Mali, Burkina Faso. Expertise UEMOA.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Projets Internationaux</h3>
                  <p className="text-blue-100 leading-relaxed">
                    États, administrations, ONG internationales, institutions financières, banques, assurances, microfinance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Partenaires Stratégiques</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Collaborations avec les plus grandes institutions africaines et organisations internationales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Global Network"
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-3xl font-bold">180+</p>
                  <p className="text-sm text-blue-100">Pays Actifs</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-blue-100">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">Secteurs d'Activité Couverts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Administrations Publiques',
              'Banques & Finance',
              'Microfinance & Fintech',
              'ONG & Organisations',
              'E-commerce & Retail',
              'Santé & Éducation',
              'Télécommunications',
              'Assurances'
            ].map((sector, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition">
                <p className="font-semibold">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
