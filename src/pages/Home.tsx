import Hero from '../components/Hero';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import GlobalPresence from '../components/GlobalPresence';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <GlobalPresence />
      <Certifications />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

