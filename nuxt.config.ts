// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Johnsen Art',
      htmlAttrs: {
        lang: 'no',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-96x96.png',
          sizes: '96x96',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [{ name: 'apple-mobile-web-app-title', content: 'Johnsen Art' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  devtools: { enabled: true },
});
