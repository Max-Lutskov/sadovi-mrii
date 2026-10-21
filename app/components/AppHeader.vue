<script setup lang="ts">
import { company, pages } from '~/data/site'

const links = [
  { to: '/#roboty', label: 'Роботи' },
  { to: '/#posluhy', label: 'Послуги' },
  { to: '/tsiny/', label: 'Ціни' },
  { to: '/#kontakty', label: 'Контакти' }
]

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-pine-900/5 bg-paper/90 backdrop-blur">
    <UContainer class="flex h-16 items-center justify-between gap-6">
      <NuxtLink to="/" aria-label="Садові мрії, на головну" class="text-pine-900">
        <AppLogo />
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-[15px] lg:flex" aria-label="Головне меню">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="text-pine-700 transition-colors hover:text-pine-950">
          {{ l.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <a :href="`tel:${company.phone}`" class="hidden font-display text-lg font-semibold tracking-tight sm:block">
          {{ company.phoneDisplay }}
        </a>
        <USlideover v-model:open="menuOpen" title="Меню" side="right" :ui="{ content: 'max-w-xs' }">
          <UButton icon="i-lucide-menu" color="neutral" variant="ghost" size="lg" aria-label="Відкрити меню" class="lg:hidden" />
          <template #body>
            <nav class="flex flex-col gap-1 text-lg" aria-label="Меню">
              <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="rounded-lg px-3 py-2.5 hover:bg-pine-100">
                {{ l.label }}
              </NuxtLink>
              <p class="mt-5 px-3 text-sm text-muted">
                Послуги
              </p>
              <NuxtLink v-for="p in pages" :key="p.to" :to="p.to" class="rounded-lg px-3 py-2 text-base hover:bg-pine-100">
                {{ p.label }}
              </NuxtLink>
            </nav>
          </template>
          <template #footer>
            <UButton :to="`tel:${company.phone}`" icon="i-lucide-phone" :label="company.phoneDisplay" size="xl" block />
          </template>
        </USlideover>
      </div>
    </UContainer>
  </header>
</template>
