import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  jsonLdScript,
  localBusinessJsonLd,
  webSiteJsonLd,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "BIOPROM — Desinfestação, Higienização e Limpeza Profissional em Angola",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "desinfestação Luanda",
    "controlo de pragas Angola",
    "desratização",
    "desbaratização",
    "fumigação",
    "expurgo de grãos",
    "higienização",
    "limpeza profissional Luanda",
    "limpeza de escritórios",
    "limpeza de fossas e esgotos",
    "empresa de limpeza Angola",
    "BIOPROM",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Serviços de limpeza e controlo de pragas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "/",
    siteName: SITE_NAME,
    title:
      "BIOPROM — Desinfestação, Higienização e Limpeza Profissional em Angola",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BIOPROM — Desinfestação, Higienização e Limpeza Profissional em Angola",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-AO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(webSiteJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
