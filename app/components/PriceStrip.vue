<script setup lang="ts">
import { priceHighlights } from '~/data/site'
</script>

<template>
  <section aria-labelledby="price-strip-title">
    <UContainer>
      <div class="rounded-3xl bg-white p-2">
        <h2 id="price-strip-title" class="sr-only">
          Орієнтири цін
        </h2>
        <dl class="grid sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(p, i) in priceHighlights" :key="p.label" class="px-5 py-5" :class="i > 0 && 'border-t border-pine-100 sm:border-t-0 lg:border-l'">
            <dt class="text-sm text-pine-600">
              {{ p.label }}
            </dt>
            <dd class="mt-1.5 font-display text-2xl font-semibold tracking-tight">
              {{ p.price }} <span v-if="p.unit" class="text-base font-normal text-pine-600">{{ p.unit }}</span>
            </dd>
          </div>
        </dl>
        <div class="flex justify-end px-5 pb-3">
          <NuxtLink to="/tsiny/" class="inline-flex items-center gap-1.5 text-sm font-medium text-leaf-700 hover:text-leaf-900">
            Усі ціни
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>
