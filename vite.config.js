import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(), // Tailwind will purge unused classes based on ./src/**/*.{js,jsx,ts,tsx,html} and ./public/**/*.html,
  ],
  build: {
    // Output to 'dist' folder for GitHub Pages deployment
    outDir: 'dist',
    // Ensure output directory is empty before building
    emptyOutDir: true,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Optimize dependencies by splitting into separate chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', '@tsparticles/react', '@tsparticles/slim'],
          'icons-vendor': ['lucide-react']
        }
      }
    }
  },
  server: {
    // Bind to all network interfaces so other devices on your LAN can access the dev server
    host: true,
    // Optional: ensure default port (change if needed)
    port: 5173,
  },
})
