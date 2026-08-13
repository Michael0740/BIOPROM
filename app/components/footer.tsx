'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/public/img/BIOPROM LOGO  B.png'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="border-t border-purple-400/20 bg-[radial-gradient(circle_at_top,_#241847_0%,_#0f0629_55%,_#050310_100%)] py-10 text-white sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Image src={logo} alt='logo' width={100} height={100} className="h-20 w-auto"></Image>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Soluções profissionais em limpeza e higienização, desinfestação, desratização, jardinagem e paisagismo, saneamento básico  para ambientes mais seguros e acolhedores.
            </p>

          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Contacto rápido</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-300">

              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-orange-300" />
                <div className="flex flex-col gap-1">
                  <Link href="mailto:geral.bioprom@gmail.com" className="transition hover:text-orange-300">
                    geral.bioprom@gmail.com
                  </Link>
                  <Link href="mailto:Dp.administrativo@biopromcontrol.com" className="transition hover:text-orange-300">
                    Dp.administrativo@biopromcontrol.com
                  </Link>
                  <Link href="mailto:Dp.tecnico@biopromcontrol.com" className="transition hover:text-orange-300">
                    Dp.tecnico@biopromcontrol.com
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-orange-300" />
                <div className="flex flex-col gap-1">
                  <Link href="tel:+244956239924" className="transition hover:text-orange-300">
                    +244 956 239 924
                  </Link>
                  <Link href="tel:+244946406605" className="transition hover:text-orange-300">
                    <span className="text-orange-300">+244 946 406 605</span>
                  </Link>
                  <Link href="tel:+244927162812" className="transition hover:text-orange-300">
                    +244 927 162 812
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-orange-300" />
                <div className="flex flex-col gap-1">
                  <span>Vila Gamek | Município de Belas</span>
                  <span>Rua Pedro de Castro Van-Dúnem "LOY"</span>
                  <span>Condomínio ECO-Campo, casa nº 1</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <Link
              href="https://www.facebook.com/share/1HD2YwCv12/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da BIOPROM"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/70 hover:bg-orange-300/15 hover:text-orange-300"
            >
              <FaFacebookSquare />
            </Link>

            <Link
              href="https://www.instagram.com/bioprom_angola/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da BIOPROM"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition duration-300 hover:-translate-y-0.5 hover:border-pink-300/70 hover:bg-pink-300/15 hover:text-pink-300"
            >
              <FaInstagramSquare />
            </Link>

            <Link
              href="https://www.linkedin.com/company/bioprom-angola/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da BIOPROM"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-sky-300/15 hover:text-sky-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
