import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adicione aliases se necessário
    }
  },
  optimizeDeps: {
    include: ['react-helmet-async']
  }
})