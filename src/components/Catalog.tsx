import React from 'react';
import { motion } from 'motion/react';

export default function Catalog() {
  return (
    <section id="loja-solar" className="py-20 bg-[#0a192f] text-center border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-tools text-[#FF6B00] mr-3"></i>
            Nossa Vitrine de Equipamentos
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Preços atualizados em tempo real via Amazon. Escolha o melhor para o seu projeto!
          </p>
          
          <div className="max-w-6xl mx-auto border-2 border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-white relative">
            {/* Indicador de carregamento enquanto o iframe carrega */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 -z-10">
              <div className="flex flex-col items-center text-gray-500">
                <i className="fas fa-spinner fa-spin text-3xl mb-3 text-[#FF6B00]"></i>
                <p>Carregando catálogo...</p>
              </div>
            </div>
            
            <iframe 
              src="https://9gdb5g3.spread.name" 
              width="100%" 
              height="900" 
              frameBorder="0" 
              className="block w-full relative z-10"
              title="Catálogo MGS System Solar"
            ></iframe>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 italic">
            * Como Afiliado Amazon, a MGS System Solar recebe comissão por compras qualificadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
