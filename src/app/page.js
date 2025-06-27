import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DarkSection from './components/DarkSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DarkSection />
      <FeaturesSection />
      <ProjectsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
