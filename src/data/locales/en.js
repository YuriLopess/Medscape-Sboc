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
    tagline: 'Science. People. A healthier future.',
    title: ['Oncology', 'in perspective.'],
    lead: 'Analysis and perspectives on the key topics of the congress, with the participation of SBOC.',
    heroCaption: ['Madrid', 'connects', 'ideas for', 'more lives'],
    heroAlt: 'ESMO 2026 plenary session with the audience facing the stage',
  },

  nav: { cobertura: 'Coverage', noticias: 'News', videos: 'Videos', sintese: 'Final synthesis', busca: 'Search' },

  topics: {
    mama: 'Breast',
    pulmao: 'Lung',
    gastro: 'Gastrointestinal',
    hemato: 'Hematologic oncology',
    imuno: 'Immunotherapy',
    gineco: 'Gynecologic',
    gu: 'Genitourinary',
    precisao: 'Precision oncology',
    pele: 'Skin and melanoma',
    outros: 'Other topics',
  },

  content: {
    panorama: ['Congress overview', 'An overview of the key topics and discussions at this edition of ESMO.'],
    mama: ['Breast cancer highlights', 'Advances, challenges, and perspectives for clinical practice.'],
    toracicos: ['Thoracic tumors', 'What was presented and what changes in practice.'],
    gastro: ['Gastrointestinal tumors', 'Studies that may redefine treatment approaches.'],
    gineco: ['Gynecologic tumors', 'New approaches and their impact on patients.'],
    gu: ['Genitourinary tumors', 'Prostate, bladder, and kidney: the most discussed data.'],
    imuno: ['Immunotherapy', 'Combinations, sequencing, and patient selection.'],
    precisao: ['Precision oncology', 'Evolving biomarkers and targeted therapies.'],
    linfomas: ['Lymphomas and leukemias', 'New combinations and the role of targeted therapies.'],
    melanoma: ['Melanoma and skin cancer', 'Long-term results and new strategies.'],
    'cabeca-pescoco': ['Head and neck', 'Perspectives on multidisciplinary treatment.'],
    'pulmao-avancado': ['Advanced lung cancer', 'First line, sequencing, and biomarkers.'],
    suporte: ['Supportive care', 'Quality of life and toxicity management.'],
    mieloma: ['Multiple myeloma', 'Induction and maintenance strategies under debate.'],
    sarcomas: ['Sarcomas and rare tumors', 'How congress data reach less common cases.'],
    sintese: ['The congress highlights', 'An integrated view of the topics that shaped ESMO 2026.'],
    'sintese-pratica': ['What changes in practice in Brazil', 'Experts translate the results into the Brazilian context.'],
    'texto-digestivos': ['The landscape of digestive tumors', 'Discussions that may shape clinical practice in the coming years.'],
    'texto-biomarcadores': ['Biomarkers in focus', 'The role of biomarkers in personalizing cancer treatment.'],
    'texto-mama': ['Breast cancer: what changes after ESMO', 'A critical reading of the studies with the greatest potential impact.'],
    'texto-pulmao': ['Lung cancer: from adjuvant to advanced disease', 'Data presented and questions still open.'],
    'texto-gineco': ['New approaches in gynecologic cancers', 'What the congress brought to the horizon.'],
    'texto-hemato': ['Hematologic oncology: combinations under debate', 'What the new data suggest for lymphoma and myeloma.'],
    'texto-prostata': ['Prostate cancer under debate', 'Treatment intensification and patient selection.'],
    'texto-suporte': ['Quality of life at the center of care', 'Supportive care and patient-reported outcomes.'],
  },

  finalSynthesis: {
    eyebrow: 'Final synthesis',
    title: ['The key highlights,', 'in two conversations.'],
    description: 'An integrated view of the topics that shaped the congress and what changes in practice.',
  },

  // Required disclaimers (Medscape guidelines, English version from the PDF)
  sponsorParts: (names) => ['Developed by Medscape with support from', join(names)],
  sponsorLine: (names) => `Developed by Medscape with support from ${join(names)}`,
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
    participation: 'With the participation of',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    language: 'Language',

    exploreCoverage: 'Explore the coverage',
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

    watchSynthesis: 'Watch the synthesis',
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
    topicHighlight: 'Highlight',
    newsHeading: 'News',
    videosHeading: 'Videos',
    topicEmpty: 'No content has been published in this area yet.',
    backTo: 'Back to',
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
    synthesisAreaSub: 'Summary, related news and videos',
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
