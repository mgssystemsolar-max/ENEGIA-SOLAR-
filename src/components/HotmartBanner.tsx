import React from 'react';

export default function HotmartBanner() {
  return (
    <section className="py-12 bg-[#0a192f] text-white border-t-4 border-[#FF6B00]">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0d2340] to-[#0a192f] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Efeito de brilho laranja no fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="md:w-2/3 relative z-10">
            <span className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-2 block">
              Aprenda com o Especialista
            </span>
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Quer aprender a instalar seu próprio <span className="text-[#FF6B00] underline decoration-[#FF6B00]/30">Sistema Off-Grid?</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Descubra os segredos da energia solar com o Márcio Gonçalves. Curso completo, passo a passo, do zero à instalação segura. Economize milhares de reais fazendo você mesmo!
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
              <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> Certificado Incluso</span>
              <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> Acesso Vitalício</span>
            </div>
          </div>

          <div className="md:w-1/3 w-full relative z-10 flex justify-center md:justify-end">
            <a 
              href="https://hotmart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.3)] text-center flex items-center justify-center gap-3"
            >
              <i className="fas fa-graduation-cap text-xl"></i>
              Quero me Inscrever
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
