import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import BootstrapVuePlus from 'unplugin-bootstrap-vue-plus/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/bsvp/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    BootstrapVuePlus({
      useSource: true,
      defaultLocale: 'zh-cn',
    }),
    Inspect(),
  ],
})
