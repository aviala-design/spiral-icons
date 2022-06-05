import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svg({
    svgo: true
  })],
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'spiral.icons',
      formats: ['es']
    },
    target: 'esnext',
    rollupOptions: {
      external: ['vue', '@vue/runtime-core']
    }
  }
})