<template>
  <div class="w-screen h-screen relative text-[.9rem] py-[30px]">
    <div class="w-[900px] mx-auto">
      <Header />
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>
