<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import { services } from '~/data/site'

const props = defineProps<{
  service?: string
}>()

const serviceItems = [...services.map(s => s.name), 'Інше']

const state = reactive({
  phone: '',
  name: '',
  service: props.service ?? '',
  address: '',
  comment: '',
  website: ''
})

const { send, sending } = useLead()

function validate(s: typeof state): FormError[] {
  return isValidPhone(s.phone) ? [] : [{ name: 'phone', message: 'Формат: 066 123 45 67' }]
}

async function onSubmit() {
  const ok = await send({ ...state })
  if (ok) {
    state.phone = ''
    state.name = ''
    state.address = ''
    state.comment = ''
  }
}
</script>

<template>
  <UForm :state="state" :validate="validate" :validate-on="['blur']" class="space-y-4" @submit="onSubmit">
    <div class="grid gap-4 sm:grid-cols-2 sm:items-end">
      <!-- Помилка в рядку з підписом, а не під полем: інакше поле стає вищим і сусідні поля з'їжджають -->
      <UFormField name="phone" label="Телефон" required :ui="{ error: 'absolute bottom-full right-0 mt-0 mb-1 text-sm' }">
        <UInput v-model="state.phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="066 123 45 67" size="xl" class="w-full" />
      </UFormField>
      <UFormField name="name" label="Ім'я" hint="Необов'язково">
        <UInput v-model="state.name" autocomplete="given-name" size="xl" class="w-full" />
      </UFormField>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 sm:items-end">
      <UFormField name="service" label="Що потрібно">
        <USelect v-model="state.service" :items="serviceItems" placeholder="Оберіть" size="xl" class="w-full" />
      </UFormField>
      <UFormField name="address" label="Де ділянка" hint="Необов'язково">
        <UInput v-model="state.address" placeholder="Місто або село" size="xl" class="w-full" />
      </UFormField>
    </div>
    <UFormField name="comment" label="Коментар" hint="Необов'язково">
      <UTextarea v-model="state.comment" :rows="3" placeholder="Наприклад: ділянка 12 соток, хочемо газон і хвойні вздовж паркану" size="xl" class="w-full" />
    </UFormField>

    <!-- Пастка для спам-ботів -->
    <input v-model="state.website" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">

    <UButton type="submit" label="Надіслати заявку" icon="i-lucide-send" size="xl" :loading="sending" block />
    <p class="text-sm text-muted">
      Передзвонимо, щоб домовитися про виїзд. Надсилаючи заявку, ви погоджуєтеся з
      <NuxtLink to="/polityka-konfidentsiinosti/" class="underline underline-offset-2">політикою конфіденційності</NuxtLink>.
    </p>
  </UForm>
</template>
