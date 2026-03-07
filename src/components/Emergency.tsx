import React from 'react';

export default function Emergency() {
  return (
    <section id="emergencia" className="py-20 bg-slate-900 border-y-4 border-red-600 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              <i className="fas fa-exclamation-triangle"></i> Plantão Técnico 24h
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Sua Usina Parou? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Atendimento de Emergência</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Não perca dinheiro com sua usina parada. Nossa equipe de elite está pronta para diagnósticos e reparos críticos em todo o Cariri.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <i className="fas fa-bolt"></i>
                </div>
                <span className="font-medium">Inversores em falha</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <i className="fas fa-fire-extinguisher"></i>
                </div>
                <span className="font-medium">Risco elétrico / Curto</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <i className="fas fa-network-wired"></i>
                </div>
                <span className="font-medium">Queda de rede</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <i className="fas fa-tools"></i>
                </div>
                <span className="font-medium">Reparo Urgente</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://wa.me/5588988360143?text=URGÊNCIA:%20Minha%20usina%20parou%20e%20preciso%20de%20técnico%20urgente!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transition-all transform hover:-translate-y-1 group"
              >
                <i className="fab fa-whatsapp text-3xl"></i>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs font-medium opacity-90 uppercase tracking-wider mb-1">Plantão 1</span>
                  <span>(88) 98836-0143</span>
                </div>
              </a>

              <a 
                href="https://wa.me/5588981098610?text=URGÊNCIA:%20Minha%20usina%20parou%20e%20preciso%20de%20técnico%20urgente!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transition-all transform hover:-translate-y-1 group"
              >
                <i className="fab fa-whatsapp text-3xl"></i>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs font-medium opacity-90 uppercase tracking-wider mb-1">Plantão 2</span>
                  <span>(88) 98109-8610</span>
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4 font-medium">
              *Disponibilidade sujeita a rota técnica. Taxa de urgência aplicável.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Técnico em manutenção de urgência" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-8 z-20">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">SOS Solar</span>
                  </div>
                  <p className="font-bold text-xl mb-1">Suporte Técnico Especializado</p>
                  <p className="text-sm text-gray-300">Equipe equipada para alta complexidade.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce-slow hidden sm:block z-30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 text-xl border border-red-500/30">
                  <i className="fas fa-stopwatch"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Tempo de Resposta</p>
                  <p className="text-lg font-black text-white">Prioritário</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
