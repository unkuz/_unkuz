<script lang="ts" setup>
useHead({
  title: "Unkuz",
  meta: [
    { name: "description", content: "Unkuz - Web developer based in Vietnam" },
  ],
});
</script>
<template>
  <div class="font-cuz bg-[#ffffff85]">
    <NuxtLayout>
      <NuxtPage />
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
  transform: translateX(100%);
  filter: blur(1rem);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  filter: blur(1rem);
}
</style>
