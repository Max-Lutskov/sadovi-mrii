<script setup lang="ts">
import { priceList } from '~/data/site'

const props = defineProps<{
  title: string
  /** id розділів прайсу з data/site.ts */
  sections: string[]
  note?: string
}>()

const list = computed(() => props.sections.map(id => priceList.find(s => s.id === id)!).filter(Boolean))
</script>

<template>
  <section class="py-16 lg:py-24">
    <UContainer>
      <h2 class="section-title">
        {{ title }}
      </h2>
      <p v-if="note" class="mt-4 max-w-2xl text-pine-700">
        {{ note }}
      </p>
      <div class="mt-10 space-y-10">
        <PriceTable v-for="s in list" :key="s.id" :section="s" level="h3" />
      </div>
      <NuxtLink to="/tsiny/" class="mt-8 inline-flex items-center gap-1.5 font-medium text-leaf-700 hover:text-leaf-900">
        Повний прайс на всі роботи
        <UIcon name="i-lucide-arrow-right" class="size-4" />
      </NuxtLink>
    </UContainer>
  </section>
</template>
