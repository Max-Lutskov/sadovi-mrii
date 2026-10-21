<script setup lang="ts">
import { priceList } from '~/data/site'

const siteUrl = useSiteConfig().url.replace(/\/$/, '')

useSeoMeta({
  title: 'Ціни на ландшафтні роботи в Києві — прайс Садові мрії',
  description: 'Повний прайс на ландшафтний дизайн, проєкт ділянки, рулонний газон, посадку дерев, обрізку й догляд за садом у Києві та області. Виїзд дизайнера — 500 грн.',
  ogImage: `${siteUrl}/images/roboty/sadyba-dvir.jpg`
})

useJsonLd(() => [
  businessSchema(siteUrl),
  breadcrumbSchema(siteUrl, 'Ціни', '/tsiny/')
])

const query = ref('')
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return priceList
  return priceList
    .map(s => ({ ...s, rows: s.rows.filter(r => r.name.toLowerCase().includes(q)) }))
    .filter(s => s.rows.length)
})
</script>

<template>
  <div>
    <PageHero
      title="Ціни на ландшафтні роботи"
      crumb="Ціни"
      lead="Усі роботи з цінами, від проєкту до обрізки троянд. Матеріали, рослини й добрива рахуються окремо, якщо не сказано інше. Точну суму скажемо після виїзду на ділянку."
    />

    <UContainer class="pb-20 lg:pb-28">
      <div class="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside class="hidden lg:block">
          <nav class="sticky top-24 space-y-1 text-[15px]" aria-label="Розділи прайсу">
            <a v-for="s in priceList" :key="s.id" :href="`#${s.id}`" class="block rounded-lg px-3 py-1.5 text-pine-700 hover:bg-white hover:text-pine-950">{{ s.title }}</a>
          </nav>
        </aside>
        <div>
          <UInput v-model="query" icon="i-lucide-search" placeholder="Пошук: «газон», «обрізка»…" size="xl" class="w-full max-w-xl" aria-label="Пошук у прайсі" />
          <div class="mt-10 space-y-12">
            <PriceTable v-for="s in filtered" :key="s.id" :section="s" />
            <p v-if="!filtered.length" class="text-pine-700">
              Такої роботи в прайсі немає. Зателефонуйте, і ми порахуємо окремо.
            </p>
          </div>
        </div>
      </div>
    </UContainer>

    <LazyContactsSection hydrate-on-visible />
  </div>
</template>
