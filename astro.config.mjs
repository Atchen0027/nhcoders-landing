// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Configura 'site' con tu URL de GitHub Pages (ej: https://usuario.github.io/repositorio o dominio personalizado)
  site: 'https://nhcoders.github.io',
  build: {
    format: 'directory'
  }
});
