import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesPreview from './components/FeaturesPreview';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import EmbedPrototypeForm from './components/EmbedPrototypeForm';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'SIRH Maestro - au service de vos projets SIRH';

    // Update favicon to match the brand color
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href =
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234F46E5"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/></svg>';
    }
  }, []);

  return (
    <div className="bg-white font-sans antialiased">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <EmbedPrototypeForm />
        <FeaturesPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
