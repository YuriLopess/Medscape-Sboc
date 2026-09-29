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
    tagline: 'Ciencia. Personas. Un futuro más saludable.',
    title: ['La oncología', 'en perspectiva.'],
    lead: 'Análisis y perspectivas sobre los principales temas del congreso, con la participación de la SBOC.',
    heroCaption: ['Madrid', 'conecta', 'ideas para', 'más vidas'],
    heroAlt: 'Sesión plenaria del congreso ESMO 2026 con el público frente al escenario',
  },

  nav: { textos: 'Textos', videos: 'Videos', sintese: 'Síntesis final', apoiadores: 'Patrocinadores' },

  topics: {
    mama: 'Mama',
    pulmao: 'Pulmón',
    gastro: 'Gastrointestinales',
    hemato: 'Oncohematología',
    imuno: 'Inmunoterapia',
    gineco: 'Ginecológicos',
    gu: 'Genitourinarios',
    precisao: 'Oncología de precisión',
  },

  content: {
    panorama: ['Panorama del congreso', 'Una visión general de los principales temas y debates de esta edición del ESMO.'],
    mama: ['Lo más destacado en cáncer de mama', 'Avances, desafíos y perspectivas para la práctica clínica.'],
    toracicos: ['Tumores torácicos', 'Lo que se presentó y lo que cambia en la práctica.'],
    gastro: ['Tumores gastrointestinales', 'Estudios que pueden redefinir las conductas de tratamiento.'],
    gineco: ['Tumores ginecológicos', 'Nuevos enfoques y su impacto en las pacientes.'],
    gu: ['Tumores genitourinarios', 'Próstata, vejiga y riñón: los datos más comentados.'],
    imuno: ['Inmunoterapia', 'Combinaciones, secuenciación y selección de pacientes.'],
    precisao: ['Oncología de precisión', 'Biomarcadores y terapias dirigidas en evolución.'],
    linfomas: ['Linfomas y leucemias', 'Nuevas combinaciones y el lugar de las terapias dirigidas.'],
    melanoma: ['Melanoma y piel', 'Resultados a largo plazo y nuevas estrategias.'],
    'cabeca-pescoco': ['Cabeza y cuello', 'Perspectivas para el tratamiento multidisciplinario.'],
    'pulmao-avancado': ['Pulmón avanzado', 'Primera línea, secuenciación y biomarcadores.'],
    suporte: ['Cuidados de soporte', 'Calidad de vida y manejo de toxicidades.'],
    mieloma: ['Mieloma múltiple', 'Estrategias de inducción y mantenimiento en debate.'],
    sarcomas: ['Sarcomas y tumores raros', 'Cómo llegan los datos del congreso a los casos menos frecuentes.'],
    sintese: ['Lo más destacado del congreso', 'Una visión integrada de los temas que marcaron el ESMO 2026.'],
    'sintese-pratica': ['Lo que cambia en la práctica en Brasil', 'Los especialistas trasladan los resultados a la realidad brasileña.'],
    'texto-digestivos': ['El panorama de los tumores digestivos', 'Debates que pueden impactar la práctica clínica en los próximos años.'],
    'texto-biomarcadores': ['Biomarcadores en foco', 'El papel de los biomarcadores en la personalización del tratamiento oncológico.'],
    'texto-mama': ['Mama: lo que cambia después del ESMO', 'Lectura crítica de los estudios con mayor potencial de impacto.'],
    'texto-pulmao': ['Pulmón: de la adyuvancia a la enfermedad avanzada', 'Datos presentados y preguntas aún abiertas.'],
    'texto-gineco': ['Nuevos enfoques en tumores ginecológicos', 'Lo que el congreso trajo como horizonte.'],
    'texto-hemato': ['Oncohematología: combinaciones en debate', 'Lo que indican los nuevos datos para linfomas y mieloma.'],
    'texto-prostata': ['Próstata en debate', 'Intensificación del tratamiento y selección de pacientes.'],
    'texto-suporte': ['La calidad de vida en el centro del cuidado', 'Cuidados de soporte y resultados reportados por los pacientes.'],
  },

  finalSynthesis: {
    eyebrow: 'Síntesis final',
    title: ['Lo más destacado,', 'en dos conversaciones.'],
    description: 'Una visión integrada de los temas que marcaron el congreso y de lo que cambia en la práctica.',
  },

  // Avisos obligatorios (directrices Medscape, versión en español del PDF)
  sponsorParts: (names) => ['Desarrollado por Medscape con el apoyo de', join(names)],
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
    participation: 'Con la participación de la',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    language: 'Idioma',

    exploreCoverage: 'Explorar la cobertura',
    videosCount: (n) => `${n} videos de cobertura`,
    atYourPace: 'Explore a su ritmo.',
    seeAll: 'Ver todos',

    textsTitle: 'Textos de la cobertura',
    textsSub: 'Análisis escritos sobre los estudios y debates del congreso.',
    coverageOf: (name) => `Cobertura ${name}`,
    readTime: (t) => `${t} de lectura`,
    exploreByTopic: 'Explorar por tema',

    featuredTitle: 'Destacados de la cobertura',
    featuredSub: 'Videos y análisis para seguir los temas del congreso.',
    featuredLabel: 'Destacados',
    goToVideo: 'Ir al video',
    previous: 'anterior',
    next: 'siguiente',

    watchSynthesis: 'Ver la síntesis',
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

    video: 'Video',
    text: 'Texto',
  },

  page: {
    back: 'Volver a la cobertura',
    videoKicker: 'Video de la cobertura',
    textKicker: 'Texto de la cobertura',
    synthesisKicker: 'Síntesis final',
    watch: (title) => `Ver: ${title}`,
    videoSoon: 'El video se publicará aquí en cuanto se apruebe la grabación final.',
    supportedBy: 'Con el apoyo de',
    expert: 'Especialista',
    experts: 'Especialistas',
    aboutVideo: 'Sobre este video',
    aboutText: 'Sobre este texto',
    format: 'Formato',
    topic: 'Tema',
    event: 'Evento',
    related: 'Siga explorando',
    relatedSub: (name) => `Otros videos y análisis de la cobertura del ${name}.`,
    notFound: 'Contenido no encontrado',
    notFoundText: 'Es posible que el enlace esté incompleto o que el contenido aún no se haya publicado.',
    notFoundBack: 'Volver a la cobertura',
    placeholderSpeaker: { name: 'Nombre del especialista', role: 'Cargo e institución por confirmar' },
    summary: (description, eventName, isVideo) =>
      `${description} En el contexto de la cobertura del ${eventName}, ${isVideo ? 'este video reúne' : 'este análisis reúne'} la lectura de especialistas sobre los datos presentados en el congreso y lo que pueden significar para la práctica clínica en Brasil.`,
    body: (eventName) => [
      `Este análisis recorre las principales presentaciones del ${eventName} sobre el tema y organiza los puntos que más llamaron la atención de los especialistas durante el congreso.`,
      'El texto destaca el diseño de los estudios, los resultados presentados y las preguntas que siguen abiertas, con foco en lo que puede incorporarse a la práctica clínica.',
      'Texto completo del análisis a incluir cuando se apruebe el contenido final.',
    ],
  },
};
