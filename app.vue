<script lang="ts" setup>
import SwipeCtx from "@/ctx/SwipeCtx.vue";
import AppStyle from "@/ctx/AppStyle.vue";

useSyncDarkMode();
const { isMobile } = useDevice();
const transitionDuration = computed(() => (isMobile ? "0s" : "0.3s"));
</script>

<template>
  <AppStyle>
    <VitePwaManifest />
    <NuxtLayout>
      <SwipeCtx>
        <NuxtPage />
      </SwipeCtx>
    </NuxtLayout>
  </AppStyle>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all v-bind(transitionDuration);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
