import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  previousRoles?: string;
  tags: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    id: 'vonixx',
    role: 'Analista de desenvolvimento junior',
    company: 'Vonixx · Tempo integral',
    location: 'Fortaleza, Ceará · Presencial',
    period: 'NOV 2026 — ATUAL',
    description:
      'Atuação no desenvolvimento back-end, modelagem e rotinas de banco de dados, integração de sistemas corporativos e evolução da arquitetura interna.',
    previousRoles:
      'Progressão interna: Assistente de estoque (dez/2025 – nov/2026) · Auxiliar de estoque (mai/2025 – dez/2025)',
    tags: ['Back-end', 'Banco de Dados', 'Java & Spring', 'Sistemas ERP'],
  },
  {
    id: 'omniatech',
    role: 'Desenvolvedor full stack',
    company: 'Omnia Tech · Autônomo',
    location: 'Fortaleza, Ceará · Remoto',
    period: 'SET 2025 — ATUAL',
    description:
      'Atuação no desenvolvimento e na arquitetura de sistemas web e soluções sob medida para o mercado empresarial, do levantamento técnico ao deploy.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'atlantico',
    role: 'Desenvolvedor de front-end',
    company: 'Atlântico · Estágio',
    location: 'Fortaleza, Ceará · Remoto',
    period: 'JUN 2025 — DEZ 2025',
    description:
      'Atuação na criação e manutenção de interfaces web responsivas, focando na integração com APIs REST e melhoria de usabilidade para produtos digitais.',
    tags: ['Desenvolvimento Web', 'API REST', 'React', 'TypeScript'],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="relative w-full bg-[#090A0F] py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= COLUNA ESQUERDA (4 colunas no md, 5 no lg) ================= */}
          <div className="md:col-span-4 lg:col-span-5 md:sticky md:top-28">
            <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#A855F7] mb-3">
              03 / EXPERIÊNCIA
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Evolução a cada <br className="hidden md:block" />
              novo desafio.
            </h2>
            <p className="text-[#94A3B8] text-sm lg:text-base max-w-sm leading-relaxed">
              Uma trajetória guiada por curiosidade, colaboração e vontade de
              fazer melhor.
            </p>
          </div>

          {/* ================= COLUNA DIREITA (8 colunas no md, 7 no lg) ================= */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-5">
            {experiencesData.map((exp) => (
              <article
                key={exp.id}
                className="rounded-2xl bg-[#0D0F18]/95 border border-[#1E2132] hover:border-[#8B5CF6]/40 p-6 sm:p-7 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <Briefcase size={18} className="text-[#A855F7]" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#A855F7]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] mb-3.5">
                  {exp.company} · {exp.location}
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8]/90 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.previousRoles && (
                  <p className="text-[11px] text-[#64748B] border-l-2 border-[#8B5CF6]/50 pl-3 mb-4">
                    {exp.previousRoles}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#131625] border border-[#1E2235] text-[11px] font-medium text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;