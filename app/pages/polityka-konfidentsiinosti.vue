<script setup lang="ts">
import { company } from '~/data/site'

useSeoMeta({
  title: 'Політика конфіденційності — Садові мрії',
  description: 'Які дані ми отримуємо із заявок на сайті й як їх використовуємо.',
  robots: 'noindex, follow'
})
</script>

<template>
  <UContainer class="max-w-3xl pb-24 pt-10">
    <h1 class="font-display text-4xl font-light tracking-[-0.02em]">
      Політика конфіденційності
    </h1>
    <div class="mt-8 space-y-5 text-lg leading-relaxed text-pine-800">
      <p>Коли ви надсилаєте заявку, ми отримуємо номер телефону й те, що ви самі вказали: ім'я, послугу, місце ділянки, коментар.</p>
      <p>Ці дані потрібні лише для того, щоб зв'язатися з вами щодо заявки. Ми не передаємо їх третім особам і не використовуємо для розсилок.</p>
      <p>Заявка надходить нам у месенджер Telegram. Сайт не ставить рекламних файлів cookie.</p>
      <p>Щоб видалити свої дані, напишіть на <a :href="`mailto:${company.email}`" class="underline underline-offset-2">{{ company.email }}</a> або зателефонуйте {{ company.phoneIntl }}.</p>
    </div>
  </UContainer>
</template>
