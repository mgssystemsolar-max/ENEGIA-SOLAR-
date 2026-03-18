import React from 'react';
import { motion } from 'motion/react';

export default function HotmartBanner() {
  const courses = [
    {
      title: "Pacote Profissional Solar",
      description: "O treinamento definitivo para você dominar a instalação e manutenção de sistemas solares. Torne-se um profissional requisitado no mercado.",
      link: "https://go.hotmart.com/B104278532G",
      icon: "fas fa-tools",
      highlight: true
    },
    {
      title: "Projetista Fotovoltaico",
      description: "Aprenda a elaborar projetos fotovoltaicos completos e aprová-los nas concessionárias. Escale seus ganhos trabalhando nos bastidores.",
      link: "https://go.hotmart.com/K104298527J",
      icon: "fas fa-drafting-compass",
      highlight: false
    },
    {
      title: "Kit de Dimensionamento",
      description: "Ferramentas e planilhas exclusivas para dimensionar sistemas On-Grid e Off-Grid com precisão e rapidez. Evite erros e prejuízos.",
      link: "https://go.hotmart.com/O104313065T",
      icon: "fas fa-calculator",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-[#0a192f] text-white border-t border-white/5 relative overflow-hidden">
      {/* Efeito de brilho laranja no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-2 block">
            Aprenda com o Especialista
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
            Capacitação <span className="text-[#FF6B00] underline decoration-[#FF6B00]/30">Profissional Solar</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Acelere sua carreira no mercado que mais cresce no Brasil. Escolha o treinamento ideal para o seu momento e comece a faturar com energia solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                course.highlight 
                  ? 'bg-gradient-to-b from-[#0d2340] to-[#0a192f] border-2 border-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.15)]' 
                  : 'bg-[#0d2340]/50 border border-white/10 hover:border-white/30'
              }`}
            >
              {course.highlight && (
                <div className="bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full self-start mb-4 shadow-lg">
                  Mais Completo
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${course.highlight ? 'bg-[#FF6B00]' : 'bg-white/10'}`}>
                <i className={`${course.icon} text-2xl ${course.highlight ? 'text-white' : 'text-[#FF6B00]'}`}></i>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {course.description}
              </p>

              <a 
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                  course.highlight
                    ? 'bg-[#FF6B00] text-white hover:bg-orange-600 shadow-lg hover:shadow-[#FF6B00]/40'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <i className="fas fa-graduation-cap"></i>
                Garantir Minha Vaga
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Ficou com alguma dúvida sobre os treinamentos ou ferramentas?</p>
          <a 
            href="https://wa.me/message/24V75JFH4PNMB1" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:text-orange-400 transition-colors"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
