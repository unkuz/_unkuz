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
    <VitePwaManifest />
    <custom-scrollbar
      :style="{ width: '100vw', height: '100vh' }"
      :thumbWidth="6"
      :autoExpand="false"
      :autoHide="false"
    >
      <NuxtLayout>
        <SwipeCtx>
          <NuxtPage />
        </SwipeCtx>
      </NuxtLayout>
    </custom-scrollbar>
  </div>
</template>

<style></style>
