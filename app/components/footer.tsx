'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/public/img/BIOPROM LOGO  B.png'
import Image from 'next/image'



export default function Footer() {
  return (
    <footer className="border-t border-purple-400/20 bg-[radial-gradient(circle_at_top,_#241847_0%,_#0f0629_55%,_#050310_100%)] py-10 text-white sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Image src={logo} alt='logo' width={100} height={100} className="h-20 w-auto"></Image>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Soluções profissionais em higiene, desinfeção e controlo de pragas para ambientes mais seguros e acolhedores.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Contacto rápido</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-300" />
                <Link href="mailto:geral.bioprom@gmail.com" className="transition hover:text-orange-300">
                  geral.bioprom@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-300" />
                <Link href="tel:+244924000000" className="transition hover:text-orange-300">
                 +244 956 239 924 / +244 946 406 605 / +244 927 162 812
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-300" />
                <span>Vila Gamek, May Gallery, Loja nº14</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
           
         
          </div>

         
        </div>

       
      </div>
    </footer>
  );
}
