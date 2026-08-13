"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ScanLine,
  Leaf,
  Users,
} from 'lucide-react';
import desinfecta from '@/public/img/service4.jpeg';
import img1 from '@/public/img/limparG.jpeg';
import img2 from '@/public/img/limpezatotal.jpeg';
import img3 from '@/public/img/Atomização .jpg';
import img4 from '@/public/img/service4.jpeg';
import work1 from '@/public/img/servico_desratização.jpg';
import work2 from '@/public/img/work1.jpg'
import work3 from '@/public/img/work2.jpg'
import work4 from '@/public/img/servico_geral.png'
import work5 from '@/public/img/Limpezas_service.jpg'
import work6 from '@/public/img/limpezatotal.jpeg'
import work7 from '@/public/img/work7.jpg'

const servicePillars = [
  {
    title: 'Limpeza profunda',
    description:
      'Removemos poeira, manchas e resíduos acumulados para garantir espaços mais limpos, organizados e saudáveis.',
    icon: Sparkles,
    image: img1,
  },
  {
    title: 'Desinfeção e higienização',
    description:
      'Aplicamos soluções específicas para eliminar bactérias, vírus e outros microrganismos com segurança e eficácia.',
    icon: ScanLine,
    image: img2,
  },
  {
    title: 'Produtos certificados',
    description:
      'Usamos produtos certificados e aprovados, protegendo a saúde das pessoas, dos animais e o meio ambiente.',
    icon: Leaf,
    image: img3,
  },
  {
    title: 'Equipa especializada',
    description:
      'Profissionais treinados e orientados para um atendimento rigoroso, eficiente e de qualidade.',
    icon: Users,
    image: img4,
  },
];

const environments = [
  'Escritórios',
  'Armazéns',
  'Bancos',
  'Hotéis',
  'Condomínios',
  'Hospitais',
  'Fábricas',
  'Lojas',
  'Residências',
  'Restaurantes',
  'Hiper e Supermercados',
  'Escolas',
  'Garagens',
  'Oficinas',
  'Parques de Estacionamento',
  'Outros estabelecimentos',
];

const serviceGroups = [
  {
    title: 'Serviço profissional',
    image: work4,
    items: [
      {
        name: 'Pulverização e fumigação',
        detail:
          'Realizamos tratamentos especializados para o controlo e eliminação de pragas através da aplicação de produtos autorizados e técnicas adequadas, promovendo segurança e proteção da saúde pública.',
      },
      {
        name: 'Desbaratização',
        detail:
          'Executamos o controlo e eliminação de baratas utilizando métodos modernos e produtos certificados, interrompendo o ciclo de reprodução e prevenindo novas infestações.',
      },
      {
        name: 'Desratização',
        detail:
          'Oferecemos soluções eficazes para o combate a ratos, ratazanas e camundongos com porta-iscas, armadilhas e raticidas certificados.',
      },
      {
        name: 'Expurgo de grãos ensacados em silos e porões de navios',
        detail:
          'Efetuamos o tratamento fitossanitário de grãos armazenados e transportados, eliminando insetos e preservando a qualidade dos produtos.',
      },
    ],
  },
  {
    title: 'Desratização',
    image: work1,
    items: [
      {
        name: 'O que é desratização?',
        detail:
          'A desratização é um serviço essencial para o controle de pragas urbanas, em especial os ratos. Esses roedores são considerados uma das principais pragas que podem afetar a saúde e a segurança das pessoas, além de causar prejuízos materiais. O serviço de desratização consiste em um conjunto de medidas preventivas e corretivas para eliminar e controlar a presença de ratos em ambientes residenciais, comerciais e industriais.',
      },
      {
        name: 'Por que contratar o serviço?',
        detail:
          'Os ratos são animais que se reproduzem rapidamente e podem causar danos significativos em pouco tempo. Além disso, eles são transmissores de diversas doenças, como leptospirose, hantavirose e salmonelose, que representam sérios riscos à saúde humana. Portanto, é fundamental contar com um serviço de desratização profissional para garantir a segurança e o bem-estar de todos que frequentam o ambiente infestado.',
      },
      {
        name: 'Como funciona o serviço?',
        detail:
          'O serviço de desratização envolve a identificação das espécies de ratos presentes no local, a avaliação do grau de infestação, a definição das melhores estratégias de controle e a aplicação de produtos químicos específicos para eliminar os roedores. Além disso, é importante adotar medidas preventivas, como a vedação de frestas e buracos, o armazenamento adequado de alimentos e o descarte correto do lixo, para evitar novas infestações.',
      },
      {
        name: 'Quais são os métodos utilizados no serviço?',
        detail:
          'Existem diversos métodos de desratização disponíveis no mercado, como o uso de raticidas, armadilhas, iscas e barreiras físicas. Cada método possui suas vantagens e desvantagens, e a escolha do mais adequado depende das características do ambiente, do tipo de infestação e das preferências do cliente. É importante contar com a orientação de profissionais especializados para garantir a eficácia do serviço e a segurança das pessoas e animais de estimação.',
      },
      {
        name: 'Quais são os Benefícios',
        detail:
          'Os principais benefícios do serviço de desratização incluem a eliminação dos ratos presentes no ambiente, a prevenção de novas infestações, a redução dos riscos de contaminação por doenças transmitidas pelos roedores, a preservação da integridade de estruturas e materiais e a promoção de um ambiente mais seguro e saudável para todos que frequentam o local. Além disso, a desratização contribui para a preservação do meio ambiente, ao evitar o uso indiscriminado de produtos químicos nocivos.',
      },
    ],
  },
  {
    title: 'Pulverização e Atomização',
    image: img3,
    items: [
      {
        name: 'O que é um serviço de pulverização e atomização?',
        detail:
          'O serviço de pulverização e atomização consiste na aplicação mecanizada de produtos líquidos (como defensivos agrícolas, desinfetantes ou fertilizantes)transformados em pequenas gotículas ou névoa para cobrir superfícies ou plantações de forma uniforme. ',
      },
      {
        name: 'Quais são os Benefícios de uma pulverização e uma atomização',
        detail:
          'O benefício principal de um serviço de pulverização e atomização é a distribuição uniforme e eficiente de líquidos ou produtos, destacando-se a economia de insumos, o alcance em áreas difíceis e o combate rápido a pragas e doenças.',
      },
      {
        name: 'Quais são as Vantagens da pulverização e atomização',
        detail:
          'As principais vantagens da pulverização e atomização são a alta precisão no direcionamento de produtos, a grande economia de insumos e a alta velocidade para cobrir grandes áreas. Ambas transformam líquidos em pequenas gotas, mas com alcances e focos diferentes. ',
      },
      {
        name: 'Quais são as Vantagens da pulverização',
        detail:
          'Precisão cirúrgica: Ótima para focar em áreas específicas ou plantas menores sem desperdício. Menor risco de deriva: O jato é mais controlado, evitando atingir plantações vizinhas ou áreas sensíveis ao vento. Versatilidade de uso: Permite usar diferentes volumes e tamanhos de gotas para cada tipo de necessidade. Economia de produto: Aplica a medida certa de defensivos ou nutrientes diretamente no alvo  ',
      },
      {
        name: 'Quais são as Vantagens da atomização',
        detail:
          'Longo alcance: Cria uma névoa fina impulsionada por ar que chega a mais de 10 a 15 metros de distância.• Ideal para grandes alturas e copas densas: Perfeita para árvores grandes (como café e frutas) e galpões altos.• Alta produtividade: Cobre grandes extensões de terreno em pouco tempo.• Versatilidade de materiais: Alguns modelos conseguem espalhar não só líquidos, mas também pós e pequenos grãos. ',
      },
      {
        name: 'Principais alvos biológicos',
        detail:
          'Insetos-praga: Lagartas, percevejos, pulgões, cochonilhas e mosquitos que atacam as folhas, frutos ou o ambiente.• Doenças fitossanitárias: Fungos e bactérias causadores de manchas,mofos e podridões nas plantas.• Plantas daninhas: Ervas invasoras que disputam água, luz e nutrientes com a cultura principal. ',
      },
    ],
  },
  {
    title: 'Fumigação geral',
    image: work7,
    items: [
      {
        name: 'O que é?',
        detail:
          'A fumigação é um método de controle de pragas que usa produtos químicos em estado de gás ou vapor dentro de um espaço totalmente fechado. O processo elimina insetos, larvas,ovos e fungos em locais difíceis de alcançar',
      },
      {
        name: 'Quais as Vantagens do serviço',
        detail:
          'A vantagem é que ela elimina totalmente as pragas em pouco tempo, atinge locais difíceis graças ao gás e protege cargas e produtos sem deixar resíduos líquidos.',
      },
      {
        name: 'Quais os Benefícios principais',
        detail:
          '• Ação completa: o gás chega a todos os cantos e elimina insetos, ovos, fungos e bactérias de uma só vez.• Proteção de bens: evita o estrago de grãos, madeiras, alimentos armazenados e mercadorias em [conteúdos e silos].• Comércio seguro: cumpre as leis de exportação e impede que pragas viajem para outros países ou regiões.• Sem resíduos: o método em gás limpa o local ou produto tratado sem manchar ou deixar restos de veneno após a ventilação.',
      },
      {
        name: 'Quais os Alvos principais',
        detail:
          'O principal alvo a eliminar em uma fumigação são os insetos, larvas e ovos, além de fungos, bactérias e roedores escondidos em cargas, grãos, solos ou estruturas fechadas. ',
      },
      {
        name: 'Alvos principais a combater',
        detail:
          'Insetos e pragas de grãos: carunchos, traças e besouros em silos e armazéns.• Pragas da madeira: cupins e brocas em pallets, caixas e móveis de exportação.• Patógenos do solo: nematoides, fungos e ervas daninhas antes do plantio.• Vetores e roedores: ratos e bactérias em contêineres ou porões de navios.',
      },
    ],
  },
  {
    title: 'Expurgo em grãos, porões de navios, silos e sacarias',
    image: work3,
    items: [
      {
        name: 'O que é?',
        detail:
          'O expurgo (ou fumigaça o) em grão,porões de navios e sacarias e um tratamento fitossanitario essencial para eliminar pragas em todas as fases de desenvolvimento na massa de grãos a granel, garantindo a conformidade com normas internacionais de exportação. O processo baseia-se na aplicação rigorosa de agentes químicos gasosos dentro de um ambiente totalmente vedado. ',
      },
      {
        name: 'Quais as Vantagens deste serviço',
        detail:
          'A principal vantagem de um serviço de expurgo (ou fumigação) é a eliminação total de pragas em produtos armazenados, destacando-se por:• Ação profunda em todas as fases de vida dos insetos (ovos, larvas, pupas e adultos).• Preservação da qualidade, peso e valor comercial de grãos e mercadorias.• Garantia de cumprimento de normas rígidas para transporte e exportação.• Fases biológicas completas: O gás atinge ovos, larvas, pupas e insetos adultos simultaneamente.',
      },
      {
        name: 'Quais os Benefícios principais do expurgo',
        detail:
          'Eficácia Completa: O gás utilizado atinge até os menores espaços e fendas entre os grãos, combatendo infestações que métodos comuns não alcançam.• Fases biológicas completas: O gás atinge ovos, larvas, pupas e insetos adultos simultaneamente.• A proteção Grãos e cereais: Milho, soja, arroz, trigo e feijão guardados em silos ou armazéns.• A proteção Sementes e tabaco: Produtos agrícolas sensíveis que exigem controle rigoroso de sanidade.• A proteção Sementes e tabaco: Produtos agrícolas sensíveis que exigem controle rigoroso de sanidade.• Proteção do Estoque: Evita a perda de massa dos alimentos e impede o desperdício de cereais, sementes ou produtos ensacados.• Segurança Regulatória: Assegura que cargas comerciais e industriais estejam livres de contaminações, cumprindo exigências legais para o mercado nacional e internacional.',
      },
      {
        name: 'Quais os principais alvos a combater no serviço de expurgo insetos e pragas alvo',
        detail:
          '• Insetos primários: Atacam grãos sadios e intactos (como o gorgulho do milho e do trigo).• Insetos secundários: Alimentam-se de grãos já quebrados, mofados ou de resíduos de cereais.• Ácaros e carunchos: Prejudicam a qualidade de sementes, farelos e grãos ensacados ou a granel.• Fases biológicas completas: O gás atinge ovos, larvas, pupas e insetos adultos simultaneamente.',
      },
    ],
  },
  {
    title: 'Jardinagem e Paisagismo',
    image: work2,
    items: [
      {
        name: 'O que são?',
        detail:
          'Os serviços de jardinagem e paisagismo englobam a criaça o de projetos esteticos e funcionais para a reas verdes, abrangendo etapas como planejamento de espaços,escolha e plantio de espe cies vegetais adequadas ao clima local, ale m da instalaça o de sistemas de rega e manutença o contí nua cuidam de áreas verdes e criam espaços bonitos. Eles incluem o planejamento do espaço, o plantio de flores e a manutenção diária. ',
      },
      {
        name: 'O que faz o paisagismo',
        detail:
          'Criação de projetos: desenha o visual do jardim e escolhe as melhores plantas para o local.• Uso do espaço: organiza caminhos, áreas de descanso e plantas para deixar o ambiente harmonioso.• Estudo do clima: analisa a terra, o sol e a água necessários para as plantas viverem bem. ',
      },
      {
        name: 'O que faz a jardinagem',
        detail:
          'Corte e poda: aparar a relva e cortar galhos secos ou doentes.• Limpeza: retirar folhas secas, lixo e manter o terreno limpo.• Tratamento: colocar adubo, regar e cuidar para que pragas não matem as plantas.• Limpeza e adubação: retirar folhas secas, aplicar fertilizantes e tratar a terra.• Controle de pragas: proteger as plantas contra insetos e doenças.',
      },
    ],
  },
  {
    title: 'Limpeza e Higienização',
    image: work5,
    items: [
      {
        name: 'O que é?',
        detail:
          'O serviço de limpeza e higienização geral inclui a desinfeção de superfícies, a lavagem de pavimentos, higienização de instalações ,limpeza sanita rias, remoção de poeira e sujidades, lavagem de pisos, desinfecção contra bactérias e vírus.',
      },
      {
        name: 'O que o serviço inclui',
        detail:
          'Superfícies de trabalho: limpeza de secretárias, mesas, telefones, teclados e puxadores com produtos desinfetantes.• Casas de banho: lavagem de sanitários, lavatórios, espelhos e reposição de consumíveis como papel e sabonete.• Pavimentos e áreas comuns: aspiração e lavagem de pisos, limpeza de salas de reuniões, receção e copa.• Resíduos: recolha de lixo e substituição de sacos nos cestos.• Limpeza de superfícies: lavagem de pisos, limpeza de paredes, móveis e portas.• Higienização e desinfecção: aplicação de produtos para eliminar germes, ácaros e bactérias em locais de uso comum.• Áreas específicas: limpeza profunda de cozinhas, banheiros, vidros e recolha de lixo.',
      },
    ],
  },
  {
    title: 'Serviço profissional de limpeza',
    items: [
      {
        name: 'Limpeza geral',
        detail:
          'Prestamos serviços completos de limpeza para residências, escritórios, condomínios, hospitais, escolas, hotéis, fábricas e espaços comerciais.',
      },
      {
        name: 'Limpeza e desinfeção de sanitários',
        detail:
          'Realizamos a limpeza profunda e desinfeção de casas de banho e instalações sanitárias, eliminando bactérias, vírus, fungos e maus odores.',
      },
      {
        name: 'Limpeza e tratamento de pisos',
        detail:
          'Executamos a limpeza, conservação e tratamento de diversos tipos de pavimentos, restaurando o brilho e aumentando a durabilidade das superfícies.',
      },
      {
        name: 'Limpeza de fossas e esgotos',
        detail:
          'Efetuamos serviços de aspiração, desobstrução, lavagem e remoção de resíduos em fossas sépticas, redes de esgoto e sistemas de drenagem.',
      },
    ],
  },
];

export default function ServicoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openService, setOpenService] = useState<number | null>(0);

  const categories = ['Todos', ...new Set(serviceGroups.map((group) => group.title))];
  const categoryFromUrl = searchParams.get('categoria');
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl && categories.includes(categoryFromUrl) ? categoryFromUrl : 'Todos'
  );

  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
      return;
    }

    setSelectedCategory('Todos');
  }, [categoryFromUrl, categories]);

  const filteredGroups =
    selectedCategory === 'Todos'
      ? serviceGroups
      : serviceGroups.filter((group) => group.title === selectedCategory);

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_#2a1355_0%,_#15072e_45%,_#080312_100%)] px-4 pb-16 pt-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={desinfecta}
              alt="Serviços de desinfeção e higiene BIOPROM"
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,3,18,0.88)_0%,rgba(8,3,18,0.6)_45%,rgba(8,3,18,0.35)_100%)]" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              
              Soluções profissionais
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Serviços pensados para ambientes seguros, higienizados e protegidos.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
              Na BIOPROM, unimos rigor, experiência e tecnologia para oferecer soluções de hygiene, desinfeção e controlo de pragas com foco na saúde, conforto e confiança dos seus espaços.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                Voltar ao início
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300/70 hover:bg-orange-300/10"
              >
                Solicitar contacto
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Desinfeção de espaços comerciais e residenciais',
                'Controlo de pragas com monitorização eficiente',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-3 text-sm text-gray-100"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-orange-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 hidden lg:block" />
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
                O que fazemos
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Soluções práticas para ambientes mais seguros e limpos
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-3 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50"
                >
                  <div className="relative h-48 overflow-hidden rounded-[1.1rem]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-300/20 text-orange-300 backdrop-blur-sm">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
            Intervenções
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Executamos intervenções através dos nossos serviços em:
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {environments.map((environment) => (
              <div
                key={environment}
                className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-medium text-gray-100"
              >
                {environment}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
              Nossos serviços
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Explore os detalhes de cada solução
            </h2>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      const nextCategory = category === 'Todos' ? 'Todos' : category;

                      setSelectedCategory(nextCategory);
                      setOpenService(null);

                      const query = nextCategory === 'Todos' ? '' : `?categoria=${encodeURIComponent(nextCategory)}`;
                      router.push(`/servicos${query}`);
                    }}
                    className={`min-w-fit rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
                      isActive
                        ? 'border-orange-300 bg-orange-300 text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.4)]'
                        : 'border-white/15 bg-white/5 text-gray-200 hover:border-orange-300/70 hover:bg-orange-300/10 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            {filteredGroups.map((group) => {
              const originalIndex = serviceGroups.findIndex((item) => item.title === group.title);
              const isOpen = openService === originalIndex;

              return (
                <article
                  key={group.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? null : originalIndex)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">
                        Clique para ver as definições detalhadas
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-orange-300" />
                    ) : (
                      <ChevronDown size={20} className="text-orange-300" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 py-4">
                      {group.image && (
                        <div className="mb-4 overflow-hidden rounded-[1.2rem] border border-white/10">
                          <Image
                            src={group.image}
                            alt={group.title}
                            className="h-48 w-full object-cover"
                          />
                        </div>
                      )}
                      <div className="grid gap-3">
                        {group.items.map((item) => {
                          const detailItems = item.detail
                            .split('•')
                            .map((part) => part.trim())
                            .filter(Boolean);

                          return (
                            <div
                              key={item.name}
                              className="rounded-2xl border border-white/10 bg-white/5 p-4"
                            >
                              <h4 className="text-base font-semibold text-orange-200">{item.name}</h4>
                              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-200">
                                {detailItems.map((line, index) => (
                                  <li key={`${item.name}-${index}`} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                                    <span>{line}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}