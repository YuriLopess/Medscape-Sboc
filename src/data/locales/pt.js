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

  nav: { cobertura: 'Cobertura', noticias: 'Notícias', videos: 'Vídeos', sintese: 'Síntese final', busca: 'Busca' },

  topics: {
    mama: 'Mama',
    pulmao: 'Pulmão',
    gastro: 'Gastrointestinais',
    hemato: 'Onco-hematologia',
    imuno: 'Imunoterapia',
    gineco: 'Ginecológicos',
    gu: 'Geniturinários',
    precisao: 'Oncologia de precisão',
    pele: 'Pele e melanoma',
    outros: 'Outros temas',
  },

  // Apresentação de cada área (página da área): texto de abertura e três temas em foco. Provisório.
  areas: {
    pulmao: {
      intro: 'Do rastreamento à doença metastática, o câncer de pulmão concentrou algumas das apresentações mais aguardadas do congresso, com foco em terapias-alvo, imunoterapia perioperatória e seleção de pacientes por biomarcadores.',
      points: ['Tratamento perioperatório e o papel da imunoterapia antes e depois da cirurgia', 'Terapias-alvo em primeira linha e o manejo da resistência', 'Biomarcadores para escolher quem se beneficia de cada estratégia'],
    },
    mama: {
      intro: 'O câncer de mama segue entre os temas mais discutidos, com novos dados sobre conjugados anticorpo-fármaco, terapia endócrina e a desescalada de tratamento na doença inicial.',
      points: ['Conjugados anticorpo-fármaco em diferentes subtipos', 'Terapia endócrina e inibidores de CDK4/6', 'Quando é possível reduzir o tratamento sem perder eficácia'],
    },
    gastro: {
      intro: 'Tumores de esôfago, estômago, colorretal e fígado trouxeram atualizações em imunoterapia, tratamento perioperatório e na definição de subgrupos moleculares.',
      points: ['Imunoterapia em tumores gastroesofágicos', 'Estratégias perioperatórias no câncer colorretal', 'Subgrupos moleculares que mudam a conduta'],
    },
    gineco: {
      intro: 'Em ovário, endométrio e colo do útero, o congresso reforçou o peso da classificação molecular e das combinações com imunoterapia na escolha do tratamento.',
      points: ['Classificação molecular no câncer de endométrio', 'Manutenção no câncer de ovário', 'Imunoterapia no câncer de colo do útero avançado'],
    },
    hemato: {
      intro: 'Linfomas, leucemias e mieloma múltiplo tiveram novos dados sobre anticorpos biespecíficos, terapias celulares e o sequenciamento das linhas de tratamento.',
      points: ['Anticorpos biespecíficos e terapias celulares', 'Indução e manutenção no mieloma múltiplo', 'Sequenciamento de tratamentos em linfomas'],
    },
    gu: {
      intro: 'Próstata, bexiga e rim foram discutidos à luz da intensificação de tratamento na doença sensível à castração, dos conjugados no urotélio e das combinações no rim.',
      points: ['Intensificação do tratamento no câncer de próstata', 'Conjugados anticorpo-fármaco no câncer urotelial', 'Combinações com imunoterapia no carcinoma renal'],
    },
    imuno: {
      intro: 'A imunoterapia atravessa todas as áreas do congresso: combinações, uso antes da cirurgia e a busca por marcadores que indiquem quem responde.',
      points: ['Imunoterapia neoadjuvante e perioperatória', 'Combinações e manejo de toxicidades', 'Marcadores de resposta'],
    },
    precisao: {
      intro: 'Sequenciamento genômico, biópsia líquida e terapias-alvo para alterações raras mostram como a oncologia de precisão chega à prática.',
      points: ['Biópsia líquida no diagnóstico e no acompanhamento', 'Terapias-alvo para alterações moleculares raras', 'Acesso ao teste genômico na rotina'],
    },
    pele: {
      intro: 'Melanoma e outros tumores de pele reuniram resultados de longo prazo da imunoterapia e novas estratégias para a doença de alto risco.',
      points: ['Resultados de longo prazo da imunoterapia no melanoma', 'Tratamento adjuvante e neoadjuvante na doença de alto risco', 'Carcinomas cutâneos avançados'],
    },
    outros: {
      intro: 'Temas que atravessam as especialidades: cuidados de suporte, tumores raros, cabeça e pescoço e o panorama geral do congresso.',
      points: ['Cuidados de suporte e qualidade de vida', 'Sarcomas e tumores raros', 'Tumores de cabeça e pescoço'],
    },
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

    textsTitle: 'Notícias da cobertura',
    textsSub: 'Os estudos e debates do congresso, com a leitura dos especialistas.',

    areasTitle: 'Explore por área terapêutica',
    areasSub: 'Escolha o tema da sua prática e veja o que a cobertura traz sobre ele.',
    areaVideos: (n) => `${n} ${n === 1 ? 'vídeo' : 'vídeos'}`,
    areaNews: (n) => `${n} ${n === 1 ? 'notícia' : 'notícias'}`,
    // Contagem completa para leitores de tela: "2 vídeos · 1 notícia"
    areaCount(videos, news) {
      return [videos && this.areaVideos(videos), news && this.areaNews(news)].filter(Boolean).join(' · ');
    },
    areaCta: (topic) => `Ver conteúdos de ${topic}`,
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

    // Natureza do conteúdo (handoff): todo card mostra uma das duas antes do clique
    editorial: 'Editorial',
    sponsoredBadge: 'Conteúdo patrocinado',
    coverage: 'Cobertura',

    // Área terapêutica
    topicKicker: 'Oncologia',
    topicSub: 'Notícias, vídeos e análises selecionadas',
    topicFocus: 'Em foco nesta área',
    topicUpdated: (d) => `Atualizado em ${d}`,
    topicRelatedSub: 'Vídeos e notícias de outras áreas da cobertura.',
    topicHighlight: 'Destaque',
    newsHeading: 'Notícias',
    videosHeading: 'Vídeos',
    topicEmpty: 'Ainda não há conteúdos publicados nesta área.',
    backToTopic: (t) => `Voltar para ${t}`,
    seeAllNews: 'Ver todas as notícias',
    seeAllVideos: 'Ver todos os vídeos',

    // Listagens por formato
    newsListTitle: 'Notícias',
    newsListSub: 'Atualizações editoriais e patrocinadas da cobertura',
    videoListTitle: 'Vídeos',
    videoListSub: 'Highlights, entrevistas e comentários',
    filterByArea: 'Filtrar por área terapêutica',
    resultsCount: (n) => `${n} ${n === 1 ? 'conteúdo' : 'conteúdos'}`,
    listingEmpty: 'Nenhum conteúdo nesta área por enquanto.',

    // Síntese final
    synthesisTitle: (name) => `Síntese final ${name}`,
    synthesisSub: 'Principais mensagens por área terapêutica',
    synthesisAreaSub: 'Resumo, notícias e vídeos relacionados',
    explore: 'Explorar',

    // Busca
    searchTitle: 'Busca na cobertura',
    searchPlaceholder: 'Tema, estudo ou especialista',
    searchButton: 'Buscar',
    searchResults: (n) => `${n} ${n === 1 ? 'resultado' : 'resultados'}`,
    searchEmpty: (q) => `Nada encontrado para “${q}”. Tente outro termo ou explore por área terapêutica.`,
    searchPrompt: 'Busque por tema, estudo ou especialista nos vídeos e notícias da cobertura.',

    video: 'Vídeo',
    text: 'Notícia',
  },

  page: {
    back: 'Voltar para a cobertura',
    videoKicker: 'Vídeo da cobertura',
    textKicker: 'Notícia da cobertura',
    synthesisKicker: 'Síntese final',
    watch: (title) => `Assistir: ${title}`,
    videoSoon: 'O vídeo será publicado aqui assim que a gravação final for aprovada.',
    supportedBy: 'Com o apoio de',
    // Página de conteúdo patrocinado: aviso no topo, acima do título (handoff, pág. 10)
    sponsoredBy: 'Conteúdo patrocinado por',
    sponsoredNote: 'Material desenvolvido para profissionais de saúde',
    byline: (name, date) => `Cobertura ${name} • ${date}`,

    expert: 'Especialista',
    experts: 'Especialistas',
    aboutVideo: 'Sobre este vídeo',
    aboutText: 'Sobre esta notícia',
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
      `${description} No contexto da cobertura do ${eventName}, ${isVideo ? 'este vídeo reúne' : 'esta notícia reúne'} a leitura de especialistas sobre os dados apresentados no congresso e o que eles podem significar para a prática clínica no Brasil.`,
    body: (eventName) => [
      `Esta notícia acompanha as principais apresentações do ${eventName} sobre o tema e organiza os pontos que mais chamaram a atenção dos especialistas durante o congresso.`,
      'O texto destaca o desenho dos estudos, os resultados apresentados e as questões que ainda permanecem em aberto, com foco no que pode ser incorporado à prática clínica.',
      'Texto completo da notícia a ser inserido quando o conteúdo final for aprovado.',
    ],
  },
};
