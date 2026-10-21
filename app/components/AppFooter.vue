<script setup lang="ts">
import { company, messengers, pages } from '~/data/site'
</script>

<template>
  <footer class="bg-pine-900 pb-24 pt-14 text-pine-100 md:pb-12">
    <UContainer class="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
      <div>
        <AppLogo class="text-white" />
        <p class="mt-4 max-w-xs text-pine-300">
          Ландшафтний дизайн, озеленення й догляд за садом. {{ company.area }}.
        </p>
      </div>
      <nav aria-label="Послуги">
        <p class="font-display font-semibold text-white">
          Послуги
        </p>
        <ul class="mt-3 space-y-2">
          <li v-for="p in pages" :key="p.to">
            <NuxtLink :to="p.to" class="text-pine-300 hover:text-white">
              {{ p.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <p class="font-display font-semibold text-white">
          Контакти
        </p>
        <ul class="mt-3 space-y-2 text-pine-300">
          <li>
            <a :href="`tel:${company.phone}`" class="font-display text-lg font-semibold text-white">{{ company.phoneIntl }}</a>
          </li>
          <li>
            <a :href="`mailto:${company.email}`" class="hover:text-white">{{ company.email }}</a>
          </li>
          <li>{{ company.address }}</li>
          <li>Графік: {{ company.hours }}</li>
          <li class="flex gap-3 pt-1">
            <a v-for="m in messengers" :key="m.name" :href="m.href" target="_blank" rel="noopener" :aria-label="`Написати у ${m.name}`" class="hover:text-white">
              <UIcon :name="m.icon" class="size-6" />
            </a>
          </li>
        </ul>
      </div>
    </UContainer>
    <UContainer class="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-pine-400">
      <span>© {{ new Date().getFullYear() }} Садові мрії</span>
      <NuxtLink to="/polityka-konfidentsiinosti/" class="hover:text-white">
        Політика конфіденційності
      </NuxtLink>
    </UContainer>
  </footer>
</template>
