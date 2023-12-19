<script lang="ts" setup>
import SwipeCtx from '@/ctx/SwipeCtx.vue';

const { isMobile } = useDevice();

const transitionDuration = computed(() => (isMobile ? '0.2s' : '0.3s'));

useSyncDarkMode();
</script>

<template>
  <AppStyle>
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
  </AppStyle>
</template>

<style></style>
