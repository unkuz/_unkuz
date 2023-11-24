<script lang="ts" setup>
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
      <NuxtPage />
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
  transform: translateY(100vh) translateY(0);
  filter: blur(5px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-00vh) translateY(0);
  filter: blur(5px);
}
</style>
