// Media mapping for services: images (additional thumbnails) and videos (public URLs or imported paths)

export const serviceMedia: Record<
  string,
  { images?: string[]; videos?: string[] }
> = {
  'Limpeza profunda': {
    images: ['/img/limpezatotal.jpeg', '/img/limparG.jpeg','/img/Limpezas_service.jpg'],
    videos: ['/videos/limpeza1.mp4', '/videos/limpeza2.mp4'],
  },
 
  'Equipa especializada': {
    images: ['/img/equipa_bio.jpeg'],
    videos: [],
  },
  'Serviço profissional': {
    images: ['/img/servico_geral.png'],
    videos: [],
  },
  'Desratização': {
    images: ['/img/servico_desratização.jpg','/img/wy_desratiza.jpeg'],
    videos: [],
  },
  'Pulverização e Atomização': {
    images: ['/img/Atomização .jpg','/img/pulver_img.jpeg','/img/pulver_img2.jpeg'],
    videos: ['/videos/pulverizacao1.mp4'],
  },
  'Fumigação geral': {
    images: ['/img/work7.jpg', '/img/fumigacao1.jpeg', '/img/fumigacao2.jpeg', '/img/fumigacao3.jpeg', '/img/fumigacao4.jpeg'],
    videos: ['/videos/fumigação1.mp4', '/videos/fumigação2.mp4'],
  },
  'Expurgo em grãos, porões de navios, silos e sacarias': {
    images: ['/img/work3.jpg'],
    videos: [],
  },
  'Jardinagem e Paisagismo': {
    images: ['/img/Jardim1.jpeg', '/img/Jardim2.jpeg'],
    videos: ['/videos/WhatsApp Video 2026-08-31 at 09.59.20.mp4'],
  },
  'Limpeza e Higienização': {
    images: ['/img/higiene1.jpeg', '/img/higiene2.jpeg', '/img/higiene3.jpeg', '/img/higiene4.jpeg', '/img/higiene5.jpeg'],
    videos: ['/videos/higienizar.mp4', '/videos/higienizar2.mp4'],
  },
  'Serviço profissional de limpeza': {
    images: [],
    videos: [],
  },
};
