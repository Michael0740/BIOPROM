'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'geral.bioprom@gmail.com',
    href: 'mailto:geral.bioprom@gmail.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+244 956 239 924 / +244 946 406 605 / +244 927 162 812',
    href: 'tel:+244924000000',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Sede AV. Pedro de Castro Van-Dúnem Loy, Vila Gamek, May Gallery, Loja nº14',
    href: 'https://maps.google.com/?q=Vila+Gamek+May+Gallery',
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-gray-100 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
          <div className="mb-8 max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Contacto
            </span>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Estamos prontos para ajudar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Entre em contacto connosco para esclarecer dúvidas, solicitar um orçamento ou marcar uma visita.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactItems.map(({ icon: Icon, title, value, href }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{value}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}