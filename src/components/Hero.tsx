import React from 'react';
import IconsDevLinks from '../icons/icons';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[auto] lg:min-h-screen w-full flex items-center justify-center bg-[#090A0F] px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1E2030 1px, transparent 1px), linear-gradient(to bottom, #1E2030 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Grelha: 1 coluna equilibrada até 1024px, 12 colunas em telas maiores */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* ================= COLUNA ESQUERDA (7 colunas no lg) ================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151226] border border-[#5B21B6]/60 mb-5">
            <span className="text-sm">👋</span>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#A855F7]">
              OLÁ, MEU NOME É
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-3">
            Vicente{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
              Augusto
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-zinc-100 mb-5 leading-snug">
            Full-Stack Developer | Founder @ Omnia Tech
            <span className="inline-block w-[2.5px] h-5 sm:h-6 bg-[#A855F7] ml-1.5 align-middle animate-pulse" />
          </h2>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl lg:max-w-lg mb-7">
            Desenvolvedor Full-Stack focado em construir{' '}
            <strong className="text-zinc-200 font-medium">sistemas escaláveis</strong> e{' '}
            <strong className="text-zinc-200 font-medium">experiências de usuário fluidas</strong>. 
            Transformando lógica em valor e café em código, da arquitetura limpa ao deploy.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-7">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#9333EA] hover:from-[#7C3AED] hover:to-[#7E22CE] text-white font-medium text-sm shadow-lg shadow-[#8B5CF6]/25 transition-all duration-200"
            >
              <span>Ver Projetos</span>
              <img
                src={IconsDevLinks.ArrowIcon}
                alt="Seta"
                className="w-4 h-4 object-contain"
              />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0F111A]/80 hover:bg-[#1A1D2E] text-white font-medium text-sm border border-[#23263B] hover:border-[#8B5CF6]/40 transition-all duration-200"
            >
              Contato
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <img
              src={IconsDevLinks.AvailabilityDot}
              alt="Disponível"
              className="w-2.5 h-2.5 object-contain"
            />
            <span>Fortaleza, CE 🇧🇷 · Disponível para novos projetos</span>
          </div>
        </div>

        {/* ================= COLUNA DIREITA (5 colunas no lg, full-width alinhado no md) ================= */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl bg-[#0D0F18]/95 border border-[#1E2132] shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-4 px-5 py-3.5 border-b border-[#1E2132] bg-[#11131F]/60">
              <div className="flex items-center gap-2">
                <img
                  src={IconsDevLinks.Close}
                  alt="Fechar"
                  className="w-3 h-3 object-contain"
                />
                <img
                  src={IconsDevLinks.Minimize}
                  alt="Minimizar"
                  className="w-3 h-3 object-contain"
                />
                <img
                  src={IconsDevLinks.Maximize}
                  alt="Maximizar"
                  className="w-3 h-3 object-contain"
                />
              </div>
              <span className="font-mono text-xs text-[#64748B]">
                ~/augustos-dev
              </span>
            </div>

            <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm space-y-5 leading-relaxed">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#10B981] font-bold">{'>'}</span>
                  <span className="text-[#64748B]">~</span>
                  <span className="text-zinc-100">whoami</span>
                </div>
                <div className="text-[#94A3B8] space-y-0.5 pl-1">
                  <p>Vicente Augusto — ADS @ UniAteneu</p>
                  <p className="text-[#A855F7]">
                    Full-Stack | Clean Architecture | Scalable Systems
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#10B981] font-bold">{'>'}</span>
                  <span className="text-[#64748B]">~</span>
                  <span className="text-zinc-100">cat profile.ts</span>
                </div>
                <div className="text-[#94A3B8] space-y-1 pl-1 text-xs">
                  <p>
                    <span className="text-[#A855F7]">empresa:</span> "Omnia Tech — Founder & Tech Lead",
                  </p>
                  <p>
                    <span className="text-[#A855F7]">foco:</span> ["Next.js", "Node.js", "PostgreSQL", "Microsserviços"],
                  </p>
                  <p>
                    <span className="text-[#A855F7]">lifestyle:</span> ["Muay Thai 🥊", "Hardware 🖥️", "Café ☕"]
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-[#10B981] font-bold">{'>'}</span>
                <span className="text-[#64748B]">~</span>
                <span className="inline-block w-2 h-4 bg-[#94A3B8] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;