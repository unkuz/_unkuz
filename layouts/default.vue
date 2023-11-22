<template>
  <div class="w-screen h-screen relative text-[.9rem] py-[30px]">
    <div class="md:w-[700px] w-full mx-auto px-[20px] md:px-0">
      <Header />
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>
