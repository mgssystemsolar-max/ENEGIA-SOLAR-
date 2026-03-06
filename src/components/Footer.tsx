import React from 'react';

interface FooterProps {
  LOGO_URL: string;
}

export default function Footer({ LOGO_URL }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-solar-dark text-gray-600 dark:text-white pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={LOGO_URL} alt="MgS System Solar" className="h-16 mb-6 mx-auto md:mx-0 object-contain bg-white dark:bg-white/10 rounded-lg p-2 shadow-sm" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">Especialistas em energia limpa e redução de custos. Atendemos residências e empresas com excelência.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase text-gray-900 dark:text-white">Redes Sociais</h4>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-solar-orange">
            <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="hover:text-solar-dark dark:hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61577300515359&locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-solar-dark dark:hover:text-white transition"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCQGzIxvn_I1uqved_psc9oQ" target="_blank" rel="noopener noreferrer" className="hover:text-solar-dark dark:hover:text-white transition"><i className="fab fa-youtube"></i></a>
            <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="hover:text-solar-dark dark:hover:text-white transition"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase text-gray-900 dark:text-white">Contato & Endereço</h4>
          <div className="text-gray-500 dark:text-gray-400 text-sm space-y-4">
            <p>
              <a href="mailto:mgssystemsolarclientes@gmail.com" className="hover:text-solar-orange transition flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-envelope text-solar-orange"></i>
                mgssystemsolarclientes@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+DR.+MOZART+CARDOSO+DE+ALENCAR+95+BAIRRO+NOVO+JUAZEIRO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solar-orange transition flex items-start justify-center md:justify-start gap-2"
              >
                <i className="fas fa-map-marker-alt text-solar-orange mt-1"></i>
                <span>
                  R. Dr. Mozart Cardoso de Alencar, 95<br/>
                  Bairro Novo Juazeiro<br/>
                  Juazeiro do Norte - CE
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-xs text-gray-500 dark:text-gray-600">
        <p>© 2026 MgS System Solar - Todos os direitos reservados.</p>
        <p className="mt-2 text-gray-500 dark:text-gray-700">CNPJ: 62.612.258/0001-04</p>
      </div>
    </footer>
  );
}
