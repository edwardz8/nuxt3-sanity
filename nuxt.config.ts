// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity'],
    sanity: {
        projectId: 'tp2qi923',
        apiVersion: '2021-10-18'
    },
    content: {
        tailwindcss: {
            cssPath: '~/assets/css/main.css'
        }
    }
})
