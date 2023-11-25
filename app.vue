<script lang="ts" setup>
import SwipeContext from "@/components/SwipeContext.vue";

useHead({
  title: "Unkuz",
  meta: [
    { name: "description", content: "Unkuz - Web developer based in Vietnam" },
  ],
});
</script>

<template>
  <div class="font-cuz selection:bg-[#000] selection:text-[#fff]">
    <NuxtLayout>
      <SwipeContext>
        <VitePwaManifest />
        <NuxtPage />
      </SwipeContext>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
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
