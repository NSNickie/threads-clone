// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  modules:[
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // '@nuxt.js/supabase',
    '@vite-pwa/nuxt'
  ],
  runtimeConfig:{
    public:{
      bucketUrl:process.env.BUCKET_URL
    }
  },
  devtools: { enabled: true }
})
