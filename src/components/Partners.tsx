import React from 'react';

export default function Partners() {
  const partners = [
    { name: 'WEG', domain: 'weg.net', url: 'https://www.weg.net' },
    { name: 'Canadian Solar', domain: 'canadiansolar.com', url: 'https://www.canadiansolar.com' },
    { name: 'Growatt', domain: 'ginverter.com', url: 'https://www.ginverter.com' },
    { name: 'Fronius', domain: 'fronius.com', url: 'https://www.fronius.com' },
    { name: 'BYD', domain: 'byd.com', url: 'https://www.byd.com' },
    { name: 'Intelbras', domain: 'intelbras.com', url: 'https://www.intelbras.com' },
    { name: 'Sungrow', domain: 'sungrowpower.com', url: 'https://www.sungrowpower.com' },
    { name: 'Jinko Solar', domain: 'jinkosolar.com', url: 'https://www.jinkosolar.com' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-solar-dark border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fas fa-check-circle"></i> Instalador Homologado e Certificado
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-solar-dark dark:text-white mb-4">
            Nossos Parceiros Tecnológicos e <span className="text-solar-orange">Fornecedores Globais</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Trabalhamos exclusivamente com marcas Tier 1 para garantir a máxima eficiência e segurança no semiárido cearense.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <a 
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-solar-orange/30 hover:shadow-lg transition-all duration-300"
              title={`Visitar site da ${partner.name}`}
            >
              <img 
                src={`https://logo.clearbit.com/${partner.domain}`} 
                alt={`Logo ${partner.name}`} 
                className="max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                onError={(e) => {
                  // Fallback for missing logos
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = partner.name;
                  e.currentTarget.parentElement!.classList.add('text-gray-500', 'font-bold', 'text-xl');
                }}
              />
            </a>
          ))}
        </div>

        {/* Copywriting & CTA Section */}
        <div className="bg-gray-50 dark:bg-solar-card rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-solar-dark dark:text-white mb-4">
                Hub de Tecnologia Solar do Cariri
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A MgS System Solar não apenas instala equipamentos; nós validamos tecnologias. Como um hub de educação (<span className="font-bold text-solar-orange">MGS Academy</span>) e instalação, somos o principal canal de escoamento de tecnologia solar de ponta na região do Cariri.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm italic border-l-4 border-solar-orange pl-4">
                "Nossos alunos e técnicos são treinados nas tecnologias das maiores fabricantes do mundo, consolidando a marca de nossos parceiros em cada projeto homologado."
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-solar-orange/10 rounded-full flex items-center justify-center text-solar-orange text-2xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="font-bold text-solar-dark dark:text-white mb-2">Quer expandir sua marca no Nordeste?</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
                Junte-se ao ecossistema que mais cresce no setor solar.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/message/24V75JFH4PNMB1', '_blank')}
                className="inline-flex items-center gap-2 border-2 border-solar-dark dark:border-white text-solar-dark dark:text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-solar-dark hover:text-white dark:hover:bg-white dark:hover:text-solar-dark transition-all duration-300"
              >
                Seja um Parceiro MgS
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
