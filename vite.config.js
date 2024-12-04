import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from your local network (sets the host to 0.0.0.0)
    port: 3000, // Optional: specify the port (default is 5173 if not provided)
  },
});
