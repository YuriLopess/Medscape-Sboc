import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativo: o build funciona aberto de qualquer pasta ou subcaminho
export default defineConfig({
  plugins: [react()],
  base: './',
});
