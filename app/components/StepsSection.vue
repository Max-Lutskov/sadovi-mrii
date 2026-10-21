<script setup lang="ts">
import { steps } from '~/data/site'
</script>

<template>
  <section class="py-20 lg:py-28">
    <UContainer>
      <h2 class="section-title max-w-[20ch]">
        Як ми <strong>працюємо</strong>
      </h2>

      <!-- Кроки йдуть по черзі, тому номери тут доречні -->
      <ol class="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(s, i) in steps" :key="s.title" class="relative pl-14">
          <span class="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-leaf-600 font-display text-leaf-700">{{ i + 1 }}</span>
          <h3 class="pt-1.5 font-display text-lg font-semibold tracking-tight">
            {{ s.title }}
          </h3>
          <p class="mt-1.5 leading-relaxed text-pine-700">
            {{ s.text }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
