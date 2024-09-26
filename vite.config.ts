import path from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    open: true, 
  },
  css: {
    postcss: './postcss.config.js',
  },
})
