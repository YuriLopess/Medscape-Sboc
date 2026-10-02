// English texts. Same structure as pt.js.

const join = (names) =>
  names.length <= 1
    ? names.join('')
    : names.length === 2
      ? names.join(' and ')
      : `${names.slice(0, -1).join(', ')}, and ${names.at(-1)}`;

export default {
  code: 'en',
  htmlLang: 'en',
  short: 'EN',
  name: 'English',

  event: {
    dates: 'Oct 23 – 27, 2026',
    city: 'Madrid, Spain',
    tagline: 'Global knowledge • Brazilian perspective • Oncology practice',
    title: ['ESMO 2026 as seen by', 'Brazilian oncology.'],
    lead: 'Medscape and SBOC bring together Brazilian experts to analyze the studies, debates and advances that deserve attention.',
    heroCaption: ['Madrid', 'connects', 'ideas for', 'more lives'],
    heroAlt: 'ESMO 2026 plenary session with the audience facing the stage',
  },

  nav: { cobertura: 'Coverage', noticias: 'News', videos: 'Videos', sintese: 'Final synthesis', busca: 'Search' },

  topics: {
    mama: 'Breast',
    pulmao: 'Lung',
    gastro: 'Gastrointestinal',
    gineco: 'Gynecologic',
    pele: 'Skin and melanoma',
    outros: 'Other topics',
  },

  // Apresentação de cada área (página da área): texto de abertura e três temas em foco. Provisório.
  areas: {
    pulmao: {
      intro: 'From screening to metastatic disease, lung cancer drew some of the most anticipated presentations of the congress, with a focus on targeted therapies, perioperative immunotherapy and biomarker-driven patient selection.',
      points: ['Perioperative treatment and the role of immunotherapy before and after surgery', 'First-line targeted therapies and managing resistance', 'Biomarkers to identify who benefits from each strategy'],
    },
    mama: {
      intro: 'Breast cancer remains among the most discussed topics, with new data on antibody-drug conjugates, endocrine therapy and treatment de-escalation in early disease.',
      points: ['Antibody-drug conjugates across subtypes', 'Endocrine therapy and CDK4/6 inhibitors', 'When treatment can be reduced without losing efficacy'],
    },
    gastro: {
      intro: 'Esophageal, gastric, colorectal and liver tumors brought updates on immunotherapy, perioperative treatment and the definition of molecular subgroups.',
      points: ['Immunotherapy in gastroesophageal tumors', 'Perioperative strategies in colorectal cancer', 'Molecular subgroups that change management'],
    },
    gineco: {
      intro: 'In ovarian, endometrial and cervical cancer, the congress reinforced the weight of molecular classification and immunotherapy combinations in choosing treatment.',
      points: ['Molecular classification in endometrial cancer', 'Maintenance therapy in ovarian cancer', 'Immunotherapy in advanced cervical cancer'],
    },
    pele: {
      intro: 'Melanoma and other skin cancers brought long-term immunotherapy results, new strategies for high-risk disease and advances in cutaneous lymphomas.',
      points: ['Immunotherapy in melanoma', 'Adjuvant and neoadjuvant treatment in high-risk disease', 'Cutaneous lymphomas and advanced carcinomas'],
    },
    outros: {
      intro: 'Topics that cut across specialties: the overall view of the congress, head and neck cancers and hematologic oncology.',
      points: ['Overall view of the congress', 'Head and neck cancers', 'Multiple myeloma and combinations in hematologic oncology'],
    },
  },

  content: {
    panorama: ['Congress overview', 'An overview of the key topics and discussions at this edition of ESMO.'],
    mama: ['Breast cancer highlights', 'Advances, challenges, and perspectives for clinical practice.'],
    toracicos: ['Thoracic tumors', 'What was presented and what changes in practice.'],
    gastro: ['Gastrointestinal tumors', 'Studies that may redefine treatment approaches.'],
    gineco: ['Gynecologic tumors', 'New approaches and their impact on patients.'],
    gu: ['Colorectal cancer', 'From screening to treatment of metastatic disease.'],
    imuno: ['Immunotherapy in melanoma', 'Combinations, sequencing and patient selection.'],
    precisao: ['Precision oncology in lung cancer', 'Evolving biomarkers and targeted therapies in advanced disease.'],
    linfomas: ['Cutaneous lymphomas', 'New approaches to lymphomas with skin involvement.'],
    melanoma: ['Melanoma and skin cancer', 'Long-term results and new strategies.'],
    'cabeca-pescoco': ['Head and neck', 'Perspectives on multidisciplinary treatment.'],
    'pulmao-avancado': ['Advanced lung cancer', 'First line, sequencing, and biomarkers.'],
    suporte: ['Supportive care in breast cancer', 'Quality of life and toxicity management during treatment.'],
    mieloma: ['Multiple myeloma', 'Induction and maintenance strategies under debate.'],
    sarcomas: ['Sarcomas and GIST', 'Gastrointestinal stromal tumors and other sarcomas: what changes in practice.'],
    sintese: ['The congress highlights', 'An integrated view of the topics that shaped ESMO 2026.'],
    'sintese-pratica': ['What changes in practice in Brazil', 'Experts translate the results into the Brazilian context.'],
    'texto-digestivos': ['The landscape of digestive tumors', 'Discussions that may shape clinical practice in the coming years.'],
    'texto-biomarcadores': ['Biomarkers in breast cancer', 'The role of biomarkers in choosing treatment.'],
    'texto-mama': ['Breast cancer: what changes after ESMO', 'A critical reading of the studies with the greatest potential impact.'],
    'texto-pulmao': ['Lung cancer: from adjuvant to advanced disease', 'Data presented and questions still open.'],
    'texto-gineco': ['New approaches in gynecologic cancers', 'What the congress brought to the horizon.'],
    'texto-hemato': ['Hematologic oncology: combinations under debate', 'What the new data suggest for lymphoma and myeloma.'],
    'texto-prostata': ['Cervical cancer under debate', 'Prevention, screening and treatment of advanced disease.'],
    'texto-suporte': ['Quality of life in gynecologic cancers', 'Supportive care and patient-reported outcomes.'],
  },

  finalSynthesis: {
    eyebrow: 'Final synthesis',
    title: ['The key highlights,', 'in two conversations.'],
    description: 'An integrated view of the topics that shaped the congress and what changes in practice.',
  },

  // Required disclaimers (Medscape guidelines, English version from the PDF)
  // Aviso do topo da página, em duas partes [começo da frase, instituição] para o celular quebrar a linha no ponto certo
  topDisclosure: ['Developed by Medscape with support from the', 'Brazilian Society of Clinical Oncology'],
  footerDisclaimer: (names) =>
    `Conference coverage has been developed by Medscape with support from ${join(names)}. ` +
    `${join(names)} carried out full medical approval to ensure compliance with regulations. ` +
    'No part of this coverage may be reproduced in any form without the permission of the publisher. ' +
    'The views and opinions expressed are not necessarily those of Medscape, its publisher, advisers, or advertisers.',

  // Rodapé mínimo: marcas, público, privacidade e o aviso obrigatório (acima)
  footer: {
    developedBy: 'Developed by',
    audience: 'Content intended exclusively for healthcare professionals.',
    privacy: { label: 'Privacy policy', href: 'https://www.medscape.com/public/privacy' },
    newTab: '(opens in a new tab)',
  },

  ui: {
    skip: 'Skip to content',
    homeSboc: 'SBOC, back to home',
    homeMedscape: 'Medscape, back to home',
    participation: 'In partnership with',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    language: 'Language',

    exploreCoverage: 'Follow ESMO 2026',
    videosCount: (n) => `${n} coverage videos`,
    atYourPace: 'Explore at your own pace.',
    seeAll: 'See all',

    textsTitle: 'Coverage news',
    textsSub: 'The studies and debates of the congress, with expert insight.',

    areasTitle: 'Explore by therapeutic area',
    areasSub: 'Pick the topic of your practice and see what the coverage has on it.',
    areaVideos: (n) => `${n} ${n === 1 ? 'video' : 'videos'}`,
    areaNews: (n) => `${n} ${n === 1 ? 'news story' : 'news stories'}`,
    // Contagem completa para leitores de tela: "2 vídeos · 1 notícia"
    areaCount(videos, news) {
      return [videos && this.areaVideos(videos), news && this.areaNews(news)].filter(Boolean).join(' · ');
    },
    areaCta: (topic) => `See ${topic} content`,
    coverageOf: (name) => `${name} coverage`,
    readTime: (t) => `${t} read`,
    exploreByTopic: 'Explore by topic',

    featuredTitle: 'Coverage highlights',
    featuredSub: 'Videos and analysis to follow the topics of the congress.',
    featuredLabel: 'Highlights',
    goToVideo: 'Go to video',
    previous: 'previous',
    next: 'next',

    part: (n) => `Part ${n}`,
    duration: 'Duration',

    exploreTitle: 'Explore by topic',
    exploreSub: 'Selected content, including videos and analysis, to dive deeper into the topics that matter most to you.',
    all: 'All',
    moreTopics: 'More topics',
    filterByTopic: 'Filter by topic',
    topicsLabel: 'Topics',
    emptyTopic: 'No content has been published for this topic yet.',
    goToContent: 'Go to content',

    supportersTitle: 'Supporters',
    supportersSub: 'Supporting the spread of knowledge and scientific debate.',

    // Content nature (handoff): every card shows one of the two before the click
    editorial: 'Editorial',
    sponsoredBadge: 'Sponsored content',
    coverage: 'Coverage',

    // Therapeutic area
    topicKicker: 'Oncology',
    topicSub: 'Selected news, videos and analysis',
    topicFocus: 'In focus in this area',
    topicUpdated: (d) => `Updated ${d}`,
    topicRelatedSub: 'Videos and news from other areas of the coverage.',
    topicHighlight: 'Highlight',
    newsHeading: 'News',
    videosHeading: 'Videos',
    topicEmpty: 'No content has been published in this area yet.',
    backToTopic: (t) => `Back to ${t}`,
    seeAllNews: 'See all news',
    seeAllVideos: 'See all videos',

    // Format listings
    newsListTitle: 'News',
    newsListSub: 'Editorial and sponsored updates from the coverage',
    videoListTitle: 'Videos',
    videoListSub: 'Highlights, interviews and commentary',
    filterByArea: 'Filter by therapeutic area',
    resultsCount: (n) => `${n} ${n === 1 ? 'item' : 'items'}`,
    listingEmpty: 'No content in this area yet.',

    // Final synthesis
    synthesisTitle: (name) => `${name} final synthesis`,
    synthesisSub: 'Key messages by therapeutic area',
    synthesisAreasSub: 'What each area took from the congress, in a few lines, with the way to its videos and news.',
    explore: 'Explore',

    // Search
    searchTitle: 'Search the coverage',
    searchPlaceholder: 'Topic, study or expert',
    searchButton: 'Search',
    searchResults: (n) => `${n} ${n === 1 ? 'result' : 'results'}`,
    searchEmpty: (q) => `Nothing found for “${q}”. Try another term or explore by therapeutic area.`,
    searchPrompt: 'Search by topic, study or expert across the coverage videos and news.',

    video: 'Video',
    text: 'News',
  },

  page: {
    back: 'Back to coverage',
    videoKicker: 'Coverage video',
    textKicker: 'Coverage news',
    synthesisKicker: 'Final synthesis',
    watch: (title) => `Watch: ${title}`,
    videoSoon: 'The video will be published here as soon as the final recording is approved.',
    supportedBy: 'Supported by',
    // Sponsored content page: disclosure at the top, above the title (handoff, p. 10)
    sponsoredBy: 'Sponsored content by',
    sponsoredNote: 'Material developed for healthcare professionals',
    byline: (name, date) => `${name} coverage • ${date}`,

    expert: 'Expert',
    experts: 'Experts',
    aboutVideo: 'About this video',
    aboutText: 'About this story',
    format: 'Format',
    topic: 'Topic',
    event: 'Event',
    related: 'Keep exploring',
    relatedSub: (name) => `More videos and analysis from the ${name} coverage.`,
    notFound: 'Content not found',
    notFoundText: 'The link may be incomplete, or the content has not been published yet.',
    notFoundBack: 'Back to coverage',
    placeholderSpeaker: { name: 'Expert name', role: 'Title and institution to be confirmed' },
    summary: (description, eventName, isVideo) =>
      `${description} As part of the ${eventName} coverage, ${isVideo ? 'this video brings together' : 'this story brings together'} expert insight into the data presented at the congress and what it may mean for clinical practice in Brazil.`,
    body: (eventName) => [
      `This story follows the main ${eventName} presentations on the topic and organizes the points that stood out most to the experts during the congress.`,
      'It highlights study design, the results presented, and the questions that remain open, with a focus on what may be incorporated into clinical practice.',
      'Full text of the story to be added once the final content is approved.',
    ],
  },
};
