import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-solar-dark text-white pt-36 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Energia Inteligente</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 mb-6 leading-tight">
            Transforme o Sol em <br /><span className="text-solar-orange underline decoration-white/20">Economia Real</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            Reduza sua conta de luz em até 95%. Projetos personalizados da MgS System Solar para <strong>Juazeiro do Norte e toda a região do Cariri</strong> com tecnologia de ponta e garantia de 25 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#calculadora" className="bg-solar-orange px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl text-center">SIMULAR ECONOMIA</a>
            <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-solar-orange transition flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-green-500"></i> Falar com Especialista
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" 
            className="rounded-3xl shadow-2xl border-4 border-white/5 w-full" 
            alt="Painéis Solares MgS" 
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
