'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { serviceGroups } from '@/app/servicos/servicos';
import { serviceMedia } from '@/app/data/serviceMedia';

function ServiceVideoPlayer({ videos }: { videos: string[] }) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.load();
    const playPromise = el.play();
    if (playPromise && typeof playPromise.then === 'function') playPromise.catch(() => {});
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);
  const next = () => setIndex((i) => (i + 1) % videos.length);

  if (!videos || videos.length === 0)
    return <div className="py-6 text-center text-gray-300">Sem vídeos disponíveis.</div>;

  return (
    <div>
      <div className="relative bg-black/80 rounded-md overflow-hidden">
        <video
          key={index}
          ref={videoRef}
          className="w-full h-auto max-h-[50vh] bg-black"
          src={videos[index]}
          controls
          playsInline
          muted
          preload="metadata"
        />

        {videos.length > 1 && (
          <>
            <button aria-label="Anterior" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md">‹</button>
            <button aria-label="Próximo" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md">›</button>
          </>
        )}
      </div>

      {videos.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {videos.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              className={`flex-none w-40 h-24 rounded-md overflow-hidden ${
                i === index ? 'ring-2 ring-indigo-500' : ''
              }`}
              aria-label={`Ir para vídeo ${i + 1}`}
            >
              <video className="w-full h-full object-cover block" src={src} muted preload="metadata" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Categorias que não devem aparecer nesta seção de vídeos.
// Coloque aqui o(s) título(s) exatamente como estão em serviceGroups.
const excludedCategories: string[] = [
  // 'Nome exato da categoria a remover',
   'Serviço profissional de limpeza', // Exemplo de categoria a excluir
   'Serviço profissional', // Exemplo de categoria a excluir
   'Desratização', // Exemplo de categoria a excluir
   'Expurgo em grãos, porões de navios, silos e sacarias', // Exemplo de categoria a excluir
];

const visibleGroups = serviceGroups.filter(
  (g) => !excludedCategories.includes(g.title)
);

export default function VideosServico() {
  const [active, setActive] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const current = visibleGroups[active];
  const media = current ? serviceMedia[current.title] : undefined;

  const selectService = (i: number) => {
    setActive(i);
    setShowGallery(false);
  };

  const prevService = () => selectService((active - 1 + visibleGroups.length) % visibleGroups.length);
  const nextService = () => selectService((active + 1) % visibleGroups.length);

  const hasGallery = (media?.images && media.images.length > 0) || (media?.videos && media.videos.length > 1);

  return (
    <section className="w-full rounded-2xl bg-slate-50 p-6 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Cabeçalho */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Vídeos por serviço</h2>
            <p className="mt-1 text-sm text-slate-500">Veja como trabalhamos em cada área de atuação.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={prevService}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Anterior
            </button>
            <button
              onClick={nextService}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Próximo
            </button>
          </div>
        </div>

        {/* Seletor de serviços (chips) — categorias vindas de serviceGroups */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {visibleGroups.map((g, i) => (
            <button
              key={g.title}
              onClick={() => selectService(i)}
              className={`flex-none whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                i === active
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        {current && (
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            {/* Vídeo em destaque */}
            <div className="mt-4">
              <ServiceVideoPlayer videos={media?.videos || []} />
            </div>

            {/* Botão para ver mais imagens/vídeos, se existirem */}
            {hasGallery && (
              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => setShowGallery((s) => !s)}
                  className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  {showGallery ? 'Ocultar galeria' : 'Ver mais fotos e vídeos'}
                </button>
              </div>
            )}

            {/* Galeria de imagens e vídeos — sem textos */}
            {showGallery && (
              <div className="mt-6 border-t border-slate-100 pt-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {media?.videos?.map((vid, i) => (
                    <div key={`v-${vid}-${i}`} className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                      <video src={vid} muted preload="metadata" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {media?.images?.map((img, i) => (
                    <div key={`i-${img}-${i}`} className="aspect-square overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={img}
                        alt={current.title}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}

        {/* Setas de navegação para mobile */}
        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          <button
            onClick={prevService}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
          >
            ‹ Anterior
          </button>
          <button
            onClick={nextService}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
          >
            Próximo ›
          </button>
        </div>
      </div>
    </section>
  );
}