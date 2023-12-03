<script setup lang="ts">
import { navigation } from '@/config/app';

const route = useRoute();
const globalS = uGlobalS();
</script>

<template>
  <header
    class="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-[#fdfdfd0e] px-[20px] backdrop-blur-[5px] dark:bg-black sm:px-[100px] sm:pt-[50px]"
  >
    <div
      title="Unkuz"
      class="flex items-center gap-[10px] py-[20px] font-au sm:py-0"
    >
      <NuxtLink to="/">
        <div :class="['select-none text-[1.7rem] tracking-widest']">UNKUZ</div>
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NightMode @click="globalS.toggleDarkMode" />
      <NuxtLink v-for="(i, idx) in navigation" :to="i.path" :key="idx">
        <div
          :class="[
            ' uppercase',
            {
              'text-[#34d0ff]': route.path === i.path,
            },
          ]"
        >
          <TextRolling :text="i.name" />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
