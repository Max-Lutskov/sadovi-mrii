<script setup lang="ts">
const props = defineProps<{
  items: { q: string, a: string }[]
  title?: string
}>()

const accordion = computed(() => props.items.map(f => ({ label: f.q, content: f.a })))
</script>

<template>
  <section class="py-20 lg:py-28">
    <UContainer class="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
      <h2 class="section-title">
        <template v-if="title">
          {{ title }}
        </template>
        <template v-else>
          Часті <strong>питання</strong>
        </template>
      </h2>
      <UAccordion
        :items="accordion"
        :ui="{
          item: 'border-b border-pine-200 last:border-b-0',
          trigger: 'py-5 text-left font-display text-lg font-semibold tracking-tight',
          body: 'pb-5 text-base leading-relaxed text-pine-700'
        }"
      />
    </UContainer>
  </section>
</template>
