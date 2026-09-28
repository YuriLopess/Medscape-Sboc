// Conteúdo demonstrativo da proposta. Títulos, durações, apoiadores e imagens são ilustrativos.
// Imagens: coloque os arquivos em /public/images com os nomes abaixo; enquanto não existirem,
// o site mostra um placeholder no lugar.

export const event = {
  name: 'ESMO 2026',
  dates: '23 – 27 out 2026',
  city: 'Madri, Espanha',
  tagline: 'Ciência. Pessoas. Um futuro mais saudável.',
  title: ['A oncologia', 'em perspectiva.'],
  // Regra Medscape: a marca Medscape não aparece no conteúdo, só no logo e nos avisos de apoio
  lead: 'Análises e perspectivas sobre os principais temas do congresso, com a participação da SBOC.',
  heroImage: 'images/hero-esmo.jpg',
  // Arte decorativa (PNG/WebP transparente) da abertura das páginas internas de conteúdo
  contentArt: 'images/cobertura-arte.webp',
  // Frase no canto inferior direito da foto (uma linha por item)
  heroCaption: ['Madri', 'conecta', 'ideias para', 'mais vidas'],
};

export const navLinks = [
  {
    label: 'Cobertura',
    children: [
      { label: 'Em destaque', href: '#destaques' },
      { label: 'Explore por tema', href: '#explorar' },
    ],
  },
  { label: 'Vídeos', href: '#destaques' },
  { label: 'Síntese final', href: '#sintese' },
  { label: 'Apoiadores', href: '#apoiadores' },
];

// Os 10 vídeos de cobertura (carrossel "Em destaque")
// focus (opcional): parte da imagem que deve ficar visível quando o card recorta a foto, ex.: 'center 15%'
export const featuredVideos = [
  { id: 'panorama', title: 'Panorama do congresso', description: 'Uma visão geral dos principais temas e discussões desta edição do ESMO.', duration: '12:36', image: 'images/videos/panorama.jpg' },
  { id: 'mama', topic: 'mama', title: 'Destaques em câncer de mama', description: 'Avanços, desafios e perspectivas para a prática clínica.', duration: '14:22', image: 'images/videos/mama.jpg' },
  { id: 'toracicos', topic: 'pulmao', title: 'Tumores torácicos', description: 'O que foi apresentado e o que muda na prática.', duration: '13:05', image: 'images/videos/toracicos.jpg', focus: 'center 15%' },
  { id: 'gastro', topic: 'gastro', title: 'Tumores gastrointestinais', description: 'Estudos que podem redefinir condutas no tratamento.', duration: '11:50', image: 'images/videos/gastro.jpg' },
  { id: 'gineco', topic: 'gineco', title: 'Tumores ginecológicos', description: 'Novas abordagens e o impacto nas pacientes.', duration: '10:48', image: 'images/videos/gineco.jpg' },
  { id: 'gu', topic: 'gu', title: 'Tumores geniturinários', description: 'Próstata, bexiga e rim: os dados mais comentados.', duration: '12:10', image: 'images/videos/gu.jpg' },
  { id: 'imuno', title: 'Imunoterapia', description: 'Combinações, sequenciamento e seleção de pacientes.', duration: '15:02', image: 'images/videos/imuno.jpg' },
  { id: 'precisao', topic: 'precisao', title: 'Oncologia de precisão', description: 'Biomarcadores e terapias-alvo em evolução.', duration: '09:44', image: 'images/videos/precisao.jpg' },
  { id: 'melanoma', title: 'Melanoma e pele', description: 'Resultados de longo prazo e novas estratégias.', duration: '08:57', image: 'images/videos/melanoma.jpg' },
  { id: 'cabeca-pescoco', title: 'Cabeça e pescoço', description: 'Perspectivas para o tratamento multidisciplinar.', duration: '10:21', image: 'images/videos/cabeca-pescoco.jpg' },
];

export const topics = [
  { id: 'mama', label: 'Mama' },
  { id: 'pulmao', label: 'Pulmão' },
  { id: 'gastro', label: 'Gastrointestinais' },
  { id: 'gineco', label: 'Ginecológicos' },
  { id: 'gu', label: 'Geniturinários' },
  { id: 'precisao', label: 'Oncologia de precisão' },
];

// Quantos temas aparecem como botão; o restante vai para "Mais temas"
export const visibleTopicCount = 3;

// Cards de "Explore por tema". type: 'video' | 'analise'. sponsor: nome do apoiador, se houver.
export const themeItems = [
  { id: 't1', type: 'video', topic: 'gastro', title: 'O panorama dos tumores digestivos', description: 'Discussões que podem impactar a prática clínica nos próximos anos.', duration: '11:50', image: 'images/temas/digestivos.jpg' },
  { id: 't2', type: 'analise', topic: 'precisao', title: 'Biomarcadores em foco', description: 'O papel dos biomarcadores na personalização do tratamento oncológico.', sponsor: 'Apoiador A', image: 'images/temas/biomarcadores.jpg' },
  { id: 't3', type: 'video', topic: 'gineco', title: 'Novas abordagens em ginecológicos', description: 'O que o congresso trouxe como horizonte.', duration: '10:48', image: 'images/temas/ginecologicos.jpg' },
  { id: 't4', type: 'analise', topic: 'mama', title: 'Mama: o que muda após o ESMO', description: 'Leitura crítica dos estudos com maior potencial de impacto.', image: 'images/temas/mama.jpg' },
  { id: 't5', type: 'video', topic: 'pulmao', title: 'Pulmão: da adjuvância à doença avançada', description: 'Dados apresentados e questões ainda em aberto.', duration: '13:05', image: 'images/temas/pulmao.jpg' },
  { id: 't6', type: 'analise', topic: 'gu', title: 'Próstata em debate', description: 'Intensificação de tratamento e seleção de pacientes.', sponsor: 'Apoiador C', image: 'images/temas/prostata.jpg' },
];

export const finalSynthesis = {
  eyebrow: 'Síntese final',
  title: ['Os principais destaques,', 'em uma conversa.'],
  description: 'Uma visão integrada dos temas que marcaram o congresso.',
  duration: '18:40',
  image: 'images/sintese.jpg',
};

export const supporters = [
  { name: 'Apoiador A', shape: 'triangle' },
  { name: 'Apoiador B', shape: 'circle' },
  { name: 'Apoiador C', shape: 'hexagon' },
  { name: 'Apoiador D', shape: 'square' },
];

/*
  Avisos de apoio exigidos pelas diretrizes Medscape (Saned/Medscape Branding and Content Guidelines):
  - Topo da página: "Desenvolvido pela Medscape com o apoio da [Pharma]"
  - Rodapé de todas as páginas: aviso de "Cobertura de Conferência"
  - Nunca usar "parceria" para a relação Medscape + empresa farmacêutica
  Os nomes vêm da lista de apoiadores acima: ao trocar "Apoiador A..." pelos nomes reais, os avisos se atualizam.
*/
const joinNames = (names) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} e ${names.at(-1)}`;

// "da Empresa X" (uma empresa) ou "das empresas X, Y e Z" (várias)
export const supportedBy = (names) =>
  names.length === 1 ? `da ${names[0]}` : `das empresas ${joinNames(names)}`;

// "pela Empresa X" (uma empresa) ou "pelas empresas X, Y e Z" (várias)
const requestedBy = (names) =>
  names.length === 1 ? `pela ${names[0]}` : `pelas empresas ${joinNames(names)}`;

const sponsorNames = supporters.map((s) => s.name);
// Como o conteúdo deste site é nomeado no aviso ("Nenhuma parte desta cobertura...")
const productName = 'desta cobertura';

export const disclosure = {
  // Componente B do PDF: "Solicitado pela [Pharma] e Desenvolvido pela Medscape"
  top: `Solicitado ${requestedBy(sponsorNames)} e desenvolvido pela Medscape`,
  // Aviso de "Cobertura de Conferência" (versão em português do PDF de diretrizes)
  footer:
    `A cobertura da conferência foi desenvolvida pela Medscape com o apoio ${supportedBy(sponsorNames)}. ` +
    (sponsorNames.length === 1
      ? `A ${sponsorNames[0]} realizou`
      : `As empresas ${joinNames(sponsorNames)} realizaram`) +
    ' um processo completo de aprovação médica para garantir a conformidade com as devidas regulamentações. ' +
    `Nenhuma parte ${productName} pode ser reproduzida de qualquer forma sem a permissão do editor. ` +
    'As opiniões e pontos de vista expressos não representam necessariamente a visão da Medscape, seus editores, consultores ou anunciantes.',
};

// Rodapé institucional. Textos para aprovação: validar com a Medscape antes de publicar.
export const footer = {
  about:
    'Cobertura do congresso ESMO com a participação da Sociedade Brasileira de Oncologia Clínica (SBOC), reunindo vídeos, análises e uma síntese dos principais temas do evento para profissionais de saúde.',
  transparency:
    'Os materiais desenvolvidos com apoio de empresas são identificados no próprio conteúdo. Os apoiadores aparecem na área de logotipos, sem separar a navegação por empresa.',
  links: [
    { label: 'Medscape em português', href: 'https://portugues.medscape.com/' },
    { label: 'Conheça a SBOC', href: 'https://sboc.org.br/' },
    { label: 'Política editorial', href: 'https://www.medscape.com/public/editorialpolicies' },
    { label: 'Política de privacidade', href: 'https://www.medscape.com/public/privacy' },
    { label: 'Termos de uso', href: 'https://www.medscape.com/public/termsofuse' },
    { label: 'Ajuda e contato', href: 'https://help.medscape.com/hc/pt' },
  ],
  audience: 'Conteúdo destinado exclusivamente a profissionais de saúde.',
};


/* ---------- Página interna de conteúdo ----------
  Campos opcionais por conteúdo (em featuredVideos, themeItems ou finalSynthesis):
  - summary:  texto de apresentação no topo da página (sem ele, usa "description")
  - body:     lista de parágrafos, para análises em texto
  - speakers: [{ name, role, photo? }] — especialistas do conteúdo
  - videoSrc: arquivo de vídeo hospedado no próprio site (ex.: 'videos/panorama.mp4').
              Evite players externos (YouTube etc.): eles gravam cookies, e as diretrizes
              Medscape proíbem coletar dados pessoais nas landing pages.
*/
const PLACEHOLDER_SPEAKERS = [{ name: 'Nome do especialista', role: 'Cargo e instituição a confirmar', placeholder: true }];

export const allContent = [
  ...featuredVideos.map((v) => ({ ...v, type: 'video' })),
  ...themeItems,
  {
    id: 'sintese',
    type: 'video',
    title: finalSynthesis.title.join(' '),
    description: finalSynthesis.description,
    duration: finalSynthesis.duration,
    image: finalSynthesis.image,
    kicker: 'Síntese final',
  },
];

const topicLabel = (id) => topics.find((t) => t.id === id)?.label;

export function getContent(id) {
  const item = allContent.find((c) => c.id === id);
  if (!item) return null;
  const isVideo = item.type !== 'analise';
  return {
    ...item,
    isVideo,
    kicker: item.kicker ?? (isVideo ? 'Vídeo da cobertura' : 'Análise da cobertura'),
    topicLabel: topicLabel(item.topic),
    summary:
      item.summary ??
      `${item.description} No contexto da cobertura do ${event.name}, ${isVideo ? 'este vídeo reúne' : 'esta análise reúne'} a leitura de especialistas sobre os dados apresentados no congresso e o que eles podem significar para a prática clínica no Brasil.`,
    body: item.body ?? [
      `Esta análise acompanha as principais apresentações do ${event.name} sobre o tema e organiza os pontos que mais chamaram a atenção dos especialistas durante o congresso.`,
      'O texto destaca o desenho dos estudos, os resultados apresentados e as questões que ainda permanecem em aberto, com foco no que pode ser incorporado à prática clínica.',
      'Texto completo da análise a ser inserido quando o conteúdo final for aprovado.',
    ],
    speakers: item.speakers ?? PLACEHOLDER_SPEAKERS,
  };
}

// Outros conteúdos para continuar a navegação: primeiro os do mesmo tema, depois os demais.
// Mistura vídeos e análises, com e sem apoio, sem agrupar por empresa.
export function relatedContent(item, count = 3) {
  const others = allContent.filter((c) => c.id !== item.id && c.id !== 'sintese');
  const sameTopic = others.filter((c) => item.topic && c.topic === item.topic);
  const rest = others.filter((c) => !sameTopic.includes(c));
  return [...sameTopic, ...rest].slice(0, count);
}