import type { Metadata } from 'next';

/**
 * Configuração central de SEO da BIOPROM.
 *
 * Tudo o que depende do domínio de produção (canonical, sitemap, robots,
 * Open Graph, JSON-LD) sai daqui, para não haver URLs espalhadas pelo código.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bioprom-online.com'
).replace(/\/$/, '');

export const SITE_NAME = 'BIOPROM';

export const SITE_DESCRIPTION =
  'Empresa 100% angolana especializada em desinfestação, controlo de pragas, ' +
  'higienização e limpeza profissional em Luanda. Peça o seu orçamento.';

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'BIOPROM — Desinfestação, higienização e limpeza profissional em Angola',
};

export const CONTACT = {
  email: 'geral.bioprom@gmail.com',
  phones: ['+244946406605', '+244956239924', '+244927162812'],
  street: 'Av. Pedro de Castro Van-Dúnem Loy, Vila Gamek, May Gallery, Loja nº14',
  city: 'Luanda',
  country: 'AO',
};

export const SOCIAL_LINKS = [
  'https://www.facebook.com/share/1HD2YwCv12/?mibextid=wwXIfr',
  'https://www.instagram.com/bioprom_angola/',
  'https://www.linkedin.com/company/bioprom-angola/',
];

export const SERVICES = [
  'Pulverização e fumigação',
  'Desbaratização',
  'Desratização',
  'Expurgo de grãos ensacados em silos e porões de navios',
  'Limpeza geral',
  'Limpeza e desinfeção de sanitários',
  'Limpeza e tratamento de pisos',
  'Limpeza de fossas e esgotos',
];

/**
 * Metadata de uma página interna.
 *
 * O Next substitui o objecto `openGraph`/`twitter` do layout em vez de o
 * fundir campo a campo — sem isto, as páginas filhas perdiam a og:image e o
 * twitter:card caía para `summary`.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'pt_AO',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Serializa JSON-LD neutralizando `<` para evitar injeção de HTML. */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Negócio local + catálogo de serviços. Alimenta o painel de negócio local
 * do Google e os rich results da pesquisa.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControlService'],
    '@id': `${SITE_URL}/#organizacao`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/BIOPROM%20LOGO.jpg.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description: SITE_DESCRIPTION,
    email: CONTACT.email,
    telephone: CONTACT.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Angola',
    },
    sameAs: SOCIAL_LINKS,
    contactPoint: CONTACT.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      areaServed: 'AO',
      availableLanguage: ['Portuguese'],
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços BIOPROM',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  };
}

/** Habilita a sitelinks searchbox e fixa o nome do site na pesquisa. */
export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: 'pt-AO',
    publisher: { '@id': `${SITE_URL}/#organizacao` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
