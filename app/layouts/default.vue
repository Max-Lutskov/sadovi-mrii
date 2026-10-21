<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LazyAppFooter hydrate-on-visible />
    <MobileContactBar />
  </div>
</template>
