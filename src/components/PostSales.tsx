import React from 'react';

export default function PostSales() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Pós-Venda Premium</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark">Suporte <span className="text-solar-orange underline">Contínuo</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Nossa relação não termina na instalação. Garantimos a máxima eficiência do seu sistema por anos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-solar-dark">Monitoramento via App</h3>
            <p className="text-gray-500 text-sm">Acompanhe a geração de energia em tempo real pelo seu celular, de onde estiver.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl mb-6">
              <i className="fas fa-broom"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-solar-dark">Limpeza Especializada</h3>
            <p className="text-gray-500 text-sm">Serviço de limpeza periódica dos painéis para garantir que a sujeira não afete a geração.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
              <i className="fas fa-wrench"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-solar-dark">Manutenção Preventiva</h3>
            <p className="text-gray-500 text-sm">Revisões técnicas agendadas para assegurar a longevidade e segurança de todo o sistema.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
