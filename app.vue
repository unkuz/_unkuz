<script lang="ts" setup>
import SwipeCtx from '@/ctx/SwipeCtx.vue';

const { isMobile } = useDevice();

const transitionDuration = computed(() => (isMobile ? '0.2s' : '0.3s'));

useSyncDarkMode();
</script>

<template>
  <div
    class="font-cuz selection:bg-[#000] selection:text-[#fff] dark:selection:bg-[#43fd2a] dark:selection:text-[#000]"
  >
    <custom-scrollbar
      :style="{ width: '100vw', height: '100vh' }"
      :thumbWidth="6"
      :autoExpand="false"
      :autoHide="false"
    >
    <NuxtLayout>
      <SwipeCtx>
        <VitePwaManifest />
        <!-- <NuxtLoadingIndicator /> -->
        <NuxtPage />
      </SwipeCtx>
    </NuxtLayout>
    </custom-scrollbar>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all v-bind(transitionDuration);
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
