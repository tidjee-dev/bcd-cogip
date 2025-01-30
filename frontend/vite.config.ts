import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Enables polling to detect changes (useful for WSL, Docker, or network filesystems)
      usePolling: true,
    },
    host: true, // Ensures the server can be accessed from other devices on the network
    port: 5173, // Optional: Set a specific port for the dev server
    strictPort: true, // Ensures the server fails if the port is already in use
  },
})
