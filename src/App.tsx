import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';

// Lazy load below-the-fold components for better initial load performance
const Partners = lazy(() => import('./components/Partners'));
const Calculator = lazy(() => import('./components/Calculator'));
const Certifications = lazy(() => import('./components/Certifications'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Expertise = lazy(() => import('./components/Expertise'));
const FAQ = lazy(() => import('./components/FAQ'));
const PostSales = lazy(() => import('./components/PostSales'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const LOGO_URL = "https://placehold.co/200x60/png?text=MgS+System+Solar"; // Substitua pela URL da sua logo

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans selection:bg-solar-orange selection:text-white transition-colors duration-300 ${darkMode ? 'bg-solar-dark text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        LOGO_URL={LOGO_URL} 
        onAdminLogin={() => setIsAdmin(true)} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <Hero />

      <Suspense fallback={<div className="py-20 text-center text-gray-400">Carregando...</div>}>
        <Partners />
        <Calculator />
        <Certifications />
        <Portfolio isAdmin={isAdmin} />
        <Testimonials />
        <Expertise />
        <FAQ />
        <PostSales />
        <Contact />
        <Footer LOGO_URL={LOGO_URL} />
      </Suspense>

      <BackToTop />
    </div>
  );
}
