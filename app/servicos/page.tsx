import type { Metadata } from 'next';
import ServicePage from '@/app/servicos/servicos';
import Menu from '../components/menu';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Serviços de Desinfestação e Limpeza Profissional',
  description:
    'Desinfestação, pulverização e fumigação, desratização, desbaratização, ' +
    'expurgo de grãos, limpeza geral e tratamento de pisos em Luanda e em todo o país.',
  path: '/servicos',
});

const service = () => {
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <Menu />
      <ServicePage />
        <WhatsAppButton />
      <Footer />
    </>
  );
};

export default service;
