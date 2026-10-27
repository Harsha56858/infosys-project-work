import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const djangoBackend = 'http://127.0.0.1:8001'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: djangoBackend,
        changeOrigin: true,
      },
      '/alerts': {
        target: djangoBackend,
        changeOrigin: true,
      },
    },
  },
  preview: {
    proxy: {
      '/api': {
        target: djangoBackend,
        changeOrigin: true,
      },
      '/alerts': {
        target: djangoBackend,
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
