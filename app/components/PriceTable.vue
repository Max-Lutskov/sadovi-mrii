<script setup lang="ts">
import type { PriceSection } from '~/data/site'

defineProps<{
  section: PriceSection
  /** Рівень заголовка: h2 на сторінці цін, h3 всередині сторінки послуги */
  level?: 'h2' | 'h3'
}>()
</script>

<template>
  <div :id="section.id" class="scroll-mt-24">
    <component :is="level ?? 'h2'" class="font-display text-2xl font-semibold tracking-tight">
      {{ section.title }}
    </component>
    <div class="mt-4 overflow-hidden rounded-2xl bg-white">
      <table class="w-full text-left text-[15px]">
        <thead class="sr-only">
          <tr>
            <th>Робота</th>
            <th>Одиниця</th>
            <th>Ціна</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in section.rows" :key="r.name" class="border-t border-pine-100 first:border-t-0">
            <td class="py-3.5 pl-5 pr-3 align-top">
              {{ r.name }}
              <span v-if="r.unit" class="mt-0.5 block text-sm text-pine-600 sm:hidden">{{ r.unit }}</span>
            </td>
            <td class="hidden w-40 py-3.5 pr-3 align-top text-pine-600 sm:table-cell">
              {{ r.unit }}
            </td>
            <td class="w-36 py-3.5 pr-5 text-right align-top font-medium sm:w-48">
              {{ r.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
