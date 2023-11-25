<script setup lang="ts">
import { navigation } from "@/config/app";
const route = useRoute();
</script>

<template>
  <header
    class="w-full flex justify-between items-center fixed sm:pt-[50px] top-0 left-0 sm:px-[100px] px-[20px] z-10 bg-[#fdfdfd3b] backdrop-blur-[10px]"
  >
    <div
      title="Unkuz"
      class="flex items-center gap-[10px] font-au py-[20px] sm:py-0"
    >
      <NuxtLink to="/">
        <div
          :class="[
            'text-[1.7rem] tracking-widest select-none',
            {
              'text-[#34d0ff]': route.path === '/',
            },
          ]"
        >
          UNKUZ
        </div>
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NuxtLink v-for="(i, idx) in navigation" :to="i.path" :key="idx">
        <div
          :class="[
            ' uppercase',
            {
              'text-[#34d0ff]': route.path === i.path,
            },
          ]"
        >
          {{ i.name }}
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
