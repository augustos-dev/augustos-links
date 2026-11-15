import React, { useState } from 'react';
import IconsDevLinks from '../icons/icons';

interface SkillCategory {
  id: string;
  number: string;
  tabName: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'fullstack-enterprise',
    number: '01',
    tabName: 'Full-Stack & Enterprise',
    label: '01 / BACKEND ENTERPRISE & FRONTEND',
    title: 'Soluções do front ao back.',
    description:
      'Desenvolvimento de sistemas corporativos de alta performance, APIs tipadas e interfaces modernas.',
    icon: IconsDevLinks.CodeIcon,
    skills: [
      'Java 25 LTS',
      'Spring Boot & Ecossistema Spring',
      'TypeScript & JavaScript',
      'Node.js',
      'React.js & Next.js 14+',
      'Tailwind CSS & Shadcn/UI',
      'APIs RESTful & OpenAPI',
      'Integração de Sistemas (ERP)',
    ],
  },
  {
    id: 'arquitetura-escala',
    number: '02',
    tabName: 'Arquitetura & Escala',
    label: '02 / CONCORRÊNCIA, DADOS & INFRAESTRUTURA',
    title: 'Sistemas distribuídos e resilientes.',
    description:
      'Processamento paralelo, arquitetura limpa, isolamento multitenant e automação de entrega contínua.',
    icon: IconsDevLinks.ServerIcon,
    skills: [
      'Microsserviços & Spring Modulith',
      'Multi-threading & Concorrência',
      'Harness (CI/CD & DevOps)',
      'PostgreSQL & Prisma ORM',
      'Arquitetura Multitenant (LGPD)',
      'Clean Architecture & Mensageria',
      'Docker & Containers',
      'Git & GitHub',
    ],
  },
  {
    id: 'engenharia-gestao',
    number: '03',
    tabName: 'Engenharia & Gestão',
    label: '03 / LIDERANÇA TÉCNICA & PROCESSOS',
    title: 'Visão analítica e colaborativa.',
    description:
      'Metodologias ágeis, desenho arquitetural e resolução de problemas complexos do conceito ao deploy.',
    icon: IconsDevLinks.ShieldIcon,
    skills: [
      'Pensamento Arquitetural',
      'Resolução de Problemas Complexos',
      'Metodologias Ágeis (Scrum & Kanban)',
      'Liderança Técnica & Trabalho em Equipe',
      'Modelagem & Rotinas de Banco de Dados',
      'Automação & Web Scraping',
      'Boas Práticas DevSecOps',
      'Entrega Contínua & Observabilidade',
    ],
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('fullstack-enterprise');

  const currentData =
    skillCategories.find((cat) => cat.id === activeCategory) ||
    skillCategories[0];

  return (
    <section
      id="habilidades"
      className="relative w-full bg-[#090A0F] py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= CABEÇALHO DA SEÇÃO ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#A855F7] mb-2">
              O QUE EU FAÇO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Habilidades & Expertise
            </h2>
          </div>

          <p className="text-[#94A3B8] text-sm sm:text-base max-w-md md:text-right leading-relaxed">
            Da primeira linha ao deploy: engenharia de software para construir,
            escalar e evoluir produtos.
          </p>
        </div>

        {/* ================= CONTAINER PRINCIPAL (CARD) ================= */}
        <div className="rounded-3xl bg-[#0D0F18]/95 border border-[#1E2132] shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* --- BARRA LATERAL DESKTOP / ABAS MOBILE & TABLET --- */}
            <div className="lg:col-span-4 xl:col-span-3 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#1E2132] flex flex-col justify-between">
              <div>
                <span className="hidden lg:block text-[10px] font-semibold tracking-widest uppercase text-[#64748B] mb-5">
                  ÁREAS DE ATUAÇÃO
                </span>

                <div className="flex lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                  {skillCategories.map((category) => {
                    const isActive = category.id === activeCategory;

                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-full lg:rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                          isActive
                            ? 'bg-[#151226] text-white border border-[#7C3AED] shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                            : 'text-[#94A3B8] hover:text-white hover:bg-[#141726] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={category.icon}
                            alt={category.tabName}
                            className={`w-4 h-4 object-contain ${
                              isActive ? 'opacity-100' : 'opacity-60'
                            }`}
                          />
                          <span>{category.tabName}</span>
                        </div>

                        {isActive && (
                          <img
                            src={IconsDevLinks.ArrowIcon1}
                            alt="Ativo"
                            className="hidden lg:block w-3.5 h-3.5 object-contain"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Assinatura inferior Desktop */}
              <div className="hidden lg:block pt-12">
                <span className="font-mono text-[11px] text-[#A855F7]">
                  {'</> build . scale . ship'}
                </span>
              </div>
            </div>

            {/* --- ÁREA DE CONTEÚDO DIREITA --- */}
            <div className="lg:col-span-8 xl:col-span-9 p-6 sm:p-10 relative">
              <span className="hidden sm:block absolute top-6 right-8 text-6xl lg:text-7xl font-extrabold text-[#1E2132]/70 select-none pointer-events-none">
                {currentData.number}
              </span>

              <div className="relative z-10 mb-8">
                <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#A855F7] mb-2">
                  {currentData.label}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentData.title}
                </h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm max-w-xl">
                  {currentData.description}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#111422]/90 border border-[#1E2235] hover:border-[#8B5CF6]/40 transition-colors"
                  >
                    <img
                      src={IconsDevLinks.CheckIcon}
                      alt="Check"
                      className="w-3.5 h-3.5 object-contain shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-medium text-zinc-100">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Assinatura inferior Mobile/Tablet */}
              <div className="block lg:hidden pt-8">
                <span className="font-mono text-[11px] text-[#A855F7]">
                  {'</> build . scale . ship'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;