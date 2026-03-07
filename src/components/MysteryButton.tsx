import React, { useState } from 'react';

interface MysteryButtonProps {
  text?: string;
  className?: string;
}

export default function MysteryButton({ text = "Curioso? Acesse e verá o Mestre", className = "" }: MysteryButtonProps) {
  const [showJesus, setShowJesus] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShowJesus(true)}
        className={`bg-white/10 backdrop-blur-sm border border-solar-orange/50 text-solar-orange hover:bg-solar-orange hover:text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-solar-orange/50 animate-pulse hover:animate-none ${className}`}
      >
        <i className="fas fa-star mr-2"></i>
        {text}
      </button>

      {/* Modal Jesus */}
      {showJesus && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setShowJesus(false)}>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center relative animate-scale-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-solar-orange mb-4">Luz do Mundo</h3>
            <div className="rounded-xl overflow-hidden mb-6 border-4 border-solar-orange/20 bg-gray-800 min-h-[300px] flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1mIm35e8EVRHeIj_5HXMjHJpxZTJrl3Ex" 
                alt="Jesus Cristo - Luz do Mundo" 
                className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida."
            </p>
            <button 
              onClick={() => setShowJesus(false)}
              className="bg-solar-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voltar ao Normal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
