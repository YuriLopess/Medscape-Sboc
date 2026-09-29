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
      { label: 'Textos', href: '#textos' },
    ],
  },
  { label: 'Vídeos', href: '#destaques' },
  { label: 'Síntese final', href: '#sintese' },
  { label: 'Apoiadores', href: '#apoiadores' },
];

/*
  Entregáveis combinados:
  - 15 vídeos curtos (highlights) → carrossel "Em destaque"
  - 2 vídeos finais               → seção "Síntese final"
  - 8 textos                      → seção "Textos"
  Por empresa:  AbbVie 3 vídeos + 2 textos · Merck 2 + 1 · GSK 1 + 0 · SBOC 11 + 5 (sem patrocínio)

  sponsor: nome da empresa patrocinadora (deve existir em "supporters", com logo). Sem sponsor = conteúdo SBOC.
  Os patrocinados ficam intercalados, sem dois seguidos e sem agrupar por empresa.
  focus (opcional): parte da imagem que deve ficar visível quando o card recorta a foto, ex.: 'center 15%'
  Títulos, descrições, durações e imagens são provisórios até a lista final.
*/

// 15 vídeos curtos: 9 SBOC · 3 AbbVie · 2 Merck · 1 GSK
export const featuredVideos = [
  { id: 'panorama', title: 'Panorama do congresso', description: 'Uma visão geral dos principais temas e discussões desta edição do ESMO.', duration: '04:36', image: 'images/videos/panorama.jpg' },
  { id: 'mama', topic: 'mama', sponsor: 'AbbVie', title: 'Destaques em câncer de mama', description: 'Avanços, desafios e perspectivas para a prática clínica.', duration: '05:22', image: 'images/videos/mama.jpg' },
  { id: 'toracicos', topic: 'pulmao', title: 'Tumores torácicos', description: 'O que foi apresentado e o que muda na prática.', duration: '05:05', image: 'images/videos/toracicos.jpg', focus: 'center 15%' },
  { id: 'gastro', topic: 'gastro', sponsor: 'Merck', title: 'Tumores gastrointestinais', description: 'Estudos que podem redefinir condutas no tratamento.', duration: '04:50', image: 'images/videos/gastro.jpg' },
  { id: 'gineco', topic: 'gineco', title: 'Tumores ginecológicos', description: 'Novas abordagens e o impacto nas pacientes.', duration: '04:48' },
  { id: 'gu', topic: 'gu', title: 'Tumores geniturinários', description: 'Próstata, bexiga e rim: os dados mais comentados.', duration: '05:10' },
  { id: 'imuno', topic: 'imuno', sponsor: 'GSK', title: 'Imunoterapia', description: 'Combinações, sequenciamento e seleção de pacientes.', duration: '06:02' },
  { id: 'precisao', topic: 'precisao', title: 'Oncologia de precisão', description: 'Biomarcadores e terapias-alvo em evolução.', duration: '04:44' },
  { id: 'linfomas', topic: 'hemato', sponsor: 'AbbVie', title: 'Linfomas e leucemias', description: 'Novas combinações e o lugar das terapias-alvo.', duration: '05:15' },
  { id: 'melanoma', topic: 'imuno', title: 'Melanoma e pele', description: 'Resultados de longo prazo e novas estratégias.', duration: '03:57' },
  { id: 'cabeca-pescoco', title: 'Cabeça e pescoço', description: 'Perspectivas para o tratamento multidisciplinar.', duration: '04:21' },
  { id: 'pulmao-avancado', topic: 'pulmao', sponsor: 'Merck', title: 'Pulmão avançado', description: 'Primeira linha, sequenciamento e biomarcadores.', duration: '05:40' },
  { id: 'suporte', title: 'Cuidados de suporte', description: 'Qualidade de vida e manejo de toxicidades.', duration: '04:05' },
  { id: 'mieloma', topic: 'hemato', sponsor: 'AbbVie', title: 'Mieloma múltiplo', description: 'Estratégias de indução e manutenção em debate.', duration: '05:02' },
  { id: 'sarcomas', title: 'Sarcomas e tumores raros', description: 'Como os dados do congresso chegam aos casos menos frequentes.', duration: '04:30' },
];

// 2 vídeos finais (SBOC)
export const finalVideos = [
  { id: 'sintese', title: 'Os principais destaques do congresso', description: 'Uma visão integrada dos temas que marcaram o ESMO 2026.', duration: '18:40', image: 'images/sintese.jpg' },
  { id: 'sintese-pratica', title: 'O que muda na prática no Brasil', description: 'Os especialistas traduzem os resultados para a realidade brasileira.', duration: '16:15' },
];

export const finalSynthesis = {
  eyebrow: 'Síntese final',
  title: ['Os principais destaques,', 'em duas conversas.'],
  description: 'Uma visão integrada dos temas que marcaram o congresso e do que muda na prática.',
};

// 8 textos: 5 SBOC · 2 AbbVie · 1 Merck
export const texts = [
  { id: 'texto-mama', type: 'analise', topic: 'mama', title: 'Mama: o que muda após o ESMO', description: 'Leitura crítica dos estudos com maior potencial de impacto.' },
  { id: 'texto-biomarcadores', type: 'analise', topic: 'precisao', sponsor: 'AbbVie', title: 'Biomarcadores em foco', description: 'O papel dos biomarcadores na personalização do tratamento oncológico.' },
  { id: 'texto-digestivos', type: 'analise', topic: 'gastro', title: 'O panorama dos tumores digestivos', description: 'Discussões que podem impactar a prática clínica nos próximos anos.' },
  { id: 'texto-pulmao', type: 'analise', topic: 'pulmao', sponsor: 'Merck', title: 'Pulmão: da adjuvância à doença avançada', description: 'Dados apresentados e questões ainda em aberto.' },
  { id: 'texto-gineco', type: 'analise', topic: 'gineco', title: 'Novas abordagens em ginecológicos', description: 'O que o congresso trouxe como horizonte.' },
  { id: 'texto-hemato', type: 'analise', topic: 'hemato', sponsor: 'AbbVie', title: 'Onco-hematologia: combinações em debate', description: 'O que os novos dados indicam para linfomas e mieloma.' },
  { id: 'texto-prostata', type: 'analise', topic: 'gu', title: 'Próstata em debate', description: 'Intensificação de tratamento e seleção de pacientes.' },
  { id: 'texto-suporte', type: 'analise', title: 'Qualidade de vida no centro do cuidado', description: 'Cuidados de suporte e desfechos relatados pelos pacientes.' },
];

export const topics = [
  { id: 'mama', label: 'Mama' },
  { id: 'pulmao', label: 'Pulmão' },
  { id: 'gastro', label: 'Gastrointestinais' },
  { id: 'hemato', label: 'Onco-hematologia' },
  { id: 'imuno', label: 'Imunoterapia' },
  { id: 'gineco', label: 'Ginecológicos' },
  { id: 'gu', label: 'Geniturinários' },
  { id: 'precisao', label: 'Oncologia de precisão' },
];

// Quantos temas aparecem como botão; o restante vai para "Mais temas"
export const visibleTopicCount = 3;

export const supporters = [
  // pharma: true → empresa patrocinadora; só essas entram nos avisos obrigatórios (topo, rodapé, cards)
  // logoHeight (opcional, px): logos quadradas precisam de mais altura para ter o mesmo peso das horizontais
  { name: 'AbbVie', logo: 'images/logos/abbvie.png', pharma: true },
  { name: 'GSK', logo: 'images/logos/gsk.png', logoHeight: 68, pharma: true },
  { name: 'SBOC', logo: 'images/logos/sboc-horizontal.png' },
  { name: 'Merck', logo: 'images/logos/merck.png', logoHeight: 60, pharma: true },
  // Atenção: as diretrizes Medscape pedem o logo da Medscape só no cabeçalho/rodapé, nunca ao lado de farmacêutica
  { name: 'Medscape', logo: 'images/logos/medscape.png' },
];

/*
  Avisos de apoio exigidos pelas diretrizes Medscape (Saned/Medscape Branding and Content Guidelines):
  - Topo da página: "Desenvolvido pela Medscape com o apoio da [Pharma]"
  - Rodapé de todas as páginas: aviso de "Cobertura de Conferência"
  - Nunca usar "parceria" para a relação Medscape + empresa farmacêutica
  Os nomes vêm das empresas marcadas com "pharma: true" na lista de apoiadores acima.
*/
const joinNames = (names) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} e ${names.at(-1)}`;

// "da Empresa X" (uma empresa) ou "das empresas X, Y e Z" (várias)
export const supportedBy = (names) =>
  names.length === 1 ? `da ${names[0]}` : `das empresas ${joinNames(names)}`;

// "pela Empresa X" (uma empresa) ou "pelas empresas X, Y e Z" (várias)
const requestedBy = (names) =>
  names.length === 1 ? `pela ${names[0]}` : `pelas empresas ${joinNames(names)}`;

const sponsorNames = supporters.filter((s) => s.pharma).map((s) => s.name);
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
  Campos opcionais por conteúdo (em featuredVideos, finalVideos ou texts):
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
  ...finalVideos.map((v) => ({ ...v, type: 'video', final: true, kicker: 'Síntese final' })),
  ...texts,
];

// "Explore por tema": todo o catálogo (vídeos e textos), exceto os vídeos finais
export const exploreItems = allContent.filter((c) => !c.final);

const topicLabel = (id) => topics.find((t) => t.id === id)?.label;

// Logo da empresa patrocinadora (vem da lista de apoiadores)
export const sponsorOf = (name) => supporters.find((s) => s.name === name);

export function getContent(id) {
  const item = allContent.find((c) => c.id === id);
  if (!item) return null;
  const isVideo = item.type !== 'analise';
  return {
    ...item,
    isVideo,
    kicker: item.kicker ?? (isVideo ? 'Vídeo da cobertura' : 'Texto da cobertura'),
    sponsorInfo: item.sponsor ? sponsorOf(item.sponsor) : null,
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
  const others = allContent.filter((c) => c.id !== item.id && !c.final);
  const sameTopic = others.filter((c) => item.topic && c.topic === item.topic);
  const rest = others.filter((c) => !sameTopic.includes(c));
  return [...sameTopic, ...rest].slice(0, count);
}