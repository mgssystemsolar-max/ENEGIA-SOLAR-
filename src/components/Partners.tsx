import React from 'react';

export default function Partners() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Trabalhamos com as melhores marcas mundiais</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['WEG', 'Canadian Solar', 'Growatt', 'Fronius', 'BYD'].map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black text-gray-800 uppercase">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
