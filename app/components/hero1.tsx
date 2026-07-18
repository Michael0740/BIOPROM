'use client';

import Image, { type StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import slide1 from '@/public/img/Limpeza1.jpg';
import slide2 from '@/public/img/Man_clean.jpg';
import slide3 from '@/public/img/clean2.jpg';

interface Slide {
  image: StaticImageData;
  service: string;
  title: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    image: slide1,
    service: 'Desinfestação',
    title: 'Proteção total contra pragas',
    description: 'Eliminamos insetos e pragas com métodos seguros e eficazes para a sua casa ou negócio.',
  },
  {
    image: slide2,
    service: 'Limpeza de Escritórios',
    title: 'Ambientes limpos, equipas produtivas',
    description: 'Higienização completa de espaços corporativos, garantindo conforto e saúde no trabalho.',
  },
  {
    image: slide3,
    service: 'Higienização Especializada',
    title: 'Qualidade que se vê e se sente',
    description: 'Serviços de limpeza profunda com produtos certificados e equipa especializada.',
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext, activeIndex]);

  return (
    <section
      id="home"
      className="relative w-full h-[78vh] min-h-[480px] overflow-hidden bg-gray-900 scroll-mt-20"
      aria-roledescription="carousel"
      aria-label="Serviços em destaque"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.service}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt={slide.service}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={100}
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="relative z-20 h-full flex items-end px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
            {index === activeIndex && (
              <div key={activeIndex} className="max-w-2xl rounded-2xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-sm sm:p-8 space-y-4">
                <span className="inline-block text-green-400 font-semibold tracking-wide uppercase text-sm sm:text-base animate-slide-up-fade [animation-delay:0ms]">
                  {slide.service}
                </span>
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-slide-up-fade [animation-delay:150ms]">
                  {slide.title}
                </h1>
                <p className="text-gray-100 text-base sm:text-lg animate-slide-up-fade [animation-delay:300ms]">
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Setas de navegação */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm hover:bg-green-600 transition-colors duration-200"
      >
        &#8249;
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Próximo slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm hover:bg-green-600 transition-colors duration-200"
      >
        &#8250;
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.service}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Ir para o slide ${slide.service}`}
            aria-current={index === activeIndex}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-green-500' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}