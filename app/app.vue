<script setup lang="ts">
import '~/assets/css/main.css'
</script>

<template>
  <UApp :toaster="{ position: 'top-center' }">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
