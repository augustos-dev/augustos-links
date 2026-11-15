import React, { useState } from 'react';
import IconsDevLinks from '../icons/icons';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  detailsUrl: string;
  previewType: 'flow-erp' | 'oris' | 'promo-bot';
  imageUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'flow-erp',
    title: 'Flow-ERP',
    category: 'ERP & Finanças',
    description:
      'Sistema robusto para gestão de inventário e fluxo de caixa, focado em alta disponibilidade e relatórios precisos.',
    highlights: [
      'Controle de estoque em tempo real',
      'Relatórios financeiros automatizados',
      'Arquitetura orientada a performance',
    ],
    liveUrl: 'https://github.com/augustos-dev',
    githubUrl: 'https://github.com/augustos-dev',
    detailsUrl: 'https://github.com/augustos-dev/flow-ERP',
    previewType: 'flow-erp',
  },
  {
    id: 'oris',
    title: 'Oris',
    category: 'SaaS Multitenant',
    description:
      'Plataforma multitenant para clínicas odontológicas — LGPD first, com isolamento total de dados por ID de clínica.',
    highlights: [
      'Arquitetura multitenant completa',
      'Conformidade com LGPD',
      'Isolamento de dados por clínica',
    ],
    liveUrl: 'https://orisdental.omniatechlabs.com.br/',
    githubUrl: 'https://github.com/augustos-dev',
    detailsUrl: 'https://github.com/augustos-dev/Oris',
    previewType: 'oris',   
    imageUrl: '/Oris.png',
  },
  {
    id: 'promo-bot',
    title: 'Bot de Promoções',
    category: 'Automação',
    description:
      'Automação inteligente via Telegram para monitoramento, scraping e envio de alertas de ofertas em tempo real.',
    highlights: [
      'Alertas instantâneos de promoções',
      'Scraping e processamento automatizado',
      'Interface conversacional via Telegram',
    ],
    liveUrl: 'https://github.com/augustos-dev',
    githubUrl: 'https://github.com/augustos-dev',
    detailsUrl: 'https://github.com/augustos-dev/bot-de-promocoes',
    previewType: 'promo-bot',
    // imageUrl: '/images/promo-bot-preview.png',
  },
];

const categories = ['Todos', 'ERP & Finanças', 'SaaS Multitenant', 'Automação'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const renderMockup = (type: Project['previewType']) => {
    switch (type) {
      case 'flow-erp':
        return (
          <div className="w-full h-full bg-[#090A0F] rounded-xl border border-[#1E2132] p-4 flex flex-col justify-between text-left shadow-inner">
            <div className="flex items-center justify-between border-b border-[#1E2132]/80 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="text-[10px] font-semibold text-white">Flow-ERP</span>
              </div>
              <span className="text-[8px] text-[#64748B]">Fluxo de Caixa</span>
            </div>

            <div className="my-2 flex items-center gap-4">
              <div>
                <span className="block text-[7px] text-[#64748B]">Receita Mensal</span>
                <span className="text-xs font-bold text-white">R$ 48.920</span>
              </div>
              <div>
                <span className="block text-[7px] text-[#64748B]">Estoque Ativo</span>
                <span className="text-xs font-bold text-[#10B981]">99.8% Sync</span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
              {[30, 45, 38, 55, 48, 65, 60, 75, 88, 96].map((height, idx) => (
                <div
                  key={idx}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-sm ${
                    idx >= 7
                      ? 'bg-gradient-to-t from-[#7C3AED] to-[#A855F7]'
                      : 'bg-[#251E42]'
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between text-[6px] text-[#64748B] pt-1.5">
              <span>INVENTÁRIO</span>
              <span>RELATÓRIOS</span>
              <span>API REST</span>
            </div>
          </div>
        );

      case 'oris':
        return (
          <div className="w-full h-full bg-[#090A0F] rounded-xl border border-[#1E2132] p-4 flex flex-col justify-between text-left shadow-inner">
            <div className="flex items-center justify-between border-b border-[#1E2132]/80 pb-2">
              <span className="text-[9px] font-semibold text-white">
                oris / clinic-tenant
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#151226] text-[6px] text-[#A855F7] border border-[#5B21B6]/50">
                LGPD First
              </span>
            </div>

            <p className="text-[10px] font-bold text-white my-1.5">
              Isolamento Multitenant Ativo
            </p>

            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="bg-[#0F111C] border border-[#1E2132] rounded-lg p-2 flex flex-col gap-1.5">
                <span className="text-[7px] font-semibold text-[#A855F7]">
                  Tenant #01
                </span>
                <div className="bg-[#151828] rounded p-1.5">
                  <span className="block text-[7px] text-white font-medium">
                    Prontuários
                  </span>
                  <span className="block text-[6px] text-[#64748B]">
                    Schema isolado
                  </span>
                </div>
                <div className="bg-[#151828] rounded p-1.5">
                  <span className="block text-[7px] text-white font-medium">
                    Agendamentos
                  </span>
                  <span className="block text-[6px] text-[#64748B]">
                    Next.js · Prisma
                  </span>
                </div>
              </div>

              <div className="bg-[#0F111C] border border-[#1E2132] rounded-lg p-2 flex flex-col gap-1.5">
                <span className="text-[7px] font-semibold text-[#10B981]">
                  Segurança
                </span>
                <div className="bg-[#151828] rounded p-1.5">
                  <span className="block text-[7px] text-white font-medium">
                    Tenant ID Guard
                  </span>
                  <span className="block text-[6px] text-[#64748B]">
                    Dados Criptografados
                  </span>
                </div>
                <div className="bg-[#151828] rounded p-1.5">
                  <span className="block text-[7px] text-white font-medium">
                    PostgreSQL
                  </span>
                  <span className="block text-[6px] text-[#64748B]">
                    Row-Level Security
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'promo-bot':
        return (
          <div className="w-full h-full bg-[#090A0F] rounded-xl border border-[#1E2132] p-4 flex flex-col justify-between text-left shadow-inner font-mono">
            <div className="flex items-center justify-between border-b border-[#1E2132]/80 pb-2">
              <span className="text-[9px] font-bold text-white">telegram-bot.js</span>
              <span className="text-[7px] text-[#10B981]">● Online</span>
            </div>

            <div className="space-y-1.5 my-1 text-[7px]">
              <div className="p-1.5 rounded bg-[#131625] text-[#94A3B8]">
                <span className="text-[#A855F7]">[Scraper]</span> Monitorando ofertas...
              </div>
              <div className="p-1.5 rounded bg-[#151226] border border-[#7C3AED]/40 text-white">
                ⚡ <span className="font-bold">Oferta detectada!</span> (-42% OFF)
              </div>
              <div className="p-1.5 rounded bg-[#131625] text-[#10B981]">
                ✓ Alerta enviado para o canal Telegram
              </div>
            </div>

            <div className="text-[6px] text-[#64748B] pt-1 border-t border-[#1E2132]/60 flex justify-between">
              <span>Node.js · Puppeteer</span>
              <span>Real-time</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projetos"
      className="relative w-full bg-[#090A0F] py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= CABEÇALHO ================= */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#A855F7] mb-2">
            PROJETOS SELECIONADOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Projetos em Destaque
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Soluções que conectam arquitetura escalável, performance e propósito.
          </p>
        </div>

        {/* ================= BARRA DE CONTAGEM E FILTRO ================= */}
        <div className="flex items-center justify-between mb-8 relative z-20">
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            <span className="font-bold text-[#A855F7]">
              {filteredProjects.length}
            </span>{' '}
            projetos disponíveis
          </p>

          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0D0F18] border border-[#1E2132] hover:border-[#8B5CF6]/50 text-xs sm:text-sm font-medium text-white transition-colors"
            >
              <img
                src={IconsDevLinks.FilterIcon}
                alt="Filtrar"
                className="w-3.5 h-3.5 object-contain opacity-80"
              />
              <span>
                {selectedCategory === 'Todos' ? 'Filtrar' : selectedCategory}
              </span>
              <img
                src={IconsDevLinks.ChevronIcon}
                alt="Abrir"
                className={`w-3 h-3 object-contain opacity-70 transition-transform duration-200 ${
                  filterOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#11131F] border border-[#23263B] shadow-2xl py-1.5 z-30">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'text-[#A855F7] bg-[#1A1D2E]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#1A1D2E]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= GRELHA DE CARTÕES DE PROJETOS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl bg-[#0D0F18]/95 border border-[#1E2132] hover:border-[#8B5CF6]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Topo do Cartão: Preview Mockup */}
            <div className="bg-[#121524]/70 p-5 sm:p-6 h-56 flex items-center justify-center border-b border-[#1E2132]/80 overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={`Preview do projeto ${project.title}`}
                    className="w-full h-full object-cover rounded-xl border border-[#1E2132] shadow-lg transform group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full max-w-[260px] transform group-hover:scale-[1.02] transition-transform duration-300">
                    {renderMockup(project.previewType)}
                  </div>
                )}
              </div>

              {/* Corpo Inferior do Cartão */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver projeto ${project.title}`}
                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#131625] border border-[#23263B] hover:border-[#8B5CF6]/60 transition-colors"
                      >
                        <img
                          src={IconsDevLinks.ExternalIcon}
                          alt="Link externo"
                          className="w-4 h-4 object-contain opacity-80 hover:opacity-100"
                        />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Repositório GitHub de ${project.title}`}
                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#131625] border border-[#23263B] hover:border-[#8B5CF6]/60 transition-colors"
                      >
                        <img
                          src={IconsDevLinks.GitHubIcon}
                          alt="GitHub"
                          className="w-4 h-4 object-contain opacity-80 hover:opacity-100"
                        />
                      </a>
                    </div>
                  </div>

                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Destaques do README */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[11px] text-[#64748B]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A855F7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={project.detailsUrl}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A855F7] hover:text-[#C084FC] transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <img
                      src={IconsDevLinks.ArrowIcon2}
                      alt="Seta"
                      className="w-3.5 h-3.5 object-contain transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;