<script setup lang="ts">
import { company, messengers } from '~/data/site'

defineProps<{ service?: string }>()
</script>

<template>
  <section id="kontakty" class="bg-white py-20 lg:py-28">
    <UContainer class="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h2 class="section-title">
          Розкажіть <strong>про вашу ділянку</strong>
        </h2>
        <p class="mt-4 max-w-md text-pine-700">
          Залиште номер, і ми передзвонимо, щоб домовитися про виїзд. Або телефонуйте одразу.
        </p>
        <a :href="`tel:${company.phone}`" class="mt-8 block font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {{ company.phoneIntl }}
        </a>
        <div class="mt-4 flex flex-wrap gap-2">
          <UButton
            v-for="m in messengers"
            :key="m.name"
            :to="m.href"
            :icon="m.icon"
            :label="m.name"
            color="neutral"
            variant="outline"
            target="_blank"
            rel="noopener"
          />
        </div>
        <dl class="mt-10 grid gap-5 sm:grid-cols-2">
          <div>
            <dt class="text-sm text-pine-600">
              Офіс
            </dt>
            <dd class="mt-1">
              {{ company.address }}
            </dd>
          </div>
          <div>
            <dt class="text-sm text-pine-600">
              Графік
            </dt>
            <dd class="mt-1">
              {{ company.hours }}
            </dd>
          </div>
          <div>
            <dt class="text-sm text-pine-600">
              Пошта
            </dt>
            <dd class="mt-1">
              <a :href="`mailto:${company.email}`" class="hover:text-leaf-700">{{ company.email }}</a>
            </dd>
          </div>
          <div>
            <dt class="text-sm text-pine-600">
              Де працюємо
            </dt>
            <dd class="mt-1">
              {{ company.area }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="rounded-3xl bg-paper p-6 sm:p-8">
        <LeadForm :service="service" />
      </div>
    </UContainer>
  </section>
</template>
