// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// https://astro.build/config
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        }
    }
});