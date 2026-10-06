import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Endereço público do site, com barra no fim (ex.: SITE_URL=https://esmo2026.exemplo.com/ npm run build).
// WhatsApp, LinkedIn etc. só mostram a imagem de compartilhamento se ela tiver o endereço completo.
const siteUrl = process.env.SITE_URL ? process.env.SITE_URL.replace(/\/?$/, '/') : '';
const siteUrlPlugin = {
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
};

// base relativo: o build funciona aberto de qualquer pasta ou subcaminho
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin],
  base: './',
  resolve: {
    // "@/components/ui/..." → src/components/ui/... (padrão shadcn)
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
