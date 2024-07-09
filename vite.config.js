import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Joang5-Portfolio/", // This should match the "homepage" in package.json
  plugins: [react()],
});
