import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import { templateCompilerOptions } from '@tresjs/core'
import { ViteEjsPlugin } from "vite-plugin-ejs";
import pkg from './package.json'

const ejsData = {
  version: pkg.version
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    glsl(),
    ViteEjsPlugin(ejsData),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three'
          }
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue', 'three'],
  },
})
