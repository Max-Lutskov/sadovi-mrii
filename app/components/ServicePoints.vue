<script setup lang="ts">
defineProps<{
  title: string
  points: { title: string, text: string }[]
  /** Пункти йдуть по черзі (етапи робіт) — тоді показуємо номери */
  ordered?: boolean
}>()
</script>

<template>
  <section class="bg-white py-16 lg:py-24">
    <UContainer>
      <h2 class="section-title max-w-[22ch]">
        {{ title }}
      </h2>
      <component :is="ordered ? 'ol' : 'ul'" class="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(p, i) in points" :key="p.title" class="relative" :class="ordered ? 'pl-14' : 'border-t border-pine-100 pt-5'">
          <span v-if="ordered" class="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-leaf-600 font-display text-leaf-700">{{ i + 1 }}</span>
          <h3 class="font-display text-lg font-semibold tracking-tight" :class="ordered && 'pt-1.5'">
            {{ p.title }}
          </h3>
          <p class="mt-1.5 leading-relaxed text-pine-700">
            {{ p.text }}
          </p>
        </li>
      </component>
    </UContainer>
  </section>
</template>
