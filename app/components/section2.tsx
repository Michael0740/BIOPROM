'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, SprayCan, Users, Leaf, type LucideIcon } from 'lucide-react';
import desinfect from '@/public/img/desinfecting.jpg';

interface Feature {
  icon: LucideIcon;
  text: string;
}

const FEATURES: Feature[] = [
  { icon: SprayCan, text: 'Limpeza profunda de ambientes residenciais e comerciais' },
  { icon: ShieldCheck, text: 'Desinfeção e higienização de superfícies' },
  { icon: Leaf, text: 'Uso de produtos certificados e seguros' },
  { icon: Users, text: 'Equipa especializada e treinada' },
];

/**
 * Hook simples para animar elementos quando entram na viewport.
 */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Section2() {
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();
  const { ref: imageRef, isInView: imageInView } = useInView<HTMLDivElement>();

  return (
    <section id="quem-somos" className="scroll-mt-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out ${
              textInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="mb-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
              Quem somos
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Soluções profissionais para ambientes mais seguros e acolhedores
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              A BIOPROM reúne experiência, rigor e cuidado para oferecer serviços de higiene,
              desinfeção e manutenção com resultados consistentes e confiáveis.
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              A nossa equipa trabalha com dedicação para transformar cada espaço em ambientes
              mais limpos, saudáveis e preparados para quem nele vive ou trabalha.
            </p>
              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              Somos uma empresa 100% angolana, com experiência no mercado, tendo atuação nas áreas de Desinfestação geral, Higienização e Limpeza Especializada.
              Uma equipa com vasta experiência, altamente comprometida e interessada na melhoria do
             sistema de saneamento e meio ambiente do país.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-5 text-xl font-semibold text-gray-900">
                O que fazemos
              </h3>
              <ul className="space-y-4">
                {FEATURES.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                        textInView ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: textInView ? `${150 + index * 100}ms` : '0ms' }}
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Icon size={18} strokeWidth={2.25} />
                      </span>
                      <span className="pt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`transition-all duration-700 ease-out ${
              imageInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-[1.75rem] bg-purple-600/10 rotate-2 transition-transform duration-500 group-hover:rotate-3" />
              <div className="absolute inset-0 rounded-[1.5rem] border border-white/40" />
              <Image
                src={desinfect}
                alt="Equipa BIOPROM a realizar desinfeção profissional"
                width={600}
                height={420}
                className="relative h-auto w-full rounded-[1.5rem] object-cover shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}