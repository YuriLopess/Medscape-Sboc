import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base relativo: o build funciona aberto de qualquer pasta ou subcaminho
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  resolve: {
    // "@/components/ui/..." → src/components/ui/... (padrão shadcn)
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
