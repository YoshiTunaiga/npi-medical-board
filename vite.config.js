import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    allowedHosts: [
      "http://localhost:5173",
      `https://yoshitunaiga.github.io`,
      `https://npi-medical-board.onrender.com`,
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
