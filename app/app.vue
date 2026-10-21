<script setup lang="ts">
import '~/assets/css/main.css'

// Канонічна адреса кожної сторінки: без параметрів (?utm=…) і зі слешем у кінці, як у sitemap
const route = useRoute()
const siteUrl = useSiteConfig().url.replace(/\/$/, '')
useHead({
  link: [{ rel: 'canonical', href: computed(() => siteUrl + route.path) }]
})
</script>

<template>
  <UApp :toaster="{ position: 'top-center' }">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
