import { defineConfig } from 'vite'

export default defineConfig({
  clearScreen: false,
  server: {
    port: 1427,
    strictPort: true,
  },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    outDir: 'dist',
  }
})
