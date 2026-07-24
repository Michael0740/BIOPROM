"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Sparkles,
  ScanLine,
  Leaf,
  Users,
} from 'lucide-react';
import desinfecta from '@/public/img/desinfecting.jpg';
import img1 from '@/public/img/service1.jpeg';
import img2 from '@/public/img/service2.jpeg';
import img3 from '@/public/img/service3.jpeg';
import img4 from '@/public/img/service4.jpeg';

const servicePillars = [
  {
    title: 'Limpeza profunda',
    description:
      'Removemos poeira, manchas e resíduos acumulados para garantir espaços mais limpos, organizados e saudáveis.',
    icon: Sparkles,
    image: img1,
  },
  {
    title: 'Desinfeção e higienização',
    description:
      'Aplicamos soluções específicas para eliminar bactérias, vírus e outros microrganismos com segurança e eficácia.',
    icon: ScanLine,
    image: img2,
  },
  {
    title: 'Produtos certificados',
    description:
      'Usamos produtos certificados e aprovados, protegendo a saúde das pessoas, dos animais e o meio ambiente.',
    icon: Leaf,
    image: img3,
  },
  {
    title: 'Equipa especializada',
    description:
      'Profissionais treinados e orientados para um atendimento rigoroso, eficiente e de qualidade.',
    icon: Users,
    image: img4,
  },
];

const environments = [
  'Escritórios',
  'Armazéns',
  'Bancos',
  'Hotéis',
  'Condomínios',
  'Hospitais',
  'Fábricas',
  'Lojas',
  'Residências',
  'Restaurantes',
  'Hiper e Supermercados',
  'Escolas',
  'Garagens',
  'Oficinas',
  'Parques de Estacionamento',
  'Outros estabelecimentos',
];

const serviceGroups = [
  {
    title: 'Serviço profissional de desinfestação',
    items: [
      {
        name: 'Pulverização e fumigação',
        detail:
          'Realizamos tratamentos especializados para o controlo e eliminação de pragas através da aplicação de produtos autorizados e técnicas adequadas, promovendo segurança e proteção da saúde pública.',
      },
      {
        name: 'Desbaratização',
        detail:
          'Executamos o controlo e eliminação de baratas utilizando métodos modernos e produtos certificados, interrompendo o ciclo de reprodução e prevenindo novas infestações.',
      },
      {
        name: 'Desratização',
        detail:
          'Oferecemos soluções eficazes para o combate a ratos, ratazanas e camundongos com porta-iscas, armadilhas e raticidas certificados.',
      },
      {
        name: 'Expurgo de grãos ensacados em silos e porões de navios',
        detail:
          'Efetuamos o tratamento fitossanitário de grãos armazenados e transportados, eliminando insetos e preservando a qualidade dos produtos.',
      },
    ],
  },
  {
    title: 'Serviço profissional de limpeza',
    items: [
      {
        name: 'Limpeza geral',
        detail:
          'Prestamos serviços completos de limpeza para residências, escritórios, condomínios, hospitais, escolas, hotéis, fábricas e espaços comerciais.',
      },
      {
        name: 'Limpeza e desinfeção de sanitários',
        detail:
          'Realizamos a limpeza profunda e desinfeção de casas de banho e instalações sanitárias, eliminando bactérias, vírus, fungos e maus odores.',
      },
      {
        name: 'Limpeza e tratamento de pisos',
        detail:
          'Executamos a limpeza, conservação e tratamento de diversos tipos de pavimentos, restaurando o brilho e aumentando a durabilidade das superfícies.',
      },
      {
        name: 'Limpeza de fossas e esgotos',
        detail:
          'Efetuamos serviços de aspiração, desobstrução, lavagem e remoção de resíduos em fossas sépticas, redes de esgoto e sistemas de drenagem.',
      },
    ],
  },
];

export default function ServicoPage() {
  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_#2a1355_0%,_#15072e_45%,_#080312_100%)] px-4 pb-16 pt-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={desinfecta}
              alt="Serviços de desinfeção e higiene BIOPROM"
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,3,18,0.88)_0%,rgba(8,3,18,0.6)_45%,rgba(8,3,18,0.35)_100%)]" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              
              Soluções profissionais
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Serviços pensados para ambientes seguros, higienizados e protegidos.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
              Na BIOPROM, unimos rigor, experiência e tecnologia para oferecer soluções de hygiene, desinfeção e controlo de pragas com foco na saúde, conforto e confiança dos seus espaços.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                Voltar ao início
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300/70 hover:bg-orange-300/10"
              >
                Solicitar contacto
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Desinfeção de espaços comerciais e residenciais',
                'Controlo de pragas com monitorização eficiente',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-3 text-sm text-gray-100"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-orange-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 hidden lg:block" />
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
                O que fazemos
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Soluções práticas para ambientes mais seguros e limpos
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-3 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50"
                >
                  <div className="relative h-48 overflow-hidden rounded-[1.1rem]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-300/20 text-orange-300 backdrop-blur-sm">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
            Intervenções
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Executamos intervenções através dos nossos serviços em:
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {environments.map((environment) => (
              <div
                key={environment}
                className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-medium text-gray-100"
              >
                {environment}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
              Nossos serviços
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Explore os detalhes de cada solução
            </h2>
          </div>

          <div className="grid gap-4">
            {serviceGroups.map((group, index) => {
              const isOpen = openService === index;

              return (
                <article
                  key={group.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">
                        Clique para ver as definições detalhadas
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-orange-300" />
                    ) : (
                      <ChevronDown size={20} className="text-orange-300" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 py-4">
                      <div className="grid gap-3">
                        {group.items.map((item) => (
                          <div
                            key={item.name}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                          >
                            <h4 className="text-base font-semibold text-orange-200">{item.name}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}