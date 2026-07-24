import ServicePage from '@/app/servicos/servicos';
import Menu from '../components/menu';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';

const service = () => {
  return (
    <>
      <Menu />
      <ServicePage />
        <WhatsAppButton />
      <Footer />
    </>
  );
};

export default service;