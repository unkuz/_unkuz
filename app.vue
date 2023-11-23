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
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
  filter: blur(1rem);
}
</style>
