<script setup lang="ts">
import { faq } from '~/data/site'

const siteUrl = useSiteConfig().url.replace(/\/$/, '')

useSeoMeta({
  title: 'Ландшафтний дизайн у Києві та області — Садові мрії',
  description: 'Ландшафтний дизайн і озеленення приватних ділянок під Києвом: проєкт, посадка, рулонний газон, автополив, догляд за садом. Відкритий прайс, виїзд дизайнера 500 грн.',
  ogTitle: 'Садові мрії — ландшафтний дизайн під Києвом',
  ogDescription: 'Проєкт ділянки, посадка, газон, полив і догляд за садом. Відкритий прайс.',
  ogImage: `${siteUrl}/images/roboty/sadyba-dvir.jpg`,
  ogType: 'website',
  ogLocale: 'uk_UA'
})

useJsonLd(() => [
  businessSchema(siteUrl),
  faqSchema(faq)
])
</script>

<template>
  <div>
    <HeroSection />
    <PriceStrip />
    <LazyWorksSection hydrate-never />
    <LazyServicesSection hydrate-never />
    <LazyStepsSection hydrate-never />
    <LazyFaqSection :items="faq" hydrate-on-visible />
    <LazyContactsSection hydrate-on-visible />
  </div>
</template>
