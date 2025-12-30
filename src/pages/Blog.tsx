import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Les Tendances IT 2025 : Ce qui Attend les Entreprises Africaines',
    excerpt: 'Découvrez les principales tendances technologiques qui façonneront le paysage IT en Afrique en 2025, du cloud computing à l\'IA générative.',
    author: 'Jean Kouassi',
    date: '15 Janvier 2025',
    readTime: '5 min',
    category: 'Technologie',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true
  },
  {
    id: '2',
    title: 'Migration Cloud : Guide Complet pour les PME',
    excerpt: 'Un guide étape par étape pour migrer votre infrastructure vers le cloud, avec les meilleures pratiques et pièges à éviter.',
    author: 'Marie Diallo',
    date: '12 Janvier 2025',
    readTime: '8 min',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false
  },
  {
    id: '3',
    title: 'Cybersécurité en Afrique : Défis et Solutions',
    excerpt: 'Analyse des défis de cybersécurité spécifiques à l\'Afrique et des solutions adaptées pour protéger les entreprises locales.',
    author: 'Amadou Traoré',
    date: '10 Janvier 2025',
    readTime: '6 min',
    category: 'Sécurité',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false
  },
  {
    id: '4',
    title: 'Oracle Apex : Développer des Applications Rapidement',
    excerpt: 'Découvrez comment Oracle Apex permet de développer des applications d\'entreprise robustes en un temps record.',
    author: 'Fatou Sarr',
    date: '8 Janvier 2025',
    readTime: '7 min',
    category: 'Développement',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false
  },
  {
    id: '5',
    title: 'Data Analytics : Transformer les Données en Insights',
    excerpt: 'Comment utiliser l\'analyse de données pour prendre de meilleures décisions stratégiques dans votre entreprise.',
    author: 'Ibrahim Koné',
    date: '5 Janvier 2025',
    readTime: '6 min',
    category: 'Data',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false
  },
  {
    id: '6',
    title: 'Mobile First : L\'Avenir du Développement Web',
    excerpt: 'Pourquoi adopter une approche mobile-first est essentiel pour le succès de votre application web en 2025.',
    author: 'Aissatou Ba',
    date: '3 Janvier 2025',
    readTime: '5 min',
    category: 'Développement',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

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
              Blog & Actualités
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Restez informé des dernières tendances IT, conseils pratiques et actualités de INOV TECHNOLOGY
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Articles Récents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restez Informé
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

