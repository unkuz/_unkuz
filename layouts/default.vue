<template>
  <div class="w-screen h-screen relative text-[.9rem] py-[30px] sm:px-[100px]">
    <div class="w-full mx-auto px-[20px] md:px-0">
      <Header />
      <div class="mx-auto sm:w-[700px]">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>
