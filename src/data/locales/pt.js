// Textos em português (idioma padrão). Os outros idiomas seguem exatamente a mesma estrutura.
// Títulos e descrições dos conteúdos são provisórios até a lista final.

const join = (names) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} e ${names.at(-1)}`;

// "da Empresa X" (uma empresa) ou "das empresas X, Y e Z" (várias)
const supportedBy = (names) => (names.length === 1 ? `da ${names[0]}` : `das empresas ${join(names)}`);

export default {
  code: 'pt',
  htmlLang: 'pt-BR',
  short: 'PT',
  name: 'Português',

  event: {
    dates: '23 – 27 out 2026',
    city: 'Madri, Espanha',
    tagline: 'Ciência. Pessoas. Um futuro mais saudável.',
    title: ['A oncologia', 'em perspectiva.'],
    lead: 'Análises e perspectivas sobre os principais temas do congresso, com a participação da SBOC.',
    heroCaption: ['Madri', 'conecta', 'ideias para', 'mais vidas'],
    heroAlt: 'Plenária do congresso ESMO 2026 com o público diante do palco',
  },

  nav: { textos: 'Textos', videos: 'Vídeos', sintese: 'Síntese final', apoiadores: 'Apoiadores' },

  topics: {
    mama: 'Mama',
    pulmao: 'Pulmão',
    gastro: 'Gastrointestinais',
    hemato: 'Onco-hematologia',
    imuno: 'Imunoterapia',
    gineco: 'Ginecológicos',
    gu: 'Geniturinários',
    precisao: 'Oncologia de precisão',
  },

  // [título, descrição] de cada conteúdo, pelo id
  content: {
    panorama: ['Panorama do congresso', 'Uma visão geral dos principais temas e discussões desta edição do ESMO.'],
    mama: ['Destaques em câncer de mama', 'Avanços, desafios e perspectivas para a prática clínica.'],
    toracicos: ['Tumores torácicos', 'O que foi apresentado e o que muda na prática.'],
    gastro: ['Tumores gastrointestinais', 'Estudos que podem redefinir condutas no tratamento.'],
    gineco: ['Tumores ginecológicos', 'Novas abordagens e o impacto nas pacientes.'],
    gu: ['Tumores geniturinários', 'Próstata, bexiga e rim: os dados mais comentados.'],
    imuno: ['Imunoterapia', 'Combinações, sequenciamento e seleção de pacientes.'],
    precisao: ['Oncologia de precisão', 'Biomarcadores e terapias-alvo em evolução.'],
    linfomas: ['Linfomas e leucemias', 'Novas combinações e o lugar das terapias-alvo.'],
    melanoma: ['Melanoma e pele', 'Resultados de longo prazo e novas estratégias.'],
    'cabeca-pescoco': ['Cabeça e pescoço', 'Perspectivas para o tratamento multidisciplinar.'],
    'pulmao-avancado': ['Pulmão avançado', 'Primeira linha, sequenciamento e biomarcadores.'],
    suporte: ['Cuidados de suporte', 'Qualidade de vida e manejo de toxicidades.'],
    mieloma: ['Mieloma múltiplo', 'Estratégias de indução e manutenção em debate.'],
    sarcomas: ['Sarcomas e tumores raros', 'Como os dados do congresso chegam aos casos menos frequentes.'],
    sintese: ['Os principais destaques do congresso', 'Uma visão integrada dos temas que marcaram o ESMO 2026.'],
    'sintese-pratica': ['O que muda na prática no Brasil', 'Os especialistas traduzem os resultados para a realidade brasileira.'],
    'texto-digestivos': ['O panorama dos tumores digestivos', 'Discussões que podem impactar a prática clínica nos próximos anos.'],
    'texto-biomarcadores': ['Biomarcadores em foco', 'O papel dos biomarcadores na personalização do tratamento oncológico.'],
    'texto-mama': ['Mama: o que muda após o ESMO', 'Leitura crítica dos estudos com maior potencial de impacto.'],
    'texto-pulmao': ['Pulmão: da adjuvância à doença avançada', 'Dados apresentados e questões ainda em aberto.'],
    'texto-gineco': ['Novas abordagens em ginecológicos', 'O que o congresso trouxe como horizonte.'],
    'texto-hemato': ['Onco-hematologia: combinações em debate', 'O que os novos dados indicam para linfomas e mieloma.'],
    'texto-prostata': ['Próstata em debate', 'Intensificação de tratamento e seleção de pacientes.'],
    'texto-suporte': ['Qualidade de vida no centro do cuidado', 'Cuidados de suporte e desfechos relatados pelos pacientes.'],
  },

  finalSynthesis: {
    eyebrow: 'Síntese final',
    title: ['Os principais destaques,', 'em duas conversas.'],
    description: 'Uma visão integrada dos temas que marcaram o congresso e do que muda na prática.',
  },

  /* Avisos obrigatórios (diretrizes Medscape, versão em português do PDF).
     Nunca usar "parceria" para a relação Medscape + empresa farmacêutica. */
  // Aviso em duas partes [começo da frase, empresas], para o celular poder quebrar a linha no ponto certo
  sponsorParts: (names) => [
    names.length === 1 ? 'Desenvolvido pela Medscape com o apoio da' : 'Desenvolvido pela Medscape com o apoio das empresas',
    join(names),
  ],
  sponsorLine: (names) => `Desenvolvido pela Medscape com o apoio ${supportedBy(names)}`,
  footerDisclaimer: (names) =>
    `A cobertura da conferência foi desenvolvida pela Medscape com o apoio ${supportedBy(names)}. ` +
    (names.length === 1 ? `A ${names[0]} realizou` : `As empresas ${join(names)} realizaram`) +
    ' um processo completo de aprovação médica para garantir a conformidade com as devidas regulamentações. ' +
    'Nenhuma parte desta cobertura pode ser reproduzida de qualquer forma sem a permissão do editor. ' +
    'As opiniões e pontos de vista expressos não representam necessariamente a visão da Medscape, seus editores, consultores ou anunciantes.',

  // Rodapé mínimo: marcas, público, privacidade e o aviso obrigatório (acima)
  footer: {
    developedBy: 'Desenvolvido por',
    audience: 'Conteúdo destinado exclusivamente a profissionais de saúde.',
    privacy: { label: 'Política de privacidade', href: 'https://www.medscape.com/public/privacy' },
    newTab: '(abre em nova aba)',
  },

  ui: {
    skip: 'Ir para o conteúdo',
    homeSboc: 'SBOC, voltar ao início',
    homeMedscape: 'Medscape, voltar ao início',
    participation: 'Com a participação da',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    mainNav: 'Principal',
    language: 'Idioma',

    exploreCoverage: 'Explorar a cobertura',
    videosCount: (n) => `${n} vídeos de cobertura`,
    atYourPace: 'Explore no seu ritmo.',
    seeAll: 'Ver todos',

    textsTitle: 'Textos da cobertura',
    textsSub: 'Análises escritas sobre os estudos e debates do congresso.',
    coverageOf: (name) => `Cobertura ${name}`,
    readTime: (t) => `${t} de leitura`,
    exploreByTopic: 'Explorar por tema',

    featuredTitle: 'Em destaque na cobertura',
    featuredSub: 'Vídeos e análises para acompanhar os temas do congresso.',
    featuredLabel: 'Destaques',
    goToVideo: 'Ir para o vídeo',
    previous: 'anterior',
    next: 'próximo',

    watchSynthesis: 'Assistir à síntese',
    part: (n) => `Parte ${n}`,
    duration: 'Duração',

    exploreTitle: 'Explore por tema',
    exploreSub: 'Conteúdos selecionados, incluindo vídeos e análises, para você se aprofundar nos temas de maior interesse.',
    all: 'Todos',
    moreTopics: 'Mais temas',
    filterByTopic: 'Filtrar por tema',
    topicsLabel: 'Temas',
    emptyTopic: 'Ainda não há conteúdos publicados para este tema.',
    goToContent: 'Ir para o conteúdo',

    supportersTitle: 'Apoiadores',
    supportersSub: 'Apoiam a difusão de conhecimento e o debate científico.',

    video: 'Vídeo',
    text: 'Texto',
  },

  page: {
    back: 'Voltar para a cobertura',
    videoKicker: 'Vídeo da cobertura',
    textKicker: 'Texto da cobertura',
    synthesisKicker: 'Síntese final',
    watch: (title) => `Assistir: ${title}`,
    videoSoon: 'O vídeo será publicado aqui assim que a gravação final for aprovada.',
    supportedBy: 'Com o apoio de',
    expert: 'Especialista',
    experts: 'Especialistas',
    aboutVideo: 'Sobre este vídeo',
    aboutText: 'Sobre este texto',
    format: 'Formato',
    topic: 'Tema',
    event: 'Evento',
    related: 'Continue explorando',
    relatedSub: (name) => `Outros vídeos e análises da cobertura do ${name}.`,
    notFound: 'Conteúdo não encontrado',
    notFoundText: 'O link pode estar incompleto ou o conteúdo ainda não foi publicado.',
    notFoundBack: 'Voltar para a cobertura',
    placeholderSpeaker: { name: 'Nome do especialista', role: 'Cargo e instituição a confirmar' },
    summary: (description, eventName, isVideo) =>
      `${description} No contexto da cobertura do ${eventName}, ${isVideo ? 'este vídeo reúne' : 'esta análise reúne'} a leitura de especialistas sobre os dados apresentados no congresso e o que eles podem significar para a prática clínica no Brasil.`,
    body: (eventName) => [
      `Esta análise acompanha as principais apresentações do ${eventName} sobre o tema e organiza os pontos que mais chamaram a atenção dos especialistas durante o congresso.`,
      'O texto destaca o desenho dos estudos, os resultados apresentados e as questões que ainda permanecem em aberto, com foco no que pode ser incorporado à prática clínica.',
      'Texto completo da análise a ser inserido quando o conteúdo final for aprovado.',
    ],
  },
};
