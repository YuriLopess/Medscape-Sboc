import { useCallback, useEffect, useRef, useState } from 'react';
import Flag from './Flags.jsx';
import { ChevronDown, Close, Menu } from './Icons.jsx';
import { languages, useContent } from '../i18n.jsx';
import { useDismiss } from '../hooks/useDismiss.js';

function NavDropdown({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  return (
    <li className="nav-dropdown" ref={ref}>
      <button type="button" className="nav-link" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {item.label} <ChevronDown />
      </button>
      {open && (
        <ul className="dropdown-menu">
          {item.children.map((child) => (
            <li key={child.href}>
              <a href={child.href} onClick={() => { close(); onNavigate(); }}>{child.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// Seletor de idioma em forma de select: bandeira + sigla; a lista mostra bandeira + nome do idioma
// (cada nome escrito no próprio idioma, para quem não lê o idioma atual achar o seu)
function LanguageSelect() {
  const { lang, setLang, ui } = useContent();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);
  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <div className="lang-select" ref={ref}>
      <button
        type="button"
        className="lang-select-btn"
        aria-expanded={open}
        aria-label={`${ui.language}: ${current.name}`}
        onClick={() => setOpen((o) => !o)}
      >
        <Flag code={current.code} />
        <span aria-hidden="true">{current.short}</span>
        <ChevronDown />
      </button>
      {open && (
        <ul className="lang-select-menu">
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                lang={l.code}
                aria-pressed={l.code === lang}
                onClick={() => { setLang(l.code); close(); }}
              >
                <Flag code={l.code} />
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const { disclosure, navLinks, ui } = useContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Fecha o menu móvel com Esc ou ao voltar para a largura de desktop
  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia('(min-width: 901px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    desktop.addEventListener('change', onChange);
    document.addEventListener('keydown', onKey);
    return () => {
      desktop.removeEventListener('change', onChange);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        {/* B: aviso obrigatório no topo da página (diretrizes Medscape). O aviso de público fica no rodapé. */}
        <div className="container topbar-inner">
          {/* Duas partes: no desktop leem como uma frase só; no celular viram duas linhas centralizadas
              (começo da frase discreto, empresas em destaque) */}
          <p className="topbar-disclosure">
            <span className="td-lead">{disclosure.topParts[0]}</span>{' '}
            <span className="td-names">{disclosure.topParts[1]}</span>
          </p>
          <LanguageSelect />
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          {/* A: marca que chancela o programa (como "Avalado por la" no exemplo de referência) */}
          <a href="#/" className="hb hb--left" aria-label={ui.homeSboc}>
            <span className="hb-label">{ui.participation}</span>
            <img className="hb-sboc" src="images/logos/sboc-horizontal.png" alt="" width="342" height="120" />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
          <nav id="main-nav" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label={ui.mainNav}>
            <ul>
              {navLinks.map((item) =>
                item.children ? (
                  <NavDropdown key={item.key} item={item} onNavigate={closeMenu} />
                ) : (
                  <li key={item.key}>
                    <a className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
          {/* C: logo Medscape sozinho, separado das outras marcas; a menção à Medscape fica só no aviso B */}
          <a href="#/" className="hb hb--right" aria-label={ui.homeMedscape}>
            <img className="hb-medscape" src="images/logos/medscape.png" alt="" width="698" height="160" />
          </a>
        </div>
      </header>
    </>
  );
}
