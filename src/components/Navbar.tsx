import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { navigateToSection } = useSectionNavigation();

  const handleNavigate = (id: string) => {
    if (location.pathname === '/') {
      navigateToSection(id);
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2 sm:gap-4">
          {/* Bloc logo + titre parfaitement aligné */}
          <Link
            to="/"
            className="group flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-shrink-0 max-w-[60%] sm:max-w-none"
          >
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white shadow-md/40 group-hover:shadow-lg transition-shadow duration-200 shrink-0 overflow-hidden border border-gray-100">
              <Logo className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
            </div>
            <div className="flex flex-col justify-center leading-tight text-gray-900 min-w-0">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight sm:tracking-wide truncate group-hover:text-blue-700 transition-colors duration-200">
                INOV TECHNOLOGY
              </span>
              <span className="hidden lg:block text-xs lg:text-sm text-gray-600 truncate">
                Excellence IT &amp; Data Services
              </span>
            </div>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-4 lg:space-x-6 xl:space-x-8 min-w-0">
            <Link
              to="/services"
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
            >
              Services
            </Link>
            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => handleNavigate('expertise')}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                >
                  Expertise
                </button>
                <button
                  onClick={() => handleNavigate('presence')}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                >
                  Présence
                </button>
              </>
            )}
            <Link
              to="/projects"
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
            >
              Projets
            </Link>
            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => handleNavigate('technologies')}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                >
                  Technologies
                </button>
                <button
                  onClick={() => handleNavigate('certifications')}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                >
                  Certifications
                </button>
              </>
            )}
            <Link
              to="/about"
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
            >
              À Propos
            </Link>
            <Link
              to="/blog"
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm xl:text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 lg:px-5 lg:py-2.5 xl:px-7 xl:py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-xs lg:text-sm xl:text-base shadow-md hover:shadow-lg hover:-translate-y-[1px] whitespace-nowrap shrink-0"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/services" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Services
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('expertise')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Expertise
            </button>
                <button onClick={() => handleNavigate('presence')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                  Présence
                </button>
              </>
            )}
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Projets
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('technologies')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                  Technologies
            </button>
                <button onClick={() => handleNavigate('certifications')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Certifications
            </button>
              </>
            )}
            <Link to="/about" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              À Propos
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Blog
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
