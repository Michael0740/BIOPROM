'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import seccao0 from '@/public/img/man-is-using-thermal-fog-machine-protect-mosquito-spreading.jpg';
import seccao1 from '@/public/img/Barata.jpeg';
import seccao2 from '@/public/img/Man_clean.jpg';
import seccao3 from '@/public/img/grão.jpeg';

interface Service {
  id: number;
  title: string;
  image: StaticImageData;
  summary: string;
  details: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Pulverização e Fumigação',
    image: seccao0,
    summary: 'Tratamentos de controlo de pragas com aplicação especializada para ambientes infestados.',
    details:
      'A fumigação e a pulverização são técnicas de controlo que atuam de forma rápida e eficaz, permitindo reduzir a presença de pragas em áreas internas, externas e em espaços de armazenamento.',
  },
  {
    id: 2,
    title: 'Desbaratização e Desratização',
    image: seccao1,
    summary: 'Estratégias de combate a baratas, ratos e outras infestações com abordagem segura.',
    details:
      'Este serviço combina medidas preventivas e corretivas para eliminar infestação de roedores e insetos, reduzindo riscos para a saúde, a estrutura e a higiene dos espaços.',
  },
  {
    id: 3,
    title: 'Expurgo de grão em silos e porões de navios',
    image: seccao3,
    summary: 'Tratamento profissional para proteger produtos armazenados contra pragas e contaminação.',
    details:
      'O expurgo é essencial em contextos de armazenamento e transporte, pois ajuda a preservar a qualidade do produto e a evitar perdas associadas à presença de pragas.',
  },
  {
    id: 4,
    title: 'Limpeza geral',
    image: seccao2,
    summary: 'Serviços de limpeza profunda e organização para espaços residenciais e comerciais.',
    details:
      'A limpeza geral assegura ambientes mais saudáveis, com um tratamento completo de superfícies, áreas comuns e zonas de maior circulação.',
  },
];

export default function Servicos() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="servicos" className="scroll-mt-24 bg-[radial-gradient(circle_at_top,_#3d2878_0%,_#1a0f42_55%,_#0d0620_100%)] py-16 text-white md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            Serviços
          </span>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Soluções práticas para proteger e valorizar cada espaço
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            Cada serviço é pensado para responder com eficiência, segurança e qualidade às necessidades do cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;

            return (
              <article
                key={service.id}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.75)] backdrop-blur-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {service.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    className="mt-4 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200 transition hover:bg-orange-500/20"
                  >
                    {isOpen ? 'Ocultar detalhes' : 'Mais detalhes'}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                          {service.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}