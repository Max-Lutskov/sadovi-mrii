<script setup lang="ts">
import { works, worksProcess } from '~/data/site'
</script>

<template>
  <section id="roboty" class="py-20 lg:py-28">
    <UContainer>
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 class="section-title max-w-[18ch]">
          Наші <strong>роботи</strong>
        </h2>
        <p class="max-w-md text-pine-700">
          Приватні ділянки під Києвом: газон, мощення, хвойні, клумби й зони відпочинку.
        </p>
      </div>

      <!-- Перше фото велике (2×2 на десктопі), вісім менших заповнюють решту: два праворуч і два ряди по три нижче.
           На телефоні менші фото йдуть у дві колонки, щоб секція не розтягувалась на дев'ять екранів -->
      <div class="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4 lg:grid-cols-3">
        <figure v-for="(w, i) in works" :key="w.src" :class="i === 0 ? 'col-span-2 lg:row-span-2' : ''">
          <div class="overflow-hidden rounded-2xl bg-pine-100" :class="i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-2.25rem)]' : 'aspect-[4/3]'">
            <img
              :src="w.src.replace('.jpg', '-600.webp')"
              :srcset="srcset(w.src)"
              :sizes="i === 0 ? '(min-width: 1280px) 816px, (min-width: 1024px) calc(66vw - 3rem), calc(100vw - 2rem)' : '(min-width: 1280px) 400px, (min-width: 1024px) 32vw, calc(50vw - 1.5rem)'"
              :alt="w.alt"
              width="1280"
              height="576"
              loading="lazy"
              decoding="async"
              class="size-full object-cover"
            >
          </div>
          <figcaption class="mt-2 text-sm text-pine-700 sm:text-[15px]">
            {{ w.caption }}
          </figcaption>
        </figure>
      </div>

      <h3 class="mt-16 font-display text-2xl font-light text-pine-900 sm:text-3xl">
        Як це виглядає в роботі
      </h3>
      <div class="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4 lg:grid-cols-4">
        <figure v-for="w in worksProcess" :key="w.src">
          <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-pine-100">
            <img
              :src="w.src.replace('.jpg', '-600.webp')"
              :srcset="srcset(w.src)"
              sizes="(min-width: 1280px) 300px, (min-width: 1024px) 24vw, calc(50vw - 1.5rem)"
              :alt="w.alt"
              width="1280"
              height="960"
              loading="lazy"
              decoding="async"
              class="size-full object-cover"
            >
          </div>
          <figcaption class="mt-2 text-sm text-pine-700 sm:text-[15px]">
            {{ w.caption }}
          </figcaption>
        </figure>
      </div>
    </UContainer>
  </section>
</template>
