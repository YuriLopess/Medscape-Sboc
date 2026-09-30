// Conteúdo demonstrativo da proposta. Títulos, durações, apoiadores e imagens são ilustrativos.
// Imagens: coloque os arquivos em /public/images com os nomes abaixo; enquanto não existirem,
// o site mostra um placeholder no lugar.
//
// Este arquivo guarda só a estrutura (ids, temas, patrocinadores, durações, imagens).
// Os textos de cada idioma ficam em ./locales (pt.js, es.js, en.js), todos com a mesma estrutura.
import pt from './locales/pt.js';
import es from './locales/es.js';
import en from './locales/en.js';

export const locales = { pt, es, en };
export const defaultLang = 'pt';

const eventBase = {
  name: 'ESMO 2026',
  heroImage: 'images/hero-esmo.jpg',
  // Arte decorativa (PNG/WebP transparente) da abertura das páginas internas de conteúdo
  contentArt: 'images/cobertura-arte.webp',
};

// Itens com "children" viram um submenu
const navBase = [
  { key: 'textos', href: '#textos' },
  { key: 'videos', href: '#destaques' },
  { key: 'sintese', href: '#sintese' },
  { key: 'apoiadores', href: '#apoiadores' },
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
  Título e descrição de cada item ficam em locales/<idioma>.js → content[id].
  image: todo conteúdo tem foto. Fotos repetidas ficam em conteúdos distantes entre si; na seção de textos, as 8 são diferentes.
*/

// 15 vídeos curtos: 9 SBOC · 3 AbbVie · 2 Merck · 1 GSK
const featuredBase = [
  { id: 'panorama', duration: '04:36', image: 'images/videos/panorama.jpg' },
  { id: 'mama', topic: 'mama', sponsor: 'AbbVie', duration: '05:22', image: 'images/videos/mama.jpg' },
  { id: 'toracicos', topic: 'pulmao', duration: '05:05', image: 'images/videos/toracicos.jpg', focus: 'center 15%' },
  { id: 'gastro', topic: 'gastro', sponsor: 'Merck', duration: '04:50', image: 'images/videos/gastro.jpg' },
  { id: 'gineco', topic: 'gineco', duration: '04:48', image: 'images/temas/ginecologicos.jpg' },
  { id: 'gu', topic: 'gu', duration: '05:10', image: 'images/banco/hospital.jpg' },
  { id: 'imuno', topic: 'imuno', sponsor: 'GSK', duration: '06:02', image: 'images/banco/celula.jpg' },
  { id: 'precisao', topic: 'precisao', duration: '04:44', image: 'images/banco/laboratorio.jpg' },
  { id: 'linfomas', topic: 'hemato', sponsor: 'AbbVie', duration: '05:15', image: 'images/banco/sangue.jpg' },
  { id: 'melanoma', topic: 'imuno', duration: '03:57', image: 'images/temas/digestivos.jpg' },
  { id: 'cabeca-pescoco', duration: '04:21', image: 'images/sintese.jpg' },
  { id: 'pulmao-avancado', topic: 'pulmao', sponsor: 'Merck', duration: '05:40', image: 'images/banco/tomografia-pulmao.jpg' },
  { id: 'suporte', duration: '04:05', image: 'images/banco/comprimidos.jpg' },
  { id: 'mieloma', topic: 'hemato', sponsor: 'AbbVie', duration: '05:02', image: 'images/temas/biomarcadores.jpg' },
  { id: 'sarcomas', duration: '04:30', image: 'images/videos/panorama.jpg' },
];

// 2 vídeos finais (SBOC)
const finalBase = [
  { id: 'sintese', duration: '18:40', image: 'images/sintese.jpg' },
  { id: 'sintese-pratica', duration: '16:15', image: 'images/banco/hospital.jpg' },
];

// 8 textos: 5 SBOC · 2 AbbVie · 1 Merck. O primeiro é o destaque da seção (use um com imagem).
// readTime: tempo estimado de leitura (provisório)
const textsBase = [
  { id: 'texto-digestivos', topic: 'gastro', readTime: '6 min', image: 'images/temas/digestivos.jpg' },
  { id: 'texto-biomarcadores', topic: 'precisao', sponsor: 'AbbVie', readTime: '5 min', image: 'images/temas/biomarcadores.jpg' },
  { id: 'texto-mama', topic: 'mama', readTime: '7 min', image: 'images/videos/mama.jpg' },
  { id: 'texto-pulmao', topic: 'pulmao', sponsor: 'Merck', readTime: '6 min', image: 'images/banco/tomografia-pulmao.jpg' },
  { id: 'texto-gineco', topic: 'gineco', readTime: '5 min', image: 'images/temas/ginecologicos.jpg' },
  { id: 'texto-hemato', topic: 'hemato', sponsor: 'AbbVie', readTime: '6 min', image: 'images/banco/sangue.jpg' },
  { id: 'texto-prostata', topic: 'gu', readTime: '4 min', image: 'images/banco/hospital.jpg' },
  { id: 'texto-suporte', readTime: '5 min', image: 'images/banco/comprimidos.jpg' },
];

const topicIds = ['mama', 'pulmao', 'gastro', 'hemato', 'imuno', 'gineco', 'gu', 'precisao'];

// Quantos temas aparecem como botão; o restante vai para "Mais temas"
export const visibleTopicCount = 3;

export const supporters = [
  // pharma: true → empresa patrocinadora; só essas entram nos avisos obrigatórios (topo, rodapé, cards)
  // logoHeight (opcional, px): logos quadradas precisam de mais altura para ter o mesmo peso das horizontais
  { name: 'AbbVie', logo: 'images/logos/abbvie.png', pharma: true },
  { name: 'GSK', logo: 'images/logos/gsk.png', logoHeight: 68, pharma: true },
  { name: 'SBOC', logo: 'images/logos/sboc-horizontal.png' },
  { name: 'Merck', logo: 'images/logos/merck.png', logoHeight: 60, pharma: true },
  // Não incluir a Medscape aqui: pelas diretrizes, o logo dela só aparece no cabeçalho/rodapé, nunca ao lado de farmacêutica
];

/*
  Avisos de apoio exigidos pelas diretrizes Medscape (Saned/Medscape Branding and Content Guidelines):
  - Topo da página: "Desenvolvido pela Medscape com o apoio da [Pharma]"
  - Rodapé de todas as páginas: aviso de "Cobertura de Conferência"
  - Nunca usar "parceria" para a relação Medscape + empresa farmacêutica
  Os textos de cada idioma (sponsorLine, footerDisclaimer) estão em locales/; os nomes vêm das
  empresas marcadas com "pharma: true" na lista de apoiadores acima.
*/
const sponsorNames = supporters.filter((s) => s.pharma).map((s) => s.name);

// Logo da empresa patrocinadora (vem da lista de apoiadores)
export const sponsorOf = (name) => supporters.find((s) => s.name === name);

/* ---------- Página interna de conteúdo ----------
  Campos opcionais por conteúdo (nas listas acima):
  - speakers: [{ name, role, photo? }] — especialistas do conteúdo
  - videoSrc: arquivo de vídeo hospedado no próprio site (ex.: 'videos/panorama.mp4').
              Evite players externos (YouTube etc.): eles gravam cookies, e as diretrizes
              Medscape proíbem coletar dados pessoais nas landing pages.
  Campos opcionais por idioma (em locales/<idioma>.js, se precisar): summary e body de cada conteúdo.
*/

// Monta todo o conteúdo do site num idioma. Resultado guardado: cada idioma é montado uma vez só.
const cache = {};

export function buildContent(lang) {
  if (cache[lang]) return cache[lang];
  const L = locales[lang] ?? locales[defaultLang];

  const event = { ...eventBase, ...L.event };
  const withText = (item) => {
    const [title, description] = L.content[item.id] ?? [item.id, ''];
    return { ...item, title, description };
  };

  const featuredVideos = featuredBase.map(withText);
  const finalVideos = finalBase.map(withText);
  const texts = textsBase.map((t) => ({ ...withText(t), type: 'analise' }));
  const topics = topicIds.map((id) => ({ id, label: L.topics[id] }));
  const topicLabel = (id) => L.topics[id];

  const allContent = [
    ...featuredVideos.map((v) => ({ ...v, type: 'video' })),
    ...finalVideos.map((v) => ({ ...v, type: 'video', final: true, kicker: L.page.synthesisKicker })),
    ...texts,
  ];

  function getContent(id) {
    const item = allContent.find((c) => c.id === id);
    if (!item) return null;
    const isVideo = item.type !== 'analise';
    return {
      ...item,
      isVideo,
      kicker: item.kicker ?? (isVideo ? L.page.videoKicker : L.page.textKicker),
      sponsorInfo: item.sponsor ? sponsorOf(item.sponsor) : null,
      topicLabel: topicLabel(item.topic),
      summary: item.summary ?? L.page.summary(item.description, event.name, isVideo),
      body: item.body ?? L.page.body(event.name),
      speakers: item.speakers ?? [{ ...L.page.placeholderSpeaker, placeholder: true }],
    };
  }

  // Outros conteúdos para continuar a navegação: primeiro os do mesmo tema, depois os demais.
  // Mistura vídeos e análises, com e sem apoio, sem agrupar por empresa.
  function relatedContent(item, count = 3) {
    const others = allContent.filter((c) => c.id !== item.id && !c.final);
    const sameTopic = others.filter((c) => item.topic && c.topic === item.topic);
    const rest = others.filter((c) => !sameTopic.includes(c));
    return [...sameTopic, ...rest].slice(0, count);
  }

  cache[lang] = {
    lang: L.code,
    htmlLang: L.htmlLang,
    event,
    navLinks: navBase.map((n) => ({ ...n, label: L.nav[n.key] })),
    featuredVideos,
    finalVideos,
    finalSynthesis: L.finalSynthesis,
    texts,
    topics,
    topicLabel,
    // "Explore por tema": todo o catálogo (vídeos e textos), exceto os vídeos finais
    exploreItems: allContent.filter((c) => !c.final),
    allContent,
    getContent,
    relatedContent,
    // Frase de apoio de um conteúdo: "Desenvolvido pela Medscape com o apoio da [Pharma]"
    sponsorLine: (names) => L.sponsorLine(names),
    disclosure: {
      top: L.sponsorLine(sponsorNames),
      topParts: L.sponsorParts(sponsorNames),
      footer: L.footerDisclaimer(sponsorNames),
    },
    footer: L.footer,
    ui: L.ui,
    page: L.page,
  };
  return cache[lang];
}
