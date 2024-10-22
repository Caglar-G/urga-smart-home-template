import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', 
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index1:  './index.html',
        index2:  './index2.html',
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Çıktı dosyalarının adlandırma düzenini belirler
        chunkFileNames: 'assets/[name]-[hash].js', // Chunk dosyalarının adlandırma düzenini belirler
        entryFileNames: 'assets/[name]-[hash].js', // Giriş dosyalarının adlandırma düzenini belirler
      },
    },
  },
})
