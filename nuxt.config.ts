// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  // Стилі імпортуються в app.vue, а не тут: тоді Nuxt вбудовує їх прямо в HTML (inlineStyles)
  features: {
    inlineStyles: true
  },

  typescript: {
    strict: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uk' }
    }
  },

  ui: {
    colorMode: false
  },

  routeRules: {
    '/': { prerender: true }
  },

  fonts: {
    defaults: {
      subsets: ['cyrillic', 'cyrillic-ext', 'latin']
    }
  },

  site: {
    // TODO: справжній домен
    url: 'https://sadovi-mrii.example',
    name: 'Садові мрії',
    trailingSlash: true
  }
})
