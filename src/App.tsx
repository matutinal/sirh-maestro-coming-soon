import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesPreview from './components/FeaturesPreview';
import Footer from './components/Footer';
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
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJhZGFyLWljb24gbHVjaWRlLXJhZGFyIj48cGF0aCBkPSJNMTkuMDcgNC45M0ExMCAxMCAwIDAgMCA2Ljk5IDMuMzQiLz48cGF0aCBkPSJNNCA2aC4wMSIvPjxwYXRoIGQ9Ik0yLjI5IDkuNjJBMTAgMTAgMCAxIDAgMjEuMzEgOC4zNSIvPjxwYXRoIGQ9Ik0xNi4yNCA3Ljc2QTYgNiAwIDEgMCA4LjIzIDE2LjY3Ii8+PHBhdGggZD0iTTEyIDE4aC4wMSIvPjxwYXRoIGQ9Ik0xNy45OSAxMS42NkE2IDYgMCAwIDEgMTUuNzcgMTYuNjciLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PHBhdGggZD0ibTEzLjQxIDEwLjU5IDUuNjYtNS42NiIvPjwvc3ZnPg==';
    }
  }, []);
  
  return (
    <div className="bg-white font-sans antialiased">
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
