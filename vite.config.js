import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/npi-medical-board",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: `./src/main.js`,
    },
  },
  server: {
    allowedHosts: [`https://yoshitunaiga.github.io/npi-medical-board/`],
    proxy: {
      "/api": {
        target: "https://npi-db.org",
        changeOrigin: true,
        secure: false,
      },
    },
    origin: "http://localhost:5173/npi-medical-board",
  },
});
