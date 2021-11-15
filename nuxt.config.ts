import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: [
            'vee-validate/dist/rules',
        ],
    },
    plugins: [
        "~/plugins/vee-validate.js"
    ],
    buildModules: [
        'nuxt-windicss',
    ],
});
