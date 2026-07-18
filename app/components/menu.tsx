'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (typeof window === 'undefined' || !href.startsWith('#')) {
      return;
    }

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[60] border-b border-gray-200/70 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logótipo */}
          <Link
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation('#home');
            }}
            className="text-xl font-bold text-green-700 tracking-wide"
          >
            BIOPROM
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(item.href);
                    }}
                    className="text-gray-700 font-medium hover:text-green-700 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-200 transition-colors"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 my-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      <nav
        className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white/95 border-t border-gray-200 shadow-sm ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.href);
                }}
                className="block py-3 text-gray-700 font-medium hover:text-green-700 transition-colors duration-200 border-b border-gray-100 last:border-0"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}