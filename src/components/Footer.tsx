import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Languages, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'cr', name: 'Kréyòl Gwiyan', flag: '🇬🇫' }
];

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find(lang => lang.code === language);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black text-white overflow-x-hidden relative">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
            {/* Company Info - Compact & Modern */}
            <div className="space-y-5">
              <Link to="/" className="inline-block group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative z-10 bg-gray-800 p-2 rounded-xl">
                      <Logo className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                      INOV TECHNOLOGY
                    </h3>
                    <p className="text-xs text-gray-400">Excellence IT & Data</p>
                  </div>
                </div>
              </Link>
              
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                {t('footer.description')}
              </p>
              
              {/* Social Media - Compact */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2.5 uppercase tracking-wide">{t('footer.followUs')}</p>
                <div className="flex space-x-2">
                  <a 
                    href="#" 
                    className="bg-gray-800 hover:bg-blue-600 p-2.5 rounded-lg transition-all duration-200 transform hover:scale-105"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-800 hover:bg-blue-400 p-2.5 rounded-lg transition-all duration-200 transform hover:scale-105"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-800 hover:bg-blue-700 p-2.5 rounded-lg transition-all duration-200 transform hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-800 hover:bg-pink-600 p-2.5 rounded-lg transition-all duration-200 transform hover:scale-105"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services - Clean & Aligned */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white relative pb-2.5 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600">
                {t('footer.services')}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/services" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.allServices')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-mobile" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.webMobile')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/data-engineering" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.dataEngineering')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-infrastructure" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.cloud')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/cybersecurity" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.cybersecurity')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/oracle-apex" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.oracle')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company - Clean & Aligned */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white relative pb-2.5 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600">
                {t('footer.company')}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.projects')}
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.careers')}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.blog')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Language - Compact & Modern */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white relative pb-2.5 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600">
                {t('footer.contactTitle')}
              </h4>
              <ul className="space-y-3 mb-5">
                <li className="flex items-center space-x-2.5 text-sm text-gray-400 group">
                  <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <a href="tel:+22870662821" className="hover:text-blue-400 transition-colors">
                    +228 70 66 28 21
                  </a>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-gray-400 group">
                  <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <a href="mailto:ynovafrik@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                    ynovafrik@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-2.5 text-sm text-gray-400 group">
                  <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="hover:text-blue-400 transition-colors">{t('footer.location')}</p>
                    <p className="text-xs text-gray-500">{t('footer.region')}</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-gray-400 group">
                  <Globe className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <p className="hover:text-blue-400 transition-colors">{t('footer.presence')}</p>
                </li>
              </ul>

              {/* Language Selector - Compact */}
              <div className="relative mb-3" ref={languageMenuRef}>
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-3 py-2.5 flex items-center justify-between transition-all duration-200 group hover:border-blue-500"
                >
                  <div className="flex items-center space-x-2">
                    <Languages className="h-3.5 w-3.5 text-blue-400" />
                    <span className="text-xs text-gray-300 font-medium">
                      {currentLanguage?.flag} {currentLanguage?.name}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 text-left hover:bg-gray-700 transition-colors flex items-center space-x-2 text-xs ${
                          language === lang.code 
                            ? 'bg-blue-900/30 text-blue-400 border-l-2 border-blue-500' 
                            : 'text-gray-300'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-medium flex-1">{lang.name}</span>
                        {language === lang.code && (
                          <svg className="h-3.5 w-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle - Compact */}
              <button
                onClick={toggleTheme}
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-3 py-2.5 flex items-center justify-center space-x-2 transition-all duration-200 group hover:border-blue-500"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-yellow-400" />
                    <span className="text-xs text-gray-300 font-medium">{t('footer.lightMode')}</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-blue-400" />
                    <span className="text-xs text-gray-300 font-medium">{t('footer.darkMode')}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Legal & Certifications - Clean */}
          <div className="border-t border-gray-800 pt-6 mt-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                {t('footer.legal')}
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                {t('footer.gdpr')}
              </a>
            </div>

            <div className="text-xs text-gray-500 mb-4">
              <p>{t('footer.certifications')}</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-4">
              <span><span className="text-gray-400">RCCM:</span> TG-LFW-01-2023-A10-02858</span>
              <span><span className="text-gray-400">NIF:</span> 1001853268</span>
              <span><span className="text-gray-400">CNSS:</span> 71430</span>
            </div>

            <p className="text-xs text-gray-500 text-center md:text-left">
              {t('footer.copyright')}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
