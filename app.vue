<script lang="ts" setup>
import SwipeCtx from '@/ctx/SwipeCtx.vue';

useSyncDarkMode();
const { isMobile } = useDevice();
</script>

<template>
  <AppStyle>
    <VitePwaManifest />
    <CustomScrollbarZ
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
    </CustomScrollbarZ>
  </AppStyle>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
