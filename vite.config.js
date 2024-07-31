import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/npi-medical-board",
  plugins: [react()],
  build: {
    proxy: {
      "/api": {
        target: "https://npi-db.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  server: {
    allowedHosts: [
      "http://localhost:5173/npi-medical-board",
      `https://yoshitunaiga.github.io/npi-medical-board/`,
    ],
    proxy: {
      "/api": {
        target: "https://npi-db.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
