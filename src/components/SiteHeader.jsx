import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, Close, Menu } from './Icons.jsx';
import { disclosure, navLinks } from '../data/content.js';
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

export default function SiteHeader() {
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
          <p className="topbar-disclosure">{disclosure.top}</p>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          {/* A: marca que chancela o programa (como "Avalado por la" no exemplo de referência) */}
          <a href="#/" className="hb hb--left" aria-label="SBOC, voltar ao início">
            <span className="hb-label">Com a participação da</span>
            <img className="hb-sboc" src="images/logos/sboc-horizontal.png" alt="" width="342" height="120" />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
          <nav id="main-nav" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Principal">
            <ul>
              {navLinks.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} onNavigate={closeMenu} />
                ) : (
                  <li key={item.label}>
                    <a className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
          {/* C: logo Medscape sozinho, separado das outras marcas; a menção à Medscape fica só no aviso B */}
          <a href="#/" className="hb hb--right" aria-label="Medscape, voltar ao início">
            <img className="hb-medscape" src="images/logos/medscape.png" alt="" width="698" height="160" />
          </a>
        </div>
      </header>
    </>
  );
}
