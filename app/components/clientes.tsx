'use client';

import Image from 'next/image';
import logo1 from '@/public/img/AngoMart-Somos-Familia-Logo-1-e1751054070161.webp';
import logo2 from '@/public/img/luanda.jpeg';
import logo3 from '@/public/img/fabrimetal.png';
import logo4 from '@/public/img/glasstec.png';
import logo5 from '@/public/img/omatapalo.png';
import logo6 from '@/public/img/oleme.jpeg';
import logo7 from '@/public/img/mintras.png';
import logo8 from '@/public/img/cisp.jpeg';

const marqueeStyle = {
  animation: 'marquee 24s linear infinite',
} as const;

const clientes = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function NossoClientes() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-8 sm:py-10">
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-gray-200 bg-white/80 px-4 py-5 shadow-sm backdrop-blur sm:px-6 sm:py-6">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Grandes clientes
          </p>

          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-4 sm:gap-6" style={marqueeStyle}>
              {[...clientes, ...clientes].map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-20 w-28 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm sm:h-24 sm:w-32"
                >
                  <Image
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}