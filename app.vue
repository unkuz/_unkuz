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

<style></style>
