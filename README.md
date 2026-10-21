# Садові мрії

Сайт ландшафтної компанії «Садові мрії» (Київ і область). Nuxt 4 + Nuxt UI 4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # пререндер сторінок + сервер для заявок
npm run images   # WebP-варіанти фото з public/images
```

Дані сайту (контакти, послуги, прайс, FAQ) — `app/data/site.ts`.
Заявки йдуть у Telegram, якщо задано `NUXT_TELEGRAM_BOT_TOKEN` і `NUXT_TELEGRAM_CHAT_ID` (див. `.env.example`).
