import Menu from "./components/menu"
import Hero_page from "./components/hero1";
import Section2 from "./components/section2";
import Servicos from "./components/servicos";
import Contacto from "./components/contacto";
import NossoClientes from "./components/clientes";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp";
import VideosServico from '@/app/components/videos_servico';


const Homepage = () => {
  return (
    <main className="pt-16">
      <Menu />
      <Hero_page />
      <Section2 />
      <Servicos />
      <VideosServico />
      <Contacto />
      <NossoClientes/>
      <WhatsAppButton />
      <Footer />
    </main>
  );
};
export default Homepage;