import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { buildContent, defaultLang, locales } from './data/content.js';
import { LangContext } from './langContext.js';

const STORAGE_KEY = 'esmo-lang';

// Idioma inicial: ?lang= no endereço (para divulgar o link já num idioma); senão, o último escolhido
// neste navegador; senão, português. O idioma do navegador é ignorado de propósito: o público é brasileiro.
function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl && locales[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales[saved]) return saved;
  } catch {
    // Armazenamento bloqueado (janela anônima etc.): segue sem lembrar a escolha
  }
  return defaultLang;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const content = useMemo(() => buildContent(lang), [lang]);

  const setLang = useCallback((next) => {
    if (!locales[next]) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem armazenamento: a troca vale só nesta visita
    }
  }, []);

  // Idioma do documento, para leitores de tela, hifenização e tradutores automáticos
  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
  }, [content.htmlLang]);

  const value = useMemo(() => ({ lang, setLang, ...content }), [lang, setLang, content]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// Conteúdo e textos da interface no idioma atual: const { ui, featuredVideos } = useContent();
export function useContent() {
  return useContext(LangContext);
}

export const languages = Object.values(locales).map((l) => ({ code: l.code, short: l.short, name: l.name }));
