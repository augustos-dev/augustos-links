import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#090A0F] border-t border-[#1E2132] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        {/* Logo à esquerda */}
        <a
          href="#inicio"
          className="text-base font-bold tracking-tight text-white"
        >
          augustos<span className="text-[#A855F7]">.dev</span>
        </a>

        {/* Copyright centralizado no Desktop / abaixo no Mobile */}
        <p className="text-xs text-[#64748B]">
          © 2026 Vicente Augusto. Transformando lógica em valor e café em código.
        </p>

        {/* Assinatura à direita no Desktop / abaixo no Mobile */}
        <span className="text-xs font-medium text-[#A855F7]">
          Design + tecnologia
        </span>
      </div>
    </footer>
  );
};

export default Footer;