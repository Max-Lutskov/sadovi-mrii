<script setup lang="ts">
import { services } from '~/data/site'

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <section id="posluhy" class="bg-white py-20 lg:py-28">
    <UContainer>
      <h2 class="section-title max-w-[20ch]">
        Що ми <strong>робимо на ділянці</strong>
      </h2>
      <p class="mt-4 max-w-xl text-pine-700">
        Можна замовити все разом, від проєкту до догляду, або окрему роботу.
      </p>

      <ul class="mt-12 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="s in services" :key="s.slug" class="border-t border-pine-100 py-6">
          <component :is="s.page ? NuxtLink : 'div'" :to="s.page" class="group flex gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-100 text-leaf-800">
              <UIcon :name="s.icon" class="size-5" />
            </span>
            <span class="min-w-0">
              <span class="flex items-center gap-1.5 font-display text-lg font-semibold tracking-tight" :class="s.page && 'group-hover:text-leaf-700'">
                {{ s.name }}
                <UIcon v-if="s.page" name="i-lucide-arrow-up-right" class="size-4 text-pine-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-leaf-700" />
              </span>
              <span class="mt-1 block text-[15px] leading-relaxed text-pine-700">{{ s.text }}</span>
              <span v-if="s.from" class="mt-2 block text-sm font-medium text-leaf-800">{{ s.from }}</span>
            </span>
          </component>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
