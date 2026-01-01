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
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 text-base md:text-lg relative">
            {/* Background decorative gradient shapes */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-400/20 via-blue-400/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
              <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
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
