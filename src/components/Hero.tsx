import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MysteryButton from './MysteryButton';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [bill, setBill] = useState<number | ''>('');
  const [result, setResult] = useState<{
    systemSize: number;
    panels: number;
    savings: number;
    cost: number;
  } | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bill || bill < 50) return;

    const monthlyEnergy = bill / 0.95; 
    const systemSize = monthlyEnergy / 120; 
    const panels = Math.ceil((systemSize * 1000) / 550); 
    const cost = systemSize * 4000; 
    const savings = bill * 12 * 25; 

    setResult({
      systemSize: Number(systemSize.toFixed(2)),
      panels,
      savings,
      cost
    });
  };

  const handleWhatsApp = () => {
    if (!result) return;
    const text = `Olá! Meu nome é ${name}, sou de ${city}. Minha conta de energia é R$ ${bill} e vi no simulador que preciso de um sistema de ${result.systemSize}kWp (${result.panels} placas). Gostaria de um orçamento detalhado. Meu telefone é ${phone}.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/message/24V75JFH4PNMB1?text=${encodedText}`, '_blank');
  };

  return (
    <section ref={ref} id="home" className="bg-solar-dark text-white pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden transition-colors duration-300">
      <motion.div 
        style={{ y: yBackground }} 
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          style={{ y: yText }} 
          className="lg:w-1/2 text-center lg:text-left"
        >
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">A Energia que Move o Cariri</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-4 mb-6 leading-tight"
          >
            Transforme Sol em <br /><span className="text-solar-orange underline decoration-solar-orange/30">Liberdade Financeira</span>
          </motion.h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            A MgS System Solar é líder em Juazeiro do Norte e região. Instalação segura com equipe certificada NR10/NR35 e garantia de 25 anos.
          </p>
          <div className="flex justify-center lg:justify-start">
            <MysteryButton text="Curioso? Acesse e verá o Mestre Jesus" />
          </div>
        </motion.div>
        
        <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0" id="calculadora">
          <div className="bg-solar-card/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-solar-orange to-yellow-500"></div>
            
            {!result ? (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Solicite seu Orçamento Gratuito</h3>
                  <p className="text-gray-400 text-sm">Preencha os dados abaixo e receba uma proposta personalizada para sua casa ou empresa.</p>
                </div>

                <form onSubmit={calculateSavings} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-orange transition-colors"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">WhatsApp</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-orange transition-colors"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">Cidade</label>
                      <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-orange transition-colors"
                        placeholder="Sua cidade"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1">Valor médio da conta de luz</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">R$</span>
                      <input 
                        type="number" 
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                        className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-solar-orange transition-colors text-lg font-bold"
                        placeholder="0,00"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-solar-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-solar-orange/30 flex items-center justify-center gap-2 mt-2"
                  >
                    <i className="fas fa-calculator"></i> Simular Economia
                  </button>
                </form>
              </>
            ) : (
              <div className="animate-fade-in">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Análise Concluída!</h3>
                  <p className="text-gray-400">Veja o potencial do seu sistema solar</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                    <i className="fas fa-solar-panel text-solar-orange text-2xl mb-2"></i>
                    <p className="text-sm text-gray-400 mb-1">Sistema Ideal</p>
                    <p className="font-bold text-white text-lg">{result.systemSize} kWp</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                    <i className="fas fa-layer-group text-solar-orange text-2xl mb-2"></i>
                    <p className="text-sm text-gray-400 mb-1">Qtd. Placas</p>
                    <p className="font-bold text-white text-lg">~{result.panels} painéis</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-solar-orange/20 to-transparent p-6 rounded-xl border border-solar-orange/30 mb-6 text-center">
                  <p className="text-sm text-gray-300 mb-1">Economia estimada em 25 anos</p>
                  <p className="text-3xl font-black text-solar-orange">
                    R$ {result.savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setResult(null)}
                    className="w-1/3 bg-white/5 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    Refazer
                  </button>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-2/3 bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-xl"></i> Receber Proposta
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
