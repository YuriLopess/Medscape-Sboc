// Textos en español. Misma estructura que pt.js.

const join = (names) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} y ${names.at(-1)}`;

export default {
  code: 'es',
  htmlLang: 'es',
  short: 'ES',
  name: 'Español',

  event: {
    dates: '23 – 27 oct 2026',
    city: 'Madrid, España',
    tagline: 'Conocimiento global • Perspectiva brasileña',
    title: ['ESMO 2026 visto por', 'la oncología brasileña.'],
    lead: 'Medscape y la SBOC reúnen a especialistas brasileños para analizar los estudios, debates y avances que merecen atención.',
    heroCaption: ['Madrid', 'conecta', 'ideas para', 'más vidas'],
    heroAlt: 'Sesión plenaria del congreso ESMO 2026 con el público frente al escenario',
  },

  nav: { cobertura: 'Cobertura', noticias: 'Noticias', videos: 'Videos', sintese: 'Síntesis final', busca: 'Búsqueda' },

  topics: {
    mama: 'Mama',
    pulmao: 'Pulmón',
    gastro: 'Gastrointestinal',
    gineco: 'Ginecológico',
    pele: 'Piel y melanoma',
    outros: 'Otros temas',
  },

  // Apresentação de cada área (página da área): texto de abertura e três temas em foco. Provisório.
  areas: {
    pulmao: {
      intro: 'Del cribado a la enfermedad metastásica, el cáncer de pulmón debe concentrar algunas de las presentaciones más esperadas del congreso, con foco en terapias dirigidas, inmunoterapia perioperatoria y selección de pacientes por biomarcadores.',
      points: ['Tratamiento perioperatorio y el papel de la inmunoterapia antes y después de la cirugía', 'Terapias dirigidas en primera línea y manejo de la resistencia', 'Biomarcadores para elegir quién se beneficia de cada estrategia'],
    },
    mama: {
      intro: 'El cáncer de mama debe seguir entre los temas más discutidos, con nuevos datos esperados sobre conjugados anticuerpo-fármaco, terapia endocrina y desescalada del tratamiento en la enfermedad inicial.',
      points: ['Conjugados anticuerpo-fármaco en distintos subtipos', 'Terapia endocrina e inhibidores de CDK4/6', 'Cuándo es posible reducir el tratamiento sin perder eficacia'],
    },
    gastro: {
      intro: 'En los tumores de esófago, estómago, colorrectal e hígado, se esperan actualizaciones en inmunoterapia, tratamiento perioperatorio y definición de subgrupos moleculares.',
      points: ['Inmunoterapia en tumores gastroesofágicos', 'Estrategias perioperatorias en cáncer colorrectal', 'Subgrupos moleculares que cambian la conducta'],
    },
    gineco: {
      intro: 'En ovario, endometrio y cuello uterino, el congreso debe reforzar el peso de la clasificación molecular y de las combinaciones con inmunoterapia en la elección del tratamiento.',
      points: ['Clasificación molecular en cáncer de endometrio', 'Mantenimiento en cáncer de ovario', 'Inmunoterapia en cáncer de cuello uterino avanzado'],
    },
    pele: {
      intro: 'El melanoma y otros tumores de piel deben reunir resultados a largo plazo de la inmunoterapia, nuevas estrategias para la enfermedad de alto riesgo y avances en linfomas cutáneos.',
      points: ['Inmunoterapia en melanoma', 'Tratamiento adyuvante y neoadyuvante en enfermedad de alto riesgo', 'Linfomas cutáneos y carcinomas avanzados'],
    },
    outros: {
      intro: 'Temas que atraviesan las especialidades: el panorama general del congreso, los tumores de cabeza y cuello y la oncohematología.',
      points: ['Panorama general del congreso', 'Tumores de cabeza y cuello', 'Mieloma múltiple y combinaciones en oncohematología'],
    },
  },

  // Título e descrição de cada conteúdo, pelo id: { id: ['Título', 'Descrição.'] }
  content: {},

  finalSynthesis: {
    eyebrow: 'Síntesis final',
    title: ['Lo más destacado,', 'en dos conversaciones.'],
    description: 'Al final del congreso, una visión integrada de los temas de mayor impacto y de lo que cambia en la práctica.',
  },

  // Avisos obligatorios (directrices Medscape, versión en español del PDF)
  // Aviso do topo da página, em duas partes [começo da frase, instituição] para o celular quebrar a linha no ponto certo
  topDisclosure: ['Desarrollado por Medscape con el apoyo de la', 'Sociedad Brasileña de Oncología Clínica'],
  sponsorLine: (names) => `Desarrollado por Medscape con el apoyo de ${join(names)}`,
  footerDisclaimer: (names) =>
    `La cobertura de la conferencia ha sido desarrollada por Medscape con el apoyo de ${join(names)}. ` +
    `${join(names)} ${names.length === 1 ? 'llevó' : 'llevaron'} a cabo una aprobación médica completa para garantizar el cumplimiento de las regulaciones. ` +
    'Ninguna parte de esta cobertura puede reproducirse de ninguna forma sin el permiso del editor. ' +
    'Los puntos de vista y opiniones expresados no son necesariamente los de Medscape, su editor, asesores o anunciantes.',

  // Rodapé mínimo: marcas, público, privacidade e o aviso obrigatório (acima)
  footer: {
    developedBy: 'Desarrollado por',
    audience: 'Contenido destinado exclusivamente a profesionales de la salud.',
    privacy: { label: 'Política de privacidad', href: 'https://www.medscape.com/public/privacy' },
    newTab: '(se abre en una nueva pestaña)',
  },

  ui: {
    skip: 'Ir al contenido',
    homeSboc: 'SBOC, volver al inicio',
    homeMedscape: 'Medscape, volver al inicio',
    participation: 'En alianza con la',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    language: 'Idioma',

    exploreCoverage: 'Seguir el ESMO 2026',
    videosCount: (n) => `${n} videos de cobertura`,
    atYourPace: 'Explore a su ritmo.',
    seeAll: 'Ver todos',

    textsTitle: 'Noticias de la cobertura',
    textsSub: 'Los estudios y debates del congreso, con la lectura de los especialistas.',

    areasTitle: 'Explore por área terapéutica',
    areasSub: 'Elija el tema de su práctica y vea lo que la cobertura trae sobre él.',
    areaVideos: (n) => `${n} ${n === 1 ? 'video' : 'videos'}`,
    areaNews: (n) => `${n} ${n === 1 ? 'noticia' : 'noticias'}`,
    // Contagem completa para leitores de tela: "2 vídeos · 1 notícia"
    areaCount(videos, news) {
      return [videos && this.areaVideos(videos), news && this.areaNews(news)].filter(Boolean).join(' · ');
    },
    areaCta: (topic) => `Ver contenidos de ${topic}`,
    coverageOf: (name) => `Cobertura ${name}`,
    readTime: (t) => `${t} de lectura`,
    exploreByTopic: 'Explorar por tema',

    featuredTitle: 'Destacados de la cobertura',
    featuredSub: 'Videos y análisis para seguir los temas del congreso.',
    featuredLabel: 'Destacados',
    goToVideo: 'Ir al video',
    previous: 'anterior',
    next: 'siguiente',

    part: (n) => `Parte ${n}`,
    duration: 'Duración',

    exploreTitle: 'Explore por tema',
    exploreSub: 'Contenidos seleccionados, incluidos videos y análisis, para profundizar en los temas de mayor interés.',
    all: 'Todos',
    moreTopics: 'Más temas',
    filterByTopic: 'Filtrar por tema',
    topicsLabel: 'Temas',
    emptyTopic: 'Todavía no hay contenidos publicados para este tema.',
    goToContent: 'Ir al contenido',

    supportersTitle: 'Patrocinadores',
    supportersSub: 'Apoyan la difusión del conocimiento y el debate científico.',

    // Naturaleza del contenido (handoff): cada card muestra una de las dos antes del clic
    editorial: 'Editorial',
    sponsoredBadge: 'Contenido patrocinado',
    coverage: 'Cobertura',

    // Área terapéutica
    topicKicker: 'Oncología',
    topicSub: 'Noticias, videos y análisis seleccionados',
    topicFocus: 'En foco en esta área',
    topicUpdated: (d) => `Actualizado el ${d}`,
    topicRelatedSub: 'Videos y noticias de otras áreas de la cobertura.',
    topicHighlight: 'Destacado',
    newsHeading: 'Noticias',
    videosHeading: 'Videos',
    topicEmpty: 'Todavía no hay contenidos publicados en esta área.',
    backToTopic: (t) => `Volver a ${t}`,
    seeAllNews: 'Ver todas las noticias',
    seeAllVideos: 'Ver todos los videos',

    // Listados por formato
    newsListTitle: 'Noticias',
    newsListSub: 'Actualizaciones editoriales y patrocinadas de la cobertura',
    videoListTitle: 'Videos',
    videoListSub: 'Highlights, entrevistas y comentarios',
    filterByArea: 'Filtrar por área terapéutica',
    resultsCount: (n) => `${n} ${n === 1 ? 'contenido' : 'contenidos'}`,
    listingEmpty: 'Ningún contenido en esta área por ahora.',

    // Síntesis final
    synthesisTitle: (name) => `Síntesis final ${name}`,
    synthesisSub: 'Principales mensajes por área terapéutica',
    synthesisAreasSub: 'Qué esperar de cada área en el congreso, en pocas líneas, con el camino a los videos y las noticias.',
    explore: 'Explorar',

    // Búsqueda
    searchTitle: 'Búsqueda en la cobertura',
    searchPlaceholder: 'Tema, estudio o especialista',
    searchButton: 'Buscar',
    searchResults: (n) => `${n} ${n === 1 ? 'resultado' : 'resultados'}`,
    searchEmpty: (q) => `No se encontró nada para “${q}”. Pruebe otro término o explore por área terapéutica.`,
    searchPrompt: 'Busque por tema, estudio o especialista en los videos y noticias de la cobertura.',

    // Antes de la publicación de los contenidos
    soon: 'Próximamente',
    soonText: 'Los videos y las noticias de la cobertura se publicarán durante el congreso.',
    soonTopic: (topic) => `Los videos y las noticias de ${topic} se publicarán durante el congreso.`,
    soonVideos: 'Los videos de la cobertura se publicarán durante el congreso.',
    soonNews: 'Las noticias de la cobertura se publicarán durante el congreso.',
    soonSynthesis: 'Las dos conversaciones de cierre se publicarán al final del congreso.',
    soonSearch: 'Los contenidos de la cobertura aún no se han publicado. Vuelva durante el congreso para buscar.',

    video: 'Video',
    text: 'Noticia',
  },

  page: {
    back: 'Volver a la cobertura',
    videoKicker: 'Video de la cobertura',
    textKicker: 'Noticia de la cobertura',
    synthesisKicker: 'Síntesis final',
    watch: (title) => `Ver: ${title}`,
    videoSoon: 'El video se publicará aquí en cuanto se apruebe la grabación final.',
    supportedBy: 'Contenido patrocinado',
    // Página de contenido patrocinado: aviso arriba, sobre el título (handoff, pág. 10)
    sponsoredBy: 'Contenido patrocinado por',
    sponsoredNote: 'Material desarrollado para profesionales de la salud',
    byline: (name, date) => `Cobertura ${name} • ${date}`,

    expert: 'Especialista',
    experts: 'Especialistas',
    aboutVideo: 'Sobre este video',
    aboutText: 'Sobre esta noticia',
    format: 'Formato',
    topic: 'Tema',
    event: 'Evento',
    related: 'Siga explorando',
    relatedSub: (name) => `Otros videos y análisis de la cobertura del ${name}.`,
    notFound: 'Contenido no encontrado',
    notFoundText: 'Es posible que el enlace esté incompleto o que el contenido aún no se haya publicado.',
    notFoundBack: 'Volver a la cobertura',
    notFoundSearch: 'Buscar en la cobertura',
    notFoundAreas: 'O elija un área terapéutica',
    placeholderSpeaker: { name: 'Nombre del especialista', role: 'Cargo e institución por confirmar' },
    summary: (description, eventName, isVideo) =>
      `${description} En el contexto de la cobertura del ${eventName}, ${isVideo ? 'este video reúne' : 'esta noticia reúne'} la lectura de especialistas sobre los datos presentados en el congreso y lo que pueden significar para la práctica clínica en Brasil.`,
    body: (eventName) => [
      `Esta noticia recorre las principales presentaciones del ${eventName} sobre el tema y organiza los puntos que más llamaron la atención de los especialistas durante el congreso.`,
      'El texto destaca el diseño de los estudios, los resultados presentados y las preguntas que siguen abiertas, con foco en lo que puede incorporarse a la práctica clínica.',
      'Texto completo de la noticia a incluir cuando se apruebe el contenido final.',
    ],
  },
};
