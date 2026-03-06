import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [contaMensal, setContaMensal] = useState(500);

  const economia25Anos = (contaMensal * 0.9 * 12 * 25).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const valorContaFormatado = contaMensal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <section id="calculadora" className="py-24 bg-white dark:bg-solar-dark transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-black mb-4 dark:text-white">Quanto você vai <span className="text-solar-orange underline">poupar</span>?</h2>
        <p className="text-gray-500 dark:text-gray-400">Arraste o simulador abaixo e veja o poder do sol no seu bolso.</p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="bg-solar-dark rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center border-b-4 lg:border-b-8 border-solar-orange shadow-2xl">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="w-full lg:w-1/2 bg-white/5 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10 space-y-6 lg:space-y-8"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 group relative cursor-help">
                  <label className="text-white font-bold text-sm md:text-base">Valor da sua conta mensal:</label>
                  <div className="w-5 h-5 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center text-xs font-serif italic hover:border-solar-orange hover:text-solar-orange transition">i</div>
                  <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 shadow-xl border border-gray-700">
                    Este valor representa sua média mensal atual de gastos com energia elétrica. Use o slider para ajustar.
                    <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-solar-orange break-words tracking-tight">
                {valorContaFormatado}
              </div>
              <div className="relative w-full pt-2">
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="50" 
                  value={contaMensal}
                  onChange={(e) => setContaMensal(Number(e.target.value))}
                  className="w-full range-lg touch-none"
                  aria-label="Definir valor da conta mensal"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium font-mono">
                  <span>R$ 200</span>
                  <span>R$ 10.000</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="w-full lg:w-1/2 bg-white/5 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl text-center border border-white/10"
          >
            <div className="flex items-center justify-center gap-2 mb-2 group relative cursor-help">
              <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Economia em 25 Anos</p>
              <div className="w-4 h-4 rounded-full border border-gray-600 text-gray-500 flex items-center justify-center text-[10px] font-serif italic hover:border-solar-orange hover:text-solar-orange transition">i</div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 shadow-xl border border-gray-700 text-left">
                Estimativa baseada na inflação energética média e eficiência do sistema ao longo de 25 anos. O retorno real pode variar.
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <motion.div
              key={contaMensal}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 break-words tracking-tight"
            >
              {economia25Anos}
            </motion.div>
            <a 
              href="https://wa.me/message/24V75JFH4PNMB1"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white font-bold py-3 lg:py-4 px-4 rounded-xl lg:rounded-2xl hover:bg-green-600 transition shadow-lg text-xs sm:text-sm lg:text-base uppercase tracking-wide"
            >
              Receber Meu Projeto Grátis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
