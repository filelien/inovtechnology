import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold">INOV TECHNOLOGY</h3>
                <p className="text-sm text-gray-400">Excellence IT & Data</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leader en solutions IT complètes : développement web & mobile, cloud, data engineering, cybersécurité. 15+ ans d'expérience, 180+ pays.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-blue-400 transition">
                  Tous nos Services
                </Link>
              </li>
              <li>
                <Link to="/services/web-mobile" className="hover:text-blue-400 transition">
                  Développement Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/services/data-engineering" className="hover:text-blue-400 transition">
                  Data Engineering & BI
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="hover:text-blue-400 transition">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="hover:text-blue-400 transition">
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link to="/services/oracle-apex" className="hover:text-blue-400 transition">
                  Oracle Apex & Database
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition">
                  Projets Réalisés
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400 transition">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+22890000000" className="hover:text-blue-400 transition">
                    +228 90 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:ynovafrik@gmail.com" className="hover:text-blue-400 transition">
                    ynovafrik@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lomé, Togo</p>
                  <p className="text-sm">Afrique de l'Ouest</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Globe className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Présence: 180+ pays</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Politique de Confidentialité</a>
              <a href="#" className="hover:text-blue-400 transition">Conditions d'Utilisation</a>
              <a href="#" className="hover:text-blue-400 transition">Mentions Légales</a>
              <a href="#" className="hover:text-blue-400 transition">RGPD</a>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <p>Certifications: Oracle, AWS, Azure, ISO 27001, CISSP, CKA</p>
            </div>
          </div>

          <div className="mb-6 pb-6 border-b border-gray-800">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <span className="font-semibold text-gray-300">RCCM:</span> TG-LFW-01-2023-A10-02858
              </div>
              <div>
                <span className="font-semibold text-gray-300">NIF:</span> 1001853268
              </div>
              <div>
                <span className="font-semibold text-gray-300">CNSS:</span> 71430
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 INOV TECHNOLOGY. Tous droits réservés. | 15+ ans d'excellence IT en Afrique et dans le monde
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition shadow-lg"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span>🇹🇬 Togo</span>
            <span>🇧🇯 Bénin</span>
            <span>🇨🇮 Côte d'Ivoire</span>
            <span>🇸🇳 Sénégal</span>
            <span>Ng Niger </span>
            <span>🇧🇫 Burkina Faso</span>
            <span>🌍 180+ Pays</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
