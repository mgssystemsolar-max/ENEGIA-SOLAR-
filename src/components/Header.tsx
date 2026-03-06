import React, { useRef } from 'react';

interface HeaderProps {
  LOGO_URL: string;
  onAdminLogin: () => void;
}

export default function Header({ LOGO_URL, onAdminLogin }: HeaderProps) {
  const logoClickCount = useRef(0);

  const handleLogoClick = () => {
    logoClickCount.current += 1;
    if (logoClickCount.current === 3) {
      const password = prompt("Digite a senha de administrador:");
      if (password === "mgs2026") {
        onAdminLogin();
        alert("Modo Administrador Ativado!");
      } else {
        alert("Senha incorreta.");
      }
      logoClickCount.current = 0;
    }
    setTimeout(() => { logoClickCount.current = 0; }, 2000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={handleLogoClick} className="cursor-pointer select-none">
          <img src={LOGO_URL} alt="MgS System Solar" className="h-12 object-contain" />
        </div>
        <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-solar-orange transition">Início</a>
          <a href="#calculadora" className="hover:text-solar-orange transition">Simulador</a>
          <a href="#faq" className="hover:text-solar-orange transition">Dúvidas</a>
        </div>
        <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition">Orçamento</a>
      </div>
    </nav>
  );
}
