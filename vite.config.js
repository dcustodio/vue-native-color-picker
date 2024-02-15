import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-native-color-picker/",
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index.js",
      name: "inputColorpicker",
      formats: ["es"],
      // the proper extensions will be added
      fileName: "v-input-colorpicker",
    },
    rollupOptions: {
      input: {
        index: "index.html",
      },
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
