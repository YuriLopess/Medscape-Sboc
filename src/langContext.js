import { createContext } from 'react';

// Contexto de idioma num arquivo próprio, separado de i18n.jsx: quando o Vite recarrega i18n.jsx
// durante o desenvolvimento, o contexto continua o mesmo e os componentes não ficam "sem idioma"
// (tela branca com "useContent() is null").
export const LangContext = createContext(null);
