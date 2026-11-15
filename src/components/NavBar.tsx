import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import IconsDevLinks from '../icons/icons';

const navLinks = [
  { name: 'Início', href: '#inicio', icon: IconsDevLinks.HomeIcon },
  { name: 'Habilidades', href: '#habilidades', icon: IconsDevLinks.SkillsIcon },
  { name: 'Projetos', href: '#projetos', icon: IconsDevLinks.ProjectsIcon },
  { name: 'Experiência', href: '#experiencia', icon: IconsDevLinks.WorkIcon },
  { name: 'Formação', href: '#formacao', icon: IconsDevLinks.EducationIcon },
  { name: 'Contato', href: '#contato', icon: IconsDevLinks.MailIcon },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/augustos-dev', icon: IconsDevLinks.GitHub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vicenteaugusto', icon: IconsDevLinks.LinkedIn },
  { name: 'YouTube', href: 'https://www.youtube.com/@augustosdev', icon: IconsDevLinks.YouTube },
];

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Início');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4 md:pt-5">
      {/* ================= TABLET & DESKTOP NAVBAR (md: 768px+) ================= */}
      <nav className="hidden md:flex items-center justify-center">
        <div className="flex items-center gap-0.5 lg:gap-1 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-full bg-[#11131F]/90 backdrop-blur-md border border-[#23263B] shadow-2xl">
          <ul className="flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((item) => {
              const isActive = activeTab === item.name;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#1D2033] text-white shadow-inner'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#1A1D2E]/50'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 object-contain ${
                        isActive ? 'opacity-100' : 'opacity-70'
                      }`}
                    />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 lg:h-5 w-[1px] bg-[#23263B] mx-1.5 lg:mx-2" />

          <ul className="flex items-center gap-0.5 lg:gap-1">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#1A1D2E]/50 transition-all duration-200"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 object-contain opacity-80 hover:opacity-100"
                  />
                  {/* Esconde texto das redes em telas médias para não apertar, mostra em lg */}
                  <span className="hidden xl:inline">{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR (< 768px) ================= */}
      <div className="flex md:hidden items-center justify-between max-w-2xl mx-auto">
        <a href="#inicio" className="text-xl font-bold tracking-tight text-white">
          augustos<span className="text-[#8B5CF6]">.dev</span>
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#141625] border border-[#23263B] text-white hover:border-[#8B5CF6]/50 transition-colors"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-2xl mx-auto rounded-2xl bg-[#11131F]/95 backdrop-blur-xl border border-[#23263B] p-4 shadow-2xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = activeTab === item.name;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1D2033] text-white'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#1A1D2E]/50'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-[18px] h-[18px] object-contain"
                    />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-[1px] w-full bg-[#23263B] my-3" />

          <ul className="flex items-center justify-around pt-1">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 object-contain"
                  />
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;