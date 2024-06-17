import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/players/search': {
        target: 'https://transfermarkt-api.fly.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/players\/search/, '/players/search'),
      },
    },
  },
});