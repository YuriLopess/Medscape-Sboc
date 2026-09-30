// Conteúdo demonstrativo da proposta. Títulos, durações, apoiadores e imagens são ilustrativos.
// Imagens: coloque os arquivos em /public/images com os nomes abaixo; enquanto não existirem,
// o site mostra um placeholder no lugar.
//
// Este arquivo guarda só a estrutura (ids, temas, patrocinadores, datas, durações, imagens).
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

/*
  Áreas terapêuticas (handoff "Mapa funcional", pág. 3): a descoberta principal do site.
  São as seis áreas do handoff; cada uma tem página própria em #/<id>. "outros" ("Outros temas") recebe
  o que não pertence a uma delas: panorama do congresso, cabeça e pescoço e onco-hematologia.
  Os conteúdos ficam distribuídos de forma equilibrada (3 a 4 por área). O id de cada item é interno e não
  precisa bater com a área: o que aparece no site é o título (locales) e a URL (topic + slug).
*/
const topicIds = ['pulmao', 'mama', 'gastro', 'gineco', 'pele', 'outros'];

// Foto de capa de cada área no "Explore por área terapêutica" (as seis são diferentes entre si)
const topicCovers = {
  pulmao: 'images/banco/pulmao.jpg',
  mama: 'images/banco/mama.jpg',
  gastro: 'images/banco/gastro.jpg',
  gineco: 'images/banco/gineco.jpg',
  pele: 'images/banco/laboratorio.jpg',
  outros: 'images/videos/panorama.jpg',
};

// Rota da Síntese final; também é o "tema" na URL dos dois vídeos de encerramento
export const SYNTHESIS = 'sintese-final';

/*
  Entregáveis combinados:
  - 15 vídeos curtos (highlights) → "Destaques da cobertura" e listagem de vídeos
  - 2 vídeos finais               → página "Síntese final"
  - 8 notícias                    → listagem de notícias
  Por empresa:  AbbVie 3 vídeos + 2 notícias · Merck 2 + 1 · GSK 1 + 0 · SBOC 11 + 5 (sem patrocínio)

  sponsor: nome da empresa patrocinadora (deve existir em "supporters", com logo). Sem sponsor = editorial.
  slug:    parte final da URL (#/<tema>/<slug>). Fica em português nos três idiomas, para o link não quebrar
           quando a pessoa troca de idioma.
  date:    data de publicação (ISO). Ordena as listagens e aparece na página do conteúdo.
  focus (opcional): parte da imagem que deve ficar visível quando o card recorta a foto, ex.: 'center 15%'
  Título e descrição de cada item ficam em locales/<idioma>.js → content[id].
  image: todo conteúdo tem foto. Fotos repetidas ficam em conteúdos distantes entre si.
*/

// 15 vídeos curtos: 9 SBOC · 3 AbbVie · 2 Merck · 1 GSK
const featuredBase = [
  { id: 'panorama', topic: 'outros', slug: 'panorama-do-congresso', date: '2026-10-23', duration: '04:36', image: 'images/videos/panorama.jpg' },
  { id: 'mama', topic: 'mama', sponsor: 'AbbVie', slug: 'destaques-cancer-de-mama', date: '2026-10-23', duration: '05:22', image: 'images/videos/mama.jpg' },
  { id: 'toracicos', topic: 'pulmao', slug: 'tumores-toracicos', date: '2026-10-24', duration: '05:05', image: 'images/videos/toracicos.jpg', focus: 'center 15%' },
  { id: 'gastro', topic: 'gastro', sponsor: 'Merck', slug: 'tumores-gastrointestinais', date: '2026-10-24', duration: '04:50', image: 'images/videos/gastro.jpg' },
  { id: 'gineco', topic: 'gineco', slug: 'tumores-ginecologicos', date: '2026-10-24', duration: '04:48', image: 'images/temas/ginecologicos.jpg' },
  { id: 'gu', topic: 'gastro', slug: 'cancer-colorretal', date: '2026-10-25', duration: '05:10', image: 'images/banco/hospital.jpg' },
  { id: 'imuno', topic: 'pele', sponsor: 'GSK', slug: 'imunoterapia-no-melanoma', date: '2026-10-25', duration: '06:02', image: 'images/banco/celula.jpg' },
  { id: 'precisao', topic: 'pulmao', slug: 'oncologia-de-precisao-pulmao', date: '2026-10-25', duration: '04:44', image: 'images/banco/laboratorio.jpg' },
  { id: 'linfomas', topic: 'pele', sponsor: 'AbbVie', slug: 'linfomas-cutaneos', date: '2026-10-26', duration: '05:15', image: 'images/banco/sangue.jpg' },
  { id: 'melanoma', topic: 'pele', slug: 'melanoma-e-pele', date: '2026-10-26', duration: '03:57', image: 'images/temas/digestivos.jpg' },
  { id: 'cabeca-pescoco', topic: 'outros', slug: 'cabeca-e-pescoco', date: '2026-10-26', duration: '04:21', image: 'images/sintese.jpg' },
  { id: 'pulmao-avancado', topic: 'pulmao', sponsor: 'Merck', slug: 'pulmao-avancado', date: '2026-10-27', duration: '05:40', image: 'images/banco/tomografia-pulmao.jpg' },
  { id: 'suporte', topic: 'mama', slug: 'cuidados-de-suporte-mama', date: '2026-10-27', duration: '04:05', image: 'images/banco/comprimidos.jpg' },
  { id: 'mieloma', topic: 'outros', sponsor: 'AbbVie', slug: 'mieloma-multiplo', date: '2026-10-27', duration: '05:02', image: 'images/temas/biomarcadores.jpg' },
  { id: 'sarcomas', topic: 'gastro', slug: 'sarcomas-e-gist', date: '2026-10-27', duration: '04:30', image: 'images/videos/panorama.jpg' },
];

// 2 vídeos finais (SBOC). O "tema" na URL é a própria Síntese final.
const finalBase = [
  { id: 'sintese', topic: SYNTHESIS, slug: 'principais-destaques', date: '2026-10-28', duration: '18:40', image: 'images/sintese.jpg' },
  { id: 'sintese-pratica', topic: SYNTHESIS, slug: 'o-que-muda-na-pratica', date: '2026-10-28', duration: '16:15', image: 'images/banco/hospital.jpg' },
];

// 8 notícias: 5 SBOC · 2 AbbVie · 1 Merck
// readTime: tempo estimado de leitura (provisório)
const textsBase = [
  { id: 'texto-digestivos', topic: 'gastro', slug: 'panorama-dos-tumores-digestivos', date: '2026-10-24', readTime: '6 min', image: 'images/temas/digestivos.jpg' },
  { id: 'texto-biomarcadores', topic: 'mama', sponsor: 'AbbVie', slug: 'biomarcadores-cancer-de-mama', date: '2026-10-25', readTime: '5 min', image: 'images/temas/biomarcadores.jpg' },
  { id: 'texto-mama', topic: 'mama', slug: 'mama-o-que-muda-apos-o-esmo', date: '2026-10-23', readTime: '7 min', image: 'images/videos/mama.jpg' },
  { id: 'texto-pulmao', topic: 'pulmao', sponsor: 'Merck', slug: 'da-adjuvancia-a-doenca-avancada', date: '2026-10-26', readTime: '6 min', image: 'images/banco/tomografia-pulmao.jpg' },
  { id: 'texto-gineco', topic: 'gineco', slug: 'novas-abordagens-em-ginecologicos', date: '2026-10-24', readTime: '5 min', image: 'images/temas/ginecologicos.jpg' },
  { id: 'texto-hemato', topic: 'outros', sponsor: 'AbbVie', slug: 'combinacoes-em-debate', date: '2026-10-26', readTime: '6 min', image: 'images/banco/sangue.jpg' },
  { id: 'texto-prostata', topic: 'gineco', slug: 'cancer-de-colo-do-utero', date: '2026-10-25', readTime: '4 min', image: 'images/banco/hospital.jpg' },
  { id: 'texto-suporte', topic: 'gineco', slug: 'qualidade-de-vida-ginecologicos', date: '2026-10-27', readTime: '5 min', image: 'images/banco/comprimidos.jpg' },
];

export const supporters = [
  // pharma: true → empresa patrocinadora; só essas entram nos avisos obrigatórios (topo, rodapé, cards)
  // logoHeight (opcional, px): logos quadradas precisam de mais altura para ter o mesmo peso das horizontais
  { name: 'AbbVie', logo: 'images/logos/abbvie.png', pharma: true },
  { name: 'GSK', logo: 'images/logos/gsk.png', logoHeight: 68, pharma: true },
  { name: 'SBOC', logo: 'images/logos/sboc.png', logoHeight: 64 },
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

/*
  Módulo de conteúdo especial dentro de uma área (handoff, pág. 13 — AstraZeneca em Pulmão).
  A arquitetura fica pronta, mas o módulo só aparece quando um item for adicionado aqui,
  depois da aprovação comercial. Formato: { topic, title, sponsor, href, cta }.
*/
export const specialModules = [];

/* ---------- Página de conteúdo ----------
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
  const topicLabel = (id) => L.topics[id];

  // Data por extenso no idioma atual. UTC fixo: sem isso, o fuso do navegador pode puxar um dia a menos.
  const dateFormat = new Intl.DateTimeFormat(L.htmlLang, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const formatDate = (iso) => dateFormat.format(new Date(`${iso}T00:00:00Z`)).replace('.', '');

  // Campos que todo conteúdo tem, em qualquer listagem: rota, natureza (editorial/patrocinado) e data
  const prepare = (item, type) => {
    const [title, description] = L.content[item.id] ?? [item.id, ''];
    return {
      ...item,
      type,
      title,
      description,
      href: `#/${item.topic}/${item.slug}`,
      sponsored: Boolean(item.sponsor),
      dateLabel: formatDate(item.date),
    };
  };

  const featuredVideos = featuredBase.map((v) => prepare(v, 'video'));
  const finalVideos = finalBase.map((v) => ({ ...prepare(v, 'video'), final: true, kicker: L.page.synthesisKicker }));
  const texts = textsBase.map((t) => prepare(t, 'analise'));
  const allContent = [...featuredVideos, ...finalVideos, ...texts];

  // Catálogo navegável: tudo menos os dois vídeos de encerramento, que vivem na Síntese final
  const catalog = allContent.filter((c) => !c.final);
  const byDate = (a, b) => b.date.localeCompare(a.date);

  // Uma área terapêutica com seus conteúdos já separados por formato
  function getTopic(id) {
    if (!topicIds.includes(id)) return null;
    const items = catalog.filter((c) => c.topic === id).sort(byDate);
    const videos = items.filter((c) => c.type === 'video');
    const news = items.filter((c) => c.type === 'analise');
    return {
      id,
      label: topicLabel(id),
      cover: topicCovers[id],
      items,
      videos,
      news,
      // Destaque da área: o conteúdo mais recente (o handoff pede um card principal no topo)
      highlight: items[0] ?? null,
      // Apresentação da área e temas em foco (textos provisórios em locales/<idioma>.js → areas)
      intro: L.areas?.[id]?.intro ?? '',
      points: L.areas?.[id]?.points ?? [],
      updated: items[0]?.dateLabel ?? null,
      // Continue explorando: conteúdos mais recentes de outras áreas
      related: catalog.filter((c) => c.topic !== id).sort(byDate).slice(0, 6),
      special: specialModules.find((m) => m.topic === id) ?? null,
    };
  }

  const topics = topicIds.map((id) => getTopic(id)).filter((t) => t.items.length > 0);

  // Listagem por formato, opcionalmente filtrada por área
  function listing(format, topic) {
    const type = format === 'videos' ? 'video' : 'analise';
    return catalog.filter((c) => c.type === type && (!topic || c.topic === topic)).sort(byDate);
  }

  function getContent(topic, slug) {
    const item = allContent.find((c) => c.topic === topic && c.slug === slug);
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

  // Outros conteúdos para continuar a navegação: primeiro os da mesma área, depois os demais.
  // Mistura vídeos e notícias, com e sem apoio, sem agrupar por empresa.
  function relatedContent(item, count = 3) {
    const others = catalog.filter((c) => c.id !== item.id);
    const sameTopic = others.filter((c) => c.topic === item.topic);
    const rest = others.filter((c) => !sameTopic.includes(c));
    return [...sameTopic, ...rest].slice(0, count);
  }

  // Busca restrita à cobertura: título, descrição e área.
  // Ignora acentos dos dois lados, para "pulmao" encontrar "Pulmão".
  const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  function search(term) {
    const q = fold(term.trim());
    if (!q) return [];
    const has = (c) => fold(`${c.title} ${c.description} ${topicLabel(c.topic) ?? ''}`).includes(q);
    return allContent.filter(has).sort(byDate);
  }

  cache[lang] = {
    lang: L.code,
    htmlLang: L.htmlLang,
    event,
    // Menu global do handoff: Cobertura ▾ | Notícias | Vídeos | Síntese final | Busca
    navLinks: [
      { key: 'cobertura', label: L.nav.cobertura, children: topics.map((t) => ({ label: t.label, href: `#/${t.id}` })) },
      { key: 'noticias', label: L.nav.noticias, href: '#/noticias' },
      { key: 'videos', label: L.nav.videos, href: '#/videos' },
      { key: 'sintese', label: L.nav.sintese, href: `#/${SYNTHESIS}` },
      { key: 'busca', label: L.nav.busca, href: '#/busca' },
    ],
    featuredVideos,
    finalVideos,
    finalSynthesis: L.finalSynthesis,
    texts,
    topics,
    topicLabel,
    catalog,
    allContent,
    getTopic,
    listing,
    getContent,
    relatedContent,
    search,
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
