'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'geral.bioprom@gmail.com , Dp.administrativo@biopromcontrol.com,  Dp.tecnico@biopromcontrol.com',
    href: 'mailto:geral.bioprom@gmail.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+244 956 239 924 / +244 946 406 605 / +244 927 162 812',
    href: 'tel:+244946406605',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Vila Gamek | Município de Belas, Rua Pedro de Castro Van-Dúnem "LOY", Condomínio ECO-Campo, casa nº 1',
    href: 'https://maps.google.com/?q=Vila+Gamek+May+Gallery',
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-gray-100 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
          <div className="mb-8 max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
              Contacto
            </span>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Estamos prontos para ajudar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Entre em contacto connosco para esclarecer dúvidas, solicitar um orçamento ou marcar uma visita.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {contactItems.map(({ icon: Icon, title, value, href }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="w-full flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mb-2 text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 whitespace-pre-wrap break-words">{value}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}