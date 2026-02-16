import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // You can change this if needed
  },
  base: '/comp3410-2026-winter-project07-vite-react-winter2026-project07/',
});