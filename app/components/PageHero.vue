<script setup lang="ts">
import { company } from '~/data/site'

defineProps<{
  title: string
  crumb: string
  lead: string
  photo?: { src: string, alt: string }
}>()
</script>

<template>
  <section class="pb-14 pt-6 lg:pb-20">
    <UContainer>
      <nav aria-label="Навігація" class="text-sm text-pine-600">
        <NuxtLink to="/" class="hover:text-pine-900">Головна</NuxtLink>
        <span class="mx-2 text-pine-300">/</span>
        <span aria-current="page">{{ crumb }}</span>
      </nav>
      <div class="mt-6 grid items-center gap-10" :class="photo && 'lg:grid-cols-[1.1fr_1fr]'">
        <div>
          <h1 class="font-display text-4xl font-light leading-[1.06] tracking-[-0.025em] sm:text-5xl">
            {{ title }}
          </h1>
          <p class="mt-5 max-w-[46ch] text-lg leading-relaxed text-pine-700">
            {{ lead }}
          </p>
          <div class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <UButton to="#kontakty" label="Залишити заявку" size="xl" color="neutral" class="bg-pine-900 px-6 hover:bg-pine-800" />
            <a :href="`tel:${company.phone}`" class="font-display text-xl font-semibold tracking-tight">{{ company.phoneDisplay }}</a>
          </div>
        </div>
        <div v-if="photo" class="aspect-[4/3] overflow-hidden rounded-[28px] bg-pine-100">
          <img
            :src="photo.src.replace('.jpg', '-800.webp')"
            :srcset="srcset(photo.src)"
            sizes="(min-width: 1024px) 540px, calc(100vw - 2rem)"
            :alt="photo.alt"
            width="1280"
            height="576"
            fetchpriority="high"
            class="size-full object-cover"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
