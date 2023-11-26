<script lang="ts" setup>
import SwipeCtx from '@/ctx/SwipeCtx.vue';

useSyncDarkMode();
</script>

<template>
  <div
    class="font-cuz selection:bg-[#000] selection:text-[#fff] dark:selection:bg-[#43fd2a] dark:selection:text-[#000]"
  >
    <NuxtLayout>
      <SwipeCtx>
        <VitePwaManifest />
        <NuxtPage />
      </SwipeCtx>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(100vw);
  filter: blur(5px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
  filter: blur(5px);
}
</style>
