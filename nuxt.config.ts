// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  // Стилі імпортуються в app.vue, а не тут: тоді Nuxt вбудовує їх прямо в HTML (inlineStyles)
  // і браузер не чекає окремого CSS-файлу перед першим показом сторінки
  features: {
    inlineStyles: true
  },

  typescript: {
    strict: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uk' },
      meta: [{ name: 'theme-color', content: '#f1f6ec' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },

  // Сайт світлий, без перемикача теми
  ui: {
    colorMode: false,
    // Стилі лише для компонентів, які є на сайті
    experimental: {
      componentDetection: true
    }
  },

  // Сторінки однакові для всіх, тож збираємо їх під час білду. Заявки (/api/lead) обробляє Worker.
  routeRules: {
    '/': { prerender: true },
    '/tsiny/': { prerender: true },
    '/proiektuvannia/': { prerender: true },
    '/rulonnyi-gazon/': { prerender: true },
    '/avtopoliv/': { prerender: true },
    '/dohliad-za-sadom/': { prerender: true },
    '/polityka-konfidentsiinosti/': { prerender: true }
  },

  // Пререндер бере ту саму сторінку ще й без слеша в кінці (/tsiny поряд із /tsiny/). Такі адреси
  // не потрібні (на сайті всі зі слешем), а на Windows дві копії ще й падають, пишучи один файл кешу (EPERM)
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml', '/robots.txt'],
      ignore: [(path: string) => !path.endsWith('/') && !/\.[a-z]+$/.test(path)]
    }
  },

  // Іконки лише ті, що є на сайті, вбудовані в клієнт. Повні набори lucide й simple-icons
  // у серверному бандлі важать ~5 МБ, а безкоштовний Cloudflare Worker вміщує лише 3 МБ
  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
      // Іконки самого Nuxt UI (акордеон, селект, закриття шторки, завантаження кнопки)
      icons: ['lucide:chevron-down', 'lucide:x', 'lucide:loader-circle', 'lucide:check', 'lucide:circle-check', 'lucide:circle-x', 'lucide:circle-alert', 'lucide:info']
    }
  },

  fonts: {
    defaults: {
      subsets: ['cyrillic', 'cyrillic-ext', 'latin']
    },
    families: [
      { name: 'Geologica', provider: 'google', weights: [300, 400, 600] },
      { name: 'Onest', provider: 'google', weights: [400, 500, 600] }
    ]
  },

  site: {
    // Тимчасова адреса на Cloudflare. Коли замовник викупить sadovi-mrii.com.ua — замінити
    url: 'https://sadovi-mrii.makslutskov1.workers.dev',
    name: 'Садові мрії',
    // Сторінки пререндеряться як папка/index.html, а Cloudflare віддає їх за адресою зі слешем
    trailingSlash: true,
    // Поки сайт на тестовій адресі, не індексуємо його: інакше після переїзду на справжній домен
    // Google бачитиме дві копії. На sadovi-mrii.com.ua прибрати
    indexable: false
  },

  sitemap: {
    // Усі адреси відомі під час збірки, тож sitemap.xml пререндериться і Worker його не генерує
    zeroRuntime: true
  },

  // Заявки з сайту йдуть у Telegram: NUXT_TELEGRAM_BOT_TOKEN і NUXT_TELEGRAM_CHAT_ID (див. .env.example)
  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: ''
  }
})
