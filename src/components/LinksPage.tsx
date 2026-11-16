import React from 'react';
import {
  Globe,
  Layers,
  Mail,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { IconsDevLinks } from '../icons/icons';

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ElementType | string;
  featured?: boolean;
}

const linksData: LinkItem[] = [
  {
    id: 'portfolio',
    title: 'Meu portfólio',
    subtitle: 'Conheça meu trabalho e projetos',
    href: 'https://augustosdev.com.br',
    icon: Globe,
    featured: true,
  },
  {
    id: 'omniatech',
    title: 'Omnia Tech',
    subtitle: 'Soluções e sistemas sob medida',
    href: 'https://omniatechlabs.com.br',
    icon: Layers,
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Código, arquitetura e projetos',
    href: 'https://github.com/augustos-dev',
    icon: IconsDevLinks.GitHub,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Experiência, carreira e conexões',
    href: 'https://linkedin.com/in/vicenteaugusto',
    icon: IconsDevLinks.LinkedIn,
  },
  {
    id: 'youtube',
    title: 'YouTube',
    subtitle: 'Vídeos, tutoriais e conteúdos',
    href: 'https://www.youtube.com/@augustosdev',
    icon: IconsDevLinks.YouTube,
  },
  {
    id: 'contato',
    title: 'Fale comigo',
    subtitle: 'Vamos tirar uma ideia do papel',
    href: 'mailto:vicenteaugusto.dev@gmail.com',
    icon: Mail,
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#090A0F] text-zinc-100 flex flex-col justify-between items-center px-5 py-10 overflow-hidden select-none">
      {/* Padrão de pontos (dot matrix) sutil no fundo */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3B2854 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Brilho radial roxo no topo */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[320px] bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Container Central (Largura Mobile/Bio-link) */}
      <div className="relative z-10 w-full max-w-[420px] mx-auto flex flex-col items-center">
        
        {/* ================= BARRA DE TOPO ================= */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#64748B] mb-10">
          <span>VA / LINKS</span>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[#94A3B8]">DISPONÍVEL</span>
          </div>
        </div>

        {/* ================= AVATAR / EMBLEMA ================= */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#A855F7] to-[#6D28D9] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-300" />
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1A142E] via-[#11131F] to-[#0D0F18] border border-[#7C3AED]/50 flex items-center justify-center shadow-2xl">
            <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-br from-white via-zinc-200 to-[#A855F7] bg-clip-text text-transparent">
              VA
            </span>
          </div>
        </div>

        {/* ================= BADGE SAUDAÇÃO ================= */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#151226]/90 border border-[#5B21B6]/60 mb-3">
          <Sparkles size={12} className="text-[#A855F7]" />
          <span className="text-[11px] font-medium text-zinc-200">
            Olá, eu sou o Vicente
          </span>
        </div>

        {/* ================= TÍTULO & BIO ================= */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-1.5">
          Vicente{' '}
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
            Augusto
          </span>
        </h1>

        <p className="text-xs sm:text-sm font-medium text-[#94A3B8] mb-3 text-center">
          Full-Stack Developer & Founder @ Omnia Tech
        </p>

        <p className="text-xs text-[#64748B] text-center max-w-[300px] leading-relaxed mb-9">
          Construindo sistemas escaláveis e experiências digitais com código,
          arquitetura limpa e atenção aos detalhes.
        </p>

        {/* ================= DIVISOR EXPLORE ================= */}
        <div className="w-full flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-[#64748B] mb-4">
          <span>EXPLORE</span>
          <div className="flex-1 h-[1px] bg-[#1E2132]" />
          <span>0{linksData.length} LINKS</span>
        </div>

        {/* ================= LISTA DE LINKS ================= */}
        <div className="w-full flex flex-col gap-3">
          {linksData.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={`group relative w-full flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 ${
                  link.featured
                    ? 'bg-gradient-to-r from-[#241744]/90 via-[#1B1433]/90 to-[#141225]/90 border border-[#8B5CF6]/70 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_32px_rgba(139,92,246,0.35)] hover:border-[#A855F7]'
                    : 'bg-[#0D0F18]/90 border border-[#1E2132] hover:border-[#8B5CF6]/50 hover:bg-[#121524]/90'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Ícone à Esquerda (Suporta Lucide Component ou SVG URL) */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      link.featured
                        ? 'bg-[#362066]/80 border border-[#8B5CF6]/40 text-white'
                        : 'bg-[#141726] border border-[#23263B] text-[#94A3B8] group-hover:text-white group-hover:border-[#8B5CF6]/30'
                    }`}
                  >
                    {typeof Icon === 'string' ? (
                      <img
                        src={Icon}
                        alt={link.title}
                        className="w-[18px] h-[18px] object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  {/* Textos do Card */}
                  <div className="text-left">
                    <h2 className="text-sm font-bold text-white group-hover:text-[#E9D5FF] transition-colors">
                      {link.title}
                    </h2>
                    <p className="text-[11px] text-[#94A3B8]">
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                {/* Seta Diagonal à Direita */}
                <ArrowUpRight
                  size={16}
                  className="text-[#64748B] group-hover:text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mr-1"
                />
              </a>
            );
          })}
        </div>

        {/* ================= RODAPÉ ================= */}
        <footer className="mt-12 text-center">
          <p className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#64748B]">
            <span>feito com código e café</span>
            <span className="text-[#A855F7]">✦</span>
            <span>2026</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LinksPage;