<script setup lang="ts">
import { company, messengers } from '~/data/site'
</script>

<template>
  <!-- Липка панель зв'язку на телефоні -->
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-pine-900/10 bg-paper/95 p-2 backdrop-blur md:hidden" style="padding-bottom: max(0.5rem, env(safe-area-inset-bottom))">
    <div class="flex items-stretch gap-2">
      <UButton :to="`tel:${company.phone}`" icon="i-lucide-phone" label="Подзвонити" size="xl" block class="flex-1" />
      <UButton
        v-for="m in messengers"
        :key="m.name"
        :to="m.href"
        :icon="m.icon"
        :aria-label="`Написати у ${m.name}`"
        color="neutral"
        variant="outline"
        size="xl"
        target="_blank"
        rel="noopener"
      />
    </div>
  </div>
</template>
