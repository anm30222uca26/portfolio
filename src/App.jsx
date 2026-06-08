import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Projects from './components/sections/Projects';
import GitHubStats from './components/sections/GitHubStats';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import { personalInfo } from './data/personal';

export default function App() {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.role}. Portfolio showcasing projects, skills, GitHub stats, and experience.`}
        />
        <meta property="og:title" content={`${personalInfo.name} | Portfolio`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content={personalInfo.name} />
        <link rel="canonical" href={personalInfo.github} />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Projects />
        <GitHubStats />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
