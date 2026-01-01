import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ProjectsPage from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import TechnologiesPage from './pages/Technologies';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-300 text-base md:text-lg relative">
            {/* Pattern de carreaux avec bordures épaisses en arrière-plan */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <svg className="w-full h-full opacity-[0.12] dark:opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="checkerboard-pattern-light" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                    <rect x="3" y="3" width="54" height="54" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3"/>
                    <rect x="63" y="63" width="54" height="54" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3"/>
                  </pattern>
                  <pattern id="checkerboard-pattern-dark" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                    <rect x="3" y="3" width="54" height="54" fill="#4b5563" stroke="#6b7280" strokeWidth="3"/>
                    <rect x="63" y="63" width="54" height="54" fill="#4b5563" stroke="#6b7280" strokeWidth="3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#checkerboard-pattern-light)" className="dark:hidden"/>
                <rect width="100%" height="100%" fill="url(#checkerboard-pattern-dark)" className="hidden dark:block"/>
              </svg>
            </div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
