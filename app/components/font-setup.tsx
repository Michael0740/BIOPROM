// No teu app/layout.tsx

import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

// Fonte para o corpo do texto — limpa e muito usada em sites corporativos
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Fonte para títulos — mais robusta, transmite solidez e confiança
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

/*
  No tailwind.config.ts, adiciona:

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
*/
