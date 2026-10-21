<script setup lang="ts">
import { company } from '~/data/site'

const photo = '/images/roboty/sadyba-dvir.jpg'
// На телефоні план на всю ширину без відступів контейнера, на десктопі — права колонка (~560 px)
const sizes = '(min-width: 1024px) 560px, calc(100vw - 2rem)'

useHead({
  link: [{
    rel: 'preload',
    as: 'image',
    imagesrcset: srcset(photo),
    imagesizes: sizes,
    fetchpriority: 'high',
    // Одразу після meta viewport: раніше браузер ще не знає ширини екрана й бере завеликий варіант
    tagPriority: -10
  }]
})
</script>

<template>
  <section class="overflow-hidden">
    <UContainer class="grid items-center gap-10 pb-16 pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-24 lg:pt-14">
      <div>
        <h1 class="font-display text-[2.6rem] font-light leading-[1.04] tracking-[-0.025em] sm:text-6xl">
          Ландшафтний дизайн <strong class="font-semibold">для будинків під Києвом</strong>
        </h1>
        <p class="mt-6 max-w-[40ch] text-lg leading-relaxed text-pine-700">
          Проєктуємо ділянку, садимо дерева й кущі, кладемо газон, ставимо полив і доглядаємо за садом. Усі ціни відкриті на сайті.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <UButton to="#kontakty" label="Викликати дизайнера на ділянку" size="xl" color="neutral" class="bg-pine-900 px-6 hover:bg-pine-800" />
          <a :href="`tel:${company.phone}`" class="font-display text-xl font-semibold tracking-tight">
            {{ company.phoneDisplay }}
          </a>
        </div>
        <p class="mt-4 text-sm text-pine-600">
          Виїзд на ділянку — 500 грн. Працюємо {{ company.hours }}.
        </p>
      </div>

      <div class="plan relative">
        <div class="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-pine-100">
          <img
            :src="photo.replace('.jpg', '-960.webp')"
            :srcset="srcset(photo)"
            :sizes="sizes"
            alt="Готова ділянка: газон, бруківка, молоді дерева й туї біля цегляного будинку"
            width="1280"
            height="576"
            fetchpriority="high"
            class="absolute inset-0 size-full object-cover object-[58%_50%]"
          >
          <!-- «Аркуш» креслення: спершу закриває фото, потім розчиняється -->
          <div class="sheet absolute inset-0 bg-paper" />
          <svg viewBox="0 0 600 480" class="absolute inset-0 size-full" aria-hidden="true">
            <g class="ink" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="22" y="22" width="556" height="436" rx="6" style="--len: 2000; --d: 0s" />
              <path d="M235 60h150v112H235z M262 172v26h96v-26" style="--len: 600; --d: .35s" />
              <path d="M310 198c-6 70-70 120-150 152-40 16-70 50-82 96" style="--len: 420; --d: .7s" />
              <path d="M330 198c20 60 90 96 150 130 40 22 66 64 74 118" style="--len: 420; --d: .8s" />
              <path d="M70 120c40 26 82 14 120 40s30 70 70 78" style="--len: 300; --d: 1s" class="thin" />
              <path d="M420 240c40-12 90 6 120 38" style="--len: 200; --d: 1.1s" class="thin" />
              <path d="M40 300h12m24 0h12m24 0h12" style="--len: 120; --d: 1.2s" class="thin" />
            </g>
            <g class="trees">
              <g v-for="(t, i) in [[96, 210, 30], [150, 288, 18], [478, 104, 34], [528, 186, 18], [404, 372, 24], [120, 410, 14], [540, 300, 14]]" :key="i" :style="{ '--d': `${1.25 + i * 0.09}s` }">
                <circle :cx="t[0]" :cy="t[1]" :r="t[2]" />
                <circle :cx="t[0]" :cy="t[1]" r="2" class="dot" />
              </g>
            </g>
            <g class="labels font-display" font-size="13">
              <text x="268" y="122">будинок</text>
              <text x="64" y="190">газон</text>
              <text x="420" y="300">квітник</text>
            </g>
          </svg>
        </div>
        <div class="note absolute -bottom-5 left-4 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_-16px_rgba(30,59,44,.45)] sm:left-auto sm:right-6">
          <p class="font-display font-semibold">
            Проєкт ділянки
          </p>
          <p class="text-sm text-pine-600">
            генплан, дендроплан, полив і світло
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Одна анімація на сайті: план ділянки малює себе, потім крізь нього проступає готовий сад.
   Фото видно браузеру з першого кадру (його лише накриває «аркуш»), тож LCP не чекає анімації. */
.ink path,
.ink rect {
  stroke: var(--color-leaf-700);
  stroke-width: 1.6;
  stroke-dasharray: var(--len);
  stroke-dashoffset: var(--len);
  animation:
    draw 1.6s cubic-bezier(.55, .1, .25, 1) var(--d) forwards,
    to-light .9s ease 2.6s forwards;
}

.ink .thin {
  stroke-width: 1.1;
}

.trees g {
  transform-box: fill-box;
  transform-origin: center;
  transform: scale(0);
  animation:
    grow .5s cubic-bezier(.3, 1.4, .6, 1) var(--d) forwards,
    fade-out .8s ease 2.7s forwards;
}

.trees circle {
  fill: var(--color-sprout);
  fill-opacity: .7;
  stroke: var(--color-leaf-700);
  stroke-width: 1.2;
}

.trees .dot {
  fill: var(--color-leaf-700);
}

.labels {
  fill: var(--color-leaf-800);
  opacity: 0;
  animation: show .5s ease 1.6s forwards, fade-out .8s ease 2.7s forwards;
}

.sheet {
  animation: fade-out 1.1s ease 2.4s forwards;
}

.note {
  opacity: 0;
  transform: translateY(8px);
  animation: rise .6s ease 3.1s forwards;
}

@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes grow { to { transform: scale(1); } }
@keyframes show { to { opacity: 1; } }
@keyframes fade-out { to { opacity: 0; } }
@keyframes rise { to { opacity: 1; transform: none; } }
/* Лінії плану лишаються поверх фото тонким білим контуром */
@keyframes to-light { to { stroke: #fff; stroke-opacity: .55; } }

@media (prefers-reduced-motion: reduce) {
  .ink path, .ink rect, .trees g, .labels, .sheet, .note {
    animation: none;
  }
  .ink path, .ink rect {
    stroke-dashoffset: 0;
    stroke: #fff;
    stroke-opacity: .55;
  }
  .trees g, .labels, .sheet { opacity: 0; }
  .note { opacity: 1; transform: none; }
}
</style>
