import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: '', 
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].js', 
        assetFileNames: 'assets/[ext]/[name].[ext]',
      },
    },
  },
})
