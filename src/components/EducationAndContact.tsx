import React from 'react';
import { GraduationCap, Mail } from 'lucide-react';

interface EducationItem {
  id: string;
  tag: string;
  title: string;
  institution: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    id: 'uniateneu',
    tag: 'GRADUAÇÃO (CST)',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário Ateneu (UniAteneu)',
    period: 'MAR 2026 — JUN 2028',
  },
  {
    id: 'uece-avanti',
    tag: 'ENSINO TÉCNICO & RESIDÊNCIA',
    title: 'Desenvolvimento Full-Stack (480h)',
    institution: 'Universidade Estadual do Ceará (UECE) · Escola Atlântico Avanti',
    period: 'JAN 2025 — DEZ 2025 · Credencial 381',
  },
  {
    id: 'geracao-tech',
    tag: 'CERTIFICAÇÃO PROFISSIONAL',
    title: 'Desenvolvimento Web Full-Stack',
    institution: 'Geração Tech (IEL Ceará)',
    period: 'AGO 2025 · Credencial 00000002366',
  },
  {
    id: 'rocketseat',
    tag: 'APRENDIZADO CONTÍNUO',
    title: 'Programa Discover — Fundamentos Web',
    institution: 'Rocketseat · JavaScript, HTML5, CSS & Git',
    period: 'SET 2024 · Sempre em construção',
  },
];

const EducationAndContact: React.FC = () => {
  return (
    <div className="w-full bg-[#090A0F] text-zinc-100 overflow-hidden">
      {/* ================= 04 / FORMAÇÃO ================= */}
      <section id="formacao" className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#A855F7] mb-3">
              04 / FORMAÇÃO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Aprender faz parte do processo.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {educationData.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-[#0D0F18]/95 border border-[#1E2132] hover:border-[#8B5CF6]/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <GraduationCap size={18} className="text-[#A855F7]" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#A855F7]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] mb-3">
                    {item.institution}
                  </p>
                </div>

                <span className="text-xs text-[#64748B] font-medium">
                  {item.period}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05 / CONTATO ================= */}
      <section id="contato" className="py-16 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#121324] via-[#0D0F18] to-[#151129] border border-[#1E2132] p-8 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#8B5CF6]/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Alinha lado a lado já em telas médias (md:flex-row) */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-10">
              <div className="max-w-md">
                <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#A855F7] mb-3">
                  05 / CONTATO
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                  Vamos construir <br />
                  algo incrível?
                </h2>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                  Tem uma ideia, um desafio ou só quer trocar uma ideia? Minha
                  caixa de entrada está aberta.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 w-full md:w-auto shrink-0">
                <a
                  href="mailto:vicenteaugusto.dev@gmail.com"
                  className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#9333EA] hover:from-[#7C3AED] hover:to-[#7E22CE] text-white font-semibold text-sm shadow-lg shadow-[#8B5CF6]/25 transition-all duration-200"
                >
                  <Mail size={18} className="text-white" />
                  <span>Vamos conversar</span>
                </a>

                <a
                  href="mailto:vicenteaugusto.dev@gmail.com"
                  className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors"
                >
                  vicenteaugusto.dev@gmail.com
                </a>

                <div className="flex items-center gap-5 pt-1">
                  <a
                    href="https://github.com/augustos-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <span className="text-[10px] text-[#A855F7]">↗</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/vicenteaugusto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <span className="text-[10px] text-[#A855F7]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationAndContact;