import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths";

console.log(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
      tsconfigPaths({
        root: `${__dirname}/../../`,
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
