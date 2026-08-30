import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project site is served at username.github.io/<repo>/.
  // Change "developer-portfolio" to your actual repo name (keep the slashes).
  base: "/developer-portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
